const mongoose = require('mongoose');

mongoose.connect('mongodb://anderson:anderson@localhost/knowledge_stats', { useNewUrlParser: true })
    .catch(e => {
        const message = 'Não foi possível conectar com o MongoDB';
        console.log('\x1b[41m%s\x1b[37m', message, '\x1b[0m');
    });