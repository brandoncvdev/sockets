import { Router, Request, Response } from 'express';

//Initialization of the const router and the library express inner
const router = Router();

//Example api get 

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien',
    });
});

//Example api post
router.post('/mensajes', (req: Request, res: Response) => {
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
router.post('/mensajes/:id', (req: Request, res: Response) => {
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

export default router;