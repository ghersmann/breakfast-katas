// Ghostbusters (whitespace removal)
// https://www.codewars.com/kata/5668e3800636a6cd6a000018

function ghostBusters(building) {
  if (building.includes(" ")) {
    const splitBuilding = building.split("");
    const filteredBuilding = splitBuilding.filter((str) => str.trim() !== "");
    const joinedBuilding = filteredBuilding.join("");
    return joinedBuilding;
  } else {
    return "You just wanted my autograph didn't you?";
  }
}
