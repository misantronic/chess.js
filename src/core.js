var a = "bcdefdcbaaaaaaaaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxgggggggghijkljih".split(""),
	F, i;

function d(s) {
	s = "";
	for(i=0; i < a.length; i++) {
		s += '<'+a[i]+' i='+i+'></'+a[i]+'>';
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
 * @param same destination equals origin
 * @param t
 * @param g
 * @param fDiff
 */
p.onclick = function(e, f, FName, fName, allowMove, FIndex, fIndex, same, fDiff, t, g) {
	f = e.target;

	if(F) {
		// move to a field
		FName = F.tagName;
		fName = f.tagName;
		allowMove = 0;
		FIndex = F[g="getAttribute"]('i');
		fIndex = f[g]('i');
		same = FIndex == fIndex;
		fDiff = Math.abs(FIndex - fIndex);

		if(same) return;

		console.log("try "+ F.tagName +" from "+ FIndex +" to "+ fIndex);

		if(fName != 'X') { // killing
			// bauer
			if(FName == 'G' && (fDiff == 7 || fDiff == 9)) allowMove = 1;
			if(FName == 'A' && (fDiff == 7 || fDiff == 9)) allowMove = 1;
		} else { // moving
			// white bauer
			if(fName == 'X' && FName == 'G' && fDiff == 8 || FIndex > 47 && fDiff == 16) allowMove = 1;

			// black bauer
			if(fName == 'X' && FName == 'A' && fDiff == 8 || FIndex < 16 && fDiff == 16) allowMove = 1;

			// läufer
			if((FName == 'D' || FName == 'J') && !(fDiff % 7 && fDiff % 9)) allowMove = 1;
		}

		if(allowMove) {
			a[fIndex] = FName;
			a[FIndex] = 'x';

			F = 0;
		}

		d()
	}

	if(fName != 'X') F = f
};