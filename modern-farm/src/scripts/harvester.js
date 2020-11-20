
const isCorn = (plant) => {
    const number = plant.type === "Corn" ? plant.output * .5 : plant.output;
    return number;
}

export const harvestPlants = (plantsArray) => {
    const outputArray = plantsArray.flatMap(plant => new Array(isCorn(plant)).fill(plant));
    //  anothey alternative: 
    // const number= plant.type === "Corn" ? plant.output * .5 : plant.output;
    // for (const plant of plantsArray) {
    //     let newArray = new Array(number).fill(plant);
    //     outputArray.push(...newArray);
    // }

    console.log(outputArray);
    return outputArray;

}
