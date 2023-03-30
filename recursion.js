const faculty = (integer) => {
  if (integer === 1) {
    return 1;
  }

  return integer * faculty(integer - 1);
};

console.log(faculty(4));
// base case and general case
// base case: input equals 1
// general case: multiply by input - 1
