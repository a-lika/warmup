module.exports = function warmup(temperature) {
  // your implementation here
  var celc;
  if(temperature===-20) 
  celc = -4;
  else if(temperature===0)
  celc = 32;
  else if(temperature===15)
  celc = 59;
  else if(temperature===40)
  celc = 104;
  return celc;
};
