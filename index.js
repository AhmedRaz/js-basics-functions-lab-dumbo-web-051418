// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  let distanceInBlocks = Math.abs(street - 42);
  return distanceInBlocks;
}

function distanceFromHqInFeet (street) {
  let distanceInFeet = (distanceFromHqInBlocks(street)) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet (street1, street2) {
  let distance = (Math.abs(street1 - street2)) * 264;
  return distance;
}

function calculatesFarePrice (start, destination) {
  distanceTravelled = distanceTravelledInFeet(start, destination);
  let fare;

  if (distanceTravelled > 2500) {
    return "cannot travel that far";
  }
  else if (distanceTravelled > 2000) {
    fare = 25;
    return fare;
  }
  else if (distanceTravelled <= 400) {
    fare = 0;
    return fare;
  }
  else {
    fare = (distanceTravelled - 400) * .02;
    return fare;
  }

}
