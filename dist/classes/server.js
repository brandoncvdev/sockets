"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerExpress = void 0;
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
//import socketIO from 'socket.oi';
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
//Class with the initialization of the server with a port in the enviroment file
class ServerExpress {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.Server(this.httpServer);
    }
    listenSockets() {
        console.log('Listen sockets');
        this.io.on('connection', (client) => {
            console.log('cliente conectado');
        });
    }
    start(callback) {
        //this.app.listen(this.port, callback);
        this.httpServer.listen(this.port, callback);
    }
}
exports.ServerExpress = ServerExpress;
