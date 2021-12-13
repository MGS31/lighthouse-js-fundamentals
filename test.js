
function laugh(num) {
  let laugh = '';
    for (let x = 0; x <= num; x++) {
        laugh += 'ha';
    }
    return laugh + "!";
}

console.log(laugh(30));