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
var a = "bcdfedcbaaaaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxAAAAAAAABCDFEDCB".split(""), F, P = 0;

// prepare HTML-container
document.body[H="innerHTML"]='<x id=p />';

/**
 * @param {Event|String|Object} e event, placeholder
 * @param {Number|Boolean} k [kill]
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
		J = +F[i]('i');					// index of origin
		j = +f[i]('i');					// index of destination
		t = +F[i]('c');					// destination type
		s = J ^ j;						// not same field?
		D = J - j;						// difference between origin and destination
		d = Math.abs(D);				// absolute difference between origin and destination

		//console.log(J, "to", j, "diff:", d);

		// another field is selected...
		if (s) {
			// pawn
			if (N == 'A') {
				m = n == 'X'
					? (!t && D == -8 || J > 47 && d == 16) || (t && D == 8 || J < 16 && d == 16)	// pawn moving
					: (!t && (D == -9 || D == -7)) || (t && (D == 9 || D == 7));					// pawn killing
			} else {
				// bishop | queen
				if (N == 'D' || N == 'E')
					// dertermine direction move-set
					if(M = !(d % 7) ? 7 : !(d % 9) ? 9 : 0)
						// move
						for (m = 1, e = J > j ? j + M : J + M; e < (J > j ? J : j); e += M) if (a[e] != "x") m = 0;

				// rook | queen
				if(N == 'B' || N == 'E')
					// dertermine horizontal or vertial move-set
					if(M = ~~(J / 8) == ~~(j / 8) ? 1 : !(d % 8) ? 8 : 0)
						// move
						for (m = 1, e = J < j ? J+M : J-M; J < j ? e < j : e > j; J < j ? e+=M : e-=M) if (a[e] != "x") m = 0;

				if (
					(N == 'F' && (d == 1 || (d > 6 && d < 10 ))) || 			// king
					(N == 'C' && (d == 17 || d == 15 || d == 10 || d == 6))		// knight
				) m = 1;
			}

			// check kill
			k = n != 'X' && t ^ T;

			if (m) {
				// move
				a[j] = t ? N : N.toLowerCase();			// determine which player
				a[J] = 'x';								// empty origin-field

				F = 0;									// reset origin

				p.className = P = P ? 0 : 1;			// switch player
			}
		}
	}

	// draw field
	p[H] = "";
	for (i = 0; i < a.length, e=a[i]; i++) {
		p[H] += '<' + e + ' c=' + (e.charCodeAt(0) < 97 ? 1 : 0) + ' i=' + i + '></' + e + '>';
	}

	// set origin
	F = n != 'X' && T == P && !k ? f : F;
};
p.onclick({})