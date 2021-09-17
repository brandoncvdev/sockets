import express from 'express';
import { SERVER_PORT } from '../global/environment';

//Class with the initialization of the server with a port in the enviroment file
export class Server {

    public app:  express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
    }

    start(callback: ()=> void) {
        this.app.listen(this.port, callback);
    }

}