const connection = require('../database/connection'); //Importando coenxão com BD

module.exports = {
  async create(request, response) {
    const { id } = request.body; //Pegando o ID da ong recebido como parâmetro

    const ong = await connection('ongs')
      .where('id', id) //buscar ONG pelo ID recebido 
      .select('name') //pegando o nome dela
      .first(); 

    if (!ong) { //Se a ong não existir / busca não achou nada 
      return response.status(400).json({ error: 'No ONG found with this ID' });// 400 status de insucesso + mensagem de erro
    }

    return response.json(ong); // retorne a ONG encontrada (nome)
  }
}