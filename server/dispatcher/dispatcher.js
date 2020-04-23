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
var moment_1 = __importDefault(require("moment"));
var report_1 = require("./report");
var processor_1 = require("./processor");
var getUser = require('./../api/user').getUser;
var db = require('./../api/db').nqdb;
var sendMail = require('./../api/mailer').sendMail;
var READ_ALL_REQUESTS = function () {
    return db.query("select * from user_requests where status ='SUBMITTED'");
};
var setDispatchResult = function (rid, notific, process, error) {
    db.query("update user_requests set notific_date=$1,process_date=$2,exc=$3,STATUS='PROCESSED' where id=$4", [notific, process, error, rid])
        .then(function (resp) {
    }).catch(function (err) {
        console.log("An error has occurred:");
        throw (err);
    });
};
var sendReport = function (email, subj, report) {
    sendMail(email, subj, "<pre>" + report + "</pre>");
};
exports.ReadRequests = function () {
    READ_ALL_REQUESTS().then(function (data) {
        data.forEach(function (r) {
            handleRequest(r);
        });
    });
};
var handleRequest = function (r) {
    return __awaiter(this, void 0, void 0, function () {
        var id, uid, rtype, data, error, report, mailSubj, user, times, processor, exc_1, basicrepo, advrepo, exc_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = r.id, uid = r.uid, rtype = r.rtype, data = r.data;
                    error = "";
                    report = null;
                    mailSubj = "Richiesta ID " + id + " - " + rtype;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 9, 10, 11]);
                    return [4 /*yield*/, getUser(uid)];
                case 2:
                    user = _a.sent();
                    times = { "notific": null, "process": null };
                    times.notific = moment_1.default();
                    processor = processor_1.ProcessRequest.initialize(rtype, user, data);
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    console.log("Processing Request ID: " + id + " - " + rtype);
                    return [4 /*yield*/, processor.exec()];
                case 4:
                    //processa la richiesta
                    report = _a.sent();
                    console.log("Processed Request ID: " + id + " - " + rtype);
                    return [3 /*break*/, 6];
                case 5:
                    exc_1 = _a.sent();
                    error = JSON.stringify(exc_1).substr(0, 1024);
                    return [3 /*break*/, 6];
                case 6:
                    //se l'oggetto report non è stato creato (il process.exec ha generato errore)
                    //dobbiamo comunque inviare i dati di report utente e supporto
                    if (!report) {
                        report = report_1.Report.initialize(rtype, user, data);
                    }
                    return [4 /*yield*/, report.renderAs(report_1.RenderType.BASIC)];
                case 7:
                    basicrepo = _a.sent();
                    return [4 /*yield*/, report.renderAs(report_1.RenderType.ADVANCED)];
                case 8:
                    advrepo = _a.sent();
                    //Invia Report all'utente 
                    sendReport(user.email, mailSubj, basicrepo);
                    //Invia Report al servizio 
                    sendReport(user.email, mailSubj + " -- Riservata Supporto", advrepo);
                    times.process = moment_1.default();
                    return [3 /*break*/, 11];
                case 9:
                    exc_2 = _a.sent();
                    error += " " + (exc_2.message || JSON.stringify(exc_2));
                    return [3 /*break*/, 11];
                case 10:
                    if (error != "")
                        console.log(error);
                    setDispatchResult(id, times.notific, times.process, error);
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
};
exports.ReadRequests();
