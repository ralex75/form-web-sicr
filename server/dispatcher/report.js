"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var fs_1 = __importDefault(require("fs"));
var path = require('path');
var db = require('./../api/db').nqdb;
var DATE_FORMAT = "DD/MM/YYYY";
var helpers = {
    getPortLocation: function (port_code) {
        return new Promise(function (resolve) {
            db.any('select loc_id ,loc_building as "build",loc_floor as "floor",\
            loc_name as "room",pp_port_alias as "port_alias" from vw_network_status_ex_3 where pp_port_code=$1 limit 1', [port_code])
                .then(function (res) {
                resolve(res[0] || null);
            });
        });
    },
    getPortNetwork: function (port_code) {
        return new Promise(function (resolve) {
            var nc_code = (port_code.split("-")[1]);
            db.any('select network from network_closet nc, vlan_network vn \
                    where nc.nc_code=$1 and nc.vlan=vn.vlan', [nc_code])
                .then(function (res) {
                resolve(res[0] || null);
            });
        });
    },
    addEmptySpacesToEnd: function (spaces, value) {
        var rep = spaces - value.length;
        rep = rep < 0 ? 0 : rep;
        return value + " ".repeat(rep);
    }
};
var RenderType;
(function (RenderType) {
    RenderType[RenderType["BASIC"] = 0] = "BASIC";
    RenderType[RenderType["ADVANCED"] = 1] = "ADVANCED";
})(RenderType || (RenderType = {}));
exports.RenderType = RenderType;
var Report = /** @class */ (function () {
    function Report(user, data, res) {
        if (res === void 0) { res = null; }
        this.user = null;
        this.data = null;
        this.processResult = null;
        this.user = user;
        this.data = data;
        this.processResult = res;
    }
    Report.initialize = function (type, user, data) {
        switch (type) {
            case "IP":
                return new IPReport(user, data);
                break;
            case "WIFI":
                return new WiFiReport(user, data);
                break;
            default:
                throw Error("Invalid Request type");
        }
    };
    Report.prototype.renderAs = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var fileName, filePath, txt, md;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = this.getTemplateFileName();
                        filePath = path.resolve(__dirname, "../text/" + fileName);
                        if (!fs_1.default.existsSync(filePath)) {
                            throw Error('Missing file template!');
                        }
                        txt = fs_1.default.readFileSync(filePath, 'utf-8');
                        return [4 /*yield*/, this.mapData(this.user, this.data, type)];
                    case 1:
                        md = _a.sent();
                        txt = this.replaceFieldValues(txt, md);
                        return [2 /*return*/, txt];
                }
            });
        });
    };
    Report.prototype.mapData = function (user, data, repType) {
        switch (repType) {
            case RenderType.BASIC:
                return this.mapBasicData(user, data);
                break;
            case RenderType.ADVANCED:
                return this.mapAdvancedData(user, data);
                break;
        }
    };
    Report.prototype.replaceFieldValues = function (txt, obj) {
        var _txt = txt;
        for (var k in obj)
            (_txt = _txt.replace(k, obj[k]));
        return _txt;
    };
    return Report;
}());
exports.Report = Report;
var IPReport = /** @class */ (function (_super) {
    __extends(IPReport, _super);
    function IPReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IPReport.prototype.getTemplateFileName = function () {
        return "ip.txt";
    };
    IPReport.prototype.mapBasicData = function (user, data) {
        return __awaiter(this, void 0, void 0, function () {
            var from, to, action, h, hostname, HOST_ACTION_MAP, HOST_CONFIG_MAP, loc, map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        from = data.from, to = data.to, action = data.action;
                        h = to || from;
                        hostname = h.name ? h.name + "." + h.domain : "DHCP : " + h.mac;
                        HOST_ACTION_MAP = { "create": "Nuovo", "update": "Aggiornamento", "delete": "Rimozione" };
                        HOST_CONFIG_MAP = { "STATIC": "STATICO", "DHCP": "DHCP", "STATICVM": "STATICO - VIRTUALE" };
                        return [4 /*yield*/, helpers.getPortLocation(h.port)];
                    case 1:
                        loc = _a.sent();
                        if (action == 'update') {
                            hostname = from.name ? from.name + "." + from.domain : "DHCP : " + from.mac;
                        }
                        map = {
                            "[ACTION]": HOST_ACTION_MAP[action] + " nodo: " + hostname,
                            "[NAME]": user.name,
                            "[SURNAME]": user.surname,
                            "[EMAIL]": user.email,
                            "[PHONE]": user.phone,
                            "[H_MAC]": h.mac,
                            "[NOTE]": h.notes || "",
                            "[H_NAME]": h.name ? h.name + "." + h.domain : "DHCP",
                            "[CONFIG]": HOST_CONFIG_MAP[h.config],
                            "[BUILD]": loc.build,
                            "[FLOOR]": loc.floor,
                            "[ROOM]": loc.room,
                            "[PORT]": loc.port_alias,
                            "[ADDITIONAL_DATA]": ""
                        };
                        return [2 /*return*/, map];
                }
            });
        });
    };
    IPReport.prototype.mapAdvancedData = function (user, data) {
        return __awaiter(this, void 0, void 0, function () {
            var txt, from, to, action, h, map, network;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        txt = "";
                        from = data.from, to = data.to, action = data.action;
                        h = to || from;
                        return [4 /*yield*/, this.mapBasicData(user, data)];
                    case 1:
                        map = _a.sent();
                        network = "N/A";
                        /*
                        if(h.config!="DHCP")
                        {
                            var net:any=await helpers.getPortNetwork(h.port);
                            network = net ? net.network: "N/A";
                         }
                        else{
                            network = "141.108.13.0/24";
                        }
                        */
                        txt = "=====================  dati aggiuntivi  ====================<br>";
                        txt += helpers.addEmptySpacesToEnd(18, "Network suggerita") + " = " + network;
                        if (this.processResult) {
                            txt += "=====================  Esito esecuzione automatica  ====================<br>";
                            txt += JSON.stringify(this.processResult.value);
                        }
                        map["[ADDITIONAL_DATA]"] = txt;
                        return [2 /*return*/, map];
                }
            });
        });
    };
    return IPReport;
}(Report));
exports.IPReport = IPReport;
var WiFiReport = /** @class */ (function (_super) {
    __extends(WiFiReport, _super);
    function WiFiReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WiFiReport.prototype.getTemplateFileName = function () {
        return "wifi.txt";
    };
    WiFiReport.prototype.mapBasicData = function (user, data) {
        return __awaiter(this, void 0, void 0, function () {
            var from, to, map;
            return __generator(this, function (_a) {
                from = data.from, to = data.to;
                map = {
                    "[NAME]": user.name,
                    "[SURNAME]": user.surname,
                    "[EMAIL]": user.email,
                    "[PHONE]": user.phone,
                    "[FROM]": moment_1.default(from).format(DATE_FORMAT),
                    "[TO]": moment_1.default(to).format(DATE_FORMAT),
                    "[NOTES]": ""
                };
                return [2 /*return*/, map];
            });
        });
    };
    WiFiReport.prototype.mapAdvancedData = function (user, data) {
        return __awaiter(this, void 0, void 0, function () {
            var txt, map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        txt = "";
                        return [4 /*yield*/, this.mapBasicData(user, data)];
                    case 1:
                        map = _a.sent();
                        map["[ADDITIONAL_DATA]"] = txt;
                        txt = "=====================  Esito esecuzione automatica  ====================<br>";
                        //var procResultData:string=map["processResult"] || null;
                        if (this.processResult) {
                            txt += JSON.stringify(this.processResult.value);
                        }
                        else {
                            txt = "NON GESTITA";
                        }
                        return [2 /*return*/, map];
                }
            });
        });
    };
    return WiFiReport;
}(Report));
exports.WiFiReport = WiFiReport;
