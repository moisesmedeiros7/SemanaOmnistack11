const connection = require('../database/connection'); //importação do banco de dados

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization; //Pegar ID de Ong logada

    //selecionando incidents de uma ong específica
    const incidents = await connection('incidents')
      .where('ong_id', ong_id) //onde o ong_id seja = da ong logada
      .select('*'); //selecione todas

    return response.json(incidents); //retorne os incidents da do select
  }
}