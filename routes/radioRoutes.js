// routes/radioRoutes.js
const express = require('express');
const router = express.Router();
const { createM3URoute, createTranscodedRoute } = require('../helpers/streamHelpers');

const radios = [
    { name: 'Kativa FM', path: 'kativa', url: process.env.KATIVA_URL },
    { name: 'Rádio Sucesso', path: 'sucesso', url: process.env.SUCESSO_URL },
    { name: 'Rádio Difusora', path: 'difusora', url: process.env.DIFUSORA_URL },
    { name: 'Interativa FM', path: 'interativa', url: process.env.INTERATIVA_URL }
];

router.get('/', (req, res) => {
    res.render('index', { radios });
});

radios.forEach(radio => {
    router.get(`/${radio.path}`, (req, res) => {
        res.render('radio', { 
            name: radio.name,
            streamPath: `/stream/${radio.path}`,
            m3uPath: `/${radio.path}.m3u`
        });
    });

    router.get(`/${radio.path}.m3u`, createM3URoute(radio.url, radio.name));

    router.get(`/stream/${radio.path}`, createTranscodedRoute(radio.url));
});

module.exports = router;
