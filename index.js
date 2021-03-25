// Code your solution here

function findMatching(drivers, string) {
  // case insensitive
  return drivers.filter((driver) => {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  // beginning letters
  return drivers.filter((driver) => {
    return driver.slice(0, string.length) === string;
  });
}

function matchName(drivers, string) {
  // checks for exact name
  return drivers.filter((driver) => {
    return driver.name === string;
  });
}
