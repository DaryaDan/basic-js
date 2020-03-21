module.exports = function countCats(matrix) {
  // throw 'Not implemented';
  var c=0;

  for (let a of matrix) {
	for (let b of a) {
		if (b=="^^") c++;
	}
}

    return c;
};
