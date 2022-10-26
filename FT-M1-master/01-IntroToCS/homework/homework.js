'use strict'

function BinarioADecimal(num) {
  // tu codigo aca:
  return parseInt(num,2);
}
function DecimalABinario(num) {
  // tu codigo aca:
  var xd = [];
  while(num > 0){
    xd.push(num%2);
    num = Math.floor(num/2);
  }
  return xd.reverse().join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}