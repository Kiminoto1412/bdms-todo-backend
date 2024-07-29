import 'tsconfig-paths/register';
import app from './app';
import setupSwagger from './swagger';

const port = process.env.PORT || 8000;

// Setup Swagger
setupSwagger(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
