const input = prompt('Enter your froyo flavors'); // prompt input for user to pass in flavors of froyo
const flavors = input.split(','); // Split the input string into an array of flavors

// create an object to store the flavor counts
const flavorCounts = {};

// loop through the flavors array and count each flavor
flavors.forEach(flavor => {
  if (flavorCounts[flavor]) { // If the flavor already exists in the object, increment its count 
    flavorCounts[flavor]++;
  } else { // if not, create a new key-value pair with the flavor as the key and 1 as the value
    flavorCounts[flavor] = 1;
  }
});
console.log(flavorCounts);

// create a table to display the flavor counts
console.table(flavorCounts);