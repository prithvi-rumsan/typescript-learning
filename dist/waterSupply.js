"use strict";
let timeToFill10Litres = 48;
let totalTime = 4 * 3600;
let totalCollectionIn1sec = 0;
let totalCollectionInGivenTime = 0;
let totalCostPer1000Litres = 500;
let totalPriceOfWaterCollected;
function calculateTotalWaterCollection(timeToFill10Litre, time) {
    totalCollectionIn1sec = 10 / timeToFill10Litre;
    totalCollectionInGivenTime = totalCollectionIn1sec * time;
    return totalCollectionInGivenTime;
}
function calculateTotalPriceOfWaterCollected(totalCostPer1000Litres, totalCollectionInGivenTime) {
    let totalCostPer1Litre = totalCostPer1000Litres / 1000;
    totalPriceOfWaterCollected = totalCostPer1Litre * totalCollectionInGivenTime;
    return totalPriceOfWaterCollected;
}
console.log(`If time required to collect 10L water is: ${timeToFill10Litres} second/s,\nTotal water collection in ${totalTime / 60 / 60} hour/s is: ${calculateTotalWaterCollection(timeToFill10Litres, totalTime)}L`);
console.log(`If cost of 1000L water is: Rs. ${totalCostPer1000Litres},\nTotal worth of water collected: Rs. ${calculateTotalPriceOfWaterCollected(totalCostPer1000Litres, totalCollectionInGivenTime)}`);
//# sourceMappingURL=waterSupply.js.map