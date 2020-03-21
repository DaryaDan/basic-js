const chainMaker = {
  a: [],
  getLength() {
    return this.a.length;
  },
  addLink(value) {
    if (value === null) {
      this.a.push('null');
      return this;}
    this.a.push(value);
    return this;
  },
  removeLink(position) {
    if (position>0 && position < this.a.length && Number.isInteger(position))
  {
    this.a.splice(position-1, 1);
  return this;}
   this.a = [];
      throw new Error();
  },
  reverseChain() {
    this.a.reverse();
return this;
  },
  finishChain() {
    var b='( '+ this.a.join(' )~~( ') + ' )';
    this.a = [];
    return b;
  }
};
module.exports = chainMaker;
