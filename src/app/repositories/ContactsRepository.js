const { v4 } = require('uuid')

const contacts = [
  {
    id: v4(),
    name: 'Lucas',
    email: 'lucas@mail.com',
    phone: '981016112',
    category_id: v4(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise(resolve => {
      resolve(contacts)
    })
  }

  findById(id) {
    return new Promise(resolve =>
      resolve(contacts.find(contact => contact.id === id))
    )
  }
}

module.exports = new ContactsRepository()
