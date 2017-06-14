function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function (location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
        if(warningCounter === 1) {
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
        } else {
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    	}
    }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road!');
const swarmWarning = hazardWarningCreator('Angry bees approaching!');
const chickenWarning = hazardWarningCreator('Chicken frequently cross here!');

rocksWarning('Highway 280');
rocksWarning('Rocky Mountain Road');
swarmWarning('Yellowstone National Park');
swarmWarning('National Mall');
swarmWarning('Central Park');
chickenWarning('Corner of Main Street and 14th Street');