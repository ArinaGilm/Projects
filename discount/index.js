function calculateDiscount(algorithm) {
	const age = getAge();
	return algorithm(age)+0.1;
}

function ageDiscountAlgorithm(age) {
	if (age > 60) {
		return 0.6;
	} else {
		return 0;
	}
}

function ageDiscountAlgorithm2(age) {
	if (age < 15) {
		return 0.1;
	} else {
		return 0;
	}
}

function getAge() {
	return 67;
}

const algorithm = ifdecember?ageDiscountAlgorithm:ageDiscountAlgorithm2;

const discount = calculateDiscount (algorithm);



