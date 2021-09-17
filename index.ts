import { ServerExpress } from './classes/server';
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";
import express from 'express';
import cors from 'cors';

const test = 'Workin';

const server = ServerExpress.instance;

//Parser of the post data
server.app.use(express.urlencoded({ extended: true }));
server.app.use(express.json());

//CORS
server.app.use(cors({ origin: true, credentials:  true }));

//Watching http requests
server.app.use('/', router);

//started server
server.start(() => {
    console.log(`Workin en el puerto ${SERVER_PORT}`);
    
})