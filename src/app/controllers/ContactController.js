class ContactController {
  // Listar todos os registros
  index(request, response) {
    response.send('Send from Contact Controller')
  }

  // Obter um registro
  show() {}

  // Criar um novo registro
  store() {}

  //Editar um registro
  update() {}

  // Deletar um registro
  delete() {}
}

module.exports = new ContactController()
