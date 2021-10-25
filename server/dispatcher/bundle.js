(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../api/db"), require("../api/mailer"), require("../api/templates"), require("../api/templates.js"), require("./../api/user"));
	else if(typeof define === 'function' && define.amd)
		define(["../api/db", "../api/mailer", "../api/templates", "../api/templates.js", "./../api/user"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../api/db"), require("../api/mailer"), require("../api/templates"), require("../api/templates.js"), require("./../api/user")) : factory(root["../api/db"], root["../api/mailer"], root["../api/templates"], root["../api/templates.js"], root["./../api/user"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__api_db__, __WEBPACK_EXTERNAL_MODULE__api_mailer__, __WEBPACK_EXTERNAL_MODULE__api_templates__, __WEBPACK_EXTERNAL_MODULE__api_templates_js__, __WEBPACK_EXTERNAL_MODULE__api_user__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/dispatcher.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../api/db":
/*!****************************!*\
  !*** external "../api/db" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__api_db__;

/***/ }),

/***/ "../api/mailer":
/*!********************************!*\
  !*** external "../api/mailer" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__api_mailer__;

/***/ }),

/***/ "../api/templates":
/*!***********************************!*\
  !*** external "../api/templates" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__api_templates__;

/***/ }),

/***/ "../api/templates.js":
/*!**************************************!*\
  !*** external "../api/templates.js" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__api_templates_js__;

/***/ }),

/***/ "./../api/user":
/*!********************************!*\
  !*** external "./../api/user" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__api_user__;

/***/ }),

/***/ "./app/dispatcher.ts":
/*!***************************!*\
  !*** ./app/dispatcher.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadRequests = void 0;
var moment_1 = __importDefault(__webpack_require__(/*! moment */ "moment"));
var report_1 = __webpack_require__(/*! ./reports/report */ "./app/reports/report.ts");
var factory_repo_1 = __webpack_require__(/*! ./reports/factory.repo */ "./app/reports/factory.repo.ts");
var processor_1 = __webpack_require__(/*! ./processors/processor */ "./app/processors/processor.ts");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./app/helpers.ts");
var getUser = __webpack_require__(/*! ./../api/user */ "./../api/user").getUser;
exports.ReadRequests = function () {
    //console.log("Reading for new requests...")
    helpers_1.helpers.READ_ALL_REQUESTS().then(function (data) {
        data.forEach(function (r) {
            console.log("rid:", r.id);
            handleRequest(r);
        });
    });
};
var handleRequest = function (r) {
    return __awaiter(this, void 0, void 0, function () {
        var id, uid, rtype, data, report, errors, times, userEmails, suppEmail, userMailAddr, user, args, isValid, processor, exc_1, basicrepo, advrepo, mailSubj, subj, exc_2, from, _user, err;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("handling request:", r.id);
                    id = r.id, uid = r.uid, rtype = r.rtype, data = r.data;
                    report = null;
                    errors = [];
                    times = { "notific": null, "process": null };
                    userEmails = null;
                    suppEmail = "alessandro.ruggieri@roma1.infn.it;";
                    userMailAddr = "";
                    user = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 12, 13, 14]);
                    if (!uid || !rtype || !data) {
                        args = { "uid": uid, "type": rtype, "data": data };
                        throw new Error("Invalid request data, missing some arguments");
                    }
                    return [4 /*yield*/, getUser(uid)];
                case 2:
                    //recupera utente da LDAP
                    user = _a.sent();
                    //tutte le mail dell'utente
                    userEmails = __spreadArrays([user.email], user.mailAlternates);
                    if (!userEmails[0])
                        throw new Error("User email address not found.");
                    //selezione se presente indirizzo nome.cognome@roma1 oppure il suo indirizzo principale
                    //campo mail
                    userMailAddr = userEmails.filter(function (e) { return e.match(/^(\w+(\.\w+)+@roma1.infn.it)$/); })[0] || "";
                    userMailAddr = userMailAddr || user.email;
                    if (!userMailAddr) {
                        throw new Error("User mail address is empty");
                    }
                    isValid = user.isAuthorized;
                    if (!isValid) {
                        throw new Error("User is not authorized!:" + JSON.stringify(user));
                    }
                    processor = null;
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 6, , 7]);
                    //inizializza il processatore di richiesta
                    processor = processor_1.ProcessRequest.initialize(rtype, user, data);
                    console.log("Processing Request ID: " + id + " - " + rtype);
                    if (!processor) return [3 /*break*/, 5];
                    return [4 /*yield*/, processor.exec()];
                case 4:
                    report = _a.sent();
                    console.log("Processed Request ID: " + id + " - " + rtype);
                    if ((report === null || report === void 0 ? void 0 : report.processResult) && report.processResult.getStatus() == processor_1.ProcessResultStatus.BAD) {
                        console.log("Eccezione processamento");
                        throw new Error(report.processResult.getValue());
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    exc_1 = _a.sent();
                    errors.push({ "type": "process", "value": (exc_1.message || JSON.stringify(exc_1)), "data": data });
                    return [3 /*break*/, 7];
                case 7:
                    //se l'oggetto report non è stato creato (il process.exec ha generato errore)
                    //dobbiamo comunque inviare i dati di report utente e supporto
                    if (!report) {
                        report = factory_repo_1.ReportFactory.initialize(rtype, user, data);
                    }
                    return [4 /*yield*/, report.renderAs(report_1.RenderType.BASIC)];
                case 8:
                    basicrepo = _a.sent();
                    return [4 /*yield*/, report.renderAs(report_1.RenderType.ADVANCED)];
                case 9:
                    advrepo = _a.sent();
                    mailSubj = "Richiesta ID " + id + " - " + rtype;
                    subj = report.getSubject();
                    if (subj != "") {
                        mailSubj = mailSubj += " - " + subj;
                    }
                    //Invia Report all'utente
                    console.log("sending basic report to user address: ", userMailAddr);
                    return [4 /*yield*/, helpers_1.helpers.sendReport(suppEmail, userMailAddr, mailSubj, basicrepo)];
                case 10:
                    _a.sent();
                    //Invia Report al servizio 
                    console.log("sending adv report to supporto: ", suppEmail);
                    return [4 /*yield*/, helpers_1.helpers.sendReport(userMailAddr, suppEmail, mailSubj + " -- Riservata Supporto --", advrepo)];
                case 11:
                    _a.sent();
                    times.notific = moment_1.default();
                    console.log("Done.");
                    return [3 /*break*/, 14];
                case 12:
                    exc_2 = _a.sent();
                    console.log(exc_2);
                    from = !userMailAddr ? "dispatcher" : userMailAddr;
                    _user = { "uid": user.uid, "uuid": user.uuid, "name": user.name, "surname": user.surname };
                    errors.push({ "type": "request", "id": r.id, "from": from, "data": data, "value": (exc_2.message || JSON.stringify(exc_2)), "user": _user });
                    return [3 /*break*/, 14];
                case 13:
                    times.process = moment_1.default();
                    err = errors.length > 0 ? JSON.stringify(errors) : null;
                    errors.forEach(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        var errTxt, exc_3;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    errTxt = JSON.stringify(err);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, helpers_1.helpers.sendReport(suppEmail, suppEmail, "Errore elaborazione richiesta  ID - " + r.id + " - Type - " + r.rtype, errTxt)];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    exc_3 = _a.sent();
                                    console.log(exc_3);
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    console.log((err ? "error" : "done") + " request " + r.id);
                    return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FwcC9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBNEI7QUFDNUIsMkNBQWtEO0FBQ2xELHVEQUFvRDtBQUNwRCxvREFBMEU7QUFDMUUscUNBQWlDO0FBRTFCLElBQUEsT0FBTyxHQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBNUIsQ0FBNEI7QUFJN0IsUUFBQSxZQUFZLEdBQUM7SUFFekIsNENBQTRDO0lBRTVDLGlCQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFRO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFLO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQTtBQVdELElBQU0sYUFBYSxHQUFFLFVBQWUsQ0FBSzs7Ozs7OztvQkFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7b0JBT2hDLEVBQUUsR0FBc0IsQ0FBQyxHQUF2QixFQUFFLEdBQUcsR0FBaUIsQ0FBQyxJQUFsQixFQUFFLEtBQUssR0FBVSxDQUFDLE1BQVgsRUFBRSxJQUFJLEdBQUksQ0FBQyxLQUFMLENBQU07b0JBRzNCLE1BQU0sR0FBZSxJQUFJLENBQUM7b0JBQzFCLE1BQU0sR0FBVSxFQUFFLENBQUM7b0JBR25CLEtBQUssR0FBSyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxDQUFBO29CQUV6QyxVQUFVLEdBQWtCLElB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

/***/ }),

/***/ "./app/helpers.ts":
/*!************************!*\
  !*** ./app/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.helpers = void 0;
var db = __webpack_require__(/*! ../api/db */ "../api/db").nqdb;
var sendMail = __webpack_require__(/*! ../api/mailer */ "../api/mailer").sendMail;
var helpers = {
    getPortLocation: function (port_code) {
        return new Promise(function (resolve) {
            db.any('select loc_id ,loc_building as "build",loc_floor as "floor",\
            loc_name as "room", pp_port_code as "port_code", pp_port_alias as "port_alias" from vw_network_status_ex_3 where pp_port_code=$1 or pp_port_alias=$1 limit 1', [port_code])
                .then(function (res) {
                resolve(res[0] || null);
            });
        });
    },
    getHost: function (mac) {
        return new Promise(function (resolve) {
            var host_mac = mac.toLowerCase();
            db.any("select loc_id ,loc_building as \"build\",loc_floor as \"floor\",loc_name, host_name,host_domain,host_mac,pp_port_code from vw_network_status_ex_3 where lower(host_mac::text)=lower($1)", [host_mac])
                .then(function (res) {
                resolve(res[0] || null);
            });
        });
    },
    //nodi appartenenti utente
    getUserDHCPHosts: function (uuid) {
        return new Promise(function (resolve) {
            db.any("select host_mac from vw_network_status_ex_3 where lower(admin_cf::text)=lower($1) and host_is_dhcp is true", [uuid])
                .then(function (res) {
                resolve(res);
            });
        });
    },
    dnsLookup: function (name) {
        var dns = __webpack_require__(/*! dns */ "dns");
        return new Promise(function (res, rej) {
            dns.resolve(name, function (err, addr) {
                if (err) {
                    console.log(err);
                    var ecode = err.errno || err.code;
                    if (ecode != 'ENOTFOUND') {
                        rej(err);
                    }
                }
                res(addr || null);
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
    },
    READ_ALL_REQUESTS: function () {
        return db.query("select * from user_requests where status ='SUBMITTED'");
    },
    setDispatchResult: function (rid, notific, process, error) {
        var status = !error ? "PROCESSED" : "BAD";
        db.query("update user_requests set notific_date=$1,process_date=$2,exc=$3,status=$5 where id=$4", [notific, process, error, rid, status])
            .then(function (resp) {
        }).catch(function (err) {
            console.log("An error has occurred:");
            throw (err);
        });
    },
    sendReport: function (from, to, subj, report) {
        return sendMail(from, to, subj, "<pre>" + report + "</pre>");
    }
};
exports.helpers = helpers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FwcC9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQUssRUFBRSxHQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBdEIsQ0FBc0I7QUFDN0IsSUFBQSxRQUFRLEdBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUExQixDQUEwQjtBQUd6QyxJQUFJLE9BQU8sR0FBQztJQUVSLGVBQWUsRUFBQyxVQUFTLFNBQWdCO1FBQ3JDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUM7eUtBQ3VKLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDekssSUFBSSxDQUFDLFVBQVMsR0FBTztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELE9BQU8sRUFBQyxVQUFTLEdBQVU7UUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDdkIsSUFBSSxRQUFRLEdBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMseUxBQXFMLEVBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdk0sSUFBSSxDQUFDLFVBQVMsR0FBTztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDBCQUEwQjtJQUMxQixnQkFBZ0IsRUFBQyxVQUFTLElBQVc7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyw0R0FBNEcsRUFB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

/***/ }),

/***/ "./app/processors/processor.ts":
/*!*************************************!*\
  !*** ./app/processors/processor.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.ProcessResultStatus = exports.ProcessRequest = void 0;
var moment_1 = __importDefault(__webpack_require__(/*! moment */ "moment"));
var axios = __webpack_require__(/*! axios */ "axios");
var wifi_repo_1 = __webpack_require__(/*! ../reports/wifi.repo */ "./app/reports/wifi.repo.ts");
var ip_repo_1 = __webpack_require__(/*! ../reports/ip.repo */ "./app/reports/ip.repo.ts");
var acc_repo_1 = __webpack_require__(/*! ../reports/acc.repo */ "./app/reports/acc.repo.ts");
var ProcessResultStatus;
(function (ProcessResultStatus) {
    ProcessResultStatus[ProcessResultStatus["OK"] = 0] = "OK";
    ProcessResultStatus[ProcessResultStatus["BAD"] = 1] = "BAD";
})(ProcessResultStatus || (ProcessResultStatus = {}));
exports.ProcessResultStatus = ProcessResultStatus;
var ProcessResult = /** @class */ (function () {
    function ProcessResult(status, value) {
        this._status = status;
        this._value = value;
    }
    ProcessResult.prototype.getStatus = function () {
        return this._status;
    };
    ProcessResult.prototype.getValue = function () {
        return this._value;
    };
    ProcessResult.prototype.render = function () {
        return JSON.stringify(this._value);
    };
    return ProcessResult;
}());
var ProcessResultOK = /** @class */ (function (_super) {
    __extends(ProcessResultOK, _super);
    function ProcessResultOK(value) {
        return _super.call(this, ProcessResultStatus.OK, value) || this;
    }
    return ProcessResultOK;
}(ProcessResult));
var ProcessResultBAD = /** @class */ (function (_super) {
    __extends(ProcessResultBAD, _super);
    function ProcessResultBAD(value) {
        return _super.call(this, ProcessResultStatus.BAD, value) || this;
    }
    return ProcessResultBAD;
}(ProcessResult));
var ProcessRequest = /** @class */ (function () {
    function ProcessRequest(user, data) {
        this.user = user;
        this.data = data;
        if (!this.isValidData(data)) {
            throw new Error("Missing required request data fields:" + JSON.stringify(data) || false);
        }
        ;
    }
    ProcessRequest.initialize = function (type, user, data) {
        switch (type) {
            case "IP":
                return new IP_Processor(user, data);
                break;
            case "WIFI":
                return new WiFi_Processor(user, data);
                break;
            case "ACCOUNT":
                return new Account_Processor(user, data);
                break;
            default:
                //throw Error(`No request handler for request type:${type}`);
                return null;
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
    WiFi_Processor.prototype.isValidData = function (_a) {
        var _b = _a.from, from = _b === void 0 ? null : _b, _c = _a.to, to = _c === void 0 ? null : _c;
        return !!from && !!to;
    };
    WiFi_Processor.prototype.exec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, data, processResult, payload, baseUrl, res, exc_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.user;
                        data = Object.assign({}, this.data);
                        processResult = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        payload = { "name": user.name,
                            "surname": user.surname,
                            "email": user.email,
                            "phone": user.phone,
                            "start": moment_1.default(data.from).format("YYYY-MM-DD"),
                            "end": moment_1.default(data.to).format("YYYY-MM-DD") };
                        baseUrl = 'http://localhost:5000';
                        return [4 /*yield*/, axios.post(baseUrl + "/api/users/create", { "user": payload, "evid": null })
                            //invia mail usando wifiguests api
                        ];
                    case 2:
                        res = _a.sent();
                        //invia mail usando wifiguests api
                        return [4 /*yield*/, axios.post(baseUrl + "/api/mail/user", { "uid": res.data.id })];
                    case 3:
                        //invia mail usando wifiguests api
                        _a.sent();
                        processResult = new ProcessResultOK(res.data);
                        return [3 /*break*/, 5];
                    case 4:
                        exc_1 = _a.sent();
                        processResult = new ProcessResultBAD(exc_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, new wifi_repo_1.WiFiReport(this.user, this.data, processResult)];
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
    IP_Processor.prototype.isValidData = function (data) {
        //Check data
        return true;
    };
    IP_Processor.prototype.exec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, data;
            return __generator(this, function (_a) {
                user = this.user;
                data = this.data;
                return [2 /*return*/, new ip_repo_1.IPReport(user, data)];
            });
        });
    };
    return IP_Processor;
}(ProcessRequest));
var Account_Processor = /** @class */ (function (_super) {
    __extends(Account_Processor, _super);
    function Account_Processor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Account_Processor.prototype.isValidData = function (data) {
        //Check data
        return true;
    };
    Account_Processor.prototype.exec = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, data;
            return __generator(this, function (_a) {
                user = this.user;
                data = this.data;
                return [2 /*return*/, new acc_repo_1.AccountReport(user, data)];
            });
        });
    };
    return Account_Processor;
}(ProcessRequest));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3Byb2Nlc3NvcnMvcHJvY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBNEI7QUFDNUIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9CLGtEQUErQztBQUMvQyw4Q0FBMkM7QUFDM0MsZ0RBQWlEO0FBRWpELElBQUssbUJBQWdDO0FBQXJDLFdBQUssbUJBQW1CO0lBQUUseURBQUksQ0FBQTtJQUFDLDJEQUFLLENBQUE7QUFBQSxDQUFDLEVBQWhDLG1CQUFtQixLQUFuQixtQkFBbUIsUUFBYTtBQThLQyxrREFBbUI7QUF0S3pEO0lBSUksdUJBQVksTUFBMEIsRUFBQyxLQUFTO1FBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUMsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBRUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBRUQ7SUFBOEIsbUNBQWE7SUFDdkMseUJBQVksS0FBUztlQUNqQixrQkFBTSxtQkFBbUIsQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFKRCxDQUE4QixhQUFhLEdBSTFDO0FBQ0Q7SUFBK0Isb0NBQWE7SUFDeEMsMEJBQVks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

/***/ }),

/***/ "./app/reports/acc.repo.ts":
/*!*********************************!*\
  !*** ./app/reports/acc.repo.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountReport = void 0;
var report_1 = __webpack_require__(/*! ./report */ "./app/reports/report.ts");
var AccountReport = /** @class */ (function (_super) {
    __extends(AccountReport, _super);
    function AccountReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountReport.prototype.getTemplateFileName = function () {
        return "account.txt";
    };
    AccountReport.prototype.mapBasicData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
            var restore_ita, restore_eng, userEmails, map;
            return __generator(this, function (_a) {
                restore_ita = { "mail": "contenuto della casella di posta elettronica",
                    "afs": "files AFS",
                    "mail-afs": "contenuto della casella di posta elettronica e files AFS" };
                restore_eng = { "mail": "e-mailbox content",
                    "afs": "AFS files",
                    "mail-afs": "e-mailbox content and AFS files" };
                userEmails = __spreadArrays([user.email], user.mailAlternates);
                userEmails = userEmails[0] ? userEmails.join("; ") : "";
                map = {
                    "UID": user.uid || '---',
                    "NAME": user.name,
                    "SURNAME": user.surname,
                    "EMAIL": data.email,
                    "EMAIL_ALT": userEmails,
                    "PHONE": user.phone || '---',
                    "EXPIRATION": user.expiration,
                    "INFNUUID": user.uuid,
                    "ROLE": user.role,
                    "RESTORE_ITA": restore_ita[data.restore] || 'nessuno',
                    "RESTORE_ENG": restore_eng[data.restore] || 'none',
                    "RESTORE_MAIL_PROCEDURE": ""
                };
                return [2 /*return*/, map];
            });
        });
    };
    AccountReport.prototype.mapAdvancedData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
            var map, bckmailuser, restore_mail_procedure;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mapBasicData(user, data)];
                    case 1:
                        map = _a.sent();
                        if (data.restore && data.restore == 'mail') {
                            bckmailuser = user.uid + "-mailbox.tgz";
                            restore_mail_procedure = "\n            \n                                        ================== PROCEDURA DI RIPRISTINO MAIL ===============\n                                        \n                                        <u>ATTENZIONE!!! - Eseguire questi passi solo DOPO aver creato l'account e prima di inviare la mail di test.</u>\n\n                                        - collegarsi su freezer2\n                                        - <b>cd /data/vm+servizi/bckuser/" + user.uid + "</b>\n                                        - <b>scp " + bckmailuser + "  root@mailbox:. </b>\n                                        - collegarsi su mailbox\n                                        - <b>cd /var/imap</b>\n                                        - <b>tar xzvf /root/" + bckmailuser + "</b>\n                                        - <b>cd</b>\n                                        - <b>rm " + bckmailuser + "</b>\n                                        \n                                        ";
                            map["RESTORE_MAIL_PROCEDURE"] = restore_mail_procedure.split("\n").map(function (e) { return e.trim(); }).join("\n");
                        }
                        return [2 /*return*/, map];
                }
            });
        });
    };
    return AccountReport;
}(report_1.Report));
exports.AccountReport = AccountReport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjLnJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcHAvcmVwb3J0cy9hY2MucmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUErQjtBQUUvQjtJQUE0QixpQ0FBTTtJQUFsQzs7SUF5RUEsQ0FBQztJQXRFRywyQ0FBbUIsR0FBbkI7UUFDSSxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUssb0NBQVksR0FBbEIsVUFBbUIsSUFBUSxFQUFDLElBQVE7dUNBQUUsT0FBTzs7O2dCQUVyQyxXQUFXLEdBQUssRUFBQyxNQUFNLEVBQUMsOENBQThDO29CQUNyRCxLQUFLLEVBQUMsV0FBVztvQkFDakIsVUFBVSxFQUFDLDBEQUEwRCxFQUFDLENBQUE7Z0JBRXZGLFdBQVcsR0FBSyxFQUFDLE1BQU0sRUFBQyxtQkFBbUI7b0JBQzFCLEtBQUssRUFBQyxXQUFXO29CQUNqQixVQUFVLEVBQUMsaUNBQWlDLEVBQUMsQ0FBQTtnQkFFOUQsVUFBVSxtQkFBTSxJQUFJLENBQUMsS0FBSyxHQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFDdEQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO2dCQUduRCxHQUFHLEdBQUM7b0JBQ0ksS0FBSyxFQUFDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSztvQkFDdkIsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJO29CQUNoQixTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU87b0JBQ3RCLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSztvQkFDbEIsV0FBVyxFQUFDLFVBQVU7b0JBQ3RCLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUs7b0JBQzNCLFlBQVksRUFBQyxJQUFJLENBQUMsVUFBVTtvQkFDNUIsVUFBVSxFQUFDLElBQUksQ0FBQyxJQUFJO29CQUNwQixNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLGFBQWEsRUFBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVM7b0JBQ3BELGFBQWEsRUFBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU07b0JBQ2pELHdCQUF3QixFQUFDLEVBQUU7aUJBQzlCLENBQUE7Z0JBRVQsc0JBQU8sR0FBRyxFQUFDOzs7S0FFZDtJQUVLLHVDQUFlLEdBQXJCLFVBQXNCLElBQVEsRUFBQyxJQUFRO3VDQUFFLE9BQU87Ozs7NEJBR2hDLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBMUMsR0FBRyxHQUFLLFNBQWtDO3dCQUU5QyxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBRSxNQUFNLEVBQUM7NEJBRWhDLFdBQVcsR0FBSSxJQUFJLENBQUMsR0FBRyxpQkFBYyxDQUFBOzRCQUNyQyxzQkFBc0IsR0FBQywrY0FPb0MsSUFBSSxDQUFDLEdBQUcsK0RBQ2hDLFdBQVcsMk5BR0EsV0FBVyxtSEFFdkIsV0FBVyw2RkFFcEIsQ0FBQTs0QkFFN0IsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEdBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7eUJBRS9GO3dCQUVELHNCQUFPLEdBQUcsRUFBQzs7OztLQUVkO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBekVELENBQTRCLGVBQU0sR0F5RWpDO0FBRU8sc0NBQWEifQ==

/***/ }),

/***/ "./app/reports/dport.repo.ts":
/*!***********************************!*\
  !*** ./app/reports/dport.repo.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnaDPortReport = void 0;
var report_1 = __webpack_require__(/*! ./report */ "./app/reports/report.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./app/helpers.ts");
var generateHtmlWhiteSpace = __webpack_require__(/*! ../api/templates.js */ "../api/templates.js").generateHtmlWhiteSpace;
var EnaDPortReport = /** @class */ (function (_super) {
    __extends(EnaDPortReport, _super);
    function EnaDPortReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnaDPortReport.prototype.getTemplateFileName = function () {
        return "dport.txt";
    };
    EnaDPortReport.prototype.mapBasicData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
            var port, port_alias, loc, hosts, p, map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        port = data.port, port_alias = data.port_alias;
                        return [4 /*yield*/, helpers_1.helpers.getPortLocation(port)];
                    case 1:
                        loc = _a.sent();
                        return [4 /*yield*/, helpers_1.helpers.getUserDHCPHosts(user.uuid)];
                    case 2:
                        hosts = _a.sent();
                        if (!loc)
                            throw new Error("No location found by port: " + port);
                        if (!hosts || hosts.length == 0)
                            throw new Error("No user dhcp hosts!!!");
                        p = loc.port_code != loc.port_alias ? loc.port_alias : loc.port_code;
                        map = {
                            "SUBJ": "Attivazione presa di rete " + p,
                            "SUBJ_ITA": "Attivazione presa di rete " + p + " in configurazione DHCP",
                            "SUBJ_ENG": "Enabling network port " + p + " in DHCP configuration",
                            "NAME": user.name,
                            "SURNAME": user.surname,
                            "EMAIL": user.email,
                            "PHONE": user.phone || '---',
                            "H_MAC_LIST": hosts.map(function (h) { return h.host_mac; }).join("\n " + generateHtmlWhiteSpace(3)),
                            "BUILD": loc.build,
                            "FLOOR": loc.floor,
                            "ROOM": loc.room,
                            "PORT": loc.port_code,
                        };
                        return [2 /*return*/, map];
                }
            });
        });
    };
    EnaDPortReport.prototype.mapAdvancedData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
            var txt, map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        txt = "";
                        return [4 /*yield*/, this.mapBasicData(user, data)];
                    case 1:
                        map = _a.sent();
                        if (this.processResult) {
                            txt += "=====================  Esito esecuzione automatica  ====================<br>";
                            txt += JSON.stringify(this.processResult.getValue());
                        }
                        map["PROCESS_RESULT"] = txt;
                        return [2 /*return*/, map];
                }
            });
        });
    };
    return EnaDPortReport;
}(report_1.Report));
exports.EnaDPortReport = EnaDPortReport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHBvcnQucmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FwcC9yZXBvcnRzL2Rwb3J0LnJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUErQjtBQUMvQixzQ0FBa0M7QUFDM0IsSUFBQSxzQkFBc0IsR0FBSSxPQUFPLENBQUUscUJBQXFCLENBQUMsdUJBQW5DLENBQW1DO0FBRWhFO0lBQTZCLGtDQUFNO0lBQW5DOztJQTZEQSxDQUFDO0lBM0RHLDRDQUFtQixHQUFuQjtRQUNJLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFSyxxQ0FBWSxHQUFsQixVQUFtQixJQUFRLEVBQUMsSUFBUTt1Q0FBRSxPQUFPOzs7Ozt3QkFFcEMsSUFBSSxHQUFlLElBQUksS0FBbkIsRUFBQyxVQUFVLEdBQUksSUFBSSxXQUFSLENBQVM7d0JBR2pCLHFCQUFNLGlCQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBM0MsR0FBRyxHQUFLLFNBQW1DO3dCQUNqQyxxQkFBTSxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQW5ELEtBQUssR0FBSyxTQUF5Qzt3QkFFdkQsSUFBRyxDQUFDLEdBQUc7NEJBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBOEIsSUFBTSxDQUFDLENBQUE7d0JBQzlELElBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBRSxDQUFDOzRCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQTt3QkFFbEUsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQTt3QkFHaEUsR0FBRyxHQUFLOzRCQUNBLE1BQU0sRUFBQywrQkFBNkIsQ0FBRzs0QkFDdkMsVUFBVSxFQUFDLCtCQUE2QixDQUFDLDRCQUF5Qjs0QkFDbEUsVUFBVSxFQUFDLDJCQUF5QixDQUFDLDJCQUF3Qjs0QkFDN0QsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJOzRCQUNoQixTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU87NEJBQ3RCLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSzs0QkFDbEIsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSzs0QkFDM0IsWUFBWSxFQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFLLElBQUcsT0FBQSxDQUFDLENBQUMsUUFBUSxFQUFWLENBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFNLHNCQUFzQixDQUFDLENBQUMsQ0FBRyxDQUFDOzRCQUNuRixPQUFPLEVBQUMsR0FBRyxDQUFDLEtBQUs7NEJBQ2pCLE9BQU8sRUFBQyxHQUFHLENBQUMsS0FBSzs0QkFDakIsTUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJOzRCQUNmLE1BQU0sRUFBQyxHQUFHLENBQUMsU0FBUzt5QkFDdkIsQ0FBQTt3QkFJVixzQkFBTyxHQUFHLEVBQUM7Ozs7S0FHYjtJQUdLLHdDQUFlLEdBQXJCLFVBQXNCLElBQVEsRUFBQyxJQUFRO3VDQUFFLE9BQU87Ozs7O3dCQUV4QyxHQUFHLEdBQVEsRUFBRSxDQUFDO3dCQUNOLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBMUMsR0FBRyxHQUFLLFNBQWtDO3dCQUc5QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQ3RCOzRCQUNJLEdBQUcsSUFBRSw4RUFBOEUsQ0FBQTs0QkFDbkYsR0FBRyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3lCQUN2RDt3QkFFRCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBQyxHQUFHLENBQUM7d0JBRzNCLHNCQUFPLEdBQUcsRUFBQzs7OztLQUViO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBN0RELENBQTZCLGVBQU0sR0E2RGxDO0FBRU8sd0NBQWMifQ==

/***/ }),

/***/ "./app/reports/factory.repo.ts":
/*!*************************************!*\
  !*** ./app/reports/factory.repo.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportFactory = void 0;
var wifi_repo_1 = __webpack_require__(/*! ./wifi.repo */ "./app/reports/wifi.repo.ts");
var ip_repo_1 = __webpack_require__(/*! ./ip.repo */ "./app/reports/ip.repo.ts");
var acc_repo_1 = __webpack_require__(/*! ./acc.repo */ "./app/reports/acc.repo.ts");
var dport_repo_1 = __webpack_require__(/*! ./dport.repo */ "./app/reports/dport.repo.ts");
var ReportFactory = /** @class */ (function () {
    function ReportFactory() {
    }
    ReportFactory.initialize = function (type, user, data) {
        switch (type) {
            case "IP":
                return new ip_repo_1.IPReport(user, data);
                break;
            case "DPORT":
                return new dport_repo_1.EnaDPortReport(user, data);
                break;
            case "WIFI":
                return new wifi_repo_1.WiFiReport(user, data);
                break;
            case "ACCOUNT":
                return new acc_repo_1.AccountReport(user, data);
                break;
            default:
                throw Error("Invalid Request type");
        }
    };
    return ReportFactory;
}());
exports.ReportFactory = ReportFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5yZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3JlcG9ydHMvZmFjdG9yeS5yZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUN0QyxxQ0FBa0M7QUFDbEMsdUNBQXdDO0FBQ3hDLDJDQUEyQztBQUUzQztJQUFBO0lBc0JBLENBQUM7SUFuQlUsd0JBQVUsR0FBakIsVUFBa0IsSUFBVyxFQUFDLElBQVEsRUFBQyxJQUFRO1FBQzNDLFFBQU8sSUFBSSxFQUNYO1lBQ0ksS0FBSyxJQUFJO2dCQUNMLE9BQU8sSUFBSSxrQkFBUSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtnQkFDbEMsTUFBTTtZQUNOLEtBQUssT0FBTztnQkFDUixPQUFPLElBQUksMkJBQWMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3hDLE1BQU07WUFDTixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxJQUFJLHNCQUFVLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNwQyxNQUFNO1lBQ04sS0FBSyxTQUFTO2dCQUNWLE9BQU8sSUFBSSx3QkFBYSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtnQkFDdkMsTUFBTTtZQUNOO2dCQUNJLE1BQU0sS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUE7U0FDMUM7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBR08sc0NBQWEifQ==

/***/ }),

/***/ "./app/reports/ip.repo.ts":
/*!********************************!*\
  !*** ./app/reports/ip.repo.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPReport = void 0;
var report_1 = __webpack_require__(/*! ./report */ "./app/reports/report.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./app/helpers.ts");
var IPReport = /** @class */ (function (_super) {
    __extends(IPReport, _super);
    function IPReport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toHostName = function (name, domain) {
            return name ? name + "." + domain : "DHCP";
        };
        return _this;
    }
    IPReport.prototype.getTemplateFileName = function () {
        return "ip.txt";
    };
    IPReport.prototype.mapBasicData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
            var from, to, action, h, hostname, HOST_ACTION_MAP, HOST_CONFIG_MAP, loc, macExists, nameExists, _a, msg, map;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        from = data.from, to = data.to, action = data.action;
                        h = to || from;
                        hostname = h.name ? h.name + "." + h.domain : "DHCP : " + h.mac;
                        HOST_ACTION_MAP = { "ITA": { "create": "Nuovo nodo", "update": "Aggiornamento dati del nodo", "delete": "Rimozione nodo" },
                            "ENG": { "create": "New host", "update": "Update host data", "delete": "Delete host" }
                        };
                        HOST_CONFIG_MAP = { "STATIC": "STATICO", "DHCP": "DHCP", "STATICVM": "STATICO - VIRTUALE" };
                        if (action == 'update') {
                            hostname = from.name ? from.name + "." + from.domain : "DHCP  " + from.mac;
                        }
                        return [4 /*yield*/, helpers_1.helpers.getPortLocation(h.port)];
                    case 1:
                        loc = _b.sent();
                        return [4 /*yield*/, helpers_1.helpers.getHost(h.mac)];
                    case 2:
                        macExists = _b.sent();
                        if (!(to && to.name)) return [3 /*break*/, 4];
                        return [4 /*yield*/, helpers_1.helpers.dnsLookup(to.name + "." + to.domain)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = false;
                        _b.label = 5;
                    case 5:
                        nameExists = _a;
                        if (action != 'delete') {
                            msg = ["Request IP - " + action + " - errors:"];
                            if (macExists) {
                                if (from && from.mac == to.mac) {
                                    macExists = false;
                                }
                                else
                                    msg.push("duplicated mac " + h.mac);
                            }
                            if (nameExists) {
                                if (from && from.name == to.name && from.domain == to.domain) {
                                    nameExists = false;
                                }
                                else
                                    msg.push("duplicated name " + to.name + "." + to.domain);
                            }
                            if (macExists || nameExists) {
                                throw new Error(msg.join(" "));
                            }
                        }
                        if (!loc) {
                            throw new Error("No location found by port: " + h.port);
                        }
                        map = {
                            "ACTION_ITA": HOST_ACTION_MAP.ITA[action] + " - " + hostname,
                            "ACTION_ENG": HOST_ACTION_MAP.ENG[action] + " - " + hostname,
                            "NAME": user.name,
                            "SURNAME": user.surname,
                            "EMAIL": user.email,
                            "PHONE": user.phone || '---',
                            "H_MAC": h.mac.toUpperCase(),
                            "NOTE": h.notes || "---",
                            "H_NAME": this.toHostName(h.name, h.domain),
                            "CONFIG": HOST_CONFIG_MAP[h.config],
                            "BUILD": loc.build,
                            "FLOOR": loc.floor,
                            "ROOM": loc.room,
                            "PORT": loc.port_code,
                        };
                        if (!(action == 'update' && from)) return [3 /*break*/, 7];
                        return [4 /*yield*/, helpers_1.helpers.getPortLocation(from.port)];
                    case 6:
                        loc = _b.sent();
                        map["H_MAC"] = this.displayChanges(from.mac, map["H_MAC"]),
                            map["H_NAME"] = this.displayChanges(this.toHostName(from.name, from.domain), map["H_NAME"]),
                            map["CONFIG"] = this.displayChanges(HOST_CONFIG_MAP[from.config], map["CONFIG"]),
                            map["BUILD"] = this.displayChanges(loc.build, map["BUILD"]),
                            map["FLOOR"] = this.displayChanges(loc.floor, map["FLOOR"]),
                            map["ROOM"] = this.displayChanges(loc.room, map["ROOM"]),
                            map["PORT"] = this.displayChanges(loc.port_code, map["PORT"]);
                        _b.label = 7;
                    case 7:
                        //usiamo per IP SUBJ= ACTION_ITA         
                        map["SUBJ"] = map["ACTION_ITA"];
                        return [2 /*return*/, map];
                }
            });
        });
    };
    IPReport.prototype.displayChanges = function (from, to) {
        from = from || "";
        to = to || "";
        from = from.toString();
        to = to.toString();
        return from.toLowerCase() == to.toLowerCase() ? to.toUpperCase() : from.toUpperCase() + " ==> <b>" + to.toUpperCase() + "</b>";
    };
    IPReport.prototype.mapAdvancedData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
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
                        map["USE_MAC_BUSY"] = "";
                        if (to && to["useMacBusy"]) {
                            map["USE_MAC_BUSY"] = "Attenzione, l'utente ha confermato l'intenzione di voler gestire il nodo con mac address " + to["mac"].toUpperCase() + " che risulta gi\u00E0 registrato.";
                        }
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
                        /* NON INSERIRE ---> MOSTRARE LE VLAN SUGGERITE DEL PIANO TODO
                        txt="=====================  dati aggiuntivi  ====================<br>"
                        txt+=helpers.addEmptySpacesToEnd(18,"Network suggerita")+ " = "+ network;
                        */
                        if (this.processResult) {
                            txt += "=====================  Esito esecuzione automatica  ====================<br>";
                            txt += JSON.stringify(this.processResult.getValue());
                        }
                        map["PROCESS_RESULT"] = txt;
                        return [2 /*return*/, map];
                }
            });
        });
    };
    return IPReport;
}(report_1.Report));
exports.IPReport = IPReport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXAucmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FwcC9yZXBvcnRzL2lwLnJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUErQjtBQUMvQixzQ0FBa0M7QUFFbEM7SUFBdUIsNEJBQU07SUFBN0I7UUFBQSxxRUFrS0M7UUE1REcsZ0JBQVUsR0FBQyxVQUFDLElBQVcsRUFBQyxNQUFhO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBSSxJQUFJLFNBQUksTUFBUSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDN0MsQ0FBQyxDQUFBOztJQTBETCxDQUFDO0lBaEtHLHNDQUFtQixHQUFuQjtRQUNJLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFSywrQkFBWSxHQUFsQixVQUFtQixJQUFRLEVBQUMsSUFBUTt1Q0FBRSxPQUFPOzs7Ozt3QkFFcEMsSUFBSSxHQUFjLElBQUksS0FBbEIsRUFBQyxFQUFFLEdBQVcsSUFBSSxHQUFmLEVBQUMsTUFBTSxHQUFJLElBQUksT0FBUixDQUFTO3dCQUN4QixDQUFDLEdBQUUsRUFBRSxJQUFJLElBQUksQ0FBQzt3QkFDZCxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ3hELGVBQWUsR0FBSyxFQUFFLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLDZCQUE2QixFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQzs0QkFDOUYsS0FBSyxFQUFDLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsa0JBQWtCLEVBQUMsUUFBUSxFQUFDLGFBQWEs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

/***/ }),

/***/ "./app/reports/report.ts":
/*!*******************************!*\
  !*** ./app/reports/report.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.RenderType = exports.Report = void 0;
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
var path = __webpack_require__(/*! path */ "path");
var templates = __webpack_require__(/*! ../api/templates */ "../api/templates").templates;
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
        this.subject = "";
        this.user = user;
        this.data = data;
        this.processResult = res;
    }
    Report.prototype.getProcessResult = function () {
        return this.processResult;
    };
    Report.prototype.getSubject = function () {
        return this.subject;
    };
    Report.prototype.renderAs = function (type) {
        return __awaiter(this, void 0, Promise, function () {
            var fileName, filePath, txt, md;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileName = this.getTemplateFileName();
                        filePath = "server/text/" + RenderType[type] + "/" + fileName;
                        filePath = path.resolve(filePath.toLowerCase());
                        if (!fs_1.default.existsSync(filePath)) {
                            throw Error("Missing file template: " + filePath);
                        }
                        txt = fs_1.default.readFileSync(filePath, 'utf-8');
                        return [4 /*yield*/, this.mapData(this.user, this.data, type)];
                    case 1:
                        md = _a.sent();
                        this.subject = md['SUBJ'] || "";
                        txt = this.replaceFieldValues(txt, md);
                        txt = txt.replace(/\[USER_FULL_NAME\]/gi, this.user.name + " " + this.user.surname);
                        if (type == RenderType.ADVANCED) {
                            txt = txt.replace(/\[USER_INFO\]/gi, "" + templates.userInfo(this.user));
                        }
                        return [2 /*return*/, txt];
                }
            });
        });
    };
    Report.prototype.mapData = function (user, data, repType) {
        switch (repType) {
            case RenderType.BASIC:
                return this.mapBasicData(user, data);
            case RenderType.ADVANCED:
                return this.mapAdvancedData(user, data);
        }
    };
    Report.prototype.replaceFieldValues = function (txt, obj) {
        var _txt = txt;
        for (var k in obj) {
            //se nn trova la chiave e ha un valore, l'appende in coda
            //if(obj[k]!="" && _txt.indexOf(k)<0) _txt+=k;
            //replace dei campi nel testo
            _txt = _txt.replace(new RegExp("\\[" + k + "\\]", "g"), obj[k]);
        }
        return _txt;
    };
    return Report;
}());
exports.Report = Report;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3JlcG9ydHMvcmVwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDBDQUFvQjtBQUNwQixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsSUFBQSxTQUFTLEdBQUksT0FBTyxDQUFFLGtCQUFrQixDQUFDLFVBQWhDLENBQWdDO0FBR2hELElBQUssVUFBK0I7QUFBcEMsV0FBSyxVQUFVO0lBQUUsNkNBQU8sQ0FBQTtJQUFDLG1EQUFVLENBQUE7QUFBQSxDQUFDLEVBQS9CLFVBQVUsS0FBVixVQUFVLFFBQXFCO0FBMEZyQixnQ0FBVTtBQXhGekI7SUFPSSxnQkFBWSxJQUFRLEVBQUMsSUFBUSxFQUFDLEdBQTRCO1FBQTVCLG9CQUFBLEVBQUEsVUFBNEI7UUFMMUQsU0FBSSxHQUFLLElBQUksQ0FBQztRQUNkLFNBQUksR0FBSyxJQUFJLENBQUM7UUFDZCxrQkFBYSxHQUFxQixJQUFJLENBQUM7UUFDdkMsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsYUFBYSxHQUFDLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBRUQsaUNBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQkFBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFJSyx5QkFBUSxHQUFkLFVBQWUsSUFBZTt1Q0FBRSxPQUFPOzs7Ozt3QkFHL0IsUUFBUSxHQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUNwQyxRQUFRLEdBQUMsaUJBQWUsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFJLFFBQVUsQ0FBQTt3QkFDMUQsUUFBUSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBRTlDLElBQUcsQ0FBQyxZQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFDOzRCQUN4QixNQUFNLEtBQUssQ0FBQyw0QkFBMEIsUUFBVSxDQUFDLENBQUM7eUJBQ3JEO3dCQUVHLEdBQUcsR0FBVSxZQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQzt3QkFDNUMscUJBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUEvQyxFQUFFLEdBQUMsU0FBNEM7d0JBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTt3QkFDN0IsR0FBRyxHQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLENBQUE7d0JBQ25DLEdBQUcsR0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBUyxDQUFDLENBQUE7d0JBRWhGLElBQUcsSUFBSSxJQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUM7NEJBQ3pCLEdBQUcsR0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFDLEtBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUMsQ0FBQTt5QkFDeEU7d0JBR0Qsc0JBQU8sR0FBRyxFQUFDOzs7O0tBRWQ7SUFFRCx3QkFBTyxHQUFQLFVBQVEsSUFBUSxFQUFDLElBQVEsRUFBQyxPQUFrQjtRQUV4QyxRQUFPLE9BQU8sRUFDZDtZQUNJLEtBQUssVUFBVSxDQUFDLEtBQUs7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFFeEMsS0FBSyxVQUFVLENBQUMsUUFBUTtnQkFDcEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztTQUU5QztJQUNMLENBQUM7SUFTRCxtQ0FBa0IsR0FBbEIsVUFBbUIsR0FBVSxFQUFDLEdBQU87UUFFakMsSUFBSSxJQUFJLEdBQUMsR0FBRyxDQUFBO1FBR1osS0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQ2hCO1lBQ0kseURBQXlEO1lBQ3pELDhDQUE4QztZQUM5Qyw2QkFBNkI7WUFDOUIsSUFBSSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDekQ7UUFFRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQztBQUdPLHdCQUFNIn0=

/***/ }),

/***/ "./app/reports/wifi.repo.ts":
/*!**********************************!*\
  !*** ./app/reports/wifi.repo.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.WiFiReport = void 0;
var report_1 = __webpack_require__(/*! ./report */ "./app/reports/report.ts");
var processor_1 = __webpack_require__(/*! ../processors/processor */ "./app/processors/processor.ts");
var moment_1 = __importDefault(__webpack_require__(/*! moment */ "moment"));
var DATE_FORMAT = "DD/MM/YYYY";
var WiFiReport = /** @class */ (function (_super) {
    __extends(WiFiReport, _super);
    function WiFiReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WiFiReport.prototype.getTemplateFileName = function () {
        return "wifi.txt";
    };
    WiFiReport.prototype.mapBasicData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
            var from, to, map;
            return __generator(this, function (_a) {
                from = data.from, to = data.to;
                map = {
                    "NAME": user.name,
                    "SURNAME": user.surname,
                    "EMAIL": user.email,
                    "PHONE": user.phone || '---',
                    "FROM": moment_1.default(from).format(DATE_FORMAT),
                    "TO": moment_1.default(to).format(DATE_FORMAT),
                    "NOTES": ""
                };
                return [2 /*return*/, map];
            });
        });
    };
    WiFiReport.prototype.mapAdvancedData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
            var txt, map, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        txt = "";
                        return [4 /*yield*/, this.mapBasicData(user, data)];
                    case 1:
                        map = _a.sent();
                        txt = "<b>Esito esecuzione automatica</b><br>";
                        //var procResultData:string=map["processResult"] || null;
                        //console.log("pr:",this.processResult);
                        if (this.processResult) {
                            value = JSON.stringify(this.processResult.getValue());
                            txt += this.processResult.getStatus() == processor_1.ProcessResultStatus.OK ? "" + value : "NON GESTITA";
                        }
                        map["PROCESS_RESULT"] = txt;
                        return [2 /*return*/, map];
                }
            });
        });
    };
    return WiFiReport;
}(report_1.Report));
exports.WiFiReport = WiFiReport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lmaS5yZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3JlcG9ydHMvd2lmaS5yZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBK0I7QUFDL0IscURBQTJEO0FBQzNELGtEQUE0QjtBQUU1QixJQUFNLFdBQVcsR0FBQyxZQUFZLENBQUM7QUFFL0I7SUFBeUIsOEJBQU07SUFBL0I7O0lBaURBLENBQUM7SUE5Q0csd0NBQW1CLEdBQW5CO1FBQ0ksT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUdLLGlDQUFZLEdBQWxCLFVBQW1CLElBQVEsRUFBQyxJQUFRO3VDQUFFLE9BQU87OztnQkFFcEMsSUFBSSxHQUFLLElBQUksS0FBVCxFQUFDLEVBQUUsR0FBRSxJQUFJLEdBQU4sQ0FBTztnQkFFZixHQUFHLEdBQUM7b0JBQ0EsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJO29CQUNoQixTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU87b0JBQ3RCLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSztvQkFDbEIsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSztvQkFDM0IsTUFBTSxFQUFDLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDdkMsSUFBSSxFQUFDLGdCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDbkMsT0FBTyxFQUFDLEVBQUU7aUJBQ1QsQ0FBQTtnQkFFVCxzQkFBTyxHQUFHLEVBQUM7OztLQUVkO0lBRUssb0NBQWUsR0FBckIsVUFBc0IsSUFBUSxFQUFDLElBQVE7dUNBQUUsT0FBTzs7Ozs7d0JBRXhDLEdBQUcsR0FBUSxFQUFFLENBQUM7d0JBQ04scUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUExQyxHQUFHLEdBQUssU0FBa0M7d0JBRzlDLEdBQUcsR0FBQyx3Q0FBd0MsQ0FBQTt3QkFFNUMseURBQXlEO3dCQUN6RCx3Q0FBd0M7d0JBQ3hDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFDdEI7NEJBQ1EsS0FBSyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOzRCQUN4RCxHQUFHLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBRSwrQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUcsS0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUE7eUJBRTVGO3dCQUVELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFDLEdBQUcsQ0FBQzt3QkFFMUIsc0JBQU8sR0FBRyxFQUFDOzs7O0tBRWQ7SUFFTCxpQkFBQztBQUFELENBQUMsQUFqREQsQ0FBeUIsZUFBTSxHQWlEOUI7QUFFTyxnQ0FBVSJ9

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dns");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuLi9hcGkvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuLi9hcGkvbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi4vYXBpL3RlbXBsYXRlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4uL2FwaS90ZW1wbGF0ZXMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuLy4uL2FwaS91c2VyXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Rpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3Byb2Nlc3NvcnMvcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL2FwcC9yZXBvcnRzL2FjYy5yZXBvLnRzIiwid2VicGFjazovLy8uL2FwcC9yZXBvcnRzL2Rwb3J0LnJlcG8udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlcG9ydHMvZmFjdG9yeS5yZXBvLnRzIiwid2VicGFjazovLy8uL2FwcC9yZXBvcnRzL2lwLnJlcG8udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlcG9ydHMvcmVwb3J0LnRzIiwid2VicGFjazovLy8uL2FwcC9yZXBvcnRzL3dpZmkucmVwby50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFD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U0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQ0FBMkMsMnhEOzs7Ozs7Ozs7OztBQy9HM0Msa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuLi9hcGkvZGJcIiksIHJlcXVpcmUoXCIuLi9hcGkvbWFpbGVyXCIpLCByZXF1aXJlKFwiLi4vYXBpL3RlbXBsYXRlc1wiKSwgcmVxdWlyZShcIi4uL2FwaS90ZW1wbGF0ZXMuanNcIiksIHJlcXVpcmUoXCIuLy4uL2FwaS91c2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIi4uL2FwaS9kYlwiLCBcIi4uL2FwaS9tYWlsZXJcIiwgXCIuLi9hcGkvdGVtcGxhdGVzXCIsIFwiLi4vYXBpL3RlbXBsYXRlcy5qc1wiLCBcIi4vLi4vYXBpL3VzZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIi4uL2FwaS9kYlwiKSwgcmVxdWlyZShcIi4uL2FwaS9tYWlsZXJcIiksIHJlcXVpcmUoXCIuLi9hcGkvdGVtcGxhdGVzXCIpLCByZXF1aXJlKFwiLi4vYXBpL3RlbXBsYXRlcy5qc1wiKSwgcmVxdWlyZShcIi4vLi4vYXBpL3VzZXJcIikpIDogZmFjdG9yeShyb290W1wiLi4vYXBpL2RiXCJdLCByb290W1wiLi4vYXBpL21haWxlclwiXSwgcm9vdFtcIi4uL2FwaS90ZW1wbGF0ZXNcIl0sIHJvb3RbXCIuLi9hcGkvdGVtcGxhdGVzLmpzXCJdLCByb290W1wiLi8uLi9hcGkvdXNlclwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShnbG9iYWwsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FwaV9kYl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfbWFpbGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FwaV90ZW1wbGF0ZXNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXBpX3RlbXBsYXRlc19qc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfdXNlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvZGlzcGF0Y2hlci50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXBpX2RiX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfbWFpbGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfdGVtcGxhdGVzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfdGVtcGxhdGVzX2pzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfdXNlcl9fOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SZWFkUmVxdWVzdHMgPSB2b2lkIDA7XHJcbnZhciBtb21lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcclxudmFyIHJlcG9ydF8xID0gcmVxdWlyZShcIi4vcmVwb3J0cy9yZXBvcnRcIik7XHJcbnZhciBmYWN0b3J5X3JlcG9fMSA9IHJlcXVpcmUoXCIuL3JlcG9ydHMvZmFjdG9yeS5yZXBvXCIpO1xyXG52YXIgcHJvY2Vzc29yXzEgPSByZXF1aXJlKFwiLi9wcm9jZXNzb3JzL3Byb2Nlc3NvclwiKTtcclxudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XHJcbnZhciBnZXRVc2VyID0gcmVxdWlyZSgnLi8uLi9hcGkvdXNlcicpLmdldFVzZXI7XHJcbmV4cG9ydHMuUmVhZFJlcXVlc3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIlJlYWRpbmcgZm9yIG5ldyByZXF1ZXN0cy4uLlwiKVxyXG4gICAgaGVscGVyc18xLmhlbHBlcnMuUkVBRF9BTExfUkVRVUVTVFMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlkOlwiLCByLmlkKTtcclxuICAgICAgICAgICAgaGFuZGxlUmVxdWVzdChyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgaGFuZGxlUmVxdWVzdCA9IGZ1bmN0aW9uIChyKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkLCB1aWQsIHJ0eXBlLCBkYXRhLCByZXBvcnQsIGVycm9ycywgdGltZXMsIHVzZXJFbWFpbHMsIHN1cHBFbWFpbCwgdXNlck1haWxBZGRyLCB1c2VyLCBhcmdzLCBpc1ZhbGlkLCBwcm9jZXNzb3IsIGV4Y18xLCBiYXNpY3JlcG8sIGFkdnJlcG8sIG1haWxTdWJqLCBzdWJqLCBleGNfMiwgZnJvbSwgX3VzZXIsIGVycjtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgcmVxdWVzdDpcIiwgci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSByLmlkLCB1aWQgPSByLnVpZCwgcnR5cGUgPSByLnJ0eXBlLCBkYXRhID0gci5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXMgPSB7IFwibm90aWZpY1wiOiBudWxsLCBcInByb2Nlc3NcIjogbnVsbCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJFbWFpbHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cHBFbWFpbCA9IFwiYWxlc3NhbmRyby5ydWdnaWVyaUByb21hMS5pbmZuLml0O1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJNYWlsQWRkciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMTIsIDEzLCAxNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdWlkIHx8ICFydHlwZSB8fCAhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0geyBcInVpZFwiOiB1aWQsIFwidHlwZVwiOiBydHlwZSwgXCJkYXRhXCI6IGRhdGEgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByZXF1ZXN0IGRhdGEsIG1pc3Npbmcgc29tZSBhcmd1bWVudHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFVzZXIodWlkKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZWN1cGVyYSB1dGVudGUgZGEgTERBUFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90dXR0ZSBsZSBtYWlsIGRlbGwndXRlbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckVtYWlscyA9IF9fc3ByZWFkQXJyYXlzKFt1c2VyLmVtYWlsXSwgdXNlci5tYWlsQWx0ZXJuYXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyRW1haWxzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGVtYWlsIGFkZHJlc3Mgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3NlbGV6aW9uZSBzZSBwcmVzZW50ZSBpbmRpcml6em8gbm9tZS5jb2dub21lQHJvbWExIG9wcHVyZSBpbCBzdW8gaW5kaXJpenpvIHByaW5jaXBhbGVcclxuICAgICAgICAgICAgICAgICAgICAvL2NhbXBvIG1haWxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTWFpbEFkZHIgPSB1c2VyRW1haWxzLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5tYXRjaCgvXihcXHcrKFxcLlxcdyspK0Byb21hMS5pbmZuLml0KSQvKTsgfSlbMF0gfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTWFpbEFkZHIgPSB1c2VyTWFpbEFkZHIgfHwgdXNlci5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJNYWlsQWRkcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG1haWwgYWRkcmVzcyBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHVzZXIuaXNBdXRob3JpemVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGlzIG5vdCBhdXRob3JpemVkITpcIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc29yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFszLCA2LCAsIDddKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2luaXppYWxpenphIGlsIHByb2Nlc3NhdG9yZSBkaSByaWNoaWVzdGFcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzb3IgPSBwcm9jZXNzb3JfMS5Qcm9jZXNzUmVxdWVzdC5pbml0aWFsaXplKHJ0eXBlLCB1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2Nlc3NpbmcgUmVxdWVzdCBJRDogXCIgKyBpZCArIFwiIC0gXCIgKyBydHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9jZXNzb3IpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHByb2Nlc3Nvci5leGVjKCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2Nlc3NlZCBSZXF1ZXN0IElEOiBcIiArIGlkICsgXCIgLSBcIiArIHJ0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlcG9ydCA9PT0gbnVsbCB8fCByZXBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcG9ydC5wcm9jZXNzUmVzdWx0KSAmJiByZXBvcnQucHJvY2Vzc1Jlc3VsdC5nZXRTdGF0dXMoKSA9PSBwcm9jZXNzb3JfMS5Qcm9jZXNzUmVzdWx0U3RhdHVzLkJBRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVjY2V6aW9uZSBwcm9jZXNzYW1lbnRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVwb3J0LnByb2Nlc3NSZXN1bHQuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgZXhjXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goeyBcInR5cGVcIjogXCJwcm9jZXNzXCIsIFwidmFsdWVcIjogKGV4Y18xLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkoZXhjXzEpKSwgXCJkYXRhXCI6IGRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zZSBsJ29nZ2V0dG8gcmVwb3J0IG5vbiDDqCBzdGF0byBjcmVhdG8gKGlsIHByb2Nlc3MuZXhlYyBoYSBnZW5lcmF0byBlcnJvcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb2JiaWFtbyBjb211bnF1ZSBpbnZpYXJlIGkgZGF0aSBkaSByZXBvcnQgdXRlbnRlIGUgc3VwcG9ydG9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcG9ydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnQgPSBmYWN0b3J5X3JlcG9fMS5SZXBvcnRGYWN0b3J5LmluaXRpYWxpemUocnR5cGUsIHVzZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXBvcnQucmVuZGVyQXMocmVwb3J0XzEuUmVuZGVyVHlwZS5CQVNJQyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgIGJhc2ljcmVwbyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXBvcnQucmVuZGVyQXMocmVwb3J0XzEuUmVuZGVyVHlwZS5BRFZBTkNFRCldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIGFkdnJlcG8gPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbFN1YmogPSBcIlJpY2hpZXN0YSBJRCBcIiArIGlkICsgXCIgLSBcIiArIHJ0eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmogPSByZXBvcnQuZ2V0U3ViamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJqICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbFN1YmogPSBtYWlsU3ViaiArPSBcIiAtIFwiICsgc3ViajtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9JbnZpYSBSZXBvcnQgYWxsJ3V0ZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBiYXNpYyByZXBvcnQgdG8gdXNlciBhZGRyZXNzOiBcIiwgdXNlck1haWxBZGRyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWxwZXJzXzEuaGVscGVycy5zZW5kUmVwb3J0KHN1cHBFbWFpbCwgdXNlck1haWxBZGRyLCBtYWlsU3ViaiwgYmFzaWNyZXBvKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL0ludmlhIFJlcG9ydCBhbCBzZXJ2aXppbyBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgYWR2IHJlcG9ydCB0byBzdXBwb3J0bzogXCIsIHN1cHBFbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGVscGVyc18xLmhlbHBlcnMuc2VuZFJlcG9ydCh1c2VyTWFpbEFkZHIsIHN1cHBFbWFpbCwgbWFpbFN1YmogKyBcIiAtLSBSaXNlcnZhdGEgU3VwcG9ydG8gLS1cIiwgYWR2cmVwbyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXMubm90aWZpYyA9IG1vbWVudF8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgZXhjXzIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXhjXzIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSAhdXNlck1haWxBZGRyID8gXCJkaXNwYXRjaGVyXCIgOiB1c2VyTWFpbEFkZHI7XHJcbiAgICAgICAgICAgICAgICAgICAgX3VzZXIgPSB7IFwidWlkXCI6IHVzZXIudWlkLCBcInV1aWRcIjogdXNlci51dWlkLCBcIm5hbWVcIjogdXNlci5uYW1lLCBcInN1cm5hbWVcIjogdXNlci5zdXJuYW1lIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goeyBcInR5cGVcIjogXCJyZXF1ZXN0XCIsIFwiaWRcIjogci5pZCwgXCJmcm9tXCI6IGZyb20sIFwiZGF0YVwiOiBkYXRhLCBcInZhbHVlXCI6IChleGNfMi5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KGV4Y18yKSksIFwidXNlclwiOiBfdXNlciB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxNF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzLnByb2Nlc3MgPSBtb21lbnRfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyID0gZXJyb3JzLmxlbmd0aCA+IDAgPyBKU09OLnN0cmluZ2lmeShlcnJvcnMpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJUeHQsIGV4Y18zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJUeHQgPSBKU09OLnN0cmluZ2lmeShlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWxwZXJzXzEuaGVscGVycy5zZW5kUmVwb3J0KHN1cHBFbWFpbCwgc3VwcEVtYWlsLCBcIkVycm9yZSBlbGFib3JhemlvbmUgcmljaGllc3RhICBJRCAtIFwiICsgci5pZCArIFwiIC0gVHlwZSAtIFwiICsgci5ydHlwZSwgZXJyVHh0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjXzMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4Y18zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoZXJyID8gXCJlcnJvclwiIDogXCJkb25lXCIpICsgXCIgcmVxdWVzdCBcIiArIHIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x6Y0dGMFkyaGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMMkZ3Y0M5a2FYTndZWFJqYUdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGRFFTeHJSRUZCTkVJN1FVRkROVUlzTWtOQlFXdEVPMEZCUTJ4RUxIVkVRVUZ2UkR0QlFVTndSQ3h2UkVGQk1FVTdRVUZETVVVc2NVTkJRV2xETzBGQlJURkNMRWxCUVVFc1QwRkJUeXhIUVVGSkxFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNVVUZCTlVJc1EwRkJORUk3UVVGSk4wSXNVVUZCUVN4WlFVRlpMRWRCUVVNN1NVRkZla0lzTkVOQlFUUkRPMGxCUlRWRExHbENRVUZQTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVXl4SlFVRlJPMUZCUTJwRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUXl4RFFVRkxPMWxCUTJ4Q0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU42UWl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFSXNRMEZCUXl4RFFVRkRMRU5CUVVFN1NVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlFUdEJRVVZJTEVOQlFVTXNRMEZCUVR0QlFWZEVMRWxCUVUwc1lVRkJZU3hIUVVGRkxGVkJRV1VzUTBGQlN6czdPenM3T3p0dlFrRkZlRU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4dFFrRkJiVUlzUlVGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVFN2IwSkJUMmhETEVWQlFVVXNSMEZCYzBJc1EwRkJReXhIUVVGMlFpeEZRVUZGTEVkQlFVY3NSMEZCYVVJc1EwRkJReXhKUVVGc1FpeEZRVUZGTEV0QlFVc3NSMEZCVlN4RFFVRkRMRTFCUVZnc1JVRkJSU3hKUVVGSkxFZEJRVWtzUTBGQlF5eExRVUZNTEVOQlFVMDdiMEpCUnpOQ0xFMUJRVTBzUjBGQlpTeEpRVUZKTEVOQlFVTTdiMEpCUXpGQ0xFMUJRVTBzUjBGQlZTeEZRVUZGTEVOQlFVTTdiMEpCUjI1Q0xFdEJRVXNzUjBGQlN5eEZRVUZETEZOQlFWTXNSVUZCUXl4SlFVRkpMRVZCUVVNc1UwRkJVeXhGUVVGRExFbEJRVWtzUlVGQlF5eERRVUZCTzI5Q1FVVjZReXhWUVVGVkxFZEJRV3RDTEVsQlFVa3NRMEZCUXp0dlFrRkRha01zVTBGQlV5eEhRVUZETEc5RFFVRnZReXhEUVVGQk8yOUNRVVU1UXl4WlFVRlpMRWRCUVVNc1JVRkJSU3hEUVVGRE8yOUNRVU5vUWl4SlFVRkpMRWRCUVVzc1NVRkJTU3hEUVVGRE96czdPMjlDUVVscVFpeEpRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZETzNkQ1FVTjBRaXhKUVVGSkxFZEJRVU1zUlVGQlF5eExRVUZMTEVWQlFVTXNSMEZCUnl4RlFVRkRMRTFCUVUwc1JVRkJReXhMUVVGTExFVkJRVU1zVFVGQlRTeEZRVUZETEVsQlFVa3NSVUZCUXl4RFFVRkRPM2RDUVVNNVF5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRGhEUVVFNFF5eERRVUZETEVOQlFVTTdjVUpCUTJoRk8yOUNRVWRKTEhGQ1FVRk5MRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlFUczdiMEpCUkhaQ0xIbENRVUY1UWp0dlFrRkRla0lzU1VGQlNTeEhRVUZETEZOQlFXdENMRU5CUVVNN2IwSkJSWGhDTERKQ1FVRXlRanR2UWtGRE0wSXNWVUZCVlN4dFFrRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZKTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRVHR2UWtGSk9VTXNTVUZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlFVVXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXdyUWtGQkswSXNRMEZCUXl4RFFVRkJPMjlDUVVWc1JTeDFSa0ZCZFVZN2IwSkJRM2hHTEZsQlFWazdiMEpCUTFvc1dVRkJXU3hIUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCUVN4RFFVRkRMRWxCUVVVc1QwRkJRU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFVkJRWGhETEVOQlFYZERMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdiMEpCUlhKR0xGbEJRVmtzUjBGQlF5eFpRVUZaTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenR2UWtGRmVFTXNTVUZCUnl4RFFVRkRMRmxCUVZrc1JVRkJRenQzUWtGQlJTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRFJDUVVFMFFpeERRVUZETEVOQlFVRTdjVUpCUVVVN2IwSkJTVGxFTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRE8yOUNRVVZvUXl4SlFVRkhMRU5CUVVNc1QwRkJUeXhGUVVOWU8zZENRVU5ETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc01FSkJRVEJDTEVkQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZCTzNGQ1FVTm9SVHR2UWtGSlJ5eFRRVUZUTEVkQlFVc3NTVUZCU1N4RFFVRkRPenM3TzI5Q1FVdDBRaXd3UTBGQk1FTTdiMEpCUXpGRExGTkJRVk1zUjBGQlF5d3dRa0ZCWXl4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVU1zU1VGQlNTeEZRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlDUVVWeVJDeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRFJDUVVFd1FpeEZRVUZGTEZkQlFVMHNTMEZCVHl4RFFVRkRMRU5CUVVFN2VVSkJTVzVFTEZOQlFWTXNSVUZCVkN4M1FrRkJVenR2UWtGRlNpeHhRa0ZCVFN4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVUU3TzI5Q1FVRTNRaXhOUVVGTkxFZEJRVU1zVTBGQmMwSXNRMEZCUXp0dlFrRkZPVUlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl3eVFrRkJlVUlzUlVGQlJTeFhRVUZOTEV0QlFVOHNRMEZCUXl4RFFVRkJPMjlDUVVkeVJDeEpRVUZITEVOQlFVRXNUVUZCVFN4aFFVRk9MRTFCUVUwc2RVSkJRVTRzVFVGQlRTeERRVUZGTEdGQlFXRXNTMEZCU1N4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZGTEN0Q1FVRnRRaXhEUVVGRExFZEJRVWNzUlVGRGNrWTdkMEpCUTBNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhEUVVGQk8zZENRVU4wUXl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenR4UWtGRGFrUTdPenM3TzI5Q1FVMUdMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlF5eE5RVUZOTEVWQlFVTXNVMEZCVXl4RlFVRkRMRTlCUVU4c1JVRkJReXhEUVVGRExFdEJRVWNzUTBGQlF5eFBRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZETEUxQlFVMHNSVUZCUXl4SlFVRkpMRVZCUVVNc1EwRkJReXhEUVVGQk96czdiMEpCUzNwR0xEWkZRVUUyUlR0dlFrRkROMFVzT0VSQlFUaEVPMjlDUVVNNVJDeEpRVUZITEVOQlFVTXNUVUZCVFN4RlFVTldPM2RDUVVORExFMUJRVTBzUjBGQlJTdzBRa0ZCWVN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVU1zU1VGQlNTeEZRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPM0ZDUVVOc1JEdHZRa0ZMWlN4eFFrRkJUU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEcxQ1FVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVUU3TzI5Q1FVRnVSQ3hUUVVGVExFZEJRVWNzVTBGQmRVTTdiMEpCUjNwRExIRkNRVUZOTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc2JVSkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUVRzN2IwSkJRWEJFTEU5QlFVOHNSMEZCUnl4VFFVRXdRenR2UWtGTGNFUXNVVUZCVVN4SFFVRkRMR3RDUVVGblFpeEZRVUZGTEZkQlFVMHNTMEZCVHl4RFFVRkRPMjlDUVVsNlF5eEpRVUZKTEVkQlFVY3NUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGQk8yOUNRVWM1UWl4SlFVRkhMRWxCUVVrc1NVRkJSU3hGUVVGRkxFVkJRMWc3ZDBKQlEwTXNVVUZCVVN4SFFVRkRMRkZCUVZFc1NVRkJSU3hSUVVGTkxFbEJRVTBzUTBGQlFUdHhRa0ZETDBJN2IwSkJSVVFzZVVKQlFYbENPMjlDUVVONlFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMSGREUVVGM1F5eEZRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkJPMjlDUVVOc1JTeHhRa0ZCVFN4cFFrRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVWQlFVTXNXVUZCV1N4RlFVRkRMRkZCUVZFc1JVRkJReXhUUVVGVExFTkJRVU1zUlVGQlFUczdiMEpCUVc1RkxGTkJRVzFGTEVOQlFVTTdiMEpCUlhCRkxESkNRVUV5UWp0dlFrRkRNMElzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4clEwRkJhME1zUlVGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUVR0dlFrRkRla1FzY1VKQlFVMHNhVUpCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zV1VGQldTeEZRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRWRCUVVNc01rSkJRVEpDTEVWQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVFN08yOUNRVUU1Uml4VFFVRTRSaXhEUVVGRE8yOUNRVVV2Uml4TFFVRkxMRU5CUVVNc1QwRkJUeXhIUVVGRExHZENRVUZOTEVWQlFVVXNRMEZCUXp0dlFrRkZka0lzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHM3T3p0dlFrRkpjRUlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkhMRU5CUVVNc1EwRkJRenR2UWtGRFlpeEpRVUZKTEVkQlFVY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkJPMjlDUVVOc1JDeExRVUZMTEVkQlFVTXNSVUZCUXl4TFFVRkxMRVZCUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlF5eE5RVUZOTEVWQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJReXhOUVVGTkxFVkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUXl4VFFVRlRMRVZCUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlF5eERRVUZCTzI5Q1FVTnVSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVTXNUVUZCVFN4RlFVRkRMRk5CUVZNc1JVRkJReXhKUVVGSkxFVkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUXl4TlFVRk5MRVZCUVVNc1NVRkJTU3hGUVVGRExFMUJRVTBzUlVGQlF5eEpRVUZKTEVWQlFVTXNUMEZCVHl4RlFVRkRMRU5CUVVNc1MwRkJSeXhEUVVGRExFOUJRVThzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVjc1EwRkJReXhEUVVGRExFVkJRVU1zVFVGQlRTeEZRVUZETEV0QlFVc3NSVUZCUXl4RFFVRkRMRU5CUVVFN096dHZRa0ZMTTBnc1MwRkJTeXhEUVVGRExFOUJRVThzUjBGQlF5eG5Ra0ZCVFN4RlFVRkZMRU5CUVVFN2IwSkJRMnhDTEVkQlFVY3NSMEZCUlN4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMjlDUVVWNlJDeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVUwc1IwRkJSenM3T3pzN2IwTkJSMjVDTEUxQlFVMHNSMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3pzN08yOURRVWM1UWl4eFFrRkJUU3hwUWtGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRVZCUVVNc1UwRkJVeXhGUVVGRExIbERRVUYxUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hyUWtGQllTeERRVUZETEVOQlFVTXNTMEZCVHl4RlFVRkRMRTFCUVUwc1EwRkJReXhGUVVGQk96dHZRMEZCZEVnc1UwRkJjMGdzUTBGQlF6czdPenR2UTBGSGRrZ3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGSExFTkJRVU1zUTBGQlF6czdPenM3ZVVKQlIyeENMRU5CUVVNc1EwRkJRVHR2UWtGRlJpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc2EwSkJRVmtzUTBGQlF5eERRVUZETEVWQlFVa3NRMEZCUXl4RFFVRkJPenM3T3pzN1EwRkxla1FzUTBGQlFTSjkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmhlbHBlcnMgPSB2b2lkIDA7XHJcbnZhciBkYiA9IHJlcXVpcmUoJy4uL2FwaS9kYicpLm5xZGI7XHJcbnZhciBzZW5kTWFpbCA9IHJlcXVpcmUoJy4uL2FwaS9tYWlsZXInKS5zZW5kTWFpbDtcclxudmFyIGhlbHBlcnMgPSB7XHJcbiAgICBnZXRQb3J0TG9jYXRpb246IGZ1bmN0aW9uIChwb3J0X2NvZGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgZGIuYW55KCdzZWxlY3QgbG9jX2lkICxsb2NfYnVpbGRpbmcgYXMgXCJidWlsZFwiLGxvY19mbG9vciBhcyBcImZsb29yXCIsXFxcclxuICAgICAgICAgICAgbG9jX25hbWUgYXMgXCJyb29tXCIsIHBwX3BvcnRfY29kZSBhcyBcInBvcnRfY29kZVwiLCBwcF9wb3J0X2FsaWFzIGFzIFwicG9ydF9hbGlhc1wiIGZyb20gdndfbmV0d29ya19zdGF0dXNfZXhfMyB3aGVyZSBwcF9wb3J0X2NvZGU9JDEgb3IgcHBfcG9ydF9hbGlhcz0kMSBsaW1pdCAxJywgW3BvcnRfY29kZV0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc1swXSB8fCBudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0SG9zdDogZnVuY3Rpb24gKG1hYykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICB2YXIgaG9zdF9tYWMgPSBtYWMudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgZGIuYW55KFwic2VsZWN0IGxvY19pZCAsbG9jX2J1aWxkaW5nIGFzIFxcXCJidWlsZFxcXCIsbG9jX2Zsb29yIGFzIFxcXCJmbG9vclxcXCIsbG9jX25hbWUsIGhvc3RfbmFtZSxob3N0X2RvbWFpbixob3N0X21hYyxwcF9wb3J0X2NvZGUgZnJvbSB2d19uZXR3b3JrX3N0YXR1c19leF8zIHdoZXJlIGxvd2VyKGhvc3RfbWFjOjp0ZXh0KT1sb3dlcigkMSlcIiwgW2hvc3RfbWFjXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzWzBdIHx8IG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvL25vZGkgYXBwYXJ0ZW5lbnRpIHV0ZW50ZVxyXG4gICAgZ2V0VXNlckRIQ1BIb3N0czogZnVuY3Rpb24gKHV1aWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgZGIuYW55KFwic2VsZWN0IGhvc3RfbWFjIGZyb20gdndfbmV0d29ya19zdGF0dXNfZXhfMyB3aGVyZSBsb3dlcihhZG1pbl9jZjo6dGV4dCk9bG93ZXIoJDEpIGFuZCBob3N0X2lzX2RoY3AgaXMgdHJ1ZVwiLCBbdXVpZF0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRuc0xvb2t1cDogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgZG5zID0gcmVxdWlyZShcImRuc1wiKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlcywgcmVqKSB7XHJcbiAgICAgICAgICAgIGRucy5yZXNvbHZlKG5hbWUsIGZ1bmN0aW9uIChlcnIsIGFkZHIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlY29kZSA9IGVyci5lcnJubyB8fCBlcnIuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWNvZGUgIT0gJ0VOT1RGT1VORCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzKGFkZHIgfHwgbnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFBvcnROZXR3b3JrOiBmdW5jdGlvbiAocG9ydF9jb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHZhciBuY19jb2RlID0gKHBvcnRfY29kZS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgICAgICBkYi5hbnkoJ3NlbGVjdCBuZXR3b3JrIGZyb20gbmV0d29ya19jbG9zZXQgbmMsIHZsYW5fbmV0d29yayB2biBcXFxyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlIG5jLm5jX2NvZGU9JDEgYW5kIG5jLnZsYW49dm4udmxhbicsIFtuY19jb2RlXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzWzBdIHx8IG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZGRFbXB0eVNwYWNlc1RvRW5kOiBmdW5jdGlvbiAoc3BhY2VzLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciByZXAgPSBzcGFjZXMgLSB2YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgcmVwID0gcmVwIDwgMCA/IDAgOiByZXA7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIgXCIucmVwZWF0KHJlcCk7XHJcbiAgICB9LFxyXG4gICAgUkVBRF9BTExfUkVRVUVTVFM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGIucXVlcnkoXCJzZWxlY3QgKiBmcm9tIHVzZXJfcmVxdWVzdHMgd2hlcmUgc3RhdHVzID0nU1VCTUlUVEVEJ1wiKTtcclxuICAgIH0sXHJcbiAgICBzZXREaXNwYXRjaFJlc3VsdDogZnVuY3Rpb24gKHJpZCwgbm90aWZpYywgcHJvY2VzcywgZXJyb3IpIHtcclxuICAgICAgICB2YXIgc3RhdHVzID0gIWVycm9yID8gXCJQUk9DRVNTRURcIiA6IFwiQkFEXCI7XHJcbiAgICAgICAgZGIucXVlcnkoXCJ1cGRhdGUgdXNlcl9yZXF1ZXN0cyBzZXQgbm90aWZpY19kYXRlPSQxLHByb2Nlc3NfZGF0ZT0kMixleGM9JDMsc3RhdHVzPSQ1IHdoZXJlIGlkPSQ0XCIsIFtub3RpZmljLCBwcm9jZXNzLCBlcnJvciwgcmlkLCBzdGF0dXNdKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBoYXMgb2NjdXJyZWQ6XCIpO1xyXG4gICAgICAgICAgICB0aHJvdyAoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kUmVwb3J0OiBmdW5jdGlvbiAoZnJvbSwgdG8sIHN1YmosIHJlcG9ydCkge1xyXG4gICAgICAgIHJldHVybiBzZW5kTWFpbChmcm9tLCB0bywgc3ViaiwgXCI8cHJlPlwiICsgcmVwb3J0ICsgXCI8L3ByZT5cIik7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuaGVscGVycyA9IGhlbHBlcnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFHVnNjR1Z5Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDJGd2NDOW9aV3h3WlhKekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVXNzUlVGQlJTeEhRVUZGTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJkRUlzUTBGQmMwSTdRVUZETjBJc1NVRkJRU3hSUVVGUkxFZEJRVVVzVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4VFFVRXhRaXhEUVVFd1FqdEJRVWQ2UXl4SlFVRkpMRTlCUVU4c1IwRkJRenRKUVVWU0xHVkJRV1VzUlVGQlF5eFZRVUZUTEZOQlFXZENPMUZCUTNKRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNWVUZCUXl4UFFVRlBPMWxCUTNoQ0xFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTTdlVXRCUTNWS0xFVkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0cFFrRkRla3NzU1VGQlNTeERRVUZETEZWQlFWTXNSMEZCVHp0blFrRkRiRUlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4RFFVRkRMRU5CUVVNc1EwRkJRVHRSUVVOT0xFTkJRVU1zUTBGQlF5eERRVUZCTzBsQlEwNHNRMEZCUXp0SlFVVkVMRTlCUVU4c1JVRkJReXhWUVVGVExFZEJRVlU3VVVGRGRrSXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGRExFOUJRVTg3V1VGRGRrSXNTVUZCU1N4UlFVRlJMRWRCUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFsQlF5OUNMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zZVV4QlFYRk1MRVZCUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dHBRa0ZEZGswc1NVRkJTU3hEUVVGRExGVkJRVk1zUjBGQlR6dG5Ra0ZEYWtJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNM1FpeERRVUZETEVOQlFVTXNRMEZCUVR0UlFVTk9MRU5CUVVNc1EwRkJReXhEUVVGQk8wbEJRMDRzUTBGQlF6dEpRVVZFTERCQ1FVRXdRanRKUVVNeFFpeG5Ra0ZCWjBJc1JVRkJReXhWUVVGVExFbEJRVmM3VVVGRGFrTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGRExFOUJRVTg3V1VGRGRrSXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXcwUjBGQk5FY3NSVUZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8ybENRVU14U0N4SlFVRkpMRU5CUVVNc1ZVRkJVeXhIUVVGUE8yZENRVU5xUWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGJFSXNRMEZCUXl4RFFVRkRMRU5CUVVFN1VVRkRUaXhEUVVGRExFTkJRVU1zUTBGQlFUdEpRVU5PTEVOQlFVTTdTVUZGUkN4VFFVRlRMRVZCUVVNc1ZVRkJVeXhKUVVGWE8xRkJSVEZDTEVsQlFVMHNSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU16UWl4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVU1zUjBGQlJ5eEZRVUZETEVkQlFVYzdXVUZEZGtJc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVTXNWVUZCUXl4SFFVRlBMRVZCUVVNc1NVRkJVVHRuUWtGRk9VSXNTVUZCUnl4SFFVRkhMRVZCUTA0N2IwSkJRMGtzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHR2UWtGRGFFSXNTVUZCU1N4TFFVRkxMRWRCUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzU1VGQlNTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkJPMjlDUVVNdlFpeEpRVUZITEV0QlFVc3NTVUZCUlN4WFFVRlhMRVZCUTNKQ08zZENRVU5KTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGRFdqdHBRa0ZGU2p0blFrRkRSQ3hIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNSQ0xFTkJRVU1zUTBGQlF5eERRVUZCTzFGQlEwNHNRMEZCUXl4RFFVRkRMRU5CUVVFN1NVRkhUaXhEUVVGRE8wbEJSVVFzWTBGQll5eEZRVUZETEZWQlFWTXNVMEZCWjBJN1VVRkRjRU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4VlFVRkRMRTlCUVU4N1dVRkRka0lzU1VGQlNTeFBRVUZQTEVkQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZkRU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXpzMFJFRkRlVU1zUlVGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMmxDUVVONlJDeEpRVUZKTEVOQlFVTXNWVUZCVXl4SFFVRlBPMmRDUVVOc1FpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6VkNMRU5CUVVNc1EwRkJReXhEUVVGQk8xRkJRMDRzUTBGQlF5eERRVUZETEVOQlFVRTdTVUZEVUN4RFFVRkRPMGxCUlVRc2JVSkJRVzFDTEVWQlFVTXNWVUZCVXl4TlFVRmhMRVZCUVVNc1MwRkJXVHRSUVVWdVJDeEpRVUZKTEVkQlFVY3NSMEZCUlN4TlFVRk5MRWRCUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU0zUWl4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRGVFSXNUMEZCVHl4TFFVRkxMRWRCUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJSMFFzYVVKQlFXbENMRVZCUVVNN1VVRkZaQ3hQUVVGUExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dEpRVU0zUlN4RFFVRkRPMGxCUlVRc2FVSkJRV2xDTEVWQlFVTXNWVUZCVXl4SFFVRlBMRVZCUVVVc1QwRkJiVUlzUlVGQlJTeFBRVUZ0UWl4RlFVRkZMRXRCUVdsQ08xRkJRek5HTEVsQlFVa3NUVUZCVFN4SFFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVONlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMSFZHUVVGMVJpeEZRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkRMRTlCUVU4c1JVRkJReXhMUVVGTExFVkJRVU1zUjBGQlJ5eEZRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUTI1SkxFbEJRVWtzUTBGQlJTeFZRVUZETEVsQlFWRTdVVUZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZGTEZWQlFVTXNSMEZCVHp0WlFVTmtMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1EwRkJRVHRaUVVOeVF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1VVRkRaaXhEUVVGRExFTkJRVU1zUTBGQlFUdEpRVU5PTEVOQlFVTTdTVUZGUkN4VlFVRlZMRVZCUVVNc1ZVRkJVeXhKUVVGWExFVkJRVVVzUlVGQlV5eEZRVUZGTEVsQlFWY3NSVUZCUlN4TlFVRmhPMUZCUld4RkxFOUJRVThzVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRExGVkJRVkVzVFVGQlRTeFhRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hEUVVGRE8wTkJSVW9zUTBGQlFUdEJRVVZQTERCQ1FVRlBJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlByb2Nlc3NSZXN1bHRTdGF0dXMgPSBleHBvcnRzLlByb2Nlc3NSZXF1ZXN0ID0gdm9pZCAwO1xyXG52YXIgbW9tZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XHJcbnZhciBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbnZhciB3aWZpX3JlcG9fMSA9IHJlcXVpcmUoXCIuLi9yZXBvcnRzL3dpZmkucmVwb1wiKTtcclxudmFyIGlwX3JlcG9fMSA9IHJlcXVpcmUoXCIuLi9yZXBvcnRzL2lwLnJlcG9cIik7XHJcbnZhciBhY2NfcmVwb18xID0gcmVxdWlyZShcIi4uL3JlcG9ydHMvYWNjLnJlcG9cIik7XHJcbnZhciBQcm9jZXNzUmVzdWx0U3RhdHVzO1xyXG4oZnVuY3Rpb24gKFByb2Nlc3NSZXN1bHRTdGF0dXMpIHtcclxuICAgIFByb2Nlc3NSZXN1bHRTdGF0dXNbUHJvY2Vzc1Jlc3VsdFN0YXR1c1tcIk9LXCJdID0gMF0gPSBcIk9LXCI7XHJcbiAgICBQcm9jZXNzUmVzdWx0U3RhdHVzW1Byb2Nlc3NSZXN1bHRTdGF0dXNbXCJCQURcIl0gPSAxXSA9IFwiQkFEXCI7XHJcbn0pKFByb2Nlc3NSZXN1bHRTdGF0dXMgfHwgKFByb2Nlc3NSZXN1bHRTdGF0dXMgPSB7fSkpO1xyXG5leHBvcnRzLlByb2Nlc3NSZXN1bHRTdGF0dXMgPSBQcm9jZXNzUmVzdWx0U3RhdHVzO1xyXG52YXIgUHJvY2Vzc1Jlc3VsdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByb2Nlc3NSZXN1bHQoc3RhdHVzLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgUHJvY2Vzc1Jlc3VsdC5wcm90b3R5cGUuZ2V0U3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgICB9O1xyXG4gICAgUHJvY2Vzc1Jlc3VsdC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFByb2Nlc3NSZXN1bHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQcm9jZXNzUmVzdWx0O1xyXG59KCkpO1xyXG52YXIgUHJvY2Vzc1Jlc3VsdE9LID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFByb2Nlc3NSZXN1bHRPSywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFByb2Nlc3NSZXN1bHRPSyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBQcm9jZXNzUmVzdWx0U3RhdHVzLk9LLCB2YWx1ZSkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9jZXNzUmVzdWx0T0s7XHJcbn0oUHJvY2Vzc1Jlc3VsdCkpO1xyXG52YXIgUHJvY2Vzc1Jlc3VsdEJBRCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQcm9jZXNzUmVzdWx0QkFELCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUHJvY2Vzc1Jlc3VsdEJBRCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBQcm9jZXNzUmVzdWx0U3RhdHVzLkJBRCwgdmFsdWUpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvY2Vzc1Jlc3VsdEJBRDtcclxufShQcm9jZXNzUmVzdWx0KSk7XHJcbnZhciBQcm9jZXNzUmVxdWVzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByb2Nlc3NSZXF1ZXN0KHVzZXIsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWREYXRhKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgcmVxdWVzdCBkYXRhIGZpZWxkczpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpIHx8IGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICBQcm9jZXNzUmVxdWVzdC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHR5cGUsIHVzZXIsIGRhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIklQXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQX1Byb2Nlc3Nvcih1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiV0lGSVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXaUZpX1Byb2Nlc3Nvcih1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQUNDT1VOVFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBY2NvdW50X1Byb2Nlc3Nvcih1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy90aHJvdyBFcnJvcihgTm8gcmVxdWVzdCBoYW5kbGVyIGZvciByZXF1ZXN0IHR5cGU6JHt0eXBlfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBQcm9jZXNzUmVxdWVzdDtcclxufSgpKTtcclxuZXhwb3J0cy5Qcm9jZXNzUmVxdWVzdCA9IFByb2Nlc3NSZXF1ZXN0O1xyXG52YXIgV2lGaV9Qcm9jZXNzb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoV2lGaV9Qcm9jZXNzb3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBXaUZpX1Byb2Nlc3NvcigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBXaUZpX1Byb2Nlc3Nvci5wcm90b3R5cGUuaXNWYWxpZERhdGEgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgX2IgPSBfYS5mcm9tLCBmcm9tID0gX2IgPT09IHZvaWQgMCA/IG51bGwgOiBfYiwgX2MgPSBfYS50bywgdG8gPSBfYyA9PT0gdm9pZCAwID8gbnVsbCA6IF9jO1xyXG4gICAgICAgIHJldHVybiAhIWZyb20gJiYgISF0bztcclxuICAgIH07XHJcbiAgICBXaUZpX1Byb2Nlc3Nvci5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VyLCBkYXRhLCBwcm9jZXNzUmVzdWx0LCBwYXlsb2FkLCBiYXNlVXJsLCByZXMsIGV4Y18xO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gdGhpcy51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNCwgLCA1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSB7IFwibmFtZVwiOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1cm5hbWVcIjogdXNlci5zdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaG9uZVwiOiB1c2VyLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydFwiOiBtb21lbnRfMS5kZWZhdWx0KGRhdGEuZnJvbSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5kXCI6IG1vbWVudF8xLmRlZmF1bHQoZGF0YS50bykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zLnBvc3QoYmFzZVVybCArIFwiL2FwaS91c2Vycy9jcmVhdGVcIiwgeyBcInVzZXJcIjogcGF5bG9hZCwgXCJldmlkXCI6IG51bGwgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW52aWEgbWFpbCB1c2FuZG8gd2lmaWd1ZXN0cyBhcGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnZpYSBtYWlsIHVzYW5kbyB3aWZpZ3Vlc3RzIGFwaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvcy5wb3N0KGJhc2VVcmwgKyBcIi9hcGkvbWFpbC91c2VyXCIsIHsgXCJ1aWRcIjogcmVzLmRhdGEuaWQgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pbnZpYSBtYWlsIHVzYW5kbyB3aWZpZ3Vlc3RzIGFwaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NSZXN1bHQgPSBuZXcgUHJvY2Vzc1Jlc3VsdE9LKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdCA9IG5ldyBQcm9jZXNzUmVzdWx0QkFEKGV4Y18xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IHdpZmlfcmVwb18xLldpRmlSZXBvcnQodGhpcy51c2VyLCB0aGlzLmRhdGEsIHByb2Nlc3NSZXN1bHQpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdpRmlfUHJvY2Vzc29yO1xyXG59KFByb2Nlc3NSZXF1ZXN0KSk7XHJcbnZhciBJUF9Qcm9jZXNzb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoSVBfUHJvY2Vzc29yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSVBfUHJvY2Vzc29yKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIElQX1Byb2Nlc3Nvci5wcm90b3R5cGUuaXNWYWxpZERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vQ2hlY2sgZGF0YVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIElQX1Byb2Nlc3Nvci5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VyLCBkYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gdGhpcy51c2VyO1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgaXBfcmVwb18xLklQUmVwb3J0KHVzZXIsIGRhdGEpXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIElQX1Byb2Nlc3NvcjtcclxufShQcm9jZXNzUmVxdWVzdCkpO1xyXG52YXIgQWNjb3VudF9Qcm9jZXNzb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWNjb3VudF9Qcm9jZXNzb3IsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBBY2NvdW50X1Byb2Nlc3NvcigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBBY2NvdW50X1Byb2Nlc3Nvci5wcm90b3R5cGUuaXNWYWxpZERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vQ2hlY2sgZGF0YVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIEFjY291bnRfUHJvY2Vzc29yLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHVzZXIsIGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSB0aGlzLnVzZXI7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBhY2NfcmVwb18xLkFjY291bnRSZXBvcnQodXNlciwgZGF0YSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQWNjb3VudF9Qcm9jZXNzb3I7XHJcbn0oUHJvY2Vzc1JlcXVlc3QpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdlkyVnpjMjl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2WVhCd0wzQnliMk5sYzNOdmNuTXZjSEp2WTJWemMyOXlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGQlFTeHJSRUZCTkVJN1FVRkROVUlzU1VGQlRTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJSUzlDTEd0RVFVRXJRenRCUVVNdlF5dzRRMEZCTWtNN1FVRkRNME1zWjBSQlFXbEVPMEZCUldwRUxFbEJRVXNzYlVKQlFXZERPMEZCUVhKRExGZEJRVXNzYlVKQlFXMUNPMGxCUVVVc2VVUkJRVWtzUTBGQlFUdEpRVUZETERKRVFVRkxMRU5CUVVFN1FVRkJRU3hEUVVGRExFVkJRV2hETEcxQ1FVRnRRaXhMUVVGdVFpeHRRa0ZCYlVJc1VVRkJZVHRCUVRoTFF5eHJSRUZCYlVJN1FVRjBTM3BFTzBsQlNVa3NkVUpCUVZrc1RVRkJNRUlzUlVGQlF5eExRVUZUTzFGQlJUVkRMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVU1zVFVGQlRTeERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVU1zUzBGQlN5eERRVUZETzBsQlEzUkNMRU5CUVVNN1NVRkZSQ3hwUTBGQlV5eEhRVUZVTzFGQlJVc3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZGUkN4blEwRkJVU3hIUVVGU08xRkJRMGtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJDdzRRa0ZCVFN4SFFVRk9PMUZCUTBrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRVHRKUVVOMFF5eERRVUZETzBsQlEwd3NiMEpCUVVNN1FVRkJSQ3hEUVVGRExFRkJkRUpFTEVsQmMwSkRPMEZCUlVRN1NVRkJPRUlzYlVOQlFXRTdTVUZEZGtNc2VVSkJRVmtzUzBGQlV6dGxRVU5xUWl4clFrRkJUU3h0UWtGQmJVSXNRMEZCUXl4RlFVRkZMRVZCUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZEVEN4elFrRkJRenRCUVVGRUxFTkJRVU1zUVVGS1JDeERRVUU0UWl4aFFVRmhMRWRCU1RGRE8wRkJRMFE3U1VGQkswSXNiME5CUVdFN1NVRkRlRU1zTUVKQlFWa3NTMEZCVXp0bFFVTnFRaXhyUWtGQlRTeHRRa0ZCYlVJc1EwRkJReXhIUVVGSExFVkJRVU1zUzBGQlN5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkRUQ3gxUWtGQlF6dEJRVUZFTEVOQlFVTXNRVUZLUkN4RFFVRXJRaXhoUVVGaExFZEJTVE5ETzBGQlJVUTdTVUZKU1N4M1FrRkJXU3hKUVVGUkxFVkJRVU1zU1VGQlVUdFJRVVY2UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGRExFbEJRVWtzUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVNc1NVRkJTU3hEUVVGRE8xRkJRMllzU1VGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVU03V1VGRGRrSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXgxUTBGQmRVTXNSMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJRVUVzUTBGQlF6dEpRVU5PTEVOQlFVTTdTVUZGVFN4NVFrRkJWU3hIUVVGcVFpeFZRVUZyUWl4SlFVRlhMRVZCUVVNc1NVRkJVU3hGUVVGRExFbEJRVkU3VVVGRk0wTXNVVUZCVHl4SlFVRkpMRVZCUTFnN1dVRkZTU3hMUVVGTExFbEJRVWs3WjBKQlEwd3NUMEZCVHl4SlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTNaRExFMUJRVTA3V1VGRFRpeExRVUZMTEUxQlFVMDdaMEpCUTFBc1QwRkJUeXhKUVVGSkxHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRM3BETEUxQlFVMDdXVUZEVGl4TFFVRkxMRk5CUVZNN1owSkJRMVlzVDBGQlR5eEpRVUZKTEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUlVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkROVU1zVFVGQlRUdFpRVU5PTzJkQ1FVTkpMRFpFUVVFMlJEdG5Ra0ZETjBRc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGRmJrSTdTVUZEVEN4RFFVRkRPMGxCVDB3c2NVSkJRVU03UVVGQlJDeERRVUZETEVGQmRrTkVMRWxCZFVORE8wRkJORVpQTEhkRFFVRmpPMEZCZWtaMFFqdEpRVUUyUWl4clEwRkJZenRKUVVFelF6czdTVUZwUkVFc1EwRkJRenRKUVRsRFJ5eHZRMEZCVnl4SFFVRllMRlZCUVZrc1JVRkJiVUk3V1VGQmJFSXNXVUZCVXl4RlFVRlVMRWxCUVVrc2JVSkJRVU1zU1VGQlNTeExRVUZCTEVWQlFVTXNWVUZCVHl4RlFVRlFMRVZCUVVVc2JVSkJRVU1zU1VGQlNTeExRVUZCTzFGQlJURkNMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkJPMGxCUTNwQ0xFTkJRVU03U1VGRlN5dzJRa0ZCU1N4SFFVRldPenM3T3pzN2QwSkJSMUVzU1VGQlNTeEhRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN2QwSkJRMllzU1VGQlNTeEhRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0M1FrRkRha01zWVVGQllTeEhRVUZ4UWl4SlFVRkpMRU5CUVVNN096czdkMEpCUzJwRExFOUJRVThzUjBGQlF5eEZRVUZETEUxQlFVMHNSVUZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTVHMwUWtGRGJrSXNVMEZCVXl4RlFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUE96UkNRVU4wUWl4UFFVRlBMRVZCUVVNc1NVRkJTU3hEUVVGRExFdEJRVXM3TkVKQlEyeENMRTlCUVU4c1JVRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN6czBRa0ZEYkVJc1QwRkJUeXhGUVVGRExHZENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTTdORUpCUXpsRExFdEJRVXNzUlVGQlF5eG5Ra0ZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVc1EwRkJRVHQzUWtGSmNFUXNUMEZCVHl4SFFVRkRMSFZDUVVGMVFpeERRVUZCTzNkQ1FVY3pRaXh4UWtGQlRTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkpMRTlCUVU4c2MwSkJRVzFDTEVWQlFVTXNSVUZCUXl4TlFVRk5MRVZCUVVNc1QwRkJUeXhGUVVGRExFMUJRVTBzUlVGQlF5eEpRVUZKTEVWQlFVTXNRMEZCUXpzMFFrRkZjRVlzYTBOQlFXdERPekJDUVVaclJEczdkMEpCUVdoR0xFZEJRVWNzUjBGQlF5eFRRVUUwUlR0M1FrRkZjRVlzYTBOQlFXdERPM2RDUVVOc1F5eHhRa0ZCVFN4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGSkxFOUJRVThzYlVKQlFXZENMRVZCUVVNc1JVRkJReXhMUVVGTExFVkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVNc1EwRkJReXhGUVVGQk96dDNRa0ZFYUVVc2EwTkJRV3RETzNkQ1FVTnNReXhUUVVGblJTeERRVUZETzNkQ1FVVnFSU3hoUVVGaExFZEJRVU1zU1VGQlNTeGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk96czdPM2RDUVVzelF5eGhRVUZoTEVkQlFVTXNTVUZCU1N4blFrRkJaMElzUTBGQlF5eExRVUZITEVOQlFVTXNRMEZCUVRzN05FSkJTVE5ETEhOQ1FVRlBMRWxCUVVrc2MwSkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzWVVGQllTeERRVUZETEVWQlFVTTdPenM3UzBGRk9VUTdTVUZIVEN4eFFrRkJRenRCUVVGRUxFTkJRVU1zUVVGcVJFUXNRMEZCTmtJc1kwRkJZeXhIUVdsRU1VTTdRVUZGUkR0SlFVRXlRaXhuUTBGQll6dEpRVUY2UXpzN1NVRm5Ra0VzUTBGQlF6dEpRV1JITEd0RFFVRlhMRWRCUVZnc1ZVRkJXU3hKUVVGUk8xRkJSV2hDTEZsQlFWazdVVUZEV2l4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlEwc3NNa0pCUVVrc1IwRkJWanM3T3p0blFrRkZVU3hKUVVGSkxFZEJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRaaXhKUVVGSkxFZEJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkZia0lzYzBKQlFVOHNTVUZCU1N4clFrRkJVU3hEUVVGRExFbEJRVWtzUlVGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUXpzN08wdEJSV3hETzBsQlJVd3NiVUpCUVVNN1FVRkJSQ3hEUVVGRExFRkJhRUpFTEVOQlFUSkNMR05CUVdNc1IwRm5RbmhETzBGQlJVUTdTVUZCWjBNc2NVTkJRV003U1VGQk9VTTdPMGxCWjBKQkxFTkJRVU03U1VGa1J5eDFRMEZCVnl4SFFVRllMRlZCUVZrc1NVRkJVVHRSUVVWb1FpeFpRVUZaTzFGQlExb3NUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkRhRUlzUTBGQlF6dEpRVU5MTEdkRFFVRkpMRWRCUVZZN096czdaMEpCUlZFc1NVRkJTU3hIUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUTJZc1NVRkJTU3hIUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUlc1Q0xITkNRVUZQTEVsQlFVa3NkMEpCUVdFc1EwRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeERRVUZETEVWQlFVTTdPenRMUVVWMlF6dEpRVVZNTEhkQ1FVRkRPMEZCUVVRc1EwRkJReXhCUVdoQ1JDeERRVUZuUXl4alFVRmpMRWRCWjBJM1F5SjkiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFjY291bnRSZXBvcnQgPSB2b2lkIDA7XHJcbnZhciByZXBvcnRfMSA9IHJlcXVpcmUoXCIuL3JlcG9ydFwiKTtcclxudmFyIEFjY291bnRSZXBvcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWNjb3VudFJlcG9ydCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFjY291bnRSZXBvcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQWNjb3VudFJlcG9ydC5wcm90b3R5cGUuZ2V0VGVtcGxhdGVGaWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJhY2NvdW50LnR4dFwiO1xyXG4gICAgfTtcclxuICAgIEFjY291bnRSZXBvcnQucHJvdG90eXBlLm1hcEJhc2ljRGF0YSA9IGZ1bmN0aW9uICh1c2VyLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3RvcmVfaXRhLCByZXN0b3JlX2VuZywgdXNlckVtYWlscywgbWFwO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0b3JlX2l0YSA9IHsgXCJtYWlsXCI6IFwiY29udGVudXRvIGRlbGxhIGNhc2VsbGEgZGkgcG9zdGEgZWxldHRyb25pY2FcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFmc1wiOiBcImZpbGVzIEFGU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFpbC1hZnNcIjogXCJjb250ZW51dG8gZGVsbGEgY2FzZWxsYSBkaSBwb3N0YSBlbGV0dHJvbmljYSBlIGZpbGVzIEFGU1wiIH07XHJcbiAgICAgICAgICAgICAgICByZXN0b3JlX2VuZyA9IHsgXCJtYWlsXCI6IFwiZS1tYWlsYm94IGNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBcImFmc1wiOiBcIkFGUyBmaWxlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWFpbC1hZnNcIjogXCJlLW1haWxib3ggY29udGVudCBhbmQgQUZTIGZpbGVzXCIgfTtcclxuICAgICAgICAgICAgICAgIHVzZXJFbWFpbHMgPSBfX3NwcmVhZEFycmF5cyhbdXNlci5lbWFpbF0sIHVzZXIubWFpbEFsdGVybmF0ZXMpO1xyXG4gICAgICAgICAgICAgICAgdXNlckVtYWlscyA9IHVzZXJFbWFpbHNbMF0gPyB1c2VyRW1haWxzLmpvaW4oXCI7IFwiKSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBtYXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJVSURcIjogdXNlci51aWQgfHwgJy0tLScsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOQU1FXCI6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcIlNVUk5BTUVcIjogdXNlci5zdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRU1BSUxcIjogZGF0YS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkVNQUlMX0FMVFwiOiB1c2VyRW1haWxzLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUEhPTkVcIjogdXNlci5waG9uZSB8fCAnLS0tJyxcclxuICAgICAgICAgICAgICAgICAgICBcIkVYUElSQVRJT05cIjogdXNlci5leHBpcmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSU5GTlVVSURcIjogdXNlci51dWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUk9MRVwiOiB1c2VyLnJvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSRVNUT1JFX0lUQVwiOiByZXN0b3JlX2l0YVtkYXRhLnJlc3RvcmVdIHx8ICduZXNzdW5vJyxcclxuICAgICAgICAgICAgICAgICAgICBcIlJFU1RPUkVfRU5HXCI6IHJlc3RvcmVfZW5nW2RhdGEucmVzdG9yZV0gfHwgJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUkVTVE9SRV9NQUlMX1BST0NFRFVSRVwiOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1hcF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFjY291bnRSZXBvcnQucHJvdG90eXBlLm1hcEFkdmFuY2VkRGF0YSA9IGZ1bmN0aW9uICh1c2VyLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1hcCwgYmNrbWFpbHVzZXIsIHJlc3RvcmVfbWFpbF9wcm9jZWR1cmU7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubWFwQmFzaWNEYXRhKHVzZXIsIGRhdGEpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdG9yZSAmJiBkYXRhLnJlc3RvcmUgPT0gJ21haWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiY2ttYWlsdXNlciA9IHVzZXIudWlkICsgXCItbWFpbGJveC50Z3pcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RvcmVfbWFpbF9wcm9jZWR1cmUgPSBcIlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9PT09PT09PT09PT09PT09PT0gUFJPQ0VEVVJBIERJIFJJUFJJU1RJTk8gTUFJTCA9PT09PT09PT09PT09PT1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1PkFUVEVOWklPTkUhISEgLSBFc2VndWlyZSBxdWVzdGkgcGFzc2kgc29sbyBET1BPIGF2ZXIgY3JlYXRvIGwnYWNjb3VudCBlIHByaW1hIGRpIGludmlhcmUgbGEgbWFpbCBkaSB0ZXN0LjwvdT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBjb2xsZWdhcnNpIHN1IGZyZWV6ZXIyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gPGI+Y2QgL2RhdGEvdm0rc2Vydml6aS9iY2t1c2VyL1wiICsgdXNlci51aWQgKyBcIjwvYj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSA8Yj5zY3AgXCIgKyBiY2ttYWlsdXNlciArIFwiICByb290QG1haWxib3g6LiA8L2I+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gY29sbGVnYXJzaSBzdSBtYWlsYm94XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gPGI+Y2QgL3Zhci9pbWFwPC9iPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIDxiPnRhciB4enZmIC9yb290L1wiICsgYmNrbWFpbHVzZXIgKyBcIjwvYj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSA8Yj5jZDwvYj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSA8Yj5ybSBcIiArIGJja21haWx1c2VyICsgXCI8L2I+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtcIlJFU1RPUkVfTUFJTF9QUk9DRURVUkVcIl0gPSByZXN0b3JlX21haWxfcHJvY2VkdXJlLnNwbGl0KFwiXFxuXCIpLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS50cmltKCk7IH0pLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1hcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBY2NvdW50UmVwb3J0O1xyXG59KHJlcG9ydF8xLlJlcG9ydCkpO1xyXG5leHBvcnRzLkFjY291bnRSZXBvcnQgPSBBY2NvdW50UmVwb3J0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV05qTG5KbGNHOHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOWhjSEF2Y21Wd2IzSjBjeTloWTJNdWNtVndieTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVUZCTEcxRFFVRXJRanRCUVVVdlFqdEpRVUUwUWl4cFEwRkJUVHRKUVVGc1F6czdTVUY1UlVFc1EwRkJRenRKUVhSRlJ5d3lRMEZCYlVJc1IwRkJia0k3VVVGRFNTeFBRVUZQTEdGQlFXRXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVXNzYjBOQlFWa3NSMEZCYkVJc1ZVRkJiVUlzU1VGQlVTeEZRVUZETEVsQlFWRTdkVU5CUVVVc1QwRkJUenM3TzJkQ1FVVnlReXhYUVVGWExFZEJRVXNzUlVGQlF5eE5RVUZOTEVWQlFVTXNPRU5CUVRoRE8yOUNRVU55UkN4TFFVRkxMRVZCUVVNc1YwRkJWenR2UWtGRGFrSXNWVUZCVlN4RlFVRkRMREJFUVVFd1JDeEZRVUZETEVOQlFVRTdaMEpCUlhaR0xGZEJRVmNzUjBGQlN5eEZRVUZETEUxQlFVMHNSVUZCUXl4dFFrRkJiVUk3YjBKQlF6RkNMRXRCUVVzc1JVRkJReXhYUVVGWE8yOUNRVU5xUWl4VlFVRlZMRVZCUVVNc2FVTkJRV2xETEVWQlFVTXNRMEZCUVR0blFrRkZPVVFzVlVGQlZTeHRRa0ZCVFN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUVR0blFrRkRkRVFzVlVGQlZTeEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZCTzJkQ1FVZHVSQ3hIUVVGSExFZEJRVU03YjBKQlEwa3NTMEZCU3l4RlFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUzBGQlN6dHZRa0ZEZGtJc1RVRkJUU3hGUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTzI5Q1FVTm9RaXhUUVVGVExFVkJRVU1zU1VGQlNTeERRVUZETEU5QlFVODdiMEpCUTNSQ0xFOUJRVThzUlVGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3p0dlFrRkRiRUlzVjBGQlZ5eEZRVUZETEZWQlFWVTdiMEpCUTNSQ0xFOUJRVThzUlVGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRXRCUVVzN2IwSkJRek5DTEZsQlFWa3NSVUZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWVHR2UWtGRE5VSXNWVUZCVlN4RlFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSk8yOUNRVU53UWl4TlFVRk5MRVZCUVVNc1NVRkJTU3hEUVVGRExFbEJRVWs3YjBKQlEyaENMR0ZCUVdFc1JVRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRk5CUVZNN2IwSkJRM0JFTEdGQlFXRXNSVUZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEUxQlFVMDdiMEpCUTJwRUxIZENRVUYzUWl4RlFVRkRMRVZCUVVVN2FVSkJRemxDTEVOQlFVRTdaMEpCUlZRc2MwSkJRVThzUjBGQlJ5eEZRVUZET3pzN1MwRkZaRHRKUVVWTExIVkRRVUZsTEVkQlFYSkNMRlZCUVhOQ0xFbEJRVkVzUlVGQlF5eEpRVUZSTzNWRFFVRkZMRTlCUVU4N096czdORUpCUjJoRExIRkNRVUZOTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZCT3p0M1FrRkJNVU1zUjBGQlJ5eEhRVUZMTEZOQlFXdERPM2RDUVVVNVF5eEpRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlJTeE5RVUZOTEVWQlFVTTdORUpCUldoRExGZEJRVmNzUjBGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4cFFrRkJZeXhEUVVGQk96UkNRVU55UXl4elFrRkJjMElzUjBGQlF5d3JZMEZQYjBNc1NVRkJTU3hEUVVGRExFZEJRVWNzSzBSQlEyaERMRmRCUVZjc01rNUJSMEVzVjBGQlZ5eHRTRUZGZGtJc1YwRkJWeXcyUmtGRmNFSXNRMEZCUVRzMFFrRkZOMElzUjBGQlJ5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFZEJRVU1zYzBKQlFYTkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRkJMRU5CUVVNc1NVRkJSU3hQUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCVWl4RFFVRlJMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdlVUpCUlM5R08zZENRVVZFTEhOQ1FVRlBMRWRCUVVjc1JVRkJRenM3T3p0TFFVVmtPMGxCUlV3c2IwSkJRVU03UVVGQlJDeERRVUZETEVGQmVrVkVMRU5CUVRSQ0xHVkJRVTBzUjBGNVJXcERPMEZCUlU4c2MwTkJRV0VpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5FbmFEUG9ydFJlcG9ydCA9IHZvaWQgMDtcclxudmFyIHJlcG9ydF8xID0gcmVxdWlyZShcIi4vcmVwb3J0XCIpO1xyXG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4uL2hlbHBlcnNcIik7XHJcbnZhciBnZW5lcmF0ZUh0bWxXaGl0ZVNwYWNlID0gcmVxdWlyZSgnLi4vYXBpL3RlbXBsYXRlcy5qcycpLmdlbmVyYXRlSHRtbFdoaXRlU3BhY2U7XHJcbnZhciBFbmFEUG9ydFJlcG9ydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhFbmFEUG9ydFJlcG9ydCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEVuYURQb3J0UmVwb3J0KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEVuYURQb3J0UmVwb3J0LnByb3RvdHlwZS5nZXRUZW1wbGF0ZUZpbGVOYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImRwb3J0LnR4dFwiO1xyXG4gICAgfTtcclxuICAgIEVuYURQb3J0UmVwb3J0LnByb3RvdHlwZS5tYXBCYXNpY0RhdGEgPSBmdW5jdGlvbiAodXNlciwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3J0LCBwb3J0X2FsaWFzLCBsb2MsIGhvc3RzLCBwLCBtYXA7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQgPSBkYXRhLnBvcnQsIHBvcnRfYWxpYXMgPSBkYXRhLnBvcnRfYWxpYXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhlbHBlcnNfMS5oZWxwZXJzLmdldFBvcnRMb2NhdGlvbihwb3J0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2MgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhlbHBlcnNfMS5oZWxwZXJzLmdldFVzZXJESENQSG9zdHModXNlci51dWlkKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0cyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBsb2NhdGlvbiBmb3VuZCBieSBwb3J0OiBcIiArIHBvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhvc3RzIHx8IGhvc3RzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBkaGNwIGhvc3RzISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gbG9jLnBvcnRfY29kZSAhPSBsb2MucG9ydF9hbGlhcyA/IGxvYy5wb3J0X2FsaWFzIDogbG9jLnBvcnRfY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTVUJKXCI6IFwiQXR0aXZhemlvbmUgcHJlc2EgZGkgcmV0ZSBcIiArIHAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNVQkpfSVRBXCI6IFwiQXR0aXZhemlvbmUgcHJlc2EgZGkgcmV0ZSBcIiArIHAgKyBcIiBpbiBjb25maWd1cmF6aW9uZSBESENQXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNVQkpfRU5HXCI6IFwiRW5hYmxpbmcgbmV0d29yayBwb3J0IFwiICsgcCArIFwiIGluIERIQ1AgY29uZmlndXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOQU1FXCI6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU1VSTkFNRVwiOiB1c2VyLnN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVNQUlMXCI6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBIT05FXCI6IHVzZXIucGhvbmUgfHwgJy0tLScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhfTUFDX0xJU1RcIjogaG9zdHMubWFwKGZ1bmN0aW9uIChoKSB7IHJldHVybiBoLmhvc3RfbWFjOyB9KS5qb2luKFwiXFxuIFwiICsgZ2VuZXJhdGVIdG1sV2hpdGVTcGFjZSgzKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJVSUxEXCI6IGxvYy5idWlsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRkxPT1JcIjogbG9jLmZsb29yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJST09NXCI6IGxvYy5yb29tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQT1JUXCI6IGxvYy5wb3J0X2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBtYXBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBFbmFEUG9ydFJlcG9ydC5wcm90b3R5cGUubWFwQWR2YW5jZWREYXRhID0gZnVuY3Rpb24gKHVzZXIsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdHh0LCBtYXA7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubWFwQmFzaWNEYXRhKHVzZXIsIGRhdGEpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc1Jlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ICs9IFwiPT09PT09PT09PT09PT09PT09PT09ICBFc2l0byBlc2VjdXppb25lIGF1dG9tYXRpY2EgID09PT09PT09PT09PT09PT09PT09PGJyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ICs9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvY2Vzc1Jlc3VsdC5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJQUk9DRVNTX1JFU1VMVFwiXSA9IHR4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1hcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFbmFEUG9ydFJlcG9ydDtcclxufShyZXBvcnRfMS5SZXBvcnQpKTtcclxuZXhwb3J0cy5FbmFEUG9ydFJlcG9ydCA9IEVuYURQb3J0UmVwb3J0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laSEJ2Y25RdWNtVndieTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMMkZ3Y0M5eVpYQnZjblJ6TDJSd2IzSjBMbkpsY0c4dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkJMRzFEUVVFclFqdEJRVU12UWl4elEwRkJhME03UVVGRE0wSXNTVUZCUVN4elFrRkJjMElzUjBGQlNTeFBRVUZQTEVOQlFVVXNjVUpCUVhGQ0xFTkJRVU1zZFVKQlFXNURMRU5CUVcxRE8wRkJSV2hGTzBsQlFUWkNMR3REUVVGTk8wbEJRVzVET3p0SlFUWkVRU3hEUVVGRE8wbEJNMFJITERSRFFVRnRRaXhIUVVGdVFqdFJRVU5KTEU5QlFVOHNWMEZCVnl4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlN5eHhRMEZCV1N4SFFVRnNRaXhWUVVGdFFpeEpRVUZSTEVWQlFVTXNTVUZCVVR0MVEwRkJSU3hQUVVGUE96czdPenQzUWtGRmNFTXNTVUZCU1N4SFFVRmxMRWxCUVVrc1MwRkJia0lzUlVGQlF5eFZRVUZWTEVkQlFVa3NTVUZCU1N4WFFVRlNMRU5CUVZNN2QwSkJSMnBDTEhGQ1FVRk5MR2xDUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkJPenQzUWtGQk0wTXNSMEZCUnl4SFFVRkxMRk5CUVcxRE8zZENRVU5xUXl4eFFrRkJUU3hwUWtGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUVRzN2QwSkJRVzVFTEV0QlFVc3NSMEZCU3l4VFFVRjVRenQzUWtGRmRrUXNTVUZCUnl4RFFVRkRMRWRCUVVjN05FSkJRVVVzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4blEwRkJPRUlzU1VGQlRTeERRVUZETEVOQlFVRTdkMEpCUXpsRUxFbEJRVWNzUTBGQlF5eExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1NVRkJSU3hEUVVGRE96UkNRVUZGTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNRMEZCUVR0M1FrRkZiRVVzUTBGQlF5eEhRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRWxCUVVVc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUVR0M1FrRkhhRVVzUjBGQlJ5eEhRVUZMT3pSQ1FVTkJMRTFCUVUwc1JVRkJReXdyUWtGQk5rSXNRMEZCUnpzMFFrRkRka01zVlVGQlZTeEZRVUZETEN0Q1FVRTJRaXhEUVVGRExEUkNRVUY1UWpzMFFrRkRiRVVzVlVGQlZTeEZRVUZETERKQ1FVRjVRaXhEUVVGRExESkNRVUYzUWpzMFFrRkROMFFzVFVGQlRTeEZRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpPelJDUVVOb1FpeFRRVUZUTEVWQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4N05FSkJRM1JDTEU5QlFVOHNSVUZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTenMwUWtGRGJFSXNUMEZCVHl4RlFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzUzBGQlN6czBRa0ZETTBJc1dVRkJXU3hGUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCUXl4RFFVRkxMRWxCUVVjc1QwRkJRU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZXTEVOQlFWVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGTkxITkNRVUZ6UWl4RFFVRkRMRU5CUVVNc1EwRkJSeXhEUVVGRE96UkNRVU51Uml4UFFVRlBMRVZCUVVNc1IwRkJSeXhEUVVGRExFdEJRVXM3TkVKQlEycENMRTlCUVU4c1JVRkJReXhIUVVGSExFTkJRVU1zUzBGQlN6czBRa0ZEYWtJc1RVRkJUU3hGUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKT3pSQ1FVTm1MRTFCUVUwc1JVRkJReXhIUVVGSExFTkJRVU1zVTBGQlV6dDVRa0ZEZGtJc1EwRkJRVHQzUWtGSlZpeHpRa0ZCVHl4SFFVRkhMRVZCUVVNN096czdTMEZIWWp0SlFVZExMSGREUVVGbExFZEJRWEpDTEZWQlFYTkNMRWxCUVZFc1JVRkJReXhKUVVGUk8zVkRRVUZGTEU5QlFVODdPenM3TzNkQ1FVVjRReXhIUVVGSExFZEJRVkVzUlVGQlJTeERRVUZETzNkQ1FVTk9MSEZDUVVGTkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGQk96dDNRa0ZCTVVNc1IwRkJSeXhIUVVGTExGTkJRV3RETzNkQ1FVYzVReXhKUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlEzUkNPelJDUVVOSkxFZEJRVWNzU1VGQlJTdzRSVUZCT0VVc1EwRkJRVHMwUWtGRGJrWXNSMEZCUnl4SlFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8zbENRVU4yUkR0M1FrRkZSQ3hIUVVGSExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1IwRkJReXhIUVVGSExFTkJRVU03ZDBKQlJ6TkNMSE5DUVVGUExFZEJRVWNzUlVGQlF6czdPenRMUVVWaU8wbEJRMHdzY1VKQlFVTTdRVUZCUkN4RFFVRkRMRUZCTjBSRUxFTkJRVFpDTEdWQlFVMHNSMEUyUkd4RE8wRkJSVThzZDBOQlFXTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SZXBvcnRGYWN0b3J5ID0gdm9pZCAwO1xyXG52YXIgd2lmaV9yZXBvXzEgPSByZXF1aXJlKFwiLi93aWZpLnJlcG9cIik7XHJcbnZhciBpcF9yZXBvXzEgPSByZXF1aXJlKFwiLi9pcC5yZXBvXCIpO1xyXG52YXIgYWNjX3JlcG9fMSA9IHJlcXVpcmUoXCIuL2FjYy5yZXBvXCIpO1xyXG52YXIgZHBvcnRfcmVwb18xID0gcmVxdWlyZShcIi4vZHBvcnQucmVwb1wiKTtcclxudmFyIFJlcG9ydEZhY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXBvcnRGYWN0b3J5KCkge1xyXG4gICAgfVxyXG4gICAgUmVwb3J0RmFjdG9yeS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHR5cGUsIHVzZXIsIGRhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIklQXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGlwX3JlcG9fMS5JUFJlcG9ydCh1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRFBPUlRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgZHBvcnRfcmVwb18xLkVuYURQb3J0UmVwb3J0KHVzZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXSUZJXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHdpZmlfcmVwb18xLldpRmlSZXBvcnQodXNlciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFDQ09VTlRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgYWNjX3JlcG9fMS5BY2NvdW50UmVwb3J0KHVzZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgUmVxdWVzdCB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVwb3J0RmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5SZXBvcnRGYWN0b3J5ID0gUmVwb3J0RmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1GamRHOXllUzV5WlhCdkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dllYQndMM0psY0c5eWRITXZabUZqZEc5eWVTNXlaWEJ2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEhsRFFVRnpRenRCUVVOMFF5eHhRMEZCYTBNN1FVRkRiRU1zZFVOQlFYZERPMEZCUTNoRExESkRRVUV5UXp0QlFVVXpRenRKUVVGQk8wbEJjMEpCTEVOQlFVTTdTVUZ1UWxVc2QwSkJRVlVzUjBGQmFrSXNWVUZCYTBJc1NVRkJWeXhGUVVGRExFbEJRVkVzUlVGQlF5eEpRVUZSTzFGQlF6TkRMRkZCUVU4c1NVRkJTU3hGUVVOWU8xbEJRMGtzUzBGQlN5eEpRVUZKTzJkQ1FVTk1MRTlCUVU4c1NVRkJTU3hyUWtGQlVTeERRVUZETEVsQlFVa3NSVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRVHRuUWtGRGJFTXNUVUZCVFR0WlFVTk9MRXRCUVVzc1QwRkJUenRuUWtGRFVpeFBRVUZQTEVsQlFVa3NNa0pCUVdNc1EwRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdaMEpCUTNoRExFMUJRVTA3V1VGRFRpeExRVUZMTEUxQlFVMDdaMEpCUTFBc1QwRkJUeXhKUVVGSkxITkNRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8yZENRVU53UXl4TlFVRk5PMWxCUTA0c1MwRkJTeXhUUVVGVE8yZENRVU5XTEU5QlFVOHNTVUZCU1N4M1FrRkJZU3hEUVVGRExFbEJRVWtzUlVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0blFrRkRka01zVFVGQlRUdFpRVU5PTzJkQ1FVTkpMRTFCUVUwc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4RFFVRkRMRU5CUVVFN1UwRkRNVU03U1VGRFRDeERRVUZETzBsQlEwd3NiMEpCUVVNN1FVRkJSQ3hEUVVGRExFRkJkRUpFTEVsQmMwSkRPMEZCUjA4c2MwTkJRV0VpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5JUFJlcG9ydCA9IHZvaWQgMDtcclxudmFyIHJlcG9ydF8xID0gcmVxdWlyZShcIi4vcmVwb3J0XCIpO1xyXG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4uL2hlbHBlcnNcIik7XHJcbnZhciBJUFJlcG9ydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhJUFJlcG9ydCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIElQUmVwb3J0KCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnRvSG9zdE5hbWUgPSBmdW5jdGlvbiAobmFtZSwgZG9tYWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lID8gbmFtZSArIFwiLlwiICsgZG9tYWluIDogXCJESENQXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBJUFJlcG9ydC5wcm90b3R5cGUuZ2V0VGVtcGxhdGVGaWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJpcC50eHRcIjtcclxuICAgIH07XHJcbiAgICBJUFJlcG9ydC5wcm90b3R5cGUubWFwQmFzaWNEYXRhID0gZnVuY3Rpb24gKHVzZXIsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZnJvbSwgdG8sIGFjdGlvbiwgaCwgaG9zdG5hbWUsIEhPU1RfQUNUSU9OX01BUCwgSE9TVF9DT05GSUdfTUFQLCBsb2MsIG1hY0V4aXN0cywgbmFtZUV4aXN0cywgX2EsIG1zZywgbWFwO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0gZGF0YS5mcm9tLCB0byA9IGRhdGEudG8sIGFjdGlvbiA9IGRhdGEuYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdG8gfHwgZnJvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWUgPSBoLm5hbWUgPyBoLm5hbWUgKyBcIi5cIiArIGguZG9tYWluIDogXCJESENQIDogXCIgKyBoLm1hYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgSE9TVF9BQ1RJT05fTUFQID0geyBcIklUQVwiOiB7IFwiY3JlYXRlXCI6IFwiTnVvdm8gbm9kb1wiLCBcInVwZGF0ZVwiOiBcIkFnZ2lvcm5hbWVudG8gZGF0aSBkZWwgbm9kb1wiLCBcImRlbGV0ZVwiOiBcIlJpbW96aW9uZSBub2RvXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRU5HXCI6IHsgXCJjcmVhdGVcIjogXCJOZXcgaG9zdFwiLCBcInVwZGF0ZVwiOiBcIlVwZGF0ZSBob3N0IGRhdGFcIiwgXCJkZWxldGVcIjogXCJEZWxldGUgaG9zdFwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSE9TVF9DT05GSUdfTUFQID0geyBcIlNUQVRJQ1wiOiBcIlNUQVRJQ09cIiwgXCJESENQXCI6IFwiREhDUFwiLCBcIlNUQVRJQ1ZNXCI6IFwiU1RBVElDTyAtIFZJUlRVQUxFXCIgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSAndXBkYXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWUgPSBmcm9tLm5hbWUgPyBmcm9tLm5hbWUgKyBcIi5cIiArIGZyb20uZG9tYWluIDogXCJESENQICBcIiArIGZyb20ubWFjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhlbHBlcnNfMS5oZWxwZXJzLmdldFBvcnRMb2NhdGlvbihoLnBvcnQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYyA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGVscGVyc18xLmhlbHBlcnMuZ2V0SG9zdChoLm1hYyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFjRXhpc3RzID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0byAmJiB0by5uYW1lKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhlbHBlcnNfMS5oZWxwZXJzLmRuc0xvb2t1cCh0by5uYW1lICsgXCIuXCIgKyB0by5kb21haW4pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVFeGlzdHMgPSBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPSAnZGVsZXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gW1wiUmVxdWVzdCBJUCAtIFwiICsgYWN0aW9uICsgXCIgLSBlcnJvcnM6XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hY0V4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcm9tICYmIGZyb20ubWFjID09IHRvLm1hYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWNFeGlzdHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cucHVzaChcImR1cGxpY2F0ZWQgbWFjIFwiICsgaC5tYWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVFeGlzdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbSAmJiBmcm9tLm5hbWUgPT0gdG8ubmFtZSAmJiBmcm9tLmRvbWFpbiA9PSB0by5kb21haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5wdXNoKFwiZHVwbGljYXRlZCBuYW1lIFwiICsgdG8ubmFtZSArIFwiLlwiICsgdG8uZG9tYWluKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWNFeGlzdHMgfHwgbmFtZUV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cuam9pbihcIiBcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbG9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBsb2NhdGlvbiBmb3VuZCBieSBwb3J0OiBcIiArIGgucG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBQ1RJT05fSVRBXCI6IEhPU1RfQUNUSU9OX01BUC5JVEFbYWN0aW9uXSArIFwiIC0gXCIgKyBob3N0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQUNUSU9OX0VOR1wiOiBIT1NUX0FDVElPTl9NQVAuRU5HW2FjdGlvbl0gKyBcIiAtIFwiICsgaG9zdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5BTUVcIjogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTVVJOQU1FXCI6IHVzZXIuc3VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRU1BSUxcIjogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUEhPTkVcIjogdXNlci5waG9uZSB8fCAnLS0tJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSF9NQUNcIjogaC5tYWMudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTk9URVwiOiBoLm5vdGVzIHx8IFwiLS0tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhfTkFNRVwiOiB0aGlzLnRvSG9zdE5hbWUoaC5uYW1lLCBoLmRvbWFpbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNPTkZJR1wiOiBIT1NUX0NPTkZJR19NQVBbaC5jb25maWddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCVUlMRFwiOiBsb2MuYnVpbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZMT09SXCI6IGxvYy5mbG9vcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUk9PTVwiOiBsb2Mucm9vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUE9SVFwiOiBsb2MucG9ydF9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShhY3Rpb24gPT0gJ3VwZGF0ZScgJiYgZnJvbSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWxwZXJzXzEuaGVscGVycy5nZXRQb3J0TG9jYXRpb24oZnJvbS5wb3J0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2MgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtcIkhfTUFDXCJdID0gdGhpcy5kaXNwbGF5Q2hhbmdlcyhmcm9tLm1hYywgbWFwW1wiSF9NQUNcIl0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW1wiSF9OQU1FXCJdID0gdGhpcy5kaXNwbGF5Q2hhbmdlcyh0aGlzLnRvSG9zdE5hbWUoZnJvbS5uYW1lLCBmcm9tLmRvbWFpbiksIG1hcFtcIkhfTkFNRVwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJDT05GSUdcIl0gPSB0aGlzLmRpc3BsYXlDaGFuZ2VzKEhPU1RfQ09ORklHX01BUFtmcm9tLmNvbmZpZ10sIG1hcFtcIkNPTkZJR1wiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJCVUlMRFwiXSA9IHRoaXMuZGlzcGxheUNoYW5nZXMobG9jLmJ1aWxkLCBtYXBbXCJCVUlMRFwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJGTE9PUlwiXSA9IHRoaXMuZGlzcGxheUNoYW5nZXMobG9jLmZsb29yLCBtYXBbXCJGTE9PUlwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJST09NXCJdID0gdGhpcy5kaXNwbGF5Q2hhbmdlcyhsb2Mucm9vbSwgbWFwW1wiUk9PTVwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJQT1JUXCJdID0gdGhpcy5kaXNwbGF5Q2hhbmdlcyhsb2MucG9ydF9jb2RlLCBtYXBbXCJQT1JUXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy91c2lhbW8gcGVyIElQIFNVQko9IEFDVElPTl9JVEEgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW1wiU1VCSlwiXSA9IG1hcFtcIkFDVElPTl9JVEFcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBtYXBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBJUFJlcG9ydC5wcm90b3R5cGUuZGlzcGxheUNoYW5nZXMgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcclxuICAgICAgICBmcm9tID0gZnJvbSB8fCBcIlwiO1xyXG4gICAgICAgIHRvID0gdG8gfHwgXCJcIjtcclxuICAgICAgICBmcm9tID0gZnJvbS50b1N0cmluZygpO1xyXG4gICAgICAgIHRvID0gdG8udG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gZnJvbS50b0xvd2VyQ2FzZSgpID09IHRvLnRvTG93ZXJDYXNlKCkgPyB0by50b1VwcGVyQ2FzZSgpIDogZnJvbS50b1VwcGVyQ2FzZSgpICsgXCIgPT0+IDxiPlwiICsgdG8udG9VcHBlckNhc2UoKSArIFwiPC9iPlwiO1xyXG4gICAgfTtcclxuICAgIElQUmVwb3J0LnByb3RvdHlwZS5tYXBBZHZhbmNlZERhdGEgPSBmdW5jdGlvbiAodXNlciwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0eHQsIGZyb20sIHRvLCBhY3Rpb24sIGgsIG1hcCwgbmV0d29yaztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSA9IGRhdGEuZnJvbSwgdG8gPSBkYXRhLnRvLCBhY3Rpb24gPSBkYXRhLmFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHRvIHx8IGZyb207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubWFwQmFzaWNEYXRhKHVzZXIsIGRhdGEpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29yayA9IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtcIlVTRV9NQUNfQlVTWVwiXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0byAmJiB0b1tcInVzZU1hY0J1c3lcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtcIlVTRV9NQUNfQlVTWVwiXSA9IFwiQXR0ZW56aW9uZSwgbCd1dGVudGUgaGEgY29uZmVybWF0byBsJ2ludGVuemlvbmUgZGkgdm9sZXIgZ2VzdGlyZSBpbCBub2RvIGNvbiBtYWMgYWRkcmVzcyBcIiArIHRvW1wibWFjXCJdLnRvVXBwZXJDYXNlKCkgKyBcIiBjaGUgcmlzdWx0YSBnaVxcdTAwRTAgcmVnaXN0cmF0by5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihoLmNvbmZpZyE9XCJESENQXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXQ6YW55PWF3YWl0IGhlbHBlcnMuZ2V0UG9ydE5ldHdvcmsoaC5wb3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmsgPSBuZXQgPyBuZXQubmV0d29yazogXCJOL0FcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmsgPSBcIjE0MS4xMDguMTMuMC8yNFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIE5PTiBJTlNFUklSRSAtLS0+IE1PU1RSQVJFIExFIFZMQU4gU1VHR0VSSVRFIERFTCBQSUFOTyBUT0RPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dD1cIj09PT09PT09PT09PT09PT09PT09PSAgZGF0aSBhZ2dpdW50aXZpICA9PT09PT09PT09PT09PT09PT09PTxicj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQrPWhlbHBlcnMuYWRkRW1wdHlTcGFjZXNUb0VuZCgxOCxcIk5ldHdvcmsgc3VnZ2VyaXRhXCIpKyBcIiA9IFwiKyBuZXR3b3JrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9jZXNzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQgKz0gXCI9PT09PT09PT09PT09PT09PT09PT0gIEVzaXRvIGVzZWN1emlvbmUgYXV0b21hdGljYSAgPT09PT09PT09PT09PT09PT09PT08YnI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQgKz0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9jZXNzUmVzdWx0LmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtcIlBST0NFU1NfUkVTVUxUXCJdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbWFwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIElQUmVwb3J0O1xyXG59KHJlcG9ydF8xLlJlcG9ydCkpO1xyXG5leHBvcnRzLklQUmVwb3J0ID0gSVBSZXBvcnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFYQXVjbVZ3Ynk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDJGd2NDOXlaWEJ2Y25SekwybHdMbkpsY0c4dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkJMRzFEUVVFclFqdEJRVU12UWl4elEwRkJhME03UVVGRmJFTTdTVUZCZFVJc05FSkJRVTA3U1VGQk4wSTdVVUZCUVN4eFJVRnJTME03VVVFMVJFY3NaMEpCUVZVc1IwRkJReXhWUVVGRExFbEJRVmNzUlVGQlF5eE5RVUZoTzFsQlEycERMRTlCUVU4c1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlNTeEpRVUZKTEZOQlFVa3NUVUZCVVN4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVUU3VVVGRE4wTXNRMEZCUXl4RFFVRkJPenRKUVRCRVRDeERRVUZETzBsQmFFdEhMSE5EUVVGdFFpeEhRVUZ1UWp0UlFVTkpMRTlCUVU4c1VVRkJVU3hEUVVGRE8wbEJRM0JDTEVOQlFVTTdTVUZGU3l3clFrRkJXU3hIUVVGc1FpeFZRVUZ0UWl4SlFVRlJMRVZCUVVNc1NVRkJVVHQxUTBGQlJTeFBRVUZQT3pzN096dDNRa0ZGY0VNc1NVRkJTU3hIUVVGakxFbEJRVWtzUzBGQmJFSXNSVUZCUXl4RlFVRkZMRWRCUVZjc1NVRkJTU3hIUVVGbUxFVkJRVU1zVFVGQlRTeEhRVUZKTEVsQlFVa3NUMEZCVWl4RFFVRlRPM2RDUVVONFFpeERRVUZETEVkQlFVVXNSVUZCUlN4SlFVRkpMRWxCUVVrc1EwRkJRenQzUWtGRFpDeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUXl4SFFVRkhMRWRCUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03ZDBKQlEzaEVMR1ZCUVdVc1IwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlF5eEZRVUZETEZGQlFWRXNSVUZCUXl4WlFVRlpMRVZCUVVNc1VVRkJVU3hGUVVGRExEWkNRVUUyUWl4RlFVRkRMRkZCUVZFc1JVRkJReXhuUWtGQlowSXNSVUZCUXpzMFFrRkRPVVlzUzBGQlN5eEZRVUZETEVWQlFVTXNVVUZCVVN4RlFVRkRMRlZCUVZVc1JVRkJReXhSUVVGUkxFVkJRVU1zYTBKQlFXdENMRVZCUVVNc1VVRkJVU3hGUVVGRExHRkJRV0VzUlVGQlF6dDVRa0ZETDBVc1EwRkJRenQzUWtGRmRFSXNaVUZCWlN4SFFVRkxMRVZCUVVNc1VVRkJVU3hGUVVGRExGTkJRVk1zUlVGQlF5eE5RVUZOTEVWQlFVTXNUVUZCVFN4RlFVRkRMRlZCUVZVc1JVRkJReXh2UWtGQmIwSXNSVUZCUXl4RFFVRkJPM2RDUVUwMVJpeEpRVUZITEUxQlFVMHNTVUZCUlN4UlFVRlJMRVZCUVVNN05FSkJRMmhDTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkRMRWRCUVVjc1IwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRWRCUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dDVRa0ZEZUVVN2QwSkJTMWNzY1VKQlFVMHNhVUpCUVU4c1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkJPenQzUWtGQk4wTXNSMEZCUnl4SFFVRkxMRk5CUVhGRE8zZENRVU51UXl4eFFrRkJUU3hwUWtGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVUU3TzNkQ1FVRjBReXhUUVVGVExFZEJRVU1zVTBGQk5FSTdOa0pCUXpGQ0xFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJaaXgzUWtGQlpUdDNRa0ZCUnl4eFFrRkJUU3hwUWtGQlR5eERRVUZETEZOQlFWTXNRMEZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hUUVVGSkxFVkJRVVVzUTBGQlF5eE5RVUZSTEVOQlFVTXNSVUZCUVRzN2QwSkJRV3hFTEV0QlFVRXNVMEZCYTBRc1EwRkJRVHM3TzNkQ1FVRkhMRXRCUVVFc1MwRkJTeXhEUVVGQk96czdkMEpCUVhoR0xGVkJRVlVzUzBGQk9FVTdkMEpCUnpWR0xFbEJRVWNzVFVGQlRTeEpRVUZGTEZGQlFWRXNSVUZCUXpzMFFrRkZXaXhIUVVGSExFZEJRVU1zUTBGQlF5eHJRa0ZCWjBJc1RVRkJUU3hsUVVGWkxFTkJRVU1zUTBGQlFUczBRa0ZGTlVNc1NVRkJSeXhUUVVGVExFVkJRVU03WjBOQlExUXNTVUZCUnl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkRPMjlEUVVGRkxGTkJRVk1zUjBGQlF5eExRVUZMTEVOQlFVRTdhVU5CUVVNN08yOURRVVV4UXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHOUNRVUZyUWl4RFFVRkRMRU5CUVVNc1IwRkJTeXhEUVVGRExFTkJRVUU3TmtKQlF6RkRPelJDUVVWRUxFbEJRVWNzVlVGQlZTeEZRVUZETzJkRFFVTldMRWxCUVVjc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZGTEVWQlFVVXNRMEZCUXl4TlFVRk5MRVZCUVVNN2IwTkJRVVVzVlVGQlZTeEhRVUZETEV0QlFVc3NRMEZCUVR0cFEwRkJRenM3YjBOQlJYWkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zY1VKQlFXMUNMRVZCUVVVc1EwRkJReXhKUVVGSkxGTkJRVWtzUlVGQlJTeERRVUZETEUxQlFWRXNRMEZCUXl4RFFVRkJPelpDUVVNeFJEczBRa0ZIUkN4SlFVRkhMRk5CUVZNc1NVRkJTU3hWUVVGVkxFVkJRekZDTzJkRFFVTkpMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQk96WkNRVU5xUXp0NVFrRkRTanQzUWtGRlJDeEpRVUZITEVOQlFVTXNSMEZCUnl4RlFVTlFPelJDUVVOSkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNaME5CUVRoQ0xFTkJRVU1zUTBGQlF5eEpRVUZOTEVOQlFVTXNRMEZCUVR0NVFrRkRNVVE3ZDBKQlIwY3NSMEZCUnl4SFFVRkxPelJDUVVOQkxGbEJRVmtzUlVGQlNTeGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGTkxGRkJRVlU3TkVKQlF6TkVMRmxCUVZrc1JVRkJTU3hsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRk5MRkZCUVZVN05FSkJRek5FTEUxQlFVMHNSVUZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTVHMwUWtGRGFFSXNVMEZCVXl4RlFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUE96UkNRVU4wUWl4UFFVRlBMRVZCUVVNc1NVRkJTU3hEUVVGRExFdEJRVXM3TkVKQlEyeENMRTlCUVU4c1JVRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEV0QlFVczdORUpCUXpOQ0xFOUJRVThzUlVGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1JVRkJSVHMwUWtGRE0wSXNUVUZCVFN4RlFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUzBGQlN6czBRa0ZEZGtJc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZET3pSQ1FVTXhReXhSUVVGUkxFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN05FSkJRMjVETEU5QlFVOHNSVUZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTenMwUWtGRGFrSXNUMEZCVHl4RlFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTE96UkNRVU5xUWl4TlFVRk5MRVZCUVVNc1IwRkJSeXhEUVVGRExFbEJRVWs3TkVKQlEyWXNUVUZCVFN4RlFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVE8zbENRVU4yUWl4RFFVRkJPelpDUVVWT0xFTkJRVUVzVFVGQlRTeEpRVUZGTEZGQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVFc1JVRkJlRUlzZDBKQlFYZENPM2RDUVVWdVFpeHhRa0ZCVFN4cFFrRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVFN08zZENRVUUxUXl4SFFVRkhMRWRCUVVNc1UwRkJkME1zUTBGQlF6dDNRa0ZGTjBNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN05FSkJRM1pFTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZET3pSQ1FVTjJSaXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czBRa0ZETjBVc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN05FSkJRM2hFTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZET3pSQ1FVTjRSQ3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenMwUWtGRGNrUXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUVRzN08zZENRVWt2UkN4NVEwRkJlVU03ZDBKQlEzcERMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlF5eEhRVUZITEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVFN2QwSkJSVGRDTEhOQ1FVRlBMRWRCUVVjc1JVRkJRenM3T3p0TFFVbGlPMGxCVDBRc2FVTkJRV01zUjBGQlpDeFZRVUZsTEVsQlFWY3NSVUZCUXl4RlFVRlRPMUZCUldoRExFbEJRVWtzUjBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkJPMUZCUTJZc1JVRkJSU3hIUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVRTdVVUZEV2l4SlFVRkpMRWRCUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZCTzFGQlEzQkNMRVZCUVVVc1IwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGYWtJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVVXNSVUZCUlN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNaMEpCUVZjc1JVRkJSU3hEUVVGRExGZEJRVmNzUlVGQlJTeFRRVUZOTEVOQlFVRTdTVUZETTBnc1EwRkJRenRKUVVkTExHdERRVUZsTEVkQlFYSkNMRlZCUVhOQ0xFbEJRVkVzUlVGQlF5eEpRVUZSTzNWRFFVRkZMRTlCUVU4N096czdPM2RDUVVWNFF5eEhRVUZITEVkQlFWRXNSVUZCUlN4RFFVRkRPM2RDUVVOaUxFbEJRVWtzUjBGQll5eEpRVUZKTEV0QlFXeENMRVZCUVVNc1JVRkJSU3hIUVVGWExFbEJRVWtzUjBGQlppeEZRVUZETEUxQlFVMHNSMEZCU1N4SlFVRkpMRTlCUVZJc1EwRkJVenQzUWtGRGVFSXNRMEZCUXl4SFFVRkZMRVZCUVVVc1NVRkJTU3hKUVVGSkxFTkJRVU03ZDBKQlEwNHNjVUpCUVUwc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVFN08zZENRVUV4UXl4SFFVRkhMRWRCUVVzc1UwRkJhME03ZDBKQlF6RkRMRTlCUVU4c1IwRkJReXhMUVVGTExFTkJRVU03ZDBKQlJXeENMRWRCUVVjc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlF5eEZRVUZGTEVOQlFVRTdkMEpCUlhSQ0xFbEJRVWNzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1JVRkRla0k3TkVKQlEwa3NSMEZCUnl4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGRExEaEdRVUUwUml4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEhORFFVRTRRaXhEUVVGQk8zbENRVU40U3p0M1FrRkZSRHM3T3pzN096czdPekJDUVZORk8zZENRVVZHT3pzN01FSkJSMFU3ZDBKQlIwWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVOMFFqczBRa0ZEU1N4SFFVRkhMRWxCUVVVc09FVkJRVGhGTEVOQlFVRTdORUpCUTI1R0xFZEJRVWNzU1VGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0NVFrRkRka1E3ZDBKQlJVUXNSMEZCUnl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVkQlFVTXNSMEZCUnl4RFFVRkRPM2RDUVVjelFpeHpRa0ZCVHl4SFFVRkhMRVZCUVVNN096czdTMEZGWWp0SlFVTk1MR1ZCUVVNN1FVRkJSQ3hEUVVGRExFRkJiRXRFTEVOQlFYVkNMR1ZCUVUwc1IwRnJTelZDTzBGQlJVOHNORUpCUVZFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SZW5kZXJUeXBlID0gZXhwb3J0cy5SZXBvcnQgPSB2b2lkIDA7XHJcbnZhciBmc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJmc1wiKSk7XHJcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vYXBpL3RlbXBsYXRlcycpLnRlbXBsYXRlcztcclxudmFyIFJlbmRlclR5cGU7XHJcbihmdW5jdGlvbiAoUmVuZGVyVHlwZSkge1xyXG4gICAgUmVuZGVyVHlwZVtSZW5kZXJUeXBlW1wiQkFTSUNcIl0gPSAwXSA9IFwiQkFTSUNcIjtcclxuICAgIFJlbmRlclR5cGVbUmVuZGVyVHlwZVtcIkFEVkFOQ0VEXCJdID0gMV0gPSBcIkFEVkFOQ0VEXCI7XHJcbn0pKFJlbmRlclR5cGUgfHwgKFJlbmRlclR5cGUgPSB7fSkpO1xyXG5leHBvcnRzLlJlbmRlclR5cGUgPSBSZW5kZXJUeXBlO1xyXG52YXIgUmVwb3J0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVwb3J0KHVzZXIsIGRhdGEsIHJlcykge1xyXG4gICAgICAgIGlmIChyZXMgPT09IHZvaWQgMCkgeyByZXMgPSBudWxsOyB9XHJcbiAgICAgICAgdGhpcy51c2VyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1Jlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzUmVzdWx0ID0gcmVzO1xyXG4gICAgfVxyXG4gICAgUmVwb3J0LnByb3RvdHlwZS5nZXRQcm9jZXNzUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgUmVwb3J0LnByb3RvdHlwZS5nZXRTdWJqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3Q7XHJcbiAgICB9O1xyXG4gICAgUmVwb3J0LnByb3RvdHlwZS5yZW5kZXJBcyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVOYW1lLCBmaWxlUGF0aCwgdHh0LCBtZDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUgPSB0aGlzLmdldFRlbXBsYXRlRmlsZU5hbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGggPSBcInNlcnZlci90ZXh0L1wiICsgUmVuZGVyVHlwZVt0eXBlXSArIFwiL1wiICsgZmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKGZpbGVQYXRoLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZzXzEuZGVmYXVsdC5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJNaXNzaW5nIGZpbGUgdGVtcGxhdGU6IFwiICsgZmlsZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IGZzXzEuZGVmYXVsdC5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGYtOCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLm1hcERhdGEodGhpcy51c2VyLCB0aGlzLmRhdGEsIHR5cGUpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3QgPSBtZFsnU1VCSiddIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IHRoaXMucmVwbGFjZUZpZWxkVmFsdWVzKHR4dCwgbWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSB0eHQucmVwbGFjZSgvXFxbVVNFUl9GVUxMX05BTUVcXF0vZ2ksIHRoaXMudXNlci5uYW1lICsgXCIgXCIgKyB0aGlzLnVzZXIuc3VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFJlbmRlclR5cGUuQURWQU5DRUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IHR4dC5yZXBsYWNlKC9cXFtVU0VSX0lORk9cXF0vZ2ksIFwiXCIgKyB0ZW1wbGF0ZXMudXNlckluZm8odGhpcy51c2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHR4dF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlcG9ydC5wcm90b3R5cGUubWFwRGF0YSA9IGZ1bmN0aW9uICh1c2VyLCBkYXRhLCByZXBUeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoIChyZXBUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUmVuZGVyVHlwZS5CQVNJQzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcEJhc2ljRGF0YSh1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgY2FzZSBSZW5kZXJUeXBlLkFEVkFOQ0VEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwQWR2YW5jZWREYXRhKHVzZXIsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZXBvcnQucHJvdG90eXBlLnJlcGxhY2VGaWVsZFZhbHVlcyA9IGZ1bmN0aW9uICh0eHQsIG9iaikge1xyXG4gICAgICAgIHZhciBfdHh0ID0gdHh0O1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIC8vc2Ugbm4gdHJvdmEgbGEgY2hpYXZlIGUgaGEgdW4gdmFsb3JlLCBsJ2FwcGVuZGUgaW4gY29kYVxyXG4gICAgICAgICAgICAvL2lmKG9ialtrXSE9XCJcIiAmJiBfdHh0LmluZGV4T2Yoayk8MCkgX3R4dCs9aztcclxuICAgICAgICAgICAgLy9yZXBsYWNlIGRlaSBjYW1waSBuZWwgdGVzdG9cclxuICAgICAgICAgICAgX3R4dCA9IF90eHQucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFtcIiArIGsgKyBcIlxcXFxdXCIsIFwiZ1wiKSwgb2JqW2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90eHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlcG9ydDtcclxufSgpKTtcclxuZXhwb3J0cy5SZXBvcnQgPSBSZXBvcnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVndiM0owTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2WVhCd0wzSmxjRzl5ZEhNdmNtVndiM0owTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVWQkxEQkRRVUZ2UWp0QlFVTndRaXhKUVVGTkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRkRUlzU1VGQlFTeFRRVUZUTEVkQlFVa3NUMEZCVHl4RFFVRkZMR3RDUVVGclFpeERRVUZETEZWQlFXaERMRU5CUVdkRE8wRkJSMmhFTEVsQlFVc3NWVUZCSzBJN1FVRkJjRU1zVjBGQlN5eFZRVUZWTzBsQlFVVXNOa05CUVU4c1EwRkJRVHRKUVVGRExHMUVRVUZWTEVOQlFVRTdRVUZCUVN4RFFVRkRMRVZCUVM5Q0xGVkJRVlVzUzBGQlZpeFZRVUZWTEZGQlFYRkNPMEZCTUVaeVFpeG5RMEZCVlR0QlFYaEdla0k3U1VGUFNTeG5Ra0ZCV1N4SlFVRlJMRVZCUVVNc1NVRkJVU3hGUVVGRExFZEJRVFJDTzFGQlFUVkNMRzlDUVVGQkxFVkJRVUVzVlVGQk5FSTdVVUZNTVVRc1UwRkJTU3hIUVVGTExFbEJRVWtzUTBGQlF6dFJRVU5rTEZOQlFVa3NSMEZCU3l4SlFVRkpMRU5CUVVNN1VVRkRaQ3hyUWtGQllTeEhRVUZ4UWl4SlFVRkpMRU5CUVVNN1VVRkRka01zV1VGQlR5eEhRVUZSTEVWQlFVVXNRMEZCUXp0UlFVZG1MRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVU1zU1VGQlNTeERRVUZETzFGQlEyWXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJReXhKUVVGSkxFTkJRVU03VVVGRFppeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkRMRWRCUVVjc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUXNhVU5CUVdkQ0xFZEJRV2hDTzFGQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZGUkN3eVFrRkJWU3hIUVVGV08xRkJRMGtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGSlN5eDVRa0ZCVVN4SFFVRmtMRlZCUVdVc1NVRkJaVHQxUTBGQlJTeFBRVUZQT3pzN096dDNRa0ZITDBJc1VVRkJVU3hIUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3hEUVVGRE8zZENRVU53UXl4UlFVRlJMRWRCUVVNc2FVSkJRV1VzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRkpMRkZCUVZVc1EwRkJRVHQzUWtGRE1VUXNVVUZCVVN4SFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN2QwSkJSVGxETEVsQlFVY3NRMEZCUXl4WlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZET3pSQ1FVTjRRaXhOUVVGTkxFdEJRVXNzUTBGQlF5dzBRa0ZCTUVJc1VVRkJWU3hEUVVGRExFTkJRVU03ZVVKQlEzSkVPM2RDUVVWSExFZEJRVWNzUjBGQlZTeFpRVUZGTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dDNRa0ZETlVNc2NVSkJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVFN08zZENRVUV2UXl4RlFVRkZMRWRCUVVNc1UwRkJORU03ZDBKQlEyNUVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRVHQzUWtGRE4wSXNSMEZCUnl4SFFVRkRMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4SFFVRkhMRVZCUVVNc1JVRkJSU3hEUVVGRExFTkJRVUU3ZDBKQlEyNURMRWRCUVVjc1IwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEhOQ1FVRnpRaXhGUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4VFFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlV5eERRVUZETEVOQlFVRTdkMEpCUldoR0xFbEJRVWNzU1VGQlNTeEpRVUZGTEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVNN05FSkJRM3BDTEVkQlFVY3NSMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWl4RlFVRkRMRXRCUVVjc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkhMRU5CUVVNc1EwRkJRVHQ1UWtGRGVFVTdkMEpCUjBRc2MwSkJRVThzUjBGQlJ5eEZRVUZET3pzN08wdEJSV1E3U1VGRlJDeDNRa0ZCVHl4SFFVRlFMRlZCUVZFc1NVRkJVU3hGUVVGRExFbEJRVkVzUlVGQlF5eFBRVUZyUWp0UlFVVjRReXhSUVVGUExFOUJRVThzUlVGRFpEdFpRVU5KTEV0QlFVc3NWVUZCVlN4RFFVRkRMRXRCUVVzN1owSkJRMnBDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZGZUVNc1MwRkJTeXhWUVVGVkxFTkJRVU1zVVVGQlVUdG5Ra0ZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NSVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVVNVF6dEpRVU5NTEVOQlFVTTdTVUZUUkN4dFEwRkJhMElzUjBGQmJFSXNWVUZCYlVJc1IwRkJWU3hGUVVGRExFZEJRVTg3VVVGRmFrTXNTVUZCU1N4SlFVRkpMRWRCUVVNc1IwRkJSeXhEUVVGQk8xRkJSMW9zUzBGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUTJoQ08xbEJRMGtzZVVSQlFYbEVPMWxCUTNwRUxEaERRVUU0UXp0WlFVTTVReXcyUWtGQk5rSTdXVUZET1VJc1NVRkJTU3hIUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhIUVVGRExFTkJRVU1zUjBGQlF5eExRVUZMTEVWQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVRTdVMEZEZWtRN1VVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlFUdEpRVU5tTEVOQlFVTTdTVUZGVEN4aFFVRkRPMEZCUVVRc1EwRkJReXhCUVhKR1JDeEpRWEZHUXp0QlFVZFBMSGRDUVVGTkluMD0iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuV2lGaVJlcG9ydCA9IHZvaWQgMDtcclxudmFyIHJlcG9ydF8xID0gcmVxdWlyZShcIi4vcmVwb3J0XCIpO1xyXG52YXIgcHJvY2Vzc29yXzEgPSByZXF1aXJlKFwiLi4vcHJvY2Vzc29ycy9wcm9jZXNzb3JcIik7XHJcbnZhciBtb21lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcclxudmFyIERBVEVfRk9STUFUID0gXCJERC9NTS9ZWVlZXCI7XHJcbnZhciBXaUZpUmVwb3J0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFdpRmlSZXBvcnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBXaUZpUmVwb3J0KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFdpRmlSZXBvcnQucHJvdG90eXBlLmdldFRlbXBsYXRlRmlsZU5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwid2lmaS50eHRcIjtcclxuICAgIH07XHJcbiAgICBXaUZpUmVwb3J0LnByb3RvdHlwZS5tYXBCYXNpY0RhdGEgPSBmdW5jdGlvbiAodXNlciwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmcm9tLCB0bywgbWFwO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tID0gZGF0YS5mcm9tLCB0byA9IGRhdGEudG87XHJcbiAgICAgICAgICAgICAgICBtYXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJOQU1FXCI6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcIlNVUk5BTUVcIjogdXNlci5zdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRU1BSUxcIjogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlBIT05FXCI6IHVzZXIucGhvbmUgfHwgJy0tLScsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGUk9NXCI6IG1vbWVudF8xLmRlZmF1bHQoZnJvbSkuZm9ybWF0KERBVEVfRk9STUFUKSxcclxuICAgICAgICAgICAgICAgICAgICBcIlRPXCI6IG1vbWVudF8xLmRlZmF1bHQodG8pLmZvcm1hdChEQVRFX0ZPUk1BVCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOT1RFU1wiOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1hcF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFdpRmlSZXBvcnQucHJvdG90eXBlLm1hcEFkdmFuY2VkRGF0YSA9IGZ1bmN0aW9uICh1c2VyLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHR4dCwgbWFwLCB2YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5tYXBCYXNpY0RhdGEodXNlciwgZGF0YSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBcIjxiPkVzaXRvIGVzZWN1emlvbmUgYXV0b21hdGljYTwvYj48YnI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIHByb2NSZXN1bHREYXRhOnN0cmluZz1tYXBbXCJwcm9jZXNzUmVzdWx0XCJdIHx8IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwcjpcIix0aGlzLnByb2Nlc3NSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9jZXNzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvY2Vzc1Jlc3VsdC5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dCArPSB0aGlzLnByb2Nlc3NSZXN1bHQuZ2V0U3RhdHVzKCkgPT0gcHJvY2Vzc29yXzEuUHJvY2Vzc1Jlc3VsdFN0YXR1cy5PSyA/IFwiXCIgKyB2YWx1ZSA6IFwiTk9OIEdFU1RJVEFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJQUk9DRVNTX1JFU1VMVFwiXSA9IHR4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1hcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXaUZpUmVwb3J0O1xyXG59KHJlcG9ydF8xLlJlcG9ydCkpO1xyXG5leHBvcnRzLldpRmlSZXBvcnQgPSBXaUZpUmVwb3J0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkMmxtYVM1eVpYQnZMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZZWEJ3TDNKbGNHOXlkSE12ZDJsbWFTNXlaWEJ2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkJRU3h0UTBGQkswSTdRVUZETDBJc2NVUkJRVEpFTzBGQlF6TkVMR3RFUVVFMFFqdEJRVVUxUWl4SlFVRk5MRmRCUVZjc1IwRkJReXhaUVVGWkxFTkJRVU03UVVGRkwwSTdTVUZCZVVJc09FSkJRVTA3U1VGQkwwSTdPMGxCYVVSQkxFTkJRVU03U1VFNVEwY3NkME5CUVcxQ0xFZEJRVzVDTzFGQlEwa3NUMEZCVHl4VlFVRlZMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dEpRVWRMTEdsRFFVRlpMRWRCUVd4Q0xGVkJRVzFDTEVsQlFWRXNSVUZCUXl4SlFVRlJPM1ZEUVVGRkxFOUJRVTg3T3p0blFrRkZjRU1zU1VGQlNTeEhRVUZMTEVsQlFVa3NTMEZCVkN4RlFVRkRMRVZCUVVVc1IwRkJSU3hKUVVGSkxFZEJRVTRzUTBGQlR6dG5Ra0ZGWml4SFFVRkhMRWRCUVVNN2IwSkJRMEVzVFVGQlRTeEZRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpPMjlDUVVOb1FpeFRRVUZUTEVWQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4N2IwSkJRM1JDTEU5QlFVOHNSVUZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTenR2UWtGRGJFSXNUMEZCVHl4RlFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzUzBGQlN6dHZRa0ZETTBJc1RVRkJUU3hGUVVGRExHZENRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF6dHZRa0ZEZGtNc1NVRkJTU3hGUVVGRExHZENRVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF6dHZRa0ZEYmtNc1QwRkJUeXhGUVVGRExFVkJRVVU3YVVKQlExUXNRMEZCUVR0blFrRkZWQ3h6UWtGQlR5eEhRVUZITEVWQlFVTTdPenRMUVVWa08wbEJSVXNzYjBOQlFXVXNSMEZCY2tJc1ZVRkJjMElzU1VGQlVTeEZRVUZETEVsQlFWRTdkVU5CUVVVc1QwRkJUenM3T3pzN2QwSkJSWGhETEVkQlFVY3NSMEZCVVN4RlFVRkZMRU5CUVVNN2QwSkJRMDRzY1VKQlFVMHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeERRVUZETEVWQlFVRTdPM2RDUVVFeFF5eEhRVUZITEVkQlFVc3NVMEZCYTBNN2QwSkJSemxETEVkQlFVY3NSMEZCUXl4M1EwRkJkME1zUTBGQlFUdDNRa0ZGTlVNc2VVUkJRWGxFTzNkQ1FVTjZSQ3gzUTBGQmQwTTdkMEpCUTNoRExFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZEZEVJN05FSkJRMUVzUzBGQlN5eEhRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPelJDUVVONFJDeEhRVUZITEVsQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlJTd3JRa0ZCYlVJc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVY3NTMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVUU3ZVVKQlJUVkdPM2RDUVVWRUxFZEJRVWNzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhIUVVGRExFZEJRVWNzUTBGQlF6dDNRa0ZGTVVJc2MwSkJRVThzUjBGQlJ5eEZRVUZET3pzN08wdEJSV1E3U1VGRlRDeHBRa0ZCUXp0QlFVRkVMRU5CUVVNc1FVRnFSRVFzUTBGQmVVSXNaVUZCVFN4SFFXbEVPVUk3UVVGRlR5eG5RMEZCVlNKOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9