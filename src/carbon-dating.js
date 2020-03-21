const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  let a = parseFloat(sampleActivity);
  if ((typeof sampleActivity != "string") || isNaN(a) || ( a <= 0) || (a > MODERN_ACTIVITY)) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / a) / (0.693 / HALF_LIFE_PERIOD));
};
