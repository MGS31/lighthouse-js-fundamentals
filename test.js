
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
//  console.log goodStations
//}
//[i, y]

//function ageCalculator(name, yearOfBirth, currentYear) {
  //le (currentYear - yearOfBirth);
  //console.log (name + " is " + age + " years old.");
//};

//console.log(ageCalculator("Miranda", 1983, 2015));
//console.log(ageCalculator("Ferdinand", 1988, 2015));

//function howManyHundreds(num){
  //let nearestHund Math.floor(num / 100);
//  //console.log nearestHundredth;
////}
//
////console.log(howManyHundreds(10?", 10);
////console.log(howManyHundreds(8?", 8);
////console.log(howManyHundreds(5?", 5);
////console.log(howManyHundreds(?", 0);
////console.log(howManyHundreds?", 0);
//
//// if params are negative shoudl console.log undefined
//function calculateRectangleArea(length, width) {
//  if (length < 0) {
//    console.log undefined
//  } else if (width < 0) {
//    console.log undefined
//  } else {
// let (length * width);
// console.log num;
//}
//}
//
//function calculateTriangleArea(base, height) {
//  if (base < 0) {
//    console.log undefined
//  } else if (height < 0) {
//    console.log undefined
//  } else {
//le (base * height)/2;
//console.log num;
//}
//}
//
//function calculateCircleArea(radius){
//if (radius < 0) {
//  console.log undefined
//} else {le (radius*radius)*Math.PI;
//console.log num}
//}
//
//
//console.log(calculateRectangleArea(10, 5));     // should print 50
//console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
//console.log(calculateRectangleArea(10, -5));    // should print undefined
//
//console.log(calculateTriangleArea(10, 5)); // should print 25
//console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
//console.log(calculateTriangleArea(10, -5)); // should print undefined
//
//console.log(calculateCircleArea(10)); // should print 314.159...
//console.log(calculateCircleArea(3.5)); // should print 38.484...
//console.log(calculateCircleArea(-1)); // should print undefined
//
//
//"Mal","Zoe","Wash","Inara","Jayne","Kaylee"

//function range (start, end, step) {
//  let array = [];
//    if (start === null || end === null || step === null || start > end || step < 0) {
//    console.log [];
//  } else {
//  for (let i = start; i <= end; i = i + step) {
//    array.push(i);
//  }
//}
//  console.log array;
//}
//
//console.log(range(0, 10, 2));
//console.log(range(10, 30, 5));
//console.log(range(-5, 2, 3));
//console.log(range(3, 2, 3));
//console.log(range("test", 2, 3));
//console.log(range(3, "TETS", 3));
//console.log(range(3, 27, 0));


//function loopyLighthouse (range,multiples,words) {
//  for (let i = range[0]; i < range[1] + 1; i++) {
//    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//      console.log (words[0] + words[1]);
//    } else if ( i % multiples[1] === 0) {
//      console.log (words[1]);
//    } else if (i % multiples[0] === 0) {
//      console.log (words[0]);
//    } else {
//      console.log(i);
//    }
//  }
//};
//
//console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

//const smartGarbage = function (trash, bins) {
// bins[trash] += 1;
//  return bins;
//};
//
//console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

//const cars = [
//  {
//    time: 1568329654807,
//    speed: 40,
//  },
//  {
//    time: 1568329821632,
//    speed: 42,
//  },
//  {
//    time: 1568331115463,
//    speed: 35
//  }
//]
//
//const carsPassing = function(cars, speed) {
//  time = Date.now();
//  cars.push({time: time, speed: speed});
//}
//
//const speed = 38
//
//carsPassing(cars, speed)
//
//console.log(cars);

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function (a, b) {
    return b[metric] - a[metric];
  }); 
  return vegetables.submitter;
}

const metric = 'redness'

console.log(judgeVegetable());