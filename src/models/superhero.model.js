let superheroes = [];
let idCounter = 1;

export function createSuperhero(name, superpower, humilityScore) {
  const superhero = {
    id: idCounter++,
    name,
    superpower,
    humilityScore,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  superheroes.push(superhero);
  return superhero;
}

export function getSuperheroesList() {
  return superheroes.slice().sort((a, b) => b.humilityScore - a.humilityScore);
}
