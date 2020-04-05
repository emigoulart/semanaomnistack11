const express = require('express');

const routes = require('./routes')

const app = express();

//app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Tipo de parâmetros
 * Query params: Parametros nomeados enviados na rota após "?" (filtro, paginação)
 * Route params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar recursos
 * 
 */

app.listen(3333);