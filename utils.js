const randomIntFromInterval = (max = 100, min = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomizePokemon = () => randomIntFromInterval(807);

export { randomIntFromInterval, randomizePokemon };
