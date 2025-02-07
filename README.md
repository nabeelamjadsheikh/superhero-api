# 🦸‍♂️ Humble Superhero API

A lightweight Node.js/Fastify API that manages superheroes with a unique twist - ranking them by their humility score!

## 📋 Features

- Create and manage superheroes
- Assign humility scores (0-100)
- Sort heroes by their humility
- Input validation and error handling
- CORS enabled

## ⚙️ Prerequisites

- Node.js (v14 or higher)
- npm

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/nabeelamjadsheikh/superhero-api
cd superhero-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the server**

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs at `http://localhost:3001`

## 🔌 API Endpoints

### Create a Superhero

```http
POST /superheroes
{
    "name": "Wonder Woman",
    "superpower": "Super strength",
    "humilityScore": 9
}
```

### Get All Superheroes

```http
GET /superheroes
```

## 🏗️ Project Structure

```
src/
├── controllers/ # Request handlers
├── models/ # Data and business logic
├── routes/ # API routes
└── server.js # Application entry point
```

## 👥 Team Collaboration Note

As a team player, I prioritize:

- Clear code documentation and comments
- Regular code reviews and feedback
- Knowledge sharing sessions
- Consistent coding standards
- Open communication about technical decisions
- Collaborative problem-solving

## 🔮 If I Had More Time...

### Technical Improvements

- Persistent database storage (MongoDB/PostgreSQL)
- Authentication and authorization
- Comprehensive test suite (Jest/Supertest)
- CI/CD pipeline
- API documentation (Swagger/OpenAPI)

### Features

- Superhero teams and relationships
- Profile image management
- Activity logging
- API versioning

### Performance

- Response caching
- Pagination
- Request rate limiting

## 🧪 Testing

1. Start the server:

```bash
npm run dev
```

2. Example request:

```bash
curl -X POST http://localhost:3001/superheroes \
-H "Content-Type: application/json" \
-d '{"name":"Superman","superpower":"Flight","humilityScore":8}'
```

## 🔒 Error Handling

- 400: Bad Request (Invalid input)
- 500: Internal Server Error
- Detailed error messages for debugging

## 📄 License

MIT License

---

Built with ❤️ and humility