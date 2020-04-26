const crypto = require('crypto'); //método para gerar ID
const connection = require('../database/connection'); //pegando conexão com o banco de dados

module.exports = {
  async index(request, response) {  //método listar ongs
    const ongs = await connection('ongs').select('*'); // select
  
    return response.json(ongs); //retornando ongs
  },

  async create(request, response) { //método criar ong
    const { name, email, whatsapp, city, uf } = request.body; //recendo o body
    const id = crypto.randomBytes(4).toString('HEX'); // gerando o ID automáticamente
    
    await connection('ongs').insert({ //passando as informações do body para persistir
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id }); // retornando o ID para o front
  }
};