import { createAsparagus } from "./seeds/asparagus.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { addPlant } from "./field.js"
import { createCorn } from "./seeds/corn.js"
import { createWheat } from "./seeds/wheat.js"



export const plantSeeds = (yearlyPlan) => {
        for(const plantRow of yearlyPlan) {
            for(const plant of plantRow) {
            let seed;
              plant === "Asparagus"? 
              seed = createAsparagus() :
              plant === "Sunflower" ?
              seed = createSunflower() :
              plant === "Potato" ?
              seed = createPotato() :
              plant === "Soybean"?
              seed =  createSoybean() : 
              plant === "Wheat"?
              seed = createWheat() :
              seed =  createCorn();
              addPlant(seed);
            }
        }


}


