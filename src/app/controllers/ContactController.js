const ContactsRepository = require('../repositories/ContactsRepository')
class ContactController {
  // Listar todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll()

    response.json(contacts)
  }

  // Obter um registro
  async show(request, response) {
    const { id } = request.params

    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ error: 'User not found' })
    }

    response.json(contact)
  }

  // Criar um novo registro
  store() {}

  //Editar um registro
  update() {}

  // Deletar um registro
  delete() {}
}

module.exports = new ContactController()
