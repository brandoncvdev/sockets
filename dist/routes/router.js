"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Initialization of the const router and the library express inner
const router = (0, express_1.Router)();
//Example api get 
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien',
    });
});
//Example api post
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        mensaje: 'Post listo',
        cuerpo,
        de
    });
});
//Example api post with params
router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: 'Post listo',
        cuerpo,
        de,
        id
    });
});
exports.default = router;
