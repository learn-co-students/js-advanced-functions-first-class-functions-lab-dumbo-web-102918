// Code your solution in this file!
// const anon = function(drivers) {
//   return `${drivers.first}, ${drivers.second}`;
// };
//
// function returnFirstTwoDrivers(drivers) {
//   anon;
// }

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

// The question asks us to declare the variable as returnFirstTwoDrivers, and then assign it to a function which gets us our result. when returning an instance of a new array which borrows from specific parts of the original array, remember to use .slice!

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

// The -2 within our slice method takes the last two entries within the array, and returns only them. Normally with slice, we would use two parameters but in this case, we're fine only using one since we're not necessarily starting at "0".


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// function(returnFirstTwoDrivers, returnLastTwoDrivers) {
  // let join = [returnFirstTwoDrivers, returnLastTwoDrivers];
  // return join;

// }

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return multiplier * fare;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, specificDrivers) {
  return specificDrivers(drivers);
}
