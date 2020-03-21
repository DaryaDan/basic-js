module.exports = function repeater(str, options) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    var q=[];
if (options.separator==undefined)
options.separator='+';
if (options.additionSeparator==undefined)
options.additionSeparator='|';
if (options.repeatTimes==undefined)
options.repeatTimes=0;
if (options.additionRepeatTimes==undefined)
options.additionRepeatTimes=0;

if(options.additionRepeatTimes==0 && options.addition!=undefined){
  q+=str;
  q+=options.addition;}

for(var a=0;a<options.repeatTimes;a++){
  q+=str;

  for(var b=0;b<options.additionRepeatTimes;b++){
    q+=options.addition;
    if (b<options.additionRepeatTimes-1) {
      q+=options.additionSeparator;
    }}

  if (a<options.repeatTimes-1) {
    q+=options.separator;
  }
}
return q;
};
