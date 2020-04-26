const express = require('express');
const OngController = require('./controllers/OngController'); // Importando o controlador de ONgs
const IncidentController = require('./controllers/IncidentController'); // Importando o controlador de Incidents
const ProfileController = require('./controllers/ProfileController'); // Importando o novo controlador
const SessionController = require('./controllers/SessionController'); // Importando controlador de sessão para login 
const routes = express.Router();

routes.post('/sessions', SessionController.create); //criar sessão de login

routes.get('/ongs', OngController.index); // chama o método listar ongs
routes.post('/ongs', OngController.create); // chama o método criar ongs

routes.get('/profile', ProfileController.index); //chama um método de buscar lista de Incidents de uma ONG

routes.get('/incidents', IncidentController.index); //chama o método listar incidents
routes.post('/incidents', IncidentController.create); // chama o método de criar Incident
routes.delete('/incidents/:id', IncidentController.delete); //deleta um incident recebendo o ID deste incident

module.exports = routes;

//parei em 1h18m00s