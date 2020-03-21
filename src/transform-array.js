module.exports = function transform(arr) {
  var f=[];
if(Array.isArray(arr))
{
  for (let a=0; a<arr.length;a++){

if (arr[a]=="--discard-next"){a++;}
    else if (arr[a]=="--discard-prev"){
      f.pop();
    }
      else if (arr[a]=="--double-next"){
        if (a + 1 !== arr.length)
        f.push(arr[a+1]);
      }
        else if (arr[a]=="--double-prev"){
        if (a - 1 >= 0)
        f.push(arr[a-1]);
        }
          else f.push(arr[a]);
  }
return f;
}
else {throw new Error;}
};
