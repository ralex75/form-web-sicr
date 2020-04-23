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
var getUser = require('./../api/user').getUser;
var db = require('./../api/db').nqdb;
var axios = require('axios');
var report_1 = require("./report");
var ProcessResult = /** @class */ (function () {
    function ProcessResult(status, value) {
        this.status = status;
        this.value = value;
    }
    ProcessResult.prototype.render = function () {
        return JSON.stringify(this.value);
    };
    return ProcessResult;
}());
var ProcessRequest = /** @class */ (function () {
    function ProcessRequest(user, data) {
        this.user = user;
        this.data = data;
    }
    ProcessRequest.initialize = function (type, user, data) {
        switch (type) {
            case "IP":
                return new IP_Processor(user, data);
                break;
            case "WIFI":
                return new WiFi_Processor(user, data);
                break;
            default:
                throw Error("Invalid Request type");
        }
    };
    return ProcessRequest;
}());
exports.ProcessRequest = ProcessRequest;
var WiFi_Processor = /** @class */ (function (_super) {
    __extends(WiFi_Processor, _super);
    function WiFi_Processor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WiFi_Processor.prototype.exec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, data, processResult, payload, res, exc_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.user;
                        data = Object.assign({}, this.data);
                        processResult = null;
                        payload = { "name": user.name,
                            "surname": user.surname,
                            "email": user.email,
                            "phone": user.phone,
                            "start": moment_1.default(data.from).format("YYYY-MM-DD"),
                            "end": moment_1.default(data.to).format("YYYY-MM-DD") };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, axios.post("http://localhost:5000/api/users/create", { "user": payload })
                            //invia mail usando wifiguests api
                        ];
                    case 2:
                        res = _a.sent();
                        //invia mail usando wifiguests api
                        return [4 /*yield*/, axios.post("http://localhost:5000/api/mail/user", { "uid": res.data.id })];
                    case 3:
                        //invia mail usando wifiguests api
                        _a.sent();
                        processResult = new ProcessResult("OK", res.data);
                        return [3 /*break*/, 5];
                    case 4:
                        exc_1 = _a.sent();
                        processResult = new ProcessResult("BAD", exc_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, new report_1.WiFiReport(this.user, this.data, processResult)];
                }
            });
        });
    };
    return WiFi_Processor;
}(ProcessRequest));
var IP_Processor = /** @class */ (function (_super) {
    __extends(IP_Processor, _super);
    function IP_Processor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IP_Processor.prototype.exec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, data;
            return __generator(this, function (_a) {
                user = this.user;
                data = this.data;
                return [2 /*return*/, new report_1.IPReport(user, data)];
            });
        });
    };
    return IP_Processor;
}(ProcessRequest));
