import { addSuperhero, getSuperheroes } from '../controllers/superhero.controller.js';

async function routes(fastify) {
  // Schema for request/response validation
  const superheroSchema = {
    body: {
      type: 'object',
      required: ['name', 'superpower', 'humilityScore'],
      properties: {
        name: { type: 'string', minLength: 1 },
        superpower: { type: 'string', minLength: 1 },
        humilityScore: { type: 'number', minimum: 0, maximum: 100 }
      }
    }
  };

  // Routes
  fastify.post('/', { schema: superheroSchema }, addSuperhero);
  fastify.get('/', getSuperheroes);
}

export default routes;
