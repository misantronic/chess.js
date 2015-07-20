var a = "bcdefdcbaaaaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxAAAAAAAABCDEFDCB".split(""),
	F;

/**
 *
 * @param {Event} e event
 * @param {Number} k kill
 * @param {String} n destination name
 */
p.onclick = function (e, k, n) {
	f = e.target;

	if (F) {
		// move to a field
		N = F.tagName;					// origin name
		n = f.tagName;					// destination name
		m = 0;							// allow movement
		J = F[i = "getAttribute"]('i');	// index of origin
		j = f[i]('i');					// index of destination
		T = f[i]('c');					// origin type
		t = F[i]('c');					// destination type
		s = J == j;						// same field?
		d = Math.abs(J - j);			// difference between origin and destination

		if (!s) {
			//console.log("try " + F.tagName + " from " + FIndex + " to " + fIndex, fType);

			if (N == 'A') { // pawn
				if (n == 'X') { // moving
					if (t == 'w' && J - j == -8 || J > 47 && d == 16) m = 1;	// white
					if (t == 'b' && J - j == 8 || J < 16 && d == 16) m = 1;	// black
				} else { // killing
					if (d == 7 || d == 9) m = 1;
				}
			} else {
				// bishop | queen
				if ((N == 'D' || N == 'E') && !(d % 7 && d % 9)) m = 1;

				// rook | queen
				if ((N == 'B' || N == 'E') && (!(d % 8) || (~~(J / 8) == ~~(j / 8)))) m = 1;

				// king
				if (N == 'F' && (d == 1 || (d > 6 && d < 10 ))) m = 1;

				// knight
				if (N == 'C' && (d == 17 || d == 15 || d == 10 || d == 6)) m = 1;
			}

			if (n != 'X' && t != T) {
				k = 1;
			}

			if (m) {
				a[j] = t == 'w' ? N.toLowerCase() : N;
				a[J] = 'x';

				F = 0;
			}
		}
	}

	s = "";
	for (i = 0; i < a.length, e=a[i]; i++) {
		s += '<' + e + ' c=' + (e.charCodeAt(0) < 97 ? 'b' : 'w') + ' i=' + i + '></' + e + '>';
	}

	p.innerHTML = s;

	F = n != 'X' && !k ? f : F;
};
p.onclick({});