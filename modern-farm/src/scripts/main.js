import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js";
import { catalog } from "./catalog.js";
import { catalogQuantity } from "./catalogQuantity.js";
import { harvestPlants } from "./harvester.js";



const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

const plants = usePlants();
const harvestedPlants = harvestPlants(plants);


catalogQuantity(harvestedPlants) ;    
catalog(harvestedPlants);
console.log(harvestedPlants)

