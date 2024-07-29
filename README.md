# Todo API

A simple CRUD API for managing todos, built with Node.js and TypeScript. Includes Swagger documentation for API exploration and testing.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete todos.
- **Swagger Documentation**: Interactive API documentation.
- **Default Data**: Pre-seeded data for initial testing.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Default Data](#default-data)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

2. **Install Dependencies**


```
npm install
```

### Running the Application
1.**Build the Project**


```
npm run build
```
2.**Start the Server**


```
npm start
```
The server will be running at http://localhost:8000.

### API Documentation
Swagger provides interactive documentation for the API. Access it at:


```
http://localhost:8000/docs
```
### API Endpoints
- Get All Todos: GET /todos - Retrieves all todos.
- Get Todo by ID: GET /todos/{id} - Retrieves a todo by ID.
- Create a New Todo: POST /todos - Creates a new todo.
- Update a Todo: PUT /todos/{id} - Updates a todo by ID.
- Delete a Todo: DELETE /todos/{id} - Deletes a todo by ID.

### Default Data
Default todo items are seeded for initial testing. These are created when the server starts if no todos exist.


### Scripts
- `npm start`: Starts the application server.
- `npm run build`: Builds the TypeScript project.
- `npm test`: Runs tests (assuming tests are set up).
- `npm run lint`: Runs linting (if you have a linting configuration).
- `npm run format`: Formats code (if you have a code formatter set up).

### Contributing
Feel free to fork the repository and submit pull requests. For issues or feature requests, please open an issue on GitHub.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
For questions or comments, contact paruj.lab@gmail.com.


### Summary

- **Getting Started**: Instructions for setup and installation.
- **Running the Application**: How to build and start the server.
- **API Documentation**: Access and usage of Swagger documentation.
- **Default Data**: Information on seeded data.
- **Scripts**: Detailed list of available npm scripts.
- **Contributing**: Guidelines for contributing to the project.
- **License and Contact**: Licensing information and contact details.

Feel free to modify any sections to better fit your specific project requirement