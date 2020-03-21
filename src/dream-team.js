module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
  let b="", c="";
  for (let a of members) {
  if (typeof a == "string") {
  a=a.replace(/^\s*/,'');
  b+=a.substr(0, 1);}}
  c=b.toUpperCase();
  return c.split("").sort().join("");
}
else {return false;}
};
