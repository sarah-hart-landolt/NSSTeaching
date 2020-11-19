import {types} from "./plan.js"

const contentElement = document.querySelector('.container')
//optional challenge: display plant once & show quantity 

export const catalogQuantity = (harvestedFoodArray)=> {
    for(const type of types){
    const groupedPlants= harvestedFoodArray.filter(plant=>plant.type===type);
       if (groupedPlants.length > 1){
        contentElement.innerHTML += 
        `<section class="plant">${groupedPlants[0].type} ; Quantity: ${groupedPlants.length}</section>`
       }
        
    } 

}