const bodyParser = require('body-parser');
const cors = require('cors');

// gerencia a dependências da aplicação
module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors);
};