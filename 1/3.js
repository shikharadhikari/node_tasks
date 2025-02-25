function createCode(name, dob) {
  let ini = name.slice(0, 3);
  ini = ini.toUpperCase();
  let year = dob.slice(2, 4);
  let combined = ini + year;
  return combined;
}
const code = createCode("John", "1995-06-15");
console.log(code);
