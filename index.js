function prime(n) {
  if (n < 2) {
	 return [];
  }

  var lp = [],
	  pr = [];

  for (var i = 2; i < n; i++) {
	 lp[i] = 0;
  }

  for (var i = 2; i < n; i++) {
	 if (lp[i] == 0) {
		lp[i] = i;
		pr.push(i);
	 }

	 for (var j = 0; pr[j] <= lp[i] && (i*pr[j]) <= n; j++) {
		lp[i*pr[j]] = pr[j];
	 }
  }

  return pr;
}

module.exports = prime;