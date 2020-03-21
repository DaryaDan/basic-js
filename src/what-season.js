module.exports = function getSeason(date) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  if (arguments.length==0)
  return 'Unable to determine the time of year!';

if (isNaN(date)) {throw new Error();}

  var month = date.getMonth();
  if (month==11||month==0||month==1)
  return 'winter';
  if (month==2||month==3||month==4)
  return 'spring';
  if (month==5||month==6||month==7)
  return 'summer';
  if (month==8||month==9||month==10)
  return 'autumn';
};
