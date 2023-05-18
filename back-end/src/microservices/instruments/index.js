require('dotenv').config({ path: '../../../.env' });

// Express config
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

app.post('/instruments', jwtAuthentication, async (req, res) => {
    const {
        amp_guitar,
        box,
        amp_bass,
        drums,
        sound_board,
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
    const requiredFields = { amp_guitar, box, amp_bass, drums, sound_board, return_system, monitors, interface, guitar, bass, keyboard_synth, microphone };
    const blankFields = Object.keys(requiredFields).filter(key => !requiredFields[key]);
    if (blankFields.length) {
        return res.json({
            errors: blankFields.map(field => `Valor em branco para o campo ${field}`),
        }, 400);
    }

    const user = await User.findByPk(user_id);
    if (!user) {
        return res.status(400).send('Usuário não encontrado');
    }

    try {
        const instrument = await Instruments.create({
            amp_guitar,
            box,
            amp_bass,
            drums,
            sound_board,
            return_system,
            monitors,
            interface,
            guitar,
            bass,
            keyboard_synth,
            microphone,
            user_id
        });
        
        return res.status(201).json('Instrumento adicionado com sucesso');
    } catch (error) {
        console.log(error);
        return res.status(400).json('Não foi possível adicionar o instrumento');
    }
});

app.post('/event', (req, res) => {
    const { evento } = req.body;
    console.log(evento);
    return res.sendStatus(200);
});

app.get('/studios', jwtAuthentication, async (req, res) => {
    const { q } = req.body;

    try {
        const studios = await Studio.findAll({
            where: {
                name: {
                    [Op.like]: `%${q}%`
                }
            }
        });

        console.log(studios);
        return res.status(200).send(studios);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Erro ao buscar estúdios');
    }
});

app.listen(5000, () => {
    console.log('Studios is listening on PORT 5000');
});
