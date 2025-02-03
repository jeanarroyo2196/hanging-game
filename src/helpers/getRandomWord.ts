const words: string[] = [
  'COMPUTADORA',
  'PAPAYA',
  'ANIMAL',
  'VEHICULO',
  'ANIMAL',
  'EVELYN',
  'STEPHANIE',
  'JEANCA',
  'VETERINARIO',
  'CONTADOR',
  'SOFTWARE',
  'CELULAR',
  'TELEFONO',
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}
