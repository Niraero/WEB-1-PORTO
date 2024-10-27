const namaSaya = "nirvana aero"
let usia = 20;

const biodata = document.getElementById('biodata');
console.log(biodata)

function generateBiodata() {
let generasi;

	if (usia > 10 && usia < 17) {
		// ini adalah kondisi pertama (true/benar)
		generasi = "generasi remaja"
	} else if (usia > 17 && usia < 30) {
		// ini adalah kondisi pertama (true/benar)
		generasi = "generasi dewasa"
	} else if (usia >= 30) {
		// ini adalah kondisi pertama (true/benar)
		console.log('anda tua')
	} else if (usia > 2 && usia < 10) {
		// ini adalah kondisi pertama (true/benar)
		console.log('anda masih anak kecil')
	} else {
		// ini adalah kondisi tindak terpenuhi/false(salah)
		console.log('anda alomani')
	}
	return biodata.innerHTML = generasi;

}

console.log(namaSaya);
console.log(usia);

generateBiodata();
