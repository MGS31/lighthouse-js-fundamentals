
//function chooseStation (stations) {
//  let goodSta [];
//  for (const station of stations) {
//    const cap station[1]
//    if (capa 20) {
//       const station [2]
//       if  "school" || "community centre") {
//        goodStations.push(station[0])
//       }
//    } 
//  }
//  return goodStations
//}
//[x, y]

//function ageCalculator(name, yearOfBirth, currentYear) {
  //le (currentYear - yearOfBirth);
  //return (name + " is " + age + " years old.");
//};

//console.log(ageCalculator("Miranda", 1983, 2015));
//console.log(ageCalculator("Ferdinand", 1988, 2015));

//function howManyHundreds(num){
  //let nearestHund Math.floor(num / 100);
  //return nearestHundredth;
//}

//console.log(howManyHundreds(10?", 10);
//console.log(howManyHundreds(8?", 8);
//console.log(howManyHundreds(5?", 5);
//console.log(howManyHundreds(?", 0);
//console.log(howManyHundreds?", 0);

// if params are negative shoudl return undefined
function calculateRectangleArea(length, width) {
  if (length < 0) {
    return undefined
  } else if (width < 0) {
    return undefined
  } else {
 le length * width;
 return num;
}
}

function calculateTriangleArea(base, height) {
  if (base < 0) {
    return undefined
  } else if (height < 0) {
    return undefined
  } else {
le (base * height)/2;
return num;
}
}

function calculateCircleArea(radius){
if (radius < 0) {
  return undefined
} else {le (radius*radius)*Math.PI;
return num}
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


"Mal","Zoe","Wash","Inara","Jayne","Kaylee"