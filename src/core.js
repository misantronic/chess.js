/**
 * field setup:
 * a = pawn (white)
 * b = rook (white)
 * c = knight (white)
 * d = bishop (white)
 * e = queen (white)
 * f = king (white)
 * A = pawn (black)
 * B = rook (black)
 * C = knight (black)
 * D = bishop (black)
 * E = queen (black)
 * F = king (black)
 * @type {Array}
 */
var a = "bcdefdcbaaaaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxAAAAAAAABCDEFDCB".split(""), F, P = 'w';

document.body[H="innerHTML"]='<x id=p />';

/**
 *
 * @param {Event} e event
 * @param {Number} k [kill]
 * @param {String} n [destination name]
 */
p.onclick = function (e, k, n) {
	f = e.target;							// set destination
	T = f ? f[i = "getAttribute"]('c') : 0;	// origin type

	if (F) {
		// try to move to a field
		N = F.tagName;					// origin name
		n = f.tagName;					// destination name
		m = 0;							// allow movement
		J = F[i]('i');					// index of origin
		j = f[i]('i');					// index of destination
		t = F[i]('c');					// destination type
		s = J == j;						// same field?
		d = Math.abs(J - j);			// difference between origin and destination

		console.log(J, "to", j, "diff:", d);

		// another field is selected...
		if (!s) {
			// pawn
			if (N == 'A') {
				if (n == 'X') { // moving
					if (t == 'w' && J - j == -8 || J > 47 && d == 16) m = 1;	// white
					if (t == 'b' && J - j == 8 || J < 16 && d == 16) m = 1;		// black
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

			// check kill
			if (n != 'X' && t != T) k = 1;

			if (m) {
				// move
				a[j] = t == 'w' ? N.toLowerCase() : N;	// determine which color
				a[J] = 'x';								// empty origin-field

				F = 0;									// reset origin

				P = P == 'w' ? 'b' : 'w';				// switch player
				p.className=P;
			}
		}
	}

	// draw field
	s = "";
	for (i = 0; i < a.length, e=a[i]; i++) {
		s += '<' + e + ' c=' + (e.charCodeAt(0) < 97 ? 'b' : 'w') + ' i=' + i + '></' + e + '>';
	}

	p[H] = s;

	// set origin
	F = n != 'X' && T == P && !k ? f : F;
};
p.onclick({});