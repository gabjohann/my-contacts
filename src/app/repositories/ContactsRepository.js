const { uuid } = require('uuidv4')

const contacts = [
  {
    id: uuid(),
    name: 'Lucas',
    email: 'lucas@mail.com',
    phone: '981016112',
    category_id: uuid(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise(resolve => {
      resolve(contacts)
    })
  }
}

module.exports = new ContactsRepository()
