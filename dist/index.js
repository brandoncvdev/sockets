"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./classes/server");
const environment_1 = require("./global/environment");
const router_1 = __importDefault(require("./routes/router"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const test = 'Workin';
const server = new server_1.ServerExpress();
//Parser of the post data
server.app.use(express_1.default.urlencoded({ extended: true }));
server.app.use(express_1.default.json());
//CORS
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//Watching http requests
server.app.use('/', router_1.default);
//started server
server.start(() => {
    console.log(`Workin en el puerto ${environment_1.SERVER_PORT}`);
});
