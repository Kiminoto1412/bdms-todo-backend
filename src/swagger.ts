import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Todo API',
        version: '1.0.0',
        description: 'A simple CRUD API for managing todos'
    },
    servers: [
        {
            url:`http://localhost:${process.env.PORT || 8000}/api`,
            description: 'API server'
        }
    ],
    components: {
        schemas: {
            Todo: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        example: 1
                    },
                    title: {
                        type: 'string',
                        example: 'Test Todo 1'
                    },
                    completed: {
                        type: 'boolean',
                        example: false
                    }
                }
            }
        }
    }
};

// Options for the Swagger docs
const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'] // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Middleware to serve Swagger UI
const setupSwagger = (app: express.Application) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
