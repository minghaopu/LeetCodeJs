let consineSimilarity = function(vec1, vec2) {
	if (vec1.length !== vec2.length) return -2;
	let dot = 0, denominatorA = 0, denominatorB = 0;
	for (let i = 0; i < vec1.length; i++) {
		dot += vec1[i] * vec2[i];
		denominatorA += vec1[i] * vec1[i];
		denominatorB += vec2[i] * vec2[i];
	}
	if (denominatorA === 0 || denominatorB === 0) {
		throw new Error("input vectors has zero-vectors");
	}
	return dot / (Math.sqrt(denoninatorA) * Math.sqrt(denominatorB));
}