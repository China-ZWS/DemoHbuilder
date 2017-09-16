document.write("<script src=\"../Lib/tripledes.js\" type=\"text/javascript\" charset=\"utf-8\"></script>");

function decryptByDES(ciphertext, key) {
	var keyHex = CryptoJS.enc.Utf8.parse(key);
	// direct decrypt ciphertext
	var decrypted = CryptoJS.DES.decrypt({
		ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
	}, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return decrypted.toString(CryptoJS.enc.Utf8);
}
