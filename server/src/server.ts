import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333);


//metodos
/*
    GET: Buscar ou listar uma informação
    POST: Criar alguma nova informação
    PUT: Atualizar uma informação existente
    DELETE: Deletar uma informação existente
*/
//Paramentros
/*
    Corpo(request Body): Dados para a criação de um registro
    Routes Params: identificar qual recurso eu queri deletar ou atualizar
    Query Params: Paginação,filtros, ordenação

    */

