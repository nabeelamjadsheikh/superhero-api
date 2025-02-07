import { createSuperhero, getSuperheroesList } from '../models/superhero.model.js';

export async function addSuperhero(request, reply) {
  try {
    const { name, superpower, humilityScore } = request.body;

    if (!name?.trim()) {
      return reply.code(400).send({
        error: 'Name is required and must not be empty'
      });
    }

    if (!superpower?.trim()) {
      return reply.code(400).send({
        error: 'Superpower is required and must not be empty'
      });
    }

    if (typeof humilityScore !== 'number' || humilityScore < 0 || humilityScore > 100) {
      return reply.code(400).send({
        error: 'HumilityScore must be a number between 0 and 100'
      });
    }

    const newSuperhero = createSuperhero(
      name.trim(),
      superpower.trim(),
      humilityScore
    );

    return reply.code(201).send(newSuperhero);
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({
      error: 'Internal Server Error'
    });
  }
}

export async function getSuperheroes(request, reply) {
  try {
    const superheroes = getSuperheroesList();
    return reply.send(superheroes);
  } catch (error) {
    request.log.error(error);
    return reply.code(500).send({
      error: 'Internal Server Error'
    });
  }
}
