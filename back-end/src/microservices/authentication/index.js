require('dotenv').config({ path: '../../../.env' });

//Express config
const express = require('express');
const app = express();
app.use(express.json());

// JWT
const jwt = require('jsonwebtoken');
const { jwtAuthentication } = require('../authentication/middleware');

// Models
const Studio = require('../database/Studio');
const StudioSchedule = require('../database/StudioSchedule');
const Instruments = require('../database/Instruments');
const User = require('../database/User');
const { Op } = require('sequelize');

app.post('/studios', jwtAuthentication, async (req, res) => {
    const {
        amp_guitar,
        box,
        amp_bass,
        drums,
        soundboard,
        return_system,
        monitors,
        interface,
        guitar,
        bass,
        keyboard_synth,
        microphone,
        user_id

    } = req.body;

    // Simple Validation
    const requiredFields = { amp_guitar,box,amp_bass,drums,soundboard,return_system,
    monitors,interface,guitar,bass,keyboard_synth,microphone };
    const blankFields = Object.keys(requiredFields).filter(key => !requiredFields[key]);
    if (blankFields.length) {
        return res.json({
            errors: blankFields.map(field => `Valor em branco para o campo ${field}`),
        }, 400);
    }

  
});

app.post('/event', (req, res) => {
    const {evento} = req.body
    console.log(evento)
    return res.status(200)
})

app.get('/studios', jwtAuthentication, async (req, res) => {
    const studios = await Studio.findAll({
        where: {
            name: {
                [Op.like]: `%${req.body.q}%`
            }
        }
    });
    console.log(studios);
    return res.send(studios, 200);
})

app.listen(10000, () => {
    console.log('Studios is listening on PORT 10000');
});