(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("../api/db"), require("../api/mailer"), require("./../api/user"));
	else if(typeof define === 'function' && define.amd)
		define(["../api/db", "../api/mailer", "./../api/user"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("../api/db"), require("../api/mailer"), require("./../api/user")) : factory(root["../api/db"], root["../api/mailer"], root["./../api/user"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__api_db__, __WEBPACK_EXTERNAL_MODULE__api_mailer__, __WEBPACK_EXTERNAL_MODULE__api_user__) {
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
        var id, uid, rtype, data, report, errors, times, userEmails, suppEmail, args, user, userMailAddr, isValid, processor, exc_1, basicrepo, advrepo, mailSubj, subj, exc_2, err;
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
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 9, 10, 11]);
                    if (!uid || !rtype || !data) {
                        args = { "uid": uid, "type": rtype, "data": data };
                        throw new Error("Invalid request data, missing some arguments");
                    }
                    return [4 /*yield*/, getUser(uid)];
                case 2:
                    user = _a.sent();
                    //tutte le mail dell'utente
                    userEmails = __spreadArrays([user.email], user.mailAlternates);
                    userMailAddr = userEmails.filter(function (e) { return e.match(/^a.b.c@roma1.infn.it/g); })[0];
                    userMailAddr = userMailAddr || user.email;
                    isValid = user.isAuthorized && user.policies;
                    if (!isValid) {
                        throw new Error("User in not authorized!:" + JSON.stringify(user));
                    }
                    processor = null;
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    //inizializza il processatore di richiesta
                    processor = processor_1.ProcessRequest.initialize(rtype, user, data);
                    console.log("Processing Request ID: " + id + " - " + rtype);
                    return [4 /*yield*/, processor.exec()];
                case 4:
                    //gestione automatica della richiesta (se implementato)
                    //ritorna oggetto di tipo report (wifi,account o IP)
                    report = _a.sent();
                    console.log("Processed Request ID: " + id + " - " + rtype);
                    if (report.processResult && report.processResult.getStatus() == processor_1.ProcessResultStatus.BAD) {
                        console.log("Eccezione processamento");
                        throw new Error(report.processResult.getValue());
                    }
                    return [3 /*break*/, 6];
                case 5:
                    exc_1 = _a.sent();
                    errors.push({ "type": "process", "value": (exc_1.message || JSON.stringify(exc_1)) });
                    return [3 /*break*/, 6];
                case 6:
                    //se l'oggetto report non è stato creato (il process.exec ha generato errore)
                    //dobbiamo comunque inviare i dati di report utente e supporto
                    if (!report) {
                        report = factory_repo_1.ReportFactory.initialize(rtype, user, data);
                    }
                    return [4 /*yield*/, report.renderAs(report_1.RenderType.BASIC)];
                case 7:
                    basicrepo = _a.sent();
                    return [4 /*yield*/, report.renderAs(report_1.RenderType.ADVANCED)];
                case 8:
                    advrepo = _a.sent();
                    mailSubj = "Richiesta ID " + id + " - " + rtype;
                    subj = report.getSubject();
                    if (subj != "") {
                        mailSubj = mailSubj += " - " + subj;
                    }
                    //Invia Report all'utente
                    console.log("sending basic report to user address: ", userMailAddr);
                    helpers_1.helpers.sendReport(suppEmail, userMailAddr, mailSubj, basicrepo);
                    //Invia Report al servizio 
                    console.log("sending adv report to supporto: ", suppEmail);
                    helpers_1.helpers.sendReport(userMailAddr, suppEmail, mailSubj + " -- Riservata Supporto --", advrepo);
                    times.notific = moment_1.default();
                    return [3 /*break*/, 11];
                case 9:
                    exc_2 = _a.sent();
                    errors.push({ "type": "request", "value": (exc_2.message || JSON.stringify(exc_2)) });
                    return [3 /*break*/, 11];
                case 10:
                    times.process = moment_1.default();
                    err = errors.length > 0 ? JSON.stringify(errors) : null;
                    errors.forEach(function (err) {
                        var errTxt = JSON.stringify(err);
                        /*
                        if(err.type=="request" && userEmails!=null)
                        {
                            helpers.sendReport(userEmails.join(";"),`Errore invio richiesta  ID - ${r.id} - Type - ${r.rtype}`,errTxt);
                        }*/
                        //let to=user ? user.email : "alessandro.ruggieri@roma1.infn.it";//"supporto@®roma1.infn.it"
                        helpers_1.helpers.sendReport(suppEmail, suppEmail, "Errore elaborazione richiesta  ID - " + r.id + " - Type - " + r.rtype, errTxt);
                    });
                    helpers_1.helpers.setDispatchResult(id, times.notific, times.process, err);
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FwcC9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBNEI7QUFDNUIsMkNBQWtEO0FBQ2xELHVEQUFvRDtBQUNwRCxvREFBMEU7QUFDMUUscUNBQWlDO0FBQzFCLElBQUEsT0FBTyxHQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBNUIsQ0FBNEI7QUFJN0IsUUFBQSxZQUFZLEdBQUM7SUFFekIsNENBQTRDO0lBRTVDLGlCQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFRO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFLO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQTtBQU9ELElBQU0sYUFBYSxHQUFFLFVBQWUsQ0FBSzs7Ozs7O29CQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtvQkFPaEMsRUFBRSxHQUFzQixDQUFDLEdBQXZCLEVBQUUsR0FBRyxHQUFpQixDQUFDLElBQWxCLEVBQUUsS0FBSyxHQUFVLENBQUMsTUFBWCxFQUFFLElBQUksR0FBSSxDQUFDLEtBQUwsQ0FBTTtvQkFHM0IsTUFBTSxHQUFlLElBQUksQ0FBQztvQkFDMUIsTUFBTSxHQUFVLEVBQUUsQ0FBQztvQkFHbkIsS0FBSyxHQUFLLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLENBQUE7b0JBRXpDLFVBQVUsR0FBa0IsSUFB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

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
            loc_name as "room",pp_port_alias as "port_alias" from vw_network_status_ex_3 where pp_port_code=$1 or pp_port_alias=$1 limit 1', [port_code])
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
        sendMail(from, to, subj, "<pre>" + report + "</pre>");
    }
};
exports.helpers = helpers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FwcC9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQUssRUFBRSxHQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBdEIsQ0FBc0I7QUFDN0IsSUFBQSxRQUFRLEdBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUExQixDQUEwQjtBQUd6QyxJQUFJLE9BQU8sR0FBQztJQUVSLGVBQWUsRUFBQyxVQUFTLFNBQWdCO1FBQ3JDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUM7MklBQ3lILEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDM0ksSUFBSSxDQUFDLFVBQVMsR0FBTztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGNBQWMsRUFBQyxVQUFTLFNBQWdCO1FBQ3BDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3ZCLElBQUksT0FBTyxHQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRDLEVBQUUsQ0FBQyxHQUFHLENBQUM7NERBQ3lDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDekQsSUFBSSxDQUFDLFVBQVMsR0FBTztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQztJQUVELG1CQUFtQixFQUFDLFVBQVMsTUFBYSxFQUFDLEtBQVk7UUFFbkQsSUFBSSxHQUFHLEdBQUUsTUFBTSxHQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDN0IsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxHQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELGlCQUFpQixFQUFDO1FBRWQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELGlCQUFpQixFQUFDLFVBQVMsR0FBTyxFQUFFLE9BQW1CLEVBQUUsT0FBbUIsRUFBRSxLQUFpQjtRQUMzRixJQUFJLE1BQU0sR0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDekMsRUFBRSxDQUFDLEtBQUssQ0FBQyx1RkFBdUYsRUFBQyxDQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxNQUFNLENBQUMsQ0FBQzthQUNuSSxJQUFJLENBQUUsVUFBQyxJQUFRO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxVQUFDLEdBQU87WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7WUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2YsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsVUFBVSxFQUFDLFVBQVMsSUFBVyxFQUFFLEVBQVMsRUFBRSxJQUFXLEVBQUUsTUFBYTtRQUVsRSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsVUFBUSxNQUFNLFdBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FFSixDQUFBO0FBRU8sMEJBQU8ifQ==

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
                throw Error("No request handler for request type:" + type);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3Byb2Nlc3NvcnMvcHJvY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBNEI7QUFDNUIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRS9CLGtEQUErQztBQUMvQyw4Q0FBMkM7QUFDM0MsZ0RBQWlEO0FBRWpELElBQUssbUJBQWdDO0FBQXJDLFdBQUssbUJBQW1CO0lBQUUseURBQUksQ0FBQTtJQUFDLDJEQUFLLENBQUE7QUFBQSxDQUFDLEVBQWhDLG1CQUFtQixLQUFuQixtQkFBbUIsUUFBYTtBQTRLQyxrREFBbUI7QUFwS3pEO0lBSUksdUJBQVksTUFBMEIsRUFBQyxLQUFTO1FBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUMsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBRUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBRUQ7SUFBOEIsbUNBQWE7SUFDdkMseUJBQVksS0FBUztlQUNqQixrQkFBTSxtQkFBbUIsQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFKRCxDQUE4QixhQUFhLEdBSTFDO0FBQ0Q7SUFBK0Isb0NBQWE7SUFDeEMsMEJBQVks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

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
            var map;
            return __generator(this, function (_a) {
                map = {
                    "NAME": user.name,
                    "SURNAME": user.surname,
                    "EMAIL": data.email,
                    "EMAIL_ALT": user.mailAlternates.lentgh > 0 ? user.mailAlternates.join(";") : '---',
                    "PHONE": user.phone || '---',
                    "EXPIRATION": user.expiration,
                    "INFNUUID": user.uuid,
                    "ROLE": user.role
                };
                return [2 /*return*/, map];
            });
        });
    };
    AccountReport.prototype.mapAdvancedData = function (user, data) {
        return __awaiter(this, void 0, Promise, function () {
            var txt, map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        txt = "";
                        return [4 /*yield*/, this.mapBasicData(user, data)];
                    case 1:
                        map = _a.sent();
                        /*
                        txt="=====================  Esito esecuzione automatica  ====================<br>"
                
                        //var procResultData:string=map["processResult"] || null;
                        console.log("pr:",this.processResult);
                        if (this.processResult && this.processResult.status=='OK')
                        {
                            txt+= JSON.stringify(this.processResult.value);
                        }
                        else{
                            txt="NON GESTITA"
                        }
                
                        map["[ADDITIONAL_DATA]"]=txt;*/
                        return [2 /*return*/, map];
                }
            });
        });
    };
    return AccountReport;
}(report_1.Report));
exports.AccountReport = AccountReport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjLnJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hcHAvcmVwb3J0cy9hY2MucmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQStCO0FBRS9CO0lBQTRCLGlDQUFNO0lBQWxDOztJQW1EQSxDQUFDO0lBaERHLDJDQUFtQixHQUFuQjtRQUNJLE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFHSyxvQ0FBWSxHQUFsQixVQUFtQixJQUFRLEVBQUMsSUFBUTt1Q0FBRSxPQUFPOzs7Z0JBR2pDLEdBQUcsR0FBQztvQkFDSixNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ2hCLFNBQVMsRUFBQyxJQUFJLENBQUMsT0FBTztvQkFDdEIsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLO29CQUNsQixXQUFXLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztvQkFDaEYsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSztvQkFDM0IsWUFBWSxFQUFDLElBQUksQ0FBQyxVQUFVO29CQUM1QixVQUFVLEVBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ3BCLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSTtpQkFDZixDQUFBO2dCQUVULHNCQUFPLEdBQUcsRUFBQzs7O0tBRWQ7SUFFSyx1Q0FBZSxHQUFyQixVQUFzQixJQUFRLEVBQUMsSUFBUTt1Q0FBRSxPQUFPOzs7Ozt3QkFFeEMsR0FBRyxHQUFRLEVBQUUsQ0FBQzt3QkFDTixxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTFDLEdBQUcsR0FBSyxTQUFrQzt3QkFHOUM7Ozs7Ozs7Ozs7Ozs7dURBYStCO3dCQUUvQixzQkFBTyxHQUFHLEVBQUM7Ozs7S0FFZDtJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQW5ERCxDQUE0QixlQUFNLEdBbURqQztBQUVPLHNDQUFhIn0=

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
var ReportFactory = /** @class */ (function () {
    function ReportFactory() {
    }
    ReportFactory.initialize = function (type, user, data) {
        switch (type) {
            case "IP":
                return new ip_repo_1.IPReport(user, data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5yZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3JlcG9ydHMvZmFjdG9yeS5yZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUN0QyxxQ0FBa0M7QUFDbEMsdUNBQXdDO0FBRXhDO0lBQUE7SUFtQkEsQ0FBQztJQWhCVSx3QkFBVSxHQUFqQixVQUFrQixJQUFXLEVBQUMsSUFBUSxFQUFDLElBQVE7UUFDM0MsUUFBTyxJQUFJLEVBQ1g7WUFDSSxLQUFLLElBQUk7Z0JBQ0wsT0FBTyxJQUFJLGtCQUFRLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNsQyxNQUFNO1lBQ04sS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxzQkFBVSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtnQkFDcEMsTUFBTTtZQUNOLEtBQUssU0FBUztnQkFDVixPQUFPLElBQUksd0JBQWEsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3ZDLE1BQU07WUFDTjtnQkFDSSxNQUFNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1NBQzFDO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQUdPLHNDQUFhIn0=

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
            var from, to, action, h, hostname, HOST_ACTION_MAP, HOST_CONFIG_MAP, loc, map;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        from = data.from, to = data.to, action = data.action;
                        h = to || from;
                        hostname = h.name ? h.name + "." + h.domain : "DHCP : " + h.mac;
                        HOST_ACTION_MAP = { "ITA": { "create": "Nuovo nodo", "update": "Aggiornamento dati del nodo", "delete": "Rimozione nodo" },
                            "ENG": { "create": "New host", "update": "Update host data", "delete": "Delete host" }
                        };
                        HOST_CONFIG_MAP = { "STATIC": "STATICO", "DHCP": "DHCP", "STATICVM": "STATICO - VIRTUALE" };
                        return [4 /*yield*/, helpers_1.helpers.getPortLocation(h.port)];
                    case 1:
                        loc = _a.sent();
                        if (!loc) {
                            throw new Error("No location found by port: " + h.port);
                        }
                        if (action == 'update') {
                            hostname = from.name ? from.name + "." + from.domain : "DHCP  " + from.mac;
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
                            "PORT": loc.port_alias,
                        };
                        if (!(action == 'update' && from)) return [3 /*break*/, 3];
                        return [4 /*yield*/, helpers_1.helpers.getPortLocation(from.port)];
                    case 2:
                        loc = _a.sent();
                        map["H_MAC"] = this.displayChanges(from.mac, map["H_MAC"]),
                            map["H_NAME"] = this.displayChanges(this.toHostName(from.name, from.domain), map["H_NAME"]),
                            map["CONFIG"] = this.displayChanges(HOST_CONFIG_MAP[from.config], map["CONFIG"]),
                            map["BUILD"] = this.displayChanges(loc.build, map["BUILD"]),
                            map["FLOOR"] = this.displayChanges(loc.floor, map["FLOOR"]),
                            map["ROOM"] = this.displayChanges(loc.room, map["ROOM"]),
                            map["PORT"] = this.displayChanges(loc.port_alias, map["PORT"]);
                        _a.label = 3;
                    case 3:
                        //usiamo per IP SUBJ= ACTION_ITA         
                        map["SUBJ"] = map["ACTION_ITA"];
                        return [2 /*return*/, map];
                }
            });
        });
    };
    IPReport.prototype.displayChanges = function (from, to) {
        /*console.log("from:",from)
        console.log("to:",to)*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXAucmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FwcC9yZXBvcnRzL2lwLnJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUErQjtBQUMvQixzQ0FBa0M7QUFJbEM7SUFBdUIsNEJBQU07SUFBN0I7UUFBQSxxRUFvSUM7UUE5REcsZ0JBQVUsR0FBQyxVQUFDLElBQVcsRUFBQyxNQUFhO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBSSxJQUFJLFNBQUksTUFBUSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDN0MsQ0FBQyxDQUFBOztJQTRETCxDQUFDO0lBbElHLHNDQUFtQixHQUFuQjtRQUNJLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFSywrQkFBWSxHQUFsQixVQUFtQixJQUFRLEVBQUMsSUFBUTt1Q0FBRSxPQUFPOzs7Ozt3QkFFcEMsSUFBSSxHQUFjLElBQUksS0FBbEIsRUFBQyxFQUFFLEdBQVcsSUFBSSxHQUFmLEVBQUMsTUFBTSxHQUFJLElBQUksT0FBUixDQUFTO3dCQUN4QixDQUFDLEdBQUUsRUFBRSxJQUFJLElBQUksQ0FBQzt3QkFDZCxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQ3hELGVBQWUsR0FBSyxFQUFFLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLDZCQUE2QixFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQzs0QkFDOUYsS0FBSyxFQUFDLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsa0JBQWtCLEVBQUMsUUFBUSxFQUFDLGFBQWEs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

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
/*import {WiFiReport} from './wifi.repo'
import {IPReport} from './ip.repo'
import {AccountReport} from './acc.repo'*/
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
var path = __webpack_require__(/*! path */ "path");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3JlcG9ydHMvcmVwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzswQ0FFMEM7QUFDMUMsMENBQW9CO0FBQ3BCLElBQU0sSUFBSSxHQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUc1QixJQUFLLFVBQStCO0FBQXBDLFdBQUssVUFBVTtJQUFFLDZDQUFPLENBQUE7SUFBQyxtREFBVSxDQUFBO0FBQUEsQ0FBQyxFQUEvQixVQUFVLEtBQVYsVUFBVSxRQUFxQjtBQXNGckIsZ0NBQVU7QUFwRnpCO0lBT0ksZ0JBQVksSUFBUSxFQUFDLElBQVEsRUFBQyxHQUE0QjtRQUE1QixvQkFBQSxFQUFBLFVBQTRCO1FBTDFELFNBQUksR0FBSyxJQUFJLENBQUM7UUFDZCxTQUFJLEdBQUssSUFBSSxDQUFDO1FBQ2Qsa0JBQWEsR0FBcUIsSUFBSSxDQUFDO1FBQ3ZDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFHZixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBQyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFnQixHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUQsMkJBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBSUsseUJBQVEsR0FBZCxVQUFlLElBQWU7dUNBQUUsT0FBTzs7Ozs7d0JBRy9CLFFBQVEsR0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDcEMsUUFBUSxHQUFDLGlCQUFlLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBSSxRQUFVLENBQUE7d0JBQzFELFFBQVEsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUc5QyxJQUFHLENBQUMsWUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBQzs0QkFDeEIsTUFBTSxLQUFLLENBQUMsNEJBQTBCLFFBQVUsQ0FBQyxDQUFDO3lCQUNyRDt3QkFFRyxHQUFHLEdBQVUsWUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzVDLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBL0MsRUFBRSxHQUFDLFNBQTRDO3dCQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7d0JBQzdCLEdBQUcsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxDQUFBO3dCQUNuQyxHQUFHLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFBO3dCQUVoRixzQkFBTyxHQUFHLEVBQUM7Ozs7S0FFZDtJQUVELHdCQUFPLEdBQVAsVUFBUSxJQUFRLEVBQUMsSUFBUSxFQUFDLE9BQWtCO1FBRXhDLFFBQU8sT0FBTyxFQUNkO1lBQ0ksS0FBSyxVQUFVLENBQUMsS0FBSztnQkFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsTUFBTTtZQUNOLEtBQUssVUFBVSxDQUFDLFFBQVE7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLE1BQU07U0FDVDtJQUNMLENBQUM7SUFTRCxtQ0FBa0IsR0FBbEIsVUFBbUIsR0FBVSxFQUFDLEdBQU87UUFFakMsSUFBSSxJQUFJLEdBQUMsR0FBRyxDQUFBO1FBR1osS0FBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQ2hCO1lBQ0kseURBQXlEO1lBQ3pELDhDQUE4QztZQUM5Qyw2QkFBNkI7WUFDOUIsSUFBSSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDekQ7UUFFRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyxBQWpGRCxJQWlGQztBQUdPLHdCQUFNIn0=

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
                        txt = "=====================  <b>Esito esecuzione automatica</b>  ====================<br>";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lmaS5yZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwL3JlcG9ydHMvd2lmaS5yZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBK0I7QUFDL0IscURBQTJEO0FBQzNELGtEQUE0QjtBQUU1QixJQUFNLFdBQVcsR0FBQyxZQUFZLENBQUM7QUFFL0I7SUFBeUIsOEJBQU07SUFBL0I7O0lBaURBLENBQUM7SUE5Q0csd0NBQW1CLEdBQW5CO1FBQ0ksT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUdLLGlDQUFZLEdBQWxCLFVBQW1CLElBQVEsRUFBQyxJQUFRO3VDQUFFLE9BQU87OztnQkFFcEMsSUFBSSxHQUFLLElBQUksS0FBVCxFQUFDLEVBQUUsR0FBRSxJQUFJLEdBQU4sQ0FBTztnQkFFZixHQUFHLEdBQUM7b0JBQ0EsTUFBTSxFQUFDLElBQUksQ0FBQyxJQUFJO29CQUNoQixTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU87b0JBQ3RCLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSztvQkFDbEIsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSztvQkFDM0IsTUFBTSxFQUFDLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDdkMsSUFBSSxFQUFDLGdCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDbkMsT0FBTyxFQUFDLEVBQUU7aUJBQ1QsQ0FBQTtnQkFFVCxzQkFBTyxHQUFHLEVBQUM7OztLQUVkO0lBRUssb0NBQWUsR0FBckIsVUFBc0IsSUFBUSxFQUFDLElBQVE7dUNBQUUsT0FBTzs7Ozs7d0JBRXhDLEdBQUcsR0FBUSxFQUFFLENBQUM7d0JBQ04scUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUExQyxHQUFHLEdBQUssU0FBa0M7d0JBRzlDLEdBQUcsR0FBQyxxRkFBcUYsQ0FBQTt3QkFFekYseURBQXlEO3dCQUN6RCx3Q0FBd0M7d0JBQ3hDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFDdEI7NEJBQ1EsS0FBSyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOzRCQUN4RCxHQUFHLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBRSwrQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUcsS0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUE7eUJBRTVGO3dCQUVELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFDLEdBQUcsQ0FBQzt3QkFFMUIsc0JBQU8sR0FBRyxFQUFDOzs7O0tBRWQ7SUFFTCxpQkFBQztBQUFELENBQUMsQUFqREQsQ0FBeUIsZUFBTSxHQWlEOUI7QUFFTyxnQ0FBVSJ9

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuLi9hcGkvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuLi9hcGkvbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi8uLi9hcGkvdXNlclwiIiwid2VicGFjazovLy8uL2FwcC9kaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uL2FwcC9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL2FwcC9wcm9jZXNzb3JzL3Byb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVwb3J0cy9hY2MucmVwby50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVwb3J0cy9mYWN0b3J5LnJlcG8udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlcG9ydHMvaXAucmVwby50cyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVwb3J0cy9yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JlcG9ydHMvd2lmaS5yZXBvLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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QUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGVBQWUsbUJBQU8sQ0FBQyx5Q0FBVTtBQUNqQyxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBeUI7QUFDbkQsK0JBQStCLG1CQUFPLENBQUMsc0JBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQ0FBMkMsMnhEOzs7Ozs7Ozs7OztBQy9HM0Msa0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuLi9hcGkvZGJcIiksIHJlcXVpcmUoXCIuLi9hcGkvbWFpbGVyXCIpLCByZXF1aXJlKFwiLi8uLi9hcGkvdXNlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCIuLi9hcGkvZGJcIiwgXCIuLi9hcGkvbWFpbGVyXCIsIFwiLi8uLi9hcGkvdXNlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiLi4vYXBpL2RiXCIpLCByZXF1aXJlKFwiLi4vYXBpL21haWxlclwiKSwgcmVxdWlyZShcIi4vLi4vYXBpL3VzZXJcIikpIDogZmFjdG9yeShyb290W1wiLi4vYXBpL2RiXCJdLCByb290W1wiLi4vYXBpL21haWxlclwiXSwgcm9vdFtcIi4vLi4vYXBpL3VzZXJcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfZGJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXBpX21haWxlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfdXNlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvZGlzcGF0Y2hlci50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYXBpX2RiX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfbWFpbGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcGlfdXNlcl9fOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SZWFkUmVxdWVzdHMgPSB2b2lkIDA7XHJcbnZhciBtb21lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcclxudmFyIHJlcG9ydF8xID0gcmVxdWlyZShcIi4vcmVwb3J0cy9yZXBvcnRcIik7XHJcbnZhciBmYWN0b3J5X3JlcG9fMSA9IHJlcXVpcmUoXCIuL3JlcG9ydHMvZmFjdG9yeS5yZXBvXCIpO1xyXG52YXIgcHJvY2Vzc29yXzEgPSByZXF1aXJlKFwiLi9wcm9jZXNzb3JzL3Byb2Nlc3NvclwiKTtcclxudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XHJcbnZhciBnZXRVc2VyID0gcmVxdWlyZSgnLi8uLi9hcGkvdXNlcicpLmdldFVzZXI7XHJcbmV4cG9ydHMuUmVhZFJlcXVlc3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIlJlYWRpbmcgZm9yIG5ldyByZXF1ZXN0cy4uLlwiKVxyXG4gICAgaGVscGVyc18xLmhlbHBlcnMuUkVBRF9BTExfUkVRVUVTVFMoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlkOlwiLCByLmlkKTtcclxuICAgICAgICAgICAgaGFuZGxlUmVxdWVzdChyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgaGFuZGxlUmVxdWVzdCA9IGZ1bmN0aW9uIChyKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkLCB1aWQsIHJ0eXBlLCBkYXRhLCByZXBvcnQsIGVycm9ycywgdGltZXMsIHVzZXJFbWFpbHMsIHN1cHBFbWFpbCwgYXJncywgdXNlciwgdXNlck1haWxBZGRyLCBpc1ZhbGlkLCBwcm9jZXNzb3IsIGV4Y18xLCBiYXNpY3JlcG8sIGFkdnJlcG8sIG1haWxTdWJqLCBzdWJqLCBleGNfMiwgZXJyO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgcmVxdWVzdDpcIiwgci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgPSByLmlkLCB1aWQgPSByLnVpZCwgcnR5cGUgPSByLnJ0eXBlLCBkYXRhID0gci5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXMgPSB7IFwibm90aWZpY1wiOiBudWxsLCBcInByb2Nlc3NcIjogbnVsbCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJFbWFpbHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cHBFbWFpbCA9IFwiYWxlc3NhbmRyby5ydWdnaWVyaUByb21hMS5pbmZuLml0O1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDksIDEwLCAxMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdWlkIHx8ICFydHlwZSB8fCAhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0geyBcInVpZFwiOiB1aWQsIFwidHlwZVwiOiBydHlwZSwgXCJkYXRhXCI6IGRhdGEgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByZXF1ZXN0IGRhdGEsIG1pc3Npbmcgc29tZSBhcmd1bWVudHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFVzZXIodWlkKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3R1dHRlIGxlIG1haWwgZGVsbCd1dGVudGVcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRW1haWxzID0gX19zcHJlYWRBcnJheXMoW3VzZXIuZW1haWxdLCB1c2VyLm1haWxBbHRlcm5hdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTWFpbEFkZHIgPSB1c2VyRW1haWxzLmZpbHRlcihmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5tYXRjaCgvXmEuYi5jQHJvbWExLmluZm4uaXQvZyk7IH0pWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJNYWlsQWRkciA9IHVzZXJNYWlsQWRkciB8fCB1c2VyLmVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB1c2VyLmlzQXV0aG9yaXplZCAmJiB1c2VyLnBvbGljaWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIGluIG5vdCBhdXRob3JpemVkITpcIiArIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc29yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFszLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2luaXppYWxpenphIGlsIHByb2Nlc3NhdG9yZSBkaSByaWNoaWVzdGFcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzb3IgPSBwcm9jZXNzb3JfMS5Qcm9jZXNzUmVxdWVzdC5pbml0aWFsaXplKHJ0eXBlLCB1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2Nlc3NpbmcgUmVxdWVzdCBJRDogXCIgKyBpZCArIFwiIC0gXCIgKyBydHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcHJvY2Vzc29yLmV4ZWMoKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy9nZXN0aW9uZSBhdXRvbWF0aWNhIGRlbGxhIHJpY2hpZXN0YSAoc2UgaW1wbGVtZW50YXRvKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vcml0b3JuYSBvZ2dldHRvIGRpIHRpcG8gcmVwb3J0ICh3aWZpLGFjY291bnQgbyBJUClcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9jZXNzZWQgUmVxdWVzdCBJRDogXCIgKyBpZCArIFwiIC0gXCIgKyBydHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcG9ydC5wcm9jZXNzUmVzdWx0ICYmIHJlcG9ydC5wcm9jZXNzUmVzdWx0LmdldFN0YXR1cygpID09IHByb2Nlc3Nvcl8xLlByb2Nlc3NSZXN1bHRTdGF0dXMuQkFEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWNjZXppb25lIHByb2Nlc3NhbWVudG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXBvcnQucHJvY2Vzc1Jlc3VsdC5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgZXhjXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goeyBcInR5cGVcIjogXCJwcm9jZXNzXCIsIFwidmFsdWVcIjogKGV4Y18xLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkoZXhjXzEpKSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAvL3NlIGwnb2dnZXR0byByZXBvcnQgbm9uIMOoIHN0YXRvIGNyZWF0byAoaWwgcHJvY2Vzcy5leGVjIGhhIGdlbmVyYXRvIGVycm9yZSlcclxuICAgICAgICAgICAgICAgICAgICAvL2RvYmJpYW1vIGNvbXVucXVlIGludmlhcmUgaSBkYXRpIGRpIHJlcG9ydCB1dGVudGUgZSBzdXBwb3J0b1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVwb3J0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydCA9IGZhY3RvcnlfcmVwb18xLlJlcG9ydEZhY3RvcnkuaW5pdGlhbGl6ZShydHlwZSwgdXNlciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcG9ydC5yZW5kZXJBcyhyZXBvcnRfMS5SZW5kZXJUeXBlLkJBU0lDKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzaWNyZXBvID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcG9ydC5yZW5kZXJBcyhyZXBvcnRfMS5SZW5kZXJUeXBlLkFEVkFOQ0VEKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgYWR2cmVwbyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWlsU3ViaiA9IFwiUmljaGllc3RhIElEIFwiICsgaWQgKyBcIiAtIFwiICsgcnR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViaiA9IHJlcG9ydC5nZXRTdWJqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YmogIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWlsU3ViaiA9IG1haWxTdWJqICs9IFwiIC0gXCIgKyBzdWJqO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL0ludmlhIFJlcG9ydCBhbGwndXRlbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGJhc2ljIHJlcG9ydCB0byB1c2VyIGFkZHJlc3M6IFwiLCB1c2VyTWFpbEFkZHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlcnNfMS5oZWxwZXJzLnNlbmRSZXBvcnQoc3VwcEVtYWlsLCB1c2VyTWFpbEFkZHIsIG1haWxTdWJqLCBiYXNpY3JlcG8pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSW52aWEgUmVwb3J0IGFsIHNlcnZpemlvIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBhZHYgcmVwb3J0IHRvIHN1cHBvcnRvOiBcIiwgc3VwcEVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJzXzEuaGVscGVycy5zZW5kUmVwb3J0KHVzZXJNYWlsQWRkciwgc3VwcEVtYWlsLCBtYWlsU3ViaiArIFwiIC0tIFJpc2VydmF0YSBTdXBwb3J0byAtLVwiLCBhZHZyZXBvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lcy5ub3RpZmljID0gbW9tZW50XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICBleGNfMiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCh7IFwidHlwZVwiOiBcInJlcXVlc3RcIiwgXCJ2YWx1ZVwiOiAoZXhjXzIubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShleGNfMikpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXMucHJvY2VzcyA9IG1vbWVudF8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlcnIgPSBlcnJvcnMubGVuZ3RoID4gMCA/IEpTT04uc3RyaW5naWZ5KGVycm9ycykgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyclR4dCA9IEpTT04uc3RyaW5naWZ5KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVyci50eXBlPT1cInJlcXVlc3RcIiAmJiB1c2VyRW1haWxzIT1udWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJzLnNlbmRSZXBvcnQodXNlckVtYWlscy5qb2luKFwiO1wiKSxgRXJyb3JlIGludmlvIHJpY2hpZXN0YSAgSUQgLSAke3IuaWR9IC0gVHlwZSAtICR7ci5ydHlwZX1gLGVyclR4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xldCB0bz11c2VyID8gdXNlci5lbWFpbCA6IFwiYWxlc3NhbmRyby5ydWdnaWVyaUByb21hMS5pbmZuLml0XCI7Ly9cInN1cHBvcnRvQMKucm9tYTEuaW5mbi5pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlcnNfMS5oZWxwZXJzLnNlbmRSZXBvcnQoc3VwcEVtYWlsLCBzdXBwRW1haWwsIFwiRXJyb3JlIGVsYWJvcmF6aW9uZSByaWNoaWVzdGEgIElEIC0gXCIgKyByLmlkICsgXCIgLSBUeXBlIC0gXCIgKyByLnJ0eXBlLCBlcnJUeHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlcnNfMS5oZWxwZXJzLnNldERpc3BhdGNoUmVzdWx0KGlkLCB0aW1lcy5ub3RpZmljLCB0aW1lcy5wcm9jZXNzLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x6Y0dGMFkyaGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMMkZ3Y0M5a2FYTndZWFJqYUdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGRFFTeHJSRUZCTkVJN1FVRkROVUlzTWtOQlFXdEVPMEZCUTJ4RUxIVkVRVUZ2UkR0QlFVTndSQ3h2UkVGQk1FVTdRVUZETVVVc2NVTkJRV2xETzBGQlF6RkNMRWxCUVVFc1QwRkJUeXhIUVVGSkxFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNVVUZCTlVJc1EwRkJORUk3UVVGSk4wSXNVVUZCUVN4WlFVRlpMRWRCUVVNN1NVRkZla0lzTkVOQlFUUkRPMGxCUlRWRExHbENRVUZQTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVXl4SlFVRlJPMUZCUTJwRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUXl4RFFVRkxPMWxCUTJ4Q0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU42UWl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFSXNRMEZCUXl4RFFVRkRMRU5CUVVFN1NVRkRTQ3hEUVVGRExFTkJRVU1zUTBGQlFUdEJRVVZJTEVOQlFVTXNRMEZCUVR0QlFVOUVMRWxCUVUwc1lVRkJZU3hIUVVGRkxGVkJRV1VzUTBGQlN6czdPenM3TzI5Q1FVVjRReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEcxQ1FVRnRRaXhGUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUVR0dlFrRlBhRU1zUlVGQlJTeEhRVUZ6UWl4RFFVRkRMRWRCUVhaQ0xFVkJRVVVzUjBGQlJ5eEhRVUZwUWl4RFFVRkRMRWxCUVd4Q0xFVkJRVVVzUzBGQlN5eEhRVUZWTEVOQlFVTXNUVUZCV0N4RlFVRkZMRWxCUVVrc1IwRkJTU3hEUVVGRExFdEJRVXdzUTBGQlRUdHZRa0ZITTBJc1RVRkJUU3hIUVVGbExFbEJRVWtzUTBGQlF6dHZRa0ZETVVJc1RVRkJUU3hIUVVGVkxFVkJRVVVzUTBGQlF6dHZRa0ZIYmtJc1MwRkJTeXhIUVVGTExFVkJRVU1zVTBGQlV5eEZRVUZETEVsQlFVa3NSVUZCUXl4VFFVRlRMRVZCUVVNc1NVRkJTU3hGUVVGRExFTkJRVUU3YjBKQlJYcERMRlZCUVZVc1IwRkJhMElzU1VGQlNTeERRVUZETzI5Q1FVTnFReXhUUVVGVExFZEJRVU1zYjBOQlFXOURMRU5CUVVFN096czdiMEpCU1dwRUxFbEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVU03ZDBKQlEzUkNMRWxCUVVrc1IwRkJReXhGUVVGRExFdEJRVXNzUlVGQlF5eEhRVUZITEVWQlFVTXNUVUZCVFN4RlFVRkRMRXRCUVVzc1JVRkJReXhOUVVGTkxFVkJRVU1zU1VGQlNTeEZRVUZETEVOQlFVTTdkMEpCUXpsRExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNPRU5CUVRoRExFTkJRVU1zUTBGQlF6dHhRa0ZEYUVVN2IwSkJSMUVzY1VKQlFVMHNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGQk96dHZRa0ZCZGtJc1NVRkJTU3hIUVVGRExGTkJRV3RDTzI5Q1FVVXpRaXd5UWtGQk1rSTdiMEpCUXpOQ0xGVkJRVlVzYlVKQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVRTdiMEpCU1RGRExGbEJRVmtzUjBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVVFc1EwRkJReXhKUVVGRkxFOUJRVUVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4MVFrRkJkVUlzUTBGQlF5eEZRVUZvUXl4RFFVRm5ReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVRTdiMEpCUlRGRkxGbEJRVmtzUjBGQlF5eFpRVUZaTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenR2UWtGTGNFTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXp0dlFrRkZha1FzU1VGQlJ5eERRVUZETEU5QlFVOHNSVUZEV0R0M1FrRkRReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERCQ1FVRXdRaXhIUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRVHR4UWtGRGFFVTdiMEpCWVVjc1UwRkJVeXhIUVVGRExFbEJRVWtzUTBGQlF6czdPenR2UWtGTGJFSXNNRU5CUVRCRE8yOUNRVU14UXl4VFFVRlRMRWRCUVVNc01FSkJRV01zUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkRMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZGY2tRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5dzBRa0ZCTUVJc1JVRkJSU3hYUVVGTkxFdEJRVThzUTBGQlF5eERRVUZCTzI5Q1FVa3ZReXh4UWtGQlRTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVFN08yOUNRVVkzUWl4MVJFRkJkVVE3YjBKQlEzWkVMRzlFUVVGdlJEdHZRa0ZEY0VRc1RVRkJUU3hIUVVGRExGTkJRWE5DTEVOQlFVTTdiMEpCUlRsQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNNa0pCUVhsQ0xFVkJRVVVzVjBGQlRTeExRVUZQTEVOQlFVTXNRMEZCUVR0dlFrRkhja1FzU1VGQlJ5eE5RVUZOTEVOQlFVTXNZVUZCWVN4SlFVRkpMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVVXNLMEpCUVcxQ0xFTkJRVU1zUjBGQlJ5eEZRVU53Ump0M1FrRkRReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVUU3ZDBKQlEzUkRMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8zRkNRVU5xUkRzN096dHZRa0ZMUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVU1zVFVGQlRTeEZRVUZETEZOQlFWTXNSVUZCUXl4UFFVRlBMRVZCUVVNc1EwRkJReXhMUVVGSExFTkJRVU1zVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlF5eERRVUZETEVOQlFVRTdPenR2UWtGTE4wVXNOa1ZCUVRaRk8yOUNRVU0zUlN3NFJFRkJPRVE3YjBKQlF6bEVMRWxCUVVjc1EwRkJReXhOUVVGTkxFVkJRMVk3ZDBKQlEwTXNUVUZCVFN4SFFVRkZMRFJDUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUXl4SlFVRkpMRVZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03Y1VKQlEyeEVPMjlDUVV0bExIRkNRVUZOTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc2JVSkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUVRzN2IwSkJRVzVFTEZOQlFWTXNSMEZCUnl4VFFVRjFRenR2UWtGSGVrTXNjVUpCUVUwc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eHRRa0ZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGQk96dHZRa0ZCY0VRc1QwRkJUeXhIUVVGSExGTkJRVEJETzI5Q1FVZHdSQ3hSUVVGUkxFZEJRVU1zYTBKQlFXZENMRVZCUVVVc1YwRkJUU3hMUVVGUExFTkJRVU03YjBKQlNYcERMRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVRTdiMEpCUnpsQ0xFbEJRVWNzU1VGQlNTeEpRVUZGTEVWQlFVVXNSVUZEV0R0M1FrRkRReXhSUVVGUkxFZEJRVU1zVVVGQlVTeEpRVUZGTEZGQlFVMHNTVUZCVFN4RFFVRkJPM0ZDUVVNdlFqdHZRa0ZGUkN4NVFrRkJlVUk3YjBKQlEzcENMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zZDBOQlFYZERMRVZCUVVNc1dVRkJXU3hEUVVGRExFTkJRVUU3YjBKQlEyeEZMR2xDUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNSVUZCUXl4WlFVRlpMRVZCUVVNc1VVRkJVU3hGUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzI5Q1FVVTVSQ3d5UWtGQk1rSTdiMEpCUXpOQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNhME5CUVd0RExFVkJRVU1zVTBGQlV5eERRVUZETEVOQlFVRTdiMEpCUTNwRUxHbENRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmxCUVZrc1JVRkJReXhUUVVGVExFVkJRVVVzVVVGQlVTeEhRVUZETERKQ1FVRXlRaXhGUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzI5Q1FVVjZSaXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZETEdkQ1FVRk5MRVZCUVVVc1EwRkJRenM3T3p0dlFrRk5ka0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkRMRTFCUVUwc1JVRkJReXhUUVVGVExFVkJRVU1zVDBGQlR5eEZRVUZETEVOQlFVTXNTMEZCUnl4RFFVRkRMRTlCUVU4c1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhEUVVGQk96czdiMEpCU3pWRkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVTXNaMEpCUVUwc1JVRkJSU3hEUVVGQk8yOUNRVU5zUWl4SFFVRkhMRWRCUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenR2UWtGRmVFUXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGQkxFZEJRVWM3ZDBKQlIycENMRWxCUVVrc1RVRkJUU3hIUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2QwSkJSUzlDT3pzN096SkNRVWxITzNkQ1FVVklMRFJHUVVFMFJqdDNRa0ZETlVZc2FVSkJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RlFVRkRMRk5CUVZNc1JVRkJReXg1UTBGQmRVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc2EwSkJRV0VzUTBGQlF5eERRVUZETEV0QlFVOHNSVUZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenR2UWtGRmJFZ3NRMEZCUXl4RFFVRkRMRU5CUVVFN2IwSkJSMFlzYVVKQlFVOHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEZRVUZGTEVWQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPenM3T3pzN1EwRkhPVVFzUTBGQlFTSjkiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmhlbHBlcnMgPSB2b2lkIDA7XHJcbnZhciBkYiA9IHJlcXVpcmUoJy4uL2FwaS9kYicpLm5xZGI7XHJcbnZhciBzZW5kTWFpbCA9IHJlcXVpcmUoJy4uL2FwaS9tYWlsZXInKS5zZW5kTWFpbDtcclxudmFyIGhlbHBlcnMgPSB7XHJcbiAgICBnZXRQb3J0TG9jYXRpb246IGZ1bmN0aW9uIChwb3J0X2NvZGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgZGIuYW55KCdzZWxlY3QgbG9jX2lkICxsb2NfYnVpbGRpbmcgYXMgXCJidWlsZFwiLGxvY19mbG9vciBhcyBcImZsb29yXCIsXFxcclxuICAgICAgICAgICAgbG9jX25hbWUgYXMgXCJyb29tXCIscHBfcG9ydF9hbGlhcyBhcyBcInBvcnRfYWxpYXNcIiBmcm9tIHZ3X25ldHdvcmtfc3RhdHVzX2V4XzMgd2hlcmUgcHBfcG9ydF9jb2RlPSQxIG9yIHBwX3BvcnRfYWxpYXM9JDEgbGltaXQgMScsIFtwb3J0X2NvZGVdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNbMF0gfHwgbnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFBvcnROZXR3b3JrOiBmdW5jdGlvbiAocG9ydF9jb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHZhciBuY19jb2RlID0gKHBvcnRfY29kZS5zcGxpdChcIi1cIilbMV0pO1xyXG4gICAgICAgICAgICBkYi5hbnkoJ3NlbGVjdCBuZXR3b3JrIGZyb20gbmV0d29ya19jbG9zZXQgbmMsIHZsYW5fbmV0d29yayB2biBcXFxyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlIG5jLm5jX2NvZGU9JDEgYW5kIG5jLnZsYW49dm4udmxhbicsIFtuY19jb2RlXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzWzBdIHx8IG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZGRFbXB0eVNwYWNlc1RvRW5kOiBmdW5jdGlvbiAoc3BhY2VzLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciByZXAgPSBzcGFjZXMgLSB2YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgcmVwID0gcmVwIDwgMCA/IDAgOiByZXA7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIgXCIucmVwZWF0KHJlcCk7XHJcbiAgICB9LFxyXG4gICAgUkVBRF9BTExfUkVRVUVTVFM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZGIucXVlcnkoXCJzZWxlY3QgKiBmcm9tIHVzZXJfcmVxdWVzdHMgd2hlcmUgc3RhdHVzID0nU1VCTUlUVEVEJ1wiKTtcclxuICAgIH0sXHJcbiAgICBzZXREaXNwYXRjaFJlc3VsdDogZnVuY3Rpb24gKHJpZCwgbm90aWZpYywgcHJvY2VzcywgZXJyb3IpIHtcclxuICAgICAgICB2YXIgc3RhdHVzID0gIWVycm9yID8gXCJQUk9DRVNTRURcIiA6IFwiQkFEXCI7XHJcbiAgICAgICAgZGIucXVlcnkoXCJ1cGRhdGUgdXNlcl9yZXF1ZXN0cyBzZXQgbm90aWZpY19kYXRlPSQxLHByb2Nlc3NfZGF0ZT0kMixleGM9JDMsc3RhdHVzPSQ1IHdoZXJlIGlkPSQ0XCIsIFtub3RpZmljLCBwcm9jZXNzLCBlcnJvciwgcmlkLCBzdGF0dXNdKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBoYXMgb2NjdXJyZWQ6XCIpO1xyXG4gICAgICAgICAgICB0aHJvdyAoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZW5kUmVwb3J0OiBmdW5jdGlvbiAoZnJvbSwgdG8sIHN1YmosIHJlcG9ydCkge1xyXG4gICAgICAgIHNlbmRNYWlsKGZyb20sIHRvLCBzdWJqLCBcIjxwcmU+XCIgKyByZXBvcnQgKyBcIjwvcHJlPlwiKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5oZWxwZXJzID0gaGVscGVycztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUdWc2NHVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMMkZ3Y0M5b1pXeHdaWEp6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZQTEVsQlFVc3NSVUZCUlN4SFFVRkZMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQmRFSXNRMEZCYzBJN1FVRkROMElzU1VGQlFTeFJRVUZSTEVkQlFVVXNUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhUUVVFeFFpeERRVUV3UWp0QlFVZDZReXhKUVVGSkxFOUJRVThzUjBGQlF6dEpRVVZTTEdWQlFXVXNSVUZCUXl4VlFVRlRMRk5CUVdkQ08xRkJRM0pETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJReXhQUVVGUE8xbEJRM2hDTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNN01rbEJRM2xJTEVWQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRwUWtGRE0wa3NTVUZCU1N4RFFVRkRMRlZCUVZNc1IwRkJUenRuUWtGRGJFSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTTFRaXhEUVVGRExFTkJRVU1zUTBGQlFUdFJRVU5PTEVOQlFVTXNRMEZCUXl4RFFVRkJPMGxCUTA0c1EwRkJRenRKUVVWRUxHTkJRV01zUlVGQlF5eFZRVUZUTEZOQlFXZENPMUZCUTNCRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNWVUZCUXl4UFFVRlBPMWxCUTNaQ0xFbEJRVWtzVDBGQlR5eEhRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhSRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTTdORVJCUTNsRExFVkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0cFFrRkRla1FzU1VGQlNTeERRVUZETEZWQlFWTXNSMEZCVHp0blFrRkRiRUlzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU0xUWl4RFFVRkRMRU5CUVVNc1EwRkJRVHRSUVVOT0xFTkJRVU1zUTBGQlF5eERRVUZCTzBsQlExQXNRMEZCUXp0SlFVVkVMRzFDUVVGdFFpeEZRVUZETEZWQlFWTXNUVUZCWVN4RlFVRkRMRXRCUVZrN1VVRkZia1FzU1VGQlNTeEhRVUZITEVkQlFVVXNUVUZCVFN4SFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE4wSXNSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRM2hDTEU5QlFVOHNTMEZCU3l4SFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEYWtNc1EwRkJRenRKUVVkRUxHbENRVUZwUWl4RlFVRkRPMUZCUldRc1QwRkJUeXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEhWRVFVRjFSQ3hEUVVGRExFTkJRVU03U1VGRE4wVXNRMEZCUXp0SlFVVkVMR2xDUVVGcFFpeEZRVUZETEZWQlFWTXNSMEZCVHl4RlFVRkZMRTlCUVcxQ0xFVkJRVVVzVDBGQmJVSXNSVUZCUlN4TFFVRnBRanRSUVVNelJpeEpRVUZKTEUxQlFVMHNSMEZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkRla01zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4MVJrRkJkVVlzUlVGQlF5eERRVUZETEU5QlFVOHNSVUZCUXl4UFFVRlBMRVZCUVVNc1MwRkJTeXhGUVVGRExFZEJRVWNzUlVGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0aFFVTnVTU3hKUVVGSkxFTkJRVVVzVlVGQlF5eEpRVUZSTzFGQlEyaENMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlJTeFZRVUZETEVkQlFVODdXVUZEWkN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRU5CUVVFN1dVRkRja01zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMUZCUTJZc1EwRkJReXhEUVVGRExFTkJRVUU3U1VGRFRpeERRVUZETzBsQlJVUXNWVUZCVlN4RlFVRkRMRlZCUVZNc1NVRkJWeXhGUVVGRkxFVkJRVk1zUlVGQlJTeEpRVUZYTEVWQlFVVXNUVUZCWVR0UlFVVnNSU3hSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVNc1ZVRkJVU3hOUVVGTkxGZEJRVkVzUTBGQlF5eERRVUZETzBsQlEzQkVMRU5CUVVNN1EwRkZTaXhEUVVGQk8wRkJSVThzTUVKQlFVOGlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlByb2Nlc3NSZXN1bHRTdGF0dXMgPSBleHBvcnRzLlByb2Nlc3NSZXF1ZXN0ID0gdm9pZCAwO1xyXG52YXIgbW9tZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XHJcbnZhciBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XHJcbnZhciB3aWZpX3JlcG9fMSA9IHJlcXVpcmUoXCIuLi9yZXBvcnRzL3dpZmkucmVwb1wiKTtcclxudmFyIGlwX3JlcG9fMSA9IHJlcXVpcmUoXCIuLi9yZXBvcnRzL2lwLnJlcG9cIik7XHJcbnZhciBhY2NfcmVwb18xID0gcmVxdWlyZShcIi4uL3JlcG9ydHMvYWNjLnJlcG9cIik7XHJcbnZhciBQcm9jZXNzUmVzdWx0U3RhdHVzO1xyXG4oZnVuY3Rpb24gKFByb2Nlc3NSZXN1bHRTdGF0dXMpIHtcclxuICAgIFByb2Nlc3NSZXN1bHRTdGF0dXNbUHJvY2Vzc1Jlc3VsdFN0YXR1c1tcIk9LXCJdID0gMF0gPSBcIk9LXCI7XHJcbiAgICBQcm9jZXNzUmVzdWx0U3RhdHVzW1Byb2Nlc3NSZXN1bHRTdGF0dXNbXCJCQURcIl0gPSAxXSA9IFwiQkFEXCI7XHJcbn0pKFByb2Nlc3NSZXN1bHRTdGF0dXMgfHwgKFByb2Nlc3NSZXN1bHRTdGF0dXMgPSB7fSkpO1xyXG5leHBvcnRzLlByb2Nlc3NSZXN1bHRTdGF0dXMgPSBQcm9jZXNzUmVzdWx0U3RhdHVzO1xyXG52YXIgUHJvY2Vzc1Jlc3VsdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByb2Nlc3NSZXN1bHQoc3RhdHVzLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgUHJvY2Vzc1Jlc3VsdC5wcm90b3R5cGUuZ2V0U3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgICB9O1xyXG4gICAgUHJvY2Vzc1Jlc3VsdC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfTtcclxuICAgIFByb2Nlc3NSZXN1bHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fdmFsdWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQcm9jZXNzUmVzdWx0O1xyXG59KCkpO1xyXG52YXIgUHJvY2Vzc1Jlc3VsdE9LID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFByb2Nlc3NSZXN1bHRPSywgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFByb2Nlc3NSZXN1bHRPSyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBQcm9jZXNzUmVzdWx0U3RhdHVzLk9LLCB2YWx1ZSkgfHwgdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9jZXNzUmVzdWx0T0s7XHJcbn0oUHJvY2Vzc1Jlc3VsdCkpO1xyXG52YXIgUHJvY2Vzc1Jlc3VsdEJBRCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQcm9jZXNzUmVzdWx0QkFELCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUHJvY2Vzc1Jlc3VsdEJBRCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBQcm9jZXNzUmVzdWx0U3RhdHVzLkJBRCwgdmFsdWUpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvY2Vzc1Jlc3VsdEJBRDtcclxufShQcm9jZXNzUmVzdWx0KSk7XHJcbnZhciBQcm9jZXNzUmVxdWVzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByb2Nlc3NSZXF1ZXN0KHVzZXIsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWREYXRhKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgcmVxdWVzdCBkYXRhIGZpZWxkczpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpIHx8IGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICBQcm9jZXNzUmVxdWVzdC5pbml0aWFsaXplID0gZnVuY3Rpb24gKHR5cGUsIHVzZXIsIGRhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIklQXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQX1Byb2Nlc3Nvcih1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiV0lGSVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBXaUZpX1Byb2Nlc3Nvcih1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQUNDT1VOVFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBY2NvdW50X1Byb2Nlc3Nvcih1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJObyByZXF1ZXN0IGhhbmRsZXIgZm9yIHJlcXVlc3QgdHlwZTpcIiArIHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUHJvY2Vzc1JlcXVlc3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUHJvY2Vzc1JlcXVlc3QgPSBQcm9jZXNzUmVxdWVzdDtcclxudmFyIFdpRmlfUHJvY2Vzc29yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFdpRmlfUHJvY2Vzc29yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gV2lGaV9Qcm9jZXNzb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgV2lGaV9Qcm9jZXNzb3IucHJvdG90eXBlLmlzVmFsaWREYXRhID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EuZnJvbSwgZnJvbSA9IF9iID09PSB2b2lkIDAgPyBudWxsIDogX2IsIF9jID0gX2EudG8sIHRvID0gX2MgPT09IHZvaWQgMCA/IG51bGwgOiBfYztcclxuICAgICAgICByZXR1cm4gISFmcm9tICYmICEhdG87XHJcbiAgICB9O1xyXG4gICAgV2lGaV9Qcm9jZXNzb3IucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdXNlciwgZGF0YSwgcHJvY2Vzc1Jlc3VsdCwgcGF5bG9hZCwgYmFzZVVybCwgcmVzLCBleGNfMTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IHRoaXMudXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NSZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDQsICwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0geyBcIm5hbWVcIjogdXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdXJuYW1lXCI6IHVzZXIuc3VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIjogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGhvbmVcIjogdXNlci5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjogbW9tZW50XzEuZGVmYXVsdChkYXRhLmZyb20pLmZvcm1hdChcIllZWVktTU0tRERcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuZFwiOiBtb21lbnRfMS5kZWZhdWx0KGRhdGEudG8pLmZvcm1hdChcIllZWVktTU0tRERcIikgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvcy5wb3N0KGJhc2VVcmwgKyBcIi9hcGkvdXNlcnMvY3JlYXRlXCIsIHsgXCJ1c2VyXCI6IHBheWxvYWQsIFwiZXZpZFwiOiBudWxsIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ludmlhIG1haWwgdXNhbmRvIHdpZmlndWVzdHMgYXBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaW52aWEgbWFpbCB1c2FuZG8gd2lmaWd1ZXN0cyBhcGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3MucG9zdChiYXNlVXJsICsgXCIvYXBpL21haWwvdXNlclwiLCB7IFwidWlkXCI6IHJlcy5kYXRhLmlkIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaW52aWEgbWFpbCB1c2FuZG8gd2lmaWd1ZXN0cyBhcGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUmVzdWx0ID0gbmV3IFByb2Nlc3NSZXN1bHRPSyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NSZXN1bHQgPSBuZXcgUHJvY2Vzc1Jlc3VsdEJBRChleGNfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyB3aWZpX3JlcG9fMS5XaUZpUmVwb3J0KHRoaXMudXNlciwgdGhpcy5kYXRhLCBwcm9jZXNzUmVzdWx0KV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXaUZpX1Byb2Nlc3NvcjtcclxufShQcm9jZXNzUmVxdWVzdCkpO1xyXG52YXIgSVBfUHJvY2Vzc29yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKElQX1Byb2Nlc3NvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIElQX1Byb2Nlc3NvcigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBJUF9Qcm9jZXNzb3IucHJvdG90eXBlLmlzVmFsaWREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvL0NoZWNrIGRhdGFcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBJUF9Qcm9jZXNzb3IucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdXNlciwgZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IHRoaXMudXNlcjtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IGlwX3JlcG9fMS5JUFJlcG9ydCh1c2VyLCBkYXRhKV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJUF9Qcm9jZXNzb3I7XHJcbn0oUHJvY2Vzc1JlcXVlc3QpKTtcclxudmFyIEFjY291bnRfUHJvY2Vzc29yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFjY291bnRfUHJvY2Vzc29yLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQWNjb3VudF9Qcm9jZXNzb3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQWNjb3VudF9Qcm9jZXNzb3IucHJvdG90eXBlLmlzVmFsaWREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvL0NoZWNrIGRhdGFcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBBY2NvdW50X1Byb2Nlc3Nvci5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VyLCBkYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gdGhpcy51c2VyO1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgYWNjX3JlcG9fMS5BY2NvdW50UmVwb3J0KHVzZXIsIGRhdGEpXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFjY291bnRfUHJvY2Vzc29yO1xyXG59KFByb2Nlc3NSZXF1ZXN0KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZZMlZ6YzI5eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dllYQndMM0J5YjJObGMzTnZjbk12Y0hKdlkyVnpjMjl5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkJRU3hyUkVGQk5FSTdRVUZETlVJc1NVRkJUU3hMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUlM5Q0xHdEVRVUVyUXp0QlFVTXZReXc0UTBGQk1rTTdRVUZETTBNc1owUkJRV2xFTzBGQlJXcEVMRWxCUVVzc2JVSkJRV2RETzBGQlFYSkRMRmRCUVVzc2JVSkJRVzFDTzBsQlFVVXNlVVJCUVVrc1EwRkJRVHRKUVVGRExESkVRVUZMTEVOQlFVRTdRVUZCUVN4RFFVRkRMRVZCUVdoRExHMUNRVUZ0UWl4TFFVRnVRaXh0UWtGQmJVSXNVVUZCWVR0QlFUUkxReXhyUkVGQmJVSTdRVUZ3UzNwRU8wbEJTVWtzZFVKQlFWa3NUVUZCTUVJc1JVRkJReXhMUVVGVE8xRkJSVFZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVNc1RVRkJUU3hEUVVGRE8xRkJRM0JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVNc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVOQlFVTTdTVUZGUkN4cFEwRkJVeXhIUVVGVU8xRkJSVXNzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGRlJDeG5RMEZCVVN4SFFVRlNPMUZCUTBrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkZSQ3c0UWtGQlRTeEhRVUZPTzFGQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0SlFVTjBReXhEUVVGRE8wbEJRMHdzYjBKQlFVTTdRVUZCUkN4RFFVRkRMRUZCZEVKRUxFbEJjMEpETzBGQlJVUTdTVUZCT0VJc2JVTkJRV0U3U1VGRGRrTXNlVUpCUVZrc1MwRkJVenRsUVVOcVFpeHJRa0ZCVFN4dFFrRkJiVUlzUTBGQlF5eEZRVUZGTEVWQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGRFRDeHpRa0ZCUXp0QlFVRkVMRU5CUVVNc1FVRktSQ3hEUVVFNFFpeGhRVUZoTEVkQlNURkRPMEZCUTBRN1NVRkJLMElzYjBOQlFXRTdTVUZEZUVNc01FSkJRVmtzUzBGQlV6dGxRVU5xUWl4clFrRkJUU3h0UWtGQmJVSXNRMEZCUXl4SFFVRkhMRVZCUVVNc1MwRkJTeXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZEVEN4MVFrRkJRenRCUVVGRUxFTkJRVU1zUVVGS1JDeERRVUVyUWl4aFFVRmhMRWRCU1RORE8wRkJSVVE3U1VGSlNTeDNRa0ZCV1N4SlFVRlJMRVZCUVVNc1NVRkJVVHRSUVVWNlFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkRMRWxCUVVrc1EwRkJRenRSUVVObUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVTXNTVUZCU1N4RFFVRkRPMUZCUTJZc1NVRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVNN1dVRkRka0lzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4MVEwRkJkVU1zUjBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzcEdPMUZCUVVFc1EwRkJRenRKUVVOT0xFTkJRVU03U1VGRlRTeDVRa0ZCVlN4SFFVRnFRaXhWUVVGclFpeEpRVUZYTEVWQlFVTXNTVUZCVVN4RlFVRkRMRWxCUVZFN1VVRkZNME1zVVVGQlR5eEpRVUZKTEVWQlExZzdXVUZGU1N4TFFVRkxMRWxCUVVrN1owSkJRMHdzVDBGQlR5eEpRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEzWkRMRTFCUVUwN1dVRkRUaXhMUVVGTExFMUJRVTA3WjBKQlExQXNUMEZCVHl4SlFVRkpMR05CUVdNc1EwRkJReXhKUVVGSkxFVkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTNwRExFMUJRVTA3V1VGRFRpeExRVUZMTEZOQlFWTTdaMEpCUTFZc1QwRkJUeXhKUVVGSkxHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZETlVNc1RVRkJUVHRaUVVOT08yZENRVU5KTEUxQlFVMHNTMEZCU3l4RFFVRkRMSGxEUVVGMVF5eEpRVUZOTEVOQlFVTXNRMEZCUXp0VFFVVnNSVHRKUVVOTUxFTkJRVU03U1VGTlRDeHhRa0ZCUXp0QlFVRkVMRU5CUVVNc1FVRnlRMFFzU1VGeFEwTTdRVUUwUms4c2QwTkJRV003UVVGNlJuUkNPMGxCUVRaQ0xHdERRVUZqTzBsQlFUTkRPenRKUVdsRVFTeERRVUZETzBsQk9VTkhMRzlEUVVGWExFZEJRVmdzVlVGQldTeEZRVUZ0UWp0WlFVRnNRaXhaUVVGVExFVkJRVlFzU1VGQlNTeHRRa0ZCUXl4SlFVRkpMRXRCUVVFc1JVRkJReXhWUVVGUExFVkJRVkFzUlVGQlJTeHRRa0ZCUXl4SlFVRkpMRXRCUVVFN1VVRkZNVUlzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVUU3U1VGRGVrSXNRMEZCUXp0SlFVVkxMRFpDUVVGSkxFZEJRVlk3T3pzN096dDNRa0ZIVVN4SlFVRkpMRWRCUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dDNRa0ZEWml4SlFVRkpMRWRCUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8zZENRVU5xUXl4aFFVRmhMRWRCUVhGQ0xFbEJRVWtzUTBGQlF6czdPenQzUWtGTGFrTXNUMEZCVHl4SFFVRkRMRVZCUVVNc1RVRkJUU3hGUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKT3pSQ1FVTnVRaXhUUVVGVExFVkJRVU1zU1VGQlNTeERRVUZETEU5QlFVODdORUpCUTNSQ0xFOUJRVThzUlVGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3pzMFFrRkRiRUlzVDBGQlR5eEZRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxPelJDUVVOc1FpeFBRVUZQTEVWQlFVTXNaMEpCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJRenMwUWtGRE9VTXNTMEZCU3l4RlFVRkRMR2RDUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zUlVGQlJTeERRVUZCTzNkQ1FVbHdSQ3hQUVVGUExFZEJRVU1zZFVKQlFYVkNMRU5CUVVFN2QwSkJSek5DTEhGQ1FVRk5MRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVWtzVDBGQlR5eHpRa0ZCYlVJc1JVRkJReXhGUVVGRExFMUJRVTBzUlVGQlF5eFBRVUZQTEVWQlFVTXNUVUZCVFN4RlFVRkRMRWxCUVVrc1JVRkJReXhEUVVGRE96UkNRVVZ3Uml4clEwRkJhME03TUVKQlJtdEVPenQzUWtGQmFFWXNSMEZCUnl4SFFVRkRMRk5CUVRSRk8zZENRVVZ3Uml4clEwRkJhME03ZDBKQlEyeERMSEZDUVVGTkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVa3NUMEZCVHl4dFFrRkJaMElzUlVGQlF5eEZRVUZETEV0QlFVc3NSVUZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETEVWQlFVRTdPM2RDUVVSb1JTeHJRMEZCYTBNN2QwSkJRMnhETEZOQlFXZEZMRU5CUVVNN2QwSkJSV3BGTEdGQlFXRXNSMEZCUXl4SlFVRkpMR1ZCUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdPenM3ZDBKQlN6TkRMR0ZCUVdFc1IwRkJReXhKUVVGSkxHZENRVUZuUWl4RFFVRkRMRXRCUVVjc1EwRkJReXhEUVVGQk96czBRa0ZKTTBNc2MwSkJRVThzU1VGQlNTeHpRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4aFFVRmhMRU5CUVVNc1JVRkJRenM3T3p0TFFVVTVSRHRKUVVkTUxIRkNRVUZETzBGQlFVUXNRMEZCUXl4QlFXcEVSQ3hEUVVFMlFpeGpRVUZqTEVkQmFVUXhRenRCUVVWRU8wbEJRVEpDTEdkRFFVRmpPMGxCUVhwRE96dEpRV2RDUVN4RFFVRkRPMGxCWkVjc2EwTkJRVmNzUjBGQldDeFZRVUZaTEVsQlFWRTdVVUZGYUVJc1dVRkJXVHRSUVVOYUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlEyaENMRU5CUVVNN1NVRkRTeXd5UWtGQlNTeEhRVUZXT3pzN08yZENRVVZSTEVsQlFVa3NSMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVU5tTEVsQlFVa3NSMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8yZENRVVZ1UWl4elFrRkJUeXhKUVVGSkxHdENRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRE96czdTMEZGYkVNN1NVRkZUQ3h0UWtGQlF6dEJRVUZFTEVOQlFVTXNRVUZvUWtRc1EwRkJNa0lzWTBGQll5eEhRV2RDZUVNN1FVRkZSRHRKUVVGblF5eHhRMEZCWXp0SlFVRTVRenM3U1VGblFrRXNRMEZCUXp0SlFXUkhMSFZEUVVGWExFZEJRVmdzVlVGQldTeEpRVUZSTzFGQlJXaENMRmxCUVZrN1VVRkRXaXhQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUTBzc1owTkJRVWtzUjBGQlZqczdPenRuUWtGRlVTeEpRVUZKTEVkQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRFppeEpRVUZKTEVkQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRmJrSXNjMEpCUVU4c1NVRkJTU3gzUWtGQllTeERRVUZETEVsQlFVa3NSVUZCUXl4SlFVRkpMRU5CUVVNc1JVRkJRenM3TzB0QlJYWkRPMGxCUlV3c2QwSkJRVU03UVVGQlJDeERRVUZETEVGQmFFSkVMRU5CUVdkRExHTkJRV01zUjBGblFqZERJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFjY291bnRSZXBvcnQgPSB2b2lkIDA7XHJcbnZhciByZXBvcnRfMSA9IHJlcXVpcmUoXCIuL3JlcG9ydFwiKTtcclxudmFyIEFjY291bnRSZXBvcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQWNjb3VudFJlcG9ydCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFjY291bnRSZXBvcnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQWNjb3VudFJlcG9ydC5wcm90b3R5cGUuZ2V0VGVtcGxhdGVGaWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJhY2NvdW50LnR4dFwiO1xyXG4gICAgfTtcclxuICAgIEFjY291bnRSZXBvcnQucHJvdG90eXBlLm1hcEJhc2ljRGF0YSA9IGZ1bmN0aW9uICh1c2VyLCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1hcDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgbWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiTkFNRVwiOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTVVJOQU1FXCI6IHVzZXIuc3VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcIkVNQUlMXCI6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFTUFJTF9BTFRcIjogdXNlci5tYWlsQWx0ZXJuYXRlcy5sZW50Z2ggPiAwID8gdXNlci5tYWlsQWx0ZXJuYXRlcy5qb2luKFwiO1wiKSA6ICctLS0nLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUEhPTkVcIjogdXNlci5waG9uZSB8fCAnLS0tJyxcclxuICAgICAgICAgICAgICAgICAgICBcIkVYUElSQVRJT05cIjogdXNlci5leHBpcmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSU5GTlVVSURcIjogdXNlci51dWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUk9MRVwiOiB1c2VyLnJvbGVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbWFwXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQWNjb3VudFJlcG9ydC5wcm90b3R5cGUubWFwQWR2YW5jZWREYXRhID0gZnVuY3Rpb24gKHVzZXIsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdHh0LCBtYXA7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubWFwQmFzaWNEYXRhKHVzZXIsIGRhdGEpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0PVwiPT09PT09PT09PT09PT09PT09PT09ICBFc2l0byBlc2VjdXppb25lIGF1dG9tYXRpY2EgID09PT09PT09PT09PT09PT09PT09PGJyPlwiXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgcHJvY1Jlc3VsdERhdGE6c3RyaW5nPW1hcFtcInByb2Nlc3NSZXN1bHRcIl0gfHwgbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcjpcIix0aGlzLnByb2Nlc3NSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9jZXNzUmVzdWx0ICYmIHRoaXMucHJvY2Vzc1Jlc3VsdC5zdGF0dXM9PSdPSycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dCs9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvY2Vzc1Jlc3VsdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dD1cIk5PTiBHRVNUSVRBXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtcIltBRERJVElPTkFMX0RBVEFdXCJdPXR4dDsqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbWFwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFjY291bnRSZXBvcnQ7XHJcbn0ocmVwb3J0XzEuUmVwb3J0KSk7XHJcbmV4cG9ydHMuQWNjb3VudFJlcG9ydCA9IEFjY291bnRSZXBvcnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXTmpMbkpsY0c4dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5aGNIQXZjbVZ3YjNKMGN5OWhZMk11Y21Wd2J5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzYlVOQlFTdENPMEZCUlM5Q08wbEJRVFJDTEdsRFFVRk5PMGxCUVd4RE96dEpRVzFFUVN4RFFVRkRPMGxCYUVSSExESkRRVUZ0UWl4SFFVRnVRanRSUVVOSkxFOUJRVThzWVVGQllTeERRVUZETzBsQlEzcENMRU5CUVVNN1NVRkhTeXh2UTBGQldTeEhRVUZzUWl4VlFVRnRRaXhKUVVGUkxFVkJRVU1zU1VGQlVUdDFRMEZCUlN4UFFVRlBPenM3WjBKQlIycERMRWRCUVVjc1IwRkJRenR2UWtGRFNpeE5RVUZOTEVWQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrN2IwSkJRMmhDTEZOQlFWTXNSVUZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUenR2UWtGRGRFSXNUMEZCVHl4RlFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTE8yOUNRVU5zUWl4WFFVRlhMRVZCUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN6dHZRa0ZEYUVZc1QwRkJUeXhGUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NTMEZCU3p0dlFrRkRNMElzV1VGQldTeEZRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZPMjlDUVVNMVFpeFZRVUZWTEVWQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrN2IwSkJRM0JDTEUxQlFVMHNSVUZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTVHRwUWtGRFppeERRVUZCTzJkQ1FVVlVMSE5DUVVGUExFZEJRVWNzUlVGQlF6czdPMHRCUldRN1NVRkZTeXgxUTBGQlpTeEhRVUZ5UWl4VlFVRnpRaXhKUVVGUkxFVkJRVU1zU1VGQlVUdDFRMEZCUlN4UFFVRlBPenM3T3p0M1FrRkZlRU1zUjBGQlJ5eEhRVUZSTEVWQlFVVXNRMEZCUXp0M1FrRkRUaXh4UWtGQlRTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zUlVGQlFUczdkMEpCUVRGRExFZEJRVWNzUjBGQlN5eFRRVUZyUXp0M1FrRkhPVU03T3pzN096czdPenM3T3pzN2RVUkJZU3RDTzNkQ1FVVXZRaXh6UWtGQlR5eEhRVUZITEVWQlFVTTdPenM3UzBGRlpEdEpRVVZNTEc5Q1FVRkRPMEZCUVVRc1EwRkJReXhCUVc1RVJDeERRVUUwUWl4bFFVRk5MRWRCYlVScVF6dEJRVVZQTEhORFFVRmhJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SZXBvcnRGYWN0b3J5ID0gdm9pZCAwO1xyXG52YXIgd2lmaV9yZXBvXzEgPSByZXF1aXJlKFwiLi93aWZpLnJlcG9cIik7XHJcbnZhciBpcF9yZXBvXzEgPSByZXF1aXJlKFwiLi9pcC5yZXBvXCIpO1xyXG52YXIgYWNjX3JlcG9fMSA9IHJlcXVpcmUoXCIuL2FjYy5yZXBvXCIpO1xyXG52YXIgUmVwb3J0RmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlcG9ydEZhY3RvcnkoKSB7XHJcbiAgICB9XHJcbiAgICBSZXBvcnRGYWN0b3J5LmluaXRpYWxpemUgPSBmdW5jdGlvbiAodHlwZSwgdXNlciwgZGF0YSkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiSVBcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaXBfcmVwb18xLklQUmVwb3J0KHVzZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJXSUZJXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHdpZmlfcmVwb18xLldpRmlSZXBvcnQodXNlciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFDQ09VTlRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgYWNjX3JlcG9fMS5BY2NvdW50UmVwb3J0KHVzZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgUmVxdWVzdCB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVwb3J0RmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5SZXBvcnRGYWN0b3J5ID0gUmVwb3J0RmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm1GamRHOXllUzV5WlhCdkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dllYQndMM0psY0c5eWRITXZabUZqZEc5eWVTNXlaWEJ2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEhsRFFVRnpRenRCUVVOMFF5eHhRMEZCYTBNN1FVRkRiRU1zZFVOQlFYZERPMEZCUlhoRE8wbEJRVUU3U1VGdFFrRXNRMEZCUXp0SlFXaENWU3gzUWtGQlZTeEhRVUZxUWl4VlFVRnJRaXhKUVVGWExFVkJRVU1zU1VGQlVTeEZRVUZETEVsQlFWRTdVVUZETTBNc1VVRkJUeXhKUVVGSkxFVkJRMWc3V1VGRFNTeExRVUZMTEVsQlFVazdaMEpCUTB3c1QwRkJUeXhKUVVGSkxHdENRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8yZENRVU5zUXl4TlFVRk5PMWxCUTA0c1MwRkJTeXhOUVVGTk8yZENRVU5RTEU5QlFVOHNTVUZCU1N4elFrRkJWU3hEUVVGRExFbEJRVWtzUlVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0blFrRkRjRU1zVFVGQlRUdFpRVU5PTEV0QlFVc3NVMEZCVXp0blFrRkRWaXhQUVVGUExFbEJRVWtzZDBKQlFXRXNRMEZCUXl4SlFVRkpMRVZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3WjBKQlEzWkRMRTFCUVUwN1dVRkRUanRuUWtGRFNTeE5RVUZOTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eERRVUZCTzFOQlF6RkRPMGxCUTB3c1EwRkJRenRKUVVOTUxHOUNRVUZETzBGQlFVUXNRMEZCUXl4QlFXNUNSQ3hKUVcxQ1F6dEJRVWRQTEhORFFVRmhJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLklQUmVwb3J0ID0gdm9pZCAwO1xyXG52YXIgcmVwb3J0XzEgPSByZXF1aXJlKFwiLi9yZXBvcnRcIik7XHJcbnZhciBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyc1wiKTtcclxudmFyIElQUmVwb3J0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKElQUmVwb3J0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gSVBSZXBvcnQoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMudG9Ib3N0TmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBkb21haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5hbWUgPyBuYW1lICsgXCIuXCIgKyBkb21haW4gOiBcIkRIQ1BcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIElQUmVwb3J0LnByb3RvdHlwZS5nZXRUZW1wbGF0ZUZpbGVOYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImlwLnR4dFwiO1xyXG4gICAgfTtcclxuICAgIElQUmVwb3J0LnByb3RvdHlwZS5tYXBCYXNpY0RhdGEgPSBmdW5jdGlvbiAodXNlciwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBmcm9tLCB0bywgYWN0aW9uLCBoLCBob3N0bmFtZSwgSE9TVF9BQ1RJT05fTUFQLCBIT1NUX0NPTkZJR19NQVAsIGxvYywgbWFwO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0gZGF0YS5mcm9tLCB0byA9IGRhdGEudG8sIGFjdGlvbiA9IGRhdGEuYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdG8gfHwgZnJvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWUgPSBoLm5hbWUgPyBoLm5hbWUgKyBcIi5cIiArIGguZG9tYWluIDogXCJESENQIDogXCIgKyBoLm1hYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgSE9TVF9BQ1RJT05fTUFQID0geyBcIklUQVwiOiB7IFwiY3JlYXRlXCI6IFwiTnVvdm8gbm9kb1wiLCBcInVwZGF0ZVwiOiBcIkFnZ2lvcm5hbWVudG8gZGF0aSBkZWwgbm9kb1wiLCBcImRlbGV0ZVwiOiBcIlJpbW96aW9uZSBub2RvXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRU5HXCI6IHsgXCJjcmVhdGVcIjogXCJOZXcgaG9zdFwiLCBcInVwZGF0ZVwiOiBcIlVwZGF0ZSBob3N0IGRhdGFcIiwgXCJkZWxldGVcIjogXCJEZWxldGUgaG9zdFwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSE9TVF9DT05GSUdfTUFQID0geyBcIlNUQVRJQ1wiOiBcIlNUQVRJQ09cIiwgXCJESENQXCI6IFwiREhDUFwiLCBcIlNUQVRJQ1ZNXCI6IFwiU1RBVElDTyAtIFZJUlRVQUxFXCIgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGVscGVyc18xLmhlbHBlcnMuZ2V0UG9ydExvY2F0aW9uKGgucG9ydCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxvYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbG9jYXRpb24gZm91bmQgYnkgcG9ydDogXCIgKyBoLnBvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gPT0gJ3VwZGF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lID0gZnJvbS5uYW1lID8gZnJvbS5uYW1lICsgXCIuXCIgKyBmcm9tLmRvbWFpbiA6IFwiREhDUCAgXCIgKyBmcm9tLm1hYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFDVElPTl9JVEFcIjogSE9TVF9BQ1RJT05fTUFQLklUQVthY3Rpb25dICsgXCIgLSBcIiArIGhvc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBQ1RJT05fRU5HXCI6IEhPU1RfQUNUSU9OX01BUC5FTkdbYWN0aW9uXSArIFwiIC0gXCIgKyBob3N0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTkFNRVwiOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNVUk5BTUVcIjogdXNlci5zdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFTUFJTFwiOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQSE9ORVwiOiB1c2VyLnBob25lIHx8ICctLS0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIX01BQ1wiOiBoLm1hYy50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOT1RFXCI6IGgubm90ZXMgfHwgXCItLS1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSF9OQU1FXCI6IHRoaXMudG9Ib3N0TmFtZShoLm5hbWUsIGguZG9tYWluKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ09ORklHXCI6IEhPU1RfQ09ORklHX01BUFtoLmNvbmZpZ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJVSUxEXCI6IGxvYy5idWlsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRkxPT1JcIjogbG9jLmZsb29yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJST09NXCI6IGxvYy5yb29tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQT1JUXCI6IGxvYy5wb3J0X2FsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShhY3Rpb24gPT0gJ3VwZGF0ZScgJiYgZnJvbSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoZWxwZXJzXzEuaGVscGVycy5nZXRQb3J0TG9jYXRpb24oZnJvbS5wb3J0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2MgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtcIkhfTUFDXCJdID0gdGhpcy5kaXNwbGF5Q2hhbmdlcyhmcm9tLm1hYywgbWFwW1wiSF9NQUNcIl0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwW1wiSF9OQU1FXCJdID0gdGhpcy5kaXNwbGF5Q2hhbmdlcyh0aGlzLnRvSG9zdE5hbWUoZnJvbS5uYW1lLCBmcm9tLmRvbWFpbiksIG1hcFtcIkhfTkFNRVwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJDT05GSUdcIl0gPSB0aGlzLmRpc3BsYXlDaGFuZ2VzKEhPU1RfQ09ORklHX01BUFtmcm9tLmNvbmZpZ10sIG1hcFtcIkNPTkZJR1wiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJCVUlMRFwiXSA9IHRoaXMuZGlzcGxheUNoYW5nZXMobG9jLmJ1aWxkLCBtYXBbXCJCVUlMRFwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJGTE9PUlwiXSA9IHRoaXMuZGlzcGxheUNoYW5nZXMobG9jLmZsb29yLCBtYXBbXCJGTE9PUlwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJST09NXCJdID0gdGhpcy5kaXNwbGF5Q2hhbmdlcyhsb2Mucm9vbSwgbWFwW1wiUk9PTVwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJQT1JUXCJdID0gdGhpcy5kaXNwbGF5Q2hhbmdlcyhsb2MucG9ydF9hbGlhcywgbWFwW1wiUE9SVFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdXNpYW1vIHBlciBJUCBTVUJKPSBBQ1RJT05fSVRBICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFtcIlNVQkpcIl0gPSBtYXBbXCJBQ1RJT05fSVRBXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbWFwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgSVBSZXBvcnQucHJvdG90eXBlLmRpc3BsYXlDaGFuZ2VzID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XHJcbiAgICAgICAgLypjb25zb2xlLmxvZyhcImZyb206XCIsZnJvbSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRvOlwiLHRvKSovXHJcbiAgICAgICAgZnJvbSA9IGZyb20gfHwgXCJcIjtcclxuICAgICAgICB0byA9IHRvIHx8IFwiXCI7XHJcbiAgICAgICAgZnJvbSA9IGZyb20udG9TdHJpbmcoKTtcclxuICAgICAgICB0byA9IHRvLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIGZyb20udG9Mb3dlckNhc2UoKSA9PSB0by50b0xvd2VyQ2FzZSgpID8gdG8udG9VcHBlckNhc2UoKSA6IGZyb20udG9VcHBlckNhc2UoKSArIFwiID09PiA8Yj5cIiArIHRvLnRvVXBwZXJDYXNlKCkgKyBcIjwvYj5cIjtcclxuICAgIH07XHJcbiAgICBJUFJlcG9ydC5wcm90b3R5cGUubWFwQWR2YW5jZWREYXRhID0gZnVuY3Rpb24gKHVzZXIsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdHh0LCBmcm9tLCB0bywgYWN0aW9uLCBoLCBtYXAsIG5ldHdvcms7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSBkYXRhLmZyb20sIHRvID0gZGF0YS50bywgYWN0aW9uID0gZGF0YS5hY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0byB8fCBmcm9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLm1hcEJhc2ljRGF0YSh1c2VyLCBkYXRhKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmsgPSBcIk4vQVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJVU0VfTUFDX0JVU1lcIl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG8gJiYgdG9bXCJ1c2VNYWNCdXN5XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJVU0VfTUFDX0JVU1lcIl0gPSBcIkF0dGVuemlvbmUsIGwndXRlbnRlIGhhIGNvbmZlcm1hdG8gbCdpbnRlbnppb25lIGRpIHZvbGVyIGdlc3RpcmUgaWwgbm9kbyBjb24gbWFjIGFkZHJlc3MgXCIgKyB0b1tcIm1hY1wiXS50b1VwcGVyQ2FzZSgpICsgXCIgY2hlIHJpc3VsdGEgZ2lcXHUwMEUwIHJlZ2lzdHJhdG8uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaC5jb25maWchPVwiREhDUFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV0OmFueT1hd2FpdCBoZWxwZXJzLmdldFBvcnROZXR3b3JrKGgucG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrID0gbmV0ID8gbmV0Lm5ldHdvcms6IFwiTi9BXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrID0gXCIxNDEuMTA4LjEzLjAvMjRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBOT04gSU5TRVJJUkUgLS0tPiBNT1NUUkFSRSBMRSBWTEFOIFNVR0dFUklURSBERUwgUElBTk8gVE9ET1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQ9XCI9PT09PT09PT09PT09PT09PT09PT0gIGRhdGkgYWdnaXVudGl2aSAgPT09PT09PT09PT09PT09PT09PT08YnI+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0Kz1oZWxwZXJzLmFkZEVtcHR5U3BhY2VzVG9FbmQoMTgsXCJOZXR3b3JrIHN1Z2dlcml0YVwiKSsgXCIgPSBcIisgbmV0d29yaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc1Jlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ICs9IFwiPT09PT09PT09PT09PT09PT09PT09ICBFc2l0byBlc2VjdXppb25lIGF1dG9tYXRpY2EgID09PT09PT09PT09PT09PT09PT09PGJyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0ICs9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvY2Vzc1Jlc3VsdC5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbXCJQUk9DRVNTX1JFU1VMVFwiXSA9IHR4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG1hcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBJUFJlcG9ydDtcclxufShyZXBvcnRfMS5SZXBvcnQpKTtcclxuZXhwb3J0cy5JUFJlcG9ydCA9IElQUmVwb3J0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhWEF1Y21Wd2J5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwyRndjQzl5WlhCdmNuUnpMMmx3TG5KbGNHOHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVUZCTEcxRFFVRXJRanRCUVVNdlFpeHpRMEZCYTBNN1FVRkpiRU03U1VGQmRVSXNORUpCUVUwN1NVRkJOMEk3VVVGQlFTeHhSVUZ2U1VNN1VVRTVSRWNzWjBKQlFWVXNSMEZCUXl4VlFVRkRMRWxCUVZjc1JVRkJReXhOUVVGaE8xbEJRMnBETEU5QlFVOHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJTU3hKUVVGSkxGTkJRVWtzVFVGQlVTeERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVFN1VVRkROME1zUTBGQlF5eERRVUZCT3p0SlFUUkVUQ3hEUVVGRE8wbEJiRWxITEhORFFVRnRRaXhIUVVGdVFqdFJRVU5KTEU5QlFVOHNVVUZCVVN4RFFVRkRPMGxCUTNCQ0xFTkJRVU03U1VGRlN5d3JRa0ZCV1N4SFFVRnNRaXhWUVVGdFFpeEpRVUZSTEVWQlFVTXNTVUZCVVR0MVEwRkJSU3hQUVVGUE96czdPenQzUWtGRmNFTXNTVUZCU1N4SFFVRmpMRWxCUVVrc1MwRkJiRUlzUlVGQlF5eEZRVUZGTEVkQlFWY3NTVUZCU1N4SFFVRm1MRVZCUVVNc1RVRkJUU3hIUVVGSkxFbEJRVWtzVDBGQlVpeERRVUZUTzNkQ1FVTjRRaXhEUVVGRExFZEJRVVVzUlVGQlJTeEpRVUZKTEVsQlFVa3NRMEZCUXp0M1FrRkRaQ3hSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlF5eEhRVUZITEVkQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN2QwSkJRM2hFTEdWQlFXVXNSMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJReXhGUVVGRExGRkJRVkVzUlVGQlF5eFpRVUZaTEVWQlFVTXNVVUZCVVN4RlFVRkRMRFpDUVVFMlFpeEZRVUZETEZGQlFWRXNSVUZCUXl4blFrRkJaMElzUlVGQlF6czBRa0ZET1VZc1MwRkJTeXhGUVVGRExFVkJRVU1zVVVGQlVTeEZRVUZETEZWQlFWVXNSVUZCUXl4UlFVRlJMRVZCUVVNc2EwSkJRV3RDTEVWQlFVTXNVVUZCVVN4RlFVRkRMR0ZCUVdFc1JVRkJRenQ1UWtGREwwVXNRMEZCUXp0M1FrRkZkRUlzWlVGQlpTeEhRVUZMTEVWQlFVTXNVVUZCVVN4RlFVRkRMRk5CUVZNc1JVRkJReXhOUVVGTkxFVkJRVU1zVFVGQlRTeEZRVUZETEZWQlFWVXNSVUZCUXl4dlFrRkJiMElzUlVGQlF5eERRVUZCTzNkQ1FVVm9SaXh4UWtGQlRTeHBRa0ZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVRTdPM2RDUVVFM1F5eEhRVUZITEVkQlFVc3NVMEZCY1VNN2QwSkJSV3BFTEVsQlFVY3NRMEZCUXl4SFFVRkhMRVZCUTFBN05FSkJRMGtzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4blEwRkJPRUlzUTBGQlF5eERRVUZETEVsQlFVMHNRMEZCUXl4RFFVRkJPM2xDUVVNeFJEdDNRa0ZGUkN4SlFVRkhMRTFCUVUwc1NVRkJSU3hSUVVGUkxFVkJRVU03TkVKQlEyaENMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGRExFZEJRVWNzUjBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFZEJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0NVFrRkRlRVU3ZDBKQlIwY3NSMEZCUnl4SFFVRkxPelJDUVVOQkxGbEJRVmtzUlVGQlNTeGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGTkxGRkJRVlU3TkVKQlF6TkVMRmxCUVZrc1JVRkJTU3hsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRk5MRkZCUVZVN05FSkJRek5FTEUxQlFVMHNSVUZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTVHMwUWtGRGFFSXNVMEZCVXl4RlFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUE96UkNRVU4wUWl4UFFVRlBMRVZCUVVNc1NVRkJTU3hEUVVGRExFdEJRVXM3TkVKQlEyeENMRTlCUVU4c1JVRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEV0QlFVczdORUpCUXpOQ0xFOUJRVThzUlVGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1JVRkJSVHMwUWtGRE0wSXNUVUZCVFN4RlFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUzBGQlN6czBRa0ZEZGtJc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZET3pSQ1FVTXhReXhSUVVGUkxFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN05FSkJRMjVETEU5QlFVOHNSVUZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTenMwUWtGRGFrSXNUMEZCVHl4RlFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTE96UkNRVU5xUWl4TlFVRk5MRVZCUVVNc1IwRkJSeXhEUVVGRExFbEJRVWs3TkVKQlEyWXNUVUZCVFN4RlFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVk8zbENRVU40UWl4RFFVRkJPelpDUVVWT0xFTkJRVUVzVFVGQlRTeEpRVUZGTEZGQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVFc1JVRkJlRUlzZDBKQlFYZENPM2RDUVVWdVFpeHhRa0ZCVFN4cFFrRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVFN08zZENRVUUxUXl4SFFVRkhMRWRCUVVNc1UwRkJkME1zUTBGQlF6dDNRa0ZITjBNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN05FSkJRM1pFTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZET3pSQ1FVTjJSaXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czBRa0ZETjBVc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN05FSkJRM2hFTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZET3pSQ1FVTjRSQ3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenMwUWtGRGNrUXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUVRzN08zZENRVWxvUlN4NVEwRkJlVU03ZDBKQlEzcERMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlF5eEhRVUZITEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVFN2QwSkJSVGRDTEhOQ1FVRlBMRWRCUVVjc1JVRkJRenM3T3p0TFFVbGlPMGxCVDBRc2FVTkJRV01zUjBGQlpDeFZRVUZsTEVsQlFWY3NSVUZCUXl4RlFVRlRPMUZCUldoRE95dENRVU4xUWp0UlFVTjJRaXhKUVVGSkxFZEJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUVR0UlFVTm1MRVZCUVVVc1IwRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZCTzFGQlExb3NTVUZCU1N4SFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlFUdFJRVU53UWl4RlFVRkZMRWRCUVVNc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXcENMRTlCUVU4c1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZGTEVWQlFVVXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEdkQ1FVRlhMRVZCUVVVc1EwRkJReXhYUVVGWExFVkJRVVVzVTBGQlRTeERRVUZCTzBsQlF6TklMRU5CUVVNN1NVRkhTeXhyUTBGQlpTeEhRVUZ5UWl4VlFVRnpRaXhKUVVGUkxFVkJRVU1zU1VGQlVUdDFRMEZCUlN4UFFVRlBPenM3T3p0M1FrRkZlRU1zUjBGQlJ5eEhRVUZSTEVWQlFVVXNRMEZCUXp0M1FrRkRZaXhKUVVGSkxFZEJRV01zU1VGQlNTeExRVUZzUWl4RlFVRkRMRVZCUVVVc1IwRkJWeXhKUVVGSkxFZEJRV1lzUlVGQlF5eE5RVUZOTEVkQlFVa3NTVUZCU1N4UFFVRlNMRU5CUVZNN2QwSkJRM2hDTEVOQlFVTXNSMEZCUlN4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRE8zZENRVU5PTEhGQ1FVRk5MRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkJPenQzUWtGQk1VTXNSMEZCUnl4SFFVRkxMRk5CUVd0RE8zZENRVU14UXl4UFFVRlBMRWRCUVVNc1MwRkJTeXhEUVVGRE8zZENRVVZzUWl4SFFVRkhMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVU1zUlVGQlJTeERRVUZCTzNkQ1FVVjBRaXhKUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUTNwQ096UkNRVU5KTEVkQlFVY3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJReXc0UmtGQk5FWXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeHpRMEZCT0VJc1EwRkJRVHQ1UWtGRGVFczdkMEpCUlVRN096czdPenM3T3pzd1FrRlRSVHQzUWtGRlJqczdPekJDUVVkRk8zZENRVWRHTEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkRkRUk3TkVKQlEwa3NSMEZCUnl4SlFVRkZMRGhGUVVFNFJTeERRVUZCT3pSQ1FVTnVSaXhIUVVGSExFbEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdlVUpCUTNaRU8zZENRVVZFTEVkQlFVY3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eEhRVUZETEVkQlFVY3NRMEZCUXp0M1FrRkhNMElzYzBKQlFVOHNSMEZCUnl4RlFVRkRPenM3TzB0QlJXSTdTVUZEVEN4bFFVRkRPMEZCUVVRc1EwRkJReXhCUVhCSlJDeERRVUYxUWl4bFFVRk5MRWRCYjBrMVFqdEJRVVZQTERSQ1FVRlJJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUmVuZGVyVHlwZSA9IGV4cG9ydHMuUmVwb3J0ID0gdm9pZCAwO1xyXG4vKmltcG9ydCB7V2lGaVJlcG9ydH0gZnJvbSAnLi93aWZpLnJlcG8nXHJcbmltcG9ydCB7SVBSZXBvcnR9IGZyb20gJy4vaXAucmVwbydcclxuaW1wb3J0IHtBY2NvdW50UmVwb3J0fSBmcm9tICcuL2FjYy5yZXBvJyovXHJcbnZhciBmc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJmc1wiKSk7XHJcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG52YXIgUmVuZGVyVHlwZTtcclxuKGZ1bmN0aW9uIChSZW5kZXJUeXBlKSB7XHJcbiAgICBSZW5kZXJUeXBlW1JlbmRlclR5cGVbXCJCQVNJQ1wiXSA9IDBdID0gXCJCQVNJQ1wiO1xyXG4gICAgUmVuZGVyVHlwZVtSZW5kZXJUeXBlW1wiQURWQU5DRURcIl0gPSAxXSA9IFwiQURWQU5DRURcIjtcclxufSkoUmVuZGVyVHlwZSB8fCAoUmVuZGVyVHlwZSA9IHt9KSk7XHJcbmV4cG9ydHMuUmVuZGVyVHlwZSA9IFJlbmRlclR5cGU7XHJcbnZhciBSZXBvcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXBvcnQodXNlciwgZGF0YSwgcmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcyA9PT0gdm9pZCAwKSB7IHJlcyA9IG51bGw7IH1cclxuICAgICAgICB0aGlzLnVzZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzUmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN1YmplY3QgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NSZXN1bHQgPSByZXM7XHJcbiAgICB9XHJcbiAgICBSZXBvcnQucHJvdG90eXBlLmdldFByb2Nlc3NSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1Jlc3VsdDtcclxuICAgIH07XHJcbiAgICBSZXBvcnQucHJvdG90eXBlLmdldFN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdDtcclxuICAgIH07XHJcbiAgICBSZXBvcnQucHJvdG90eXBlLnJlbmRlckFzID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZmlsZU5hbWUsIGZpbGVQYXRoLCB0eHQsIG1kO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IHRoaXMuZ2V0VGVtcGxhdGVGaWxlTmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aCA9IFwic2VydmVyL3RleHQvXCIgKyBSZW5kZXJUeXBlW3R5cGVdICsgXCIvXCIgKyBmaWxlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUoZmlsZVBhdGgudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZnNfMS5kZWZhdWx0LmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIk1pc3NpbmcgZmlsZSB0ZW1wbGF0ZTogXCIgKyBmaWxlUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gZnNfMS5kZWZhdWx0LnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubWFwRGF0YSh0aGlzLnVzZXIsIHRoaXMuZGF0YSwgdHlwZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdCA9IG1kWydTVUJKJ10gfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gdGhpcy5yZXBsYWNlRmllbGRWYWx1ZXModHh0LCBtZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IHR4dC5yZXBsYWNlKC9cXFtVU0VSX0ZVTExfTkFNRVxcXS9naSwgdGhpcy51c2VyLm5hbWUgKyBcIiBcIiArIHRoaXMudXNlci5zdXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHR4dF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlcG9ydC5wcm90b3R5cGUubWFwRGF0YSA9IGZ1bmN0aW9uICh1c2VyLCBkYXRhLCByZXBUeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoIChyZXBUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUmVuZGVyVHlwZS5CQVNJQzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcEJhc2ljRGF0YSh1c2VyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJlbmRlclR5cGUuQURWQU5DRUQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBBZHZhbmNlZERhdGEodXNlciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVwb3J0LnByb3RvdHlwZS5yZXBsYWNlRmllbGRWYWx1ZXMgPSBmdW5jdGlvbiAodHh0LCBvYmopIHtcclxuICAgICAgICB2YXIgX3R4dCA9IHR4dDtcclxuICAgICAgICBmb3IgKHZhciBrIGluIG9iaikge1xyXG4gICAgICAgICAgICAvL3NlIG5uIHRyb3ZhIGxhIGNoaWF2ZSBlIGhhIHVuIHZhbG9yZSwgbCdhcHBlbmRlIGluIGNvZGFcclxuICAgICAgICAgICAgLy9pZihvYmpba10hPVwiXCIgJiYgX3R4dC5pbmRleE9mKGspPDApIF90eHQrPWs7XHJcbiAgICAgICAgICAgIC8vcmVwbGFjZSBkZWkgY2FtcGkgbmVsIHRlc3RvXHJcbiAgICAgICAgICAgIF90eHQgPSBfdHh0LnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxbXCIgKyBrICsgXCJcXFxcXVwiLCBcImdcIiksIG9ialtrXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdHh0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXBvcnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmVwb3J0ID0gUmVwb3J0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZ3YjNKMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dllYQndMM0psY0c5eWRITXZjbVZ3YjNKMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVVkJPenN3UTBGRk1FTTdRVUZETVVNc01FTkJRVzlDTzBGQlEzQkNMRWxCUVUwc1NVRkJTU3hIUVVGRkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVYzFRaXhKUVVGTExGVkJRU3RDTzBGQlFYQkRMRmRCUVVzc1ZVRkJWVHRKUVVGRkxEWkRRVUZQTEVOQlFVRTdTVUZCUXl4dFJFRkJWU3hEUVVGQk8wRkJRVUVzUTBGQlF5eEZRVUV2UWl4VlFVRlZMRXRCUVZZc1ZVRkJWU3hSUVVGeFFqdEJRWE5HY2tJc1owTkJRVlU3UVVGd1JucENPMGxCVDBrc1owSkJRVmtzU1VGQlVTeEZRVUZETEVsQlFWRXNSVUZCUXl4SFFVRTBRanRSUVVFMVFpeHZRa0ZCUVN4RlFVRkJMRlZCUVRSQ08xRkJUREZFTEZOQlFVa3NSMEZCU3l4SlFVRkpMRU5CUVVNN1VVRkRaQ3hUUVVGSkxFZEJRVXNzU1VGQlNTeERRVUZETzFGQlEyUXNhMEpCUVdFc1IwRkJjVUlzU1VGQlNTeERRVUZETzFGQlEzWkRMRmxCUVU4c1IwRkJVU3hGUVVGRkxFTkJRVU03VVVGSFppeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkRMRWxCUVVrc1EwRkJRenRSUVVObUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVTXNTVUZCU1N4RFFVRkRPMUZCUTJZc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlF5eEhRVUZITEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRUxHbERRVUZuUWl4SFFVRm9RanRSUVVOSkxFOUJRVThzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJSVVFzTWtKQlFWVXNSMEZCVmp0UlFVTkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCU1Vzc2VVSkJRVkVzUjBGQlpDeFZRVUZsTEVsQlFXVTdkVU5CUVVVc1QwRkJUenM3T3pzN2QwSkJSeTlDTEZGQlFWRXNSMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0M1FrRkRjRU1zVVVGQlVTeEhRVUZETEdsQ1FVRmxMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlNTeFJRVUZWTEVOQlFVRTdkMEpCUXpGRUxGRkJRVkVzUjBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eERRVUZETzNkQ1FVYzVReXhKUVVGSExFTkJRVU1zV1VGQlJTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJRenMwUWtGRGVFSXNUVUZCVFN4TFFVRkxMRU5CUVVNc05FSkJRVEJDTEZGQlFWVXNRMEZCUXl4RFFVRkRPM2xDUVVOeVJEdDNRa0ZGUnl4SFFVRkhMRWRCUVZVc1dVRkJSU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN2QwSkJRelZETEhGQ1FVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZCT3p0M1FrRkJMME1zUlVGQlJTeEhRVUZETEZOQlFUUkRPM2RDUVVOdVJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVRTdkMEpCUXpkQ0xFZEJRVWNzUjBGQlF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUjBGQlJ5eEZRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkJPM2RDUVVOdVF5eEhRVUZITEVkQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXh6UWtGQmMwSXNSVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzVTBGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVZNc1EwRkJReXhEUVVGQk8zZENRVVZvUml4elFrRkJUeXhIUVVGSExFVkJRVU03T3pzN1MwRkZaRHRKUVVWRUxIZENRVUZQTEVkQlFWQXNWVUZCVVN4SlFVRlJMRVZCUVVNc1NVRkJVU3hGUVVGRExFOUJRV3RDTzFGQlJYaERMRkZCUVU4c1QwRkJUeXhGUVVOa08xbEJRMGtzUzBGQlN5eFZRVUZWTEVOQlFVTXNTMEZCU3p0blFrRkRha0lzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVNc1RVRkJUVHRaUVVOT0xFdEJRVXNzVlVGQlZTeERRVUZETEZGQlFWRTdaMEpCUTNCQ0xFOUJRVThzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRVZCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlF6TkRMRTFCUVUwN1UwRkRWRHRKUVVOTUxFTkJRVU03U1VGVFJDeHRRMEZCYTBJc1IwRkJiRUlzVlVGQmJVSXNSMEZCVlN4RlFVRkRMRWRCUVU4N1VVRkZha01zU1VGQlNTeEpRVUZKTEVkQlFVTXNSMEZCUnl4RFFVRkJPMUZCUjFvc1MwRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVWQlEyaENPMWxCUTBrc2VVUkJRWGxFTzFsQlEzcEVMRGhEUVVFNFF6dFpRVU01UXl3MlFrRkJOa0k3V1VGRE9VSXNTVUZCU1N4SFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4SFFVRkRMRU5CUVVNc1IwRkJReXhMUVVGTExFVkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVUU3VTBGRGVrUTdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRVHRKUVVObUxFTkJRVU03U1VGRlRDeGhRVUZETzBGQlFVUXNRMEZCUXl4QlFXcEdSQ3hKUVdsR1F6dEJRVWRQTEhkQ1FVRk5JbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLldpRmlSZXBvcnQgPSB2b2lkIDA7XHJcbnZhciByZXBvcnRfMSA9IHJlcXVpcmUoXCIuL3JlcG9ydFwiKTtcclxudmFyIHByb2Nlc3Nvcl8xID0gcmVxdWlyZShcIi4uL3Byb2Nlc3NvcnMvcHJvY2Vzc29yXCIpO1xyXG52YXIgbW9tZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XHJcbnZhciBEQVRFX0ZPUk1BVCA9IFwiREQvTU0vWVlZWVwiO1xyXG52YXIgV2lGaVJlcG9ydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhXaUZpUmVwb3J0LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gV2lGaVJlcG9ydCgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBXaUZpUmVwb3J0LnByb3RvdHlwZS5nZXRUZW1wbGF0ZUZpbGVOYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIndpZmkudHh0XCI7XHJcbiAgICB9O1xyXG4gICAgV2lGaVJlcG9ydC5wcm90b3R5cGUubWFwQmFzaWNEYXRhID0gZnVuY3Rpb24gKHVzZXIsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZnJvbSwgdG8sIG1hcDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgZnJvbSA9IGRhdGEuZnJvbSwgdG8gPSBkYXRhLnRvO1xyXG4gICAgICAgICAgICAgICAgbWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiTkFNRVwiOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTVVJOQU1FXCI6IHVzZXIuc3VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBcIkVNQUlMXCI6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQSE9ORVwiOiB1c2VyLnBob25lIHx8ICctLS0nLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRlJPTVwiOiBtb21lbnRfMS5kZWZhdWx0KGZyb20pLmZvcm1hdChEQVRFX0ZPUk1BVCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUT1wiOiBtb21lbnRfMS5kZWZhdWx0KHRvKS5mb3JtYXQoREFURV9GT1JNQVQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTk9URVNcIjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBtYXBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBXaUZpUmVwb3J0LnByb3RvdHlwZS5tYXBBZHZhbmNlZERhdGEgPSBmdW5jdGlvbiAodXNlciwgZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCBQcm9taXNlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0eHQsIG1hcCwgdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubWFwQmFzaWNEYXRhKHVzZXIsIGRhdGEpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gXCI9PT09PT09PT09PT09PT09PT09PT0gIDxiPkVzaXRvIGVzZWN1emlvbmUgYXV0b21hdGljYTwvYj4gID09PT09PT09PT09PT09PT09PT09PGJyPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBwcm9jUmVzdWx0RGF0YTpzdHJpbmc9bWFwW1wicHJvY2Vzc1Jlc3VsdFwiXSB8fCBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicHI6XCIsdGhpcy5wcm9jZXNzUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc1Jlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2Nlc3NSZXN1bHQuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQgKz0gdGhpcy5wcm9jZXNzUmVzdWx0LmdldFN0YXR1cygpID09IHByb2Nlc3Nvcl8xLlByb2Nlc3NSZXN1bHRTdGF0dXMuT0sgPyBcIlwiICsgdmFsdWUgOiBcIk5PTiBHRVNUSVRBXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW1wiUFJPQ0VTU19SRVNVTFRcIl0gPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBtYXBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV2lGaVJlcG9ydDtcclxufShyZXBvcnRfMS5SZXBvcnQpKTtcclxuZXhwb3J0cy5XaUZpUmVwb3J0ID0gV2lGaVJlcG9ydDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZDJsbWFTNXlaWEJ2TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2WVhCd0wzSmxjRzl5ZEhNdmQybG1hUzV5WlhCdkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZCUVN4dFEwRkJLMEk3UVVGREwwSXNjVVJCUVRKRU8wRkJRek5FTEd0RVFVRTBRanRCUVVVMVFpeEpRVUZOTEZkQlFWY3NSMEZCUXl4WlFVRlpMRU5CUVVNN1FVRkZMMEk3U1VGQmVVSXNPRUpCUVUwN1NVRkJMMEk3TzBsQmFVUkJMRU5CUVVNN1NVRTVRMGNzZDBOQlFXMUNMRWRCUVc1Q08xRkJRMGtzVDBGQlR5eFZRVUZWTEVOQlFVTTdTVUZEZEVJc1EwRkJRenRKUVVkTExHbERRVUZaTEVkQlFXeENMRlZCUVcxQ0xFbEJRVkVzUlVGQlF5eEpRVUZSTzNWRFFVRkZMRTlCUVU4N096dG5Ra0ZGY0VNc1NVRkJTU3hIUVVGTExFbEJRVWtzUzBGQlZDeEZRVUZETEVWQlFVVXNSMEZCUlN4SlFVRkpMRWRCUVU0c1EwRkJUenRuUWtGRlppeEhRVUZITEVkQlFVTTdiMEpCUTBFc1RVRkJUU3hGUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTzI5Q1FVTm9RaXhUUVVGVExFVkJRVU1zU1VGQlNTeERRVUZETEU5QlFVODdiMEpCUTNSQ0xFOUJRVThzUlVGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3p0dlFrRkRiRUlzVDBGQlR5eEZRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1MwRkJTenR2UWtGRE0wSXNUVUZCVFN4RlFVRkRMR2RDUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJRenR2UWtGRGRrTXNTVUZCU1N4RlFVRkRMR2RDUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJRenR2UWtGRGJrTXNUMEZCVHl4RlFVRkRMRVZCUVVVN2FVSkJRMVFzUTBGQlFUdG5Ra0ZGVkN4elFrRkJUeXhIUVVGSExFVkJRVU03T3p0TFFVVmtPMGxCUlVzc2IwTkJRV1VzUjBGQmNrSXNWVUZCYzBJc1NVRkJVU3hGUVVGRExFbEJRVkU3ZFVOQlFVVXNUMEZCVHpzN096czdkMEpCUlhoRExFZEJRVWNzUjBGQlVTeEZRVUZGTEVOQlFVTTdkMEpCUTA0c2NVSkJRVTBzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVUU3TzNkQ1FVRXhReXhIUVVGSExFZEJRVXNzVTBGQmEwTTdkMEpCUnpsRExFZEJRVWNzUjBGQlF5eHhSa0ZCY1VZc1EwRkJRVHQzUWtGRmVrWXNlVVJCUVhsRU8zZENRVU42UkN4M1EwRkJkME03ZDBKQlEzaERMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGRGRFSTdORUpCUTFFc1MwRkJTeXhIUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZET3pSQ1FVTjRSQ3hIUVVGSExFbEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJSU3dyUWtGQmJVSXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVWNzUzBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVFN2VVSkJSVFZHTzNkQ1FVVkVMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SFFVRkRMRWRCUVVjc1EwRkJRenQzUWtGRk1VSXNjMEpCUVU4c1IwRkJSeXhGUVVGRE96czdPMHRCUldRN1NVRkZUQ3hwUWtGQlF6dEJRVUZFTEVOQlFVTXNRVUZxUkVRc1EwRkJlVUlzWlVGQlRTeEhRV2xFT1VJN1FVRkZUeXhuUTBGQlZTSjkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9