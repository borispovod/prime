function prime(n) {
  if (n < 2) {
	 return [];
  }

  var arr = [];
  var start = 2;

  for (var i = 2; i <= n; i++) {
	 arr[i] = i;
  }

  function recursive() {
	 arr.forEach(function (it, i) {
		if (i > 2) {
		  if (it != start && it % start == 0) {
			 arr.splice(i, 1);
		  }
		}
	 });

	 start++;

	 if (start < arr.length) {
		recursive();
	 }
  }

  recursive();

  return arr.splice(2);
}

module.exports = prime;