//ALL TIME VALUES ARE IN SECONDS
//ALL WATER VOLUME ARE IN LITRES
let timeToFill10Litres: number = 48;
let totalTime: number = 4 * 3600;
let totalCollectionIn1sec: number = 0;
let totalCollectionInGivenTime: number = 0;
let totalCostPer1000Litres: number = 500;
let totalPriceOfWaterCollected: number;

function calculateTotalWaterCollection(timeToFill10Litre: number, time: number): number {
	totalCollectionIn1sec = 10 / timeToFill10Litre;
	totalCollectionInGivenTime = totalCollectionIn1sec * time;
	return totalCollectionInGivenTime;
}

function calculateTotalPriceOfWaterCollected(
	totalCostPer1000Litres: number,
	totalCollectionInGivenTime: number
): number {
	let totalCostPer1Litre: number = totalCostPer1000Litres / 1000;
	totalPriceOfWaterCollected = totalCostPer1Litre * totalCollectionInGivenTime;
	return totalPriceOfWaterCollected;
}

console.log(
	`If time required to collect 10L water is: ${timeToFill10Litres} second/s,\nTotal water collection in ${
		totalTime / 60 / 60
	} hour/s is: ${calculateTotalWaterCollection(timeToFill10Litres, totalTime)}L`
);

console.log(
	`If cost of 1000L water is: Rs. ${totalCostPer1000Litres},\nTotal worth of water collected: Rs. ${calculateTotalPriceOfWaterCollected(
		totalCostPer1000Litres,
		totalCollectionInGivenTime
	)}`
);
