import Fastify from 'fastify';
import cors from '@fastify/cors';
import superheroRoutes from './routes/superhero.route.js'

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    serializers: {
      req(request) {
        return {
          method: request.method,
          url: request.url,
          path: request.routerPath,
          parameters: request.params,
          headers: request.headers
        };
      }
    }
  }
});

// Register CORS
await fastify.register(cors, {
  origin: true, // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
});

// Global error handler
fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(error);
  reply.status(error.statusCode || 500).send({
    error: {
      message: error.message || 'Internal Server Error',
      statusCode: error.statusCode || 500
    }
  });
});

const start = async () => {
  try {
    // Register routes
    fastify.register(superheroRoutes, { prefix: 'superheroes' });

    // Start the server
    const port = process.env.PORT || 3005;
    await fastify.listen({ port, host: '127.0.0.1' });
    fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
