export const harvestPlants = (plantsArray) => {
    let outputArray = [];
    for (const plant of plantsArray) {
        let number;
        plant.type !== "Corn" ?
            number = plant.output :
            number = plant.output * .5;

        for (let i = 0; i < number; i++) {
            outputArray.push(plant)

        }

    }
    return outputArray;

}
