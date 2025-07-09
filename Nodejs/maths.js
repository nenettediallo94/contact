function addition(a, b) {
  console.log(`addition : ${a} + ${b}`); 
  return a + b;
}

function multiplication(a, b) {
  console.log(`multiplication : ${a} * ${b}`); 
  return a * b;
}
module.exports = {
  addition,         
  multiplication 
};
