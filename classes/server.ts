import express from 'express';
import { SERVER_PORT } from '../global/environment';
//import socketIO from 'socket.oi';
import { Server } from "socket.io";
import http from "http";
//Class with the initialization of the server with a port in the enviroment file
export class ServerExpress {
    
    private static _instance: ServerExpress;

    public app:  express.Application;
    public port: number;
    public io: Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = new Server(this.httpServer)
    }

    public static get instance(): ServerExpress {
        return this._instance || (this._instance = new this());
    }

    private listenSockets(): void {
        console.log('Listen sockets');
        this.io.on('connection', (client) => {
            console.log('cliente conectado');
            
        })
    }

    start(callback: ()=> void) {
        //this.app.listen(this.port, callback);
        this.httpServer.listen(this.port, callback);
    }

}