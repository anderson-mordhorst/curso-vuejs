const app = require('express')();
const consign = require('consign');

// injeta o consign dentro de app (parâmetro do module.exports)
consign()
    .then('./config/middlewares.js')
    .into(app);

app.listen(3000, () => {
    console.log('Backend executando...');
});