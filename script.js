const input = prompt('Enter your froyo flavors'); // 
const flavors = input.split(','); // Split the input string into an array of flavors

// create an object to store the flavor counts
const flavorCounts = {};

// loop through the flavors array and count each flavor
flavors.forEach(flavor => {
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
});
console.log(flavorCounts);

// create a table to display the flavor counts
console.table(flavorCounts);