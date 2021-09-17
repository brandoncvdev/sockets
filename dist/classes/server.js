"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
//Class with the initialization of the server with a port in the enviroment file
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = environment_1.SERVER_PORT;
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.Server = Server;