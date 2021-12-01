const raining = false;
const cold = false;
const temperature = 16;

if (raining){
  console.log("don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick up a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");