var a = "bcdefdcbaaaaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxAAAAAAAABCDEFDCB".split(""),
	F, i;

function d(s, e) {
	s = "";
	for (i = 0; i < a.length, e=a[i]; i++) {
		s += '<' + e + ' c=' + (e.charCodeAt(0) < 97 ? 'b' : 'w') + ' i=' + i + '></' + e + '>';
	}

	p.innerHTML = s;
}

d();

/**
 *
 * @param e
 * @param f figure select / figure about to be moved
 * @param FName origin name
 * @param fName desitination name
 * @param allowMove allow figure to move
 * @param FIndex origin-index
 * @param fIndex destination-index
 * @param {"b"|"w"} fType type of the current figure (b=black, w=white)
 * @param {"b"|"w"} FType type of the destinations figure (b=black, w=white)
 * @param same destination equals origin
 * @param fDiff
 * @param kill
 */
p.onclick = function (e, f, FName, fName, allowMove, FIndex, fIndex, fType, FType, same, fDiff, kill) {
	f = e.target;

	if (F) {
		// move to a field
		FName = F.tagName;
		fName = f.tagName;
		allowMove = 0;
		FIndex = F[i = "getAttribute"]('i');
		fIndex = f[i]('i');
		FType = f[i]('c');
		fType = F[i]('c');
		same = FIndex == fIndex;
		fDiff = Math.abs(FIndex - fIndex);

		if (!same) {
			//console.log("try " + F.tagName + " from " + FIndex + " to " + fIndex, fType);

			if (FName == 'A') { // pawn
				if (fName == 'X') { // moving
					if (fType == 'w' && FIndex - fIndex == -8 || FIndex > 47 && fDiff == 16) allowMove = 1;	// white
					if (fType == 'b' && FIndex - fIndex == 8 || FIndex < 16 && fDiff == 16) allowMove = 1;	// black
				} else { // killing
					if (fDiff == 7 || fDiff == 9) allowMove = 1;
				}
			} else {
				// bishop | queen
				if ((FName == 'D' || FName == 'E') && !(fDiff % 7 && fDiff % 9)) allowMove = 1;

				// rook | queen
				if ((FName == 'B' || FName == 'E') && (!(fDiff % 8) || (~~(FIndex / 8) == ~~(fIndex / 8)))) allowMove = 1;

				// king
				if (FName == 'F' && (fDiff == 1 || (fDiff > 6 && fDiff < 10 ))) allowMove = 1;

				// knight
				if (FName == 'C' && (fDiff == 17 || fDiff == 15 || fDiff == 10 || fDiff == 6)) allowMove = 1;
			}

			if (fName != 'X' && fType != FType) {
				kill = 1;
			}

			if (allowMove) {
				a[fIndex] = fType == 'w' ? FName.toLowerCase() : FName;
				a[FIndex] = 'x';

				F = 0;

				d()
			}
		}
	}

	F = fName != 'X' && !kill ? f : F;
};