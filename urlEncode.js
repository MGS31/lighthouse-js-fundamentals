const urlEncode = function(text) {
  text= text.trim();
  let encode = "";
  for (i = 0; i < text.length; i++){
    if (text[i] !== " ") {
      encode += text[i];
    } else {
      encode += "%20";
    }
  }
  return encode;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));