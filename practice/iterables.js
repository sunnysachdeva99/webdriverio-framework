
//iterables
let Reptiles = {
    biomes: {
      water: ["Alligators", "Crocs"],
      land: ["Snakes", "Turtles"]
    },
  
    [Symbol.iterator]() {
      let reptilesByBiome = Object.values(this.biomes);
      let reptileIndex = 0;
      let biomeIndex = 0;
      return {
        next() {
          if (reptileIndex >= reptilesByBiome[biomeIndex].length) {
            biomeIndex++;
            reptileIndex = 0;
          }
  
          if (biomeIndex >= reptilesByBiome.length) {
            return { value: undefined, done: true };
          }
  
          return {
            value: reptilesByBiome[biomeIndex][reptileIndex++],
            done: false
          };
        }
      };
    }
  };
  

  for (let reptile of Reptiles) console.log(reptile);