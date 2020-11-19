const contentElement = document.querySelector('.container')

export const catalog = (harvestedFoodArray)=> {
    for (const harvestedFood of harvestedFoodArray){
        
        contentElement.innerHTML += 
        `<section class="plant">${harvestedFood.type}</section>`

    }

}