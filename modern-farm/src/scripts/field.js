let fieldPlants = [];

export const addPlant = (seed) => {
  if (Array.isArray(seed) == true) {
    for (const oneSeed of seed) {
      fieldPlants.push(oneSeed);
    }
  } else {
    fieldPlants.push(seed);
  }
}

//optional challenge: sort plants alphabetically

const alphabetical = fieldPlants.sort(function (a, b) {
  if (a.type < b.type) //sort string ascending
    return -1
  if (a.type > b.type)
    return 1
  return 0 //default return value (no sorting)
})

export const usePlants = () => {
  return alphabetical.slice();
}