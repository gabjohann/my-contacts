# My Contacts API

This project is an API built using JavaScript, PostgreSQL, and Docker.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/gabjohann/my-contacts.git
```

2. Install dependencies with Yarn:
```bash
yarn install
```
or

```bash
yarn i
```

**PostgreSQL**

1. Run the following command in the terminal:
```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

2. Connect to the database:
```bash
docker exec -it pg bash
```

3. Execute the database queries.


## Usage

1. Start the application with yarn 
```bash
yarn run dev
```

2. The API will be accessible at http://localhost:3000

## API Endpoints
The API provides the following endpoints:

**CONTACTS**
```markdown
GET /contacts - Retrieve all contacts
GET /contacts/{id} - Retrieve a specific contact
POST /contacts - Create a new contact
PUT /contacts/{id} - Update a contact
DELETE /contacts/{id} - Delete a contact
```

**BODY**
```json
{
	"name": "contact example",
	"email": "contact@example.com",
	"phone": "51967772680"
}
```

**API CATEGORY**
```markdown
GET /categories - Retrieve all categories
GET /categories/{id} - Retrieve a specific category
POST /categories/ - Create a new category
PUT /categories/{id} - Updates a category
DELETE /categories/{id} - Delete a category
```

**BODY**
```json
{
	"name": "category example",
}
```