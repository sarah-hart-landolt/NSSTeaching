
const isCorn = (plant) => {
    const number = plant.type === "Corn" ? plant.output * .5 : plant.output;
    return number;
}

export const harvestPlants = (plantsArray) => {
    const outputArray = plantsArray.flatMap(plant => new Array(isCorn(plant)).fill(plant));
    //  another alternative: 

    // const number= plant.type === "Corn" ? plant.output * .5 : plant.output;
    // for (const plant of plantsArray) {
    //     let newArray = new Array(number).fill(plant);
    //     console.log(newArray)
    //     outputArray.push(...newArray);
    // }
  
    // another alternative :
    // for(let i=0; i < outputArray.length; i++){
    //     outputArray[i]= {...outputArray[i], id: i+1}
    // }
    const outputWithId = outputArray.map((plant, index)=>({...plant, id: index + 1}))
    return outputWithId;

}





