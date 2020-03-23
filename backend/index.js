const express = require('express');

const app = express();

app.get('', (req, res)=>{
    return res.json({
        evento: 'SemanaOmnistack 11',
        aluno: 'Marcos Vinicius'
    });
});

app.listen(3333);