import CryptoJS from ('cryptojs');

var encrypted = CryptoJS.AES.encrypt(anjime, "coinsEnc");
console.log(encrypted);
var decrypted = CryptoJS.AES.decrypt(anjime, "coinsEnc");
console.log(decrypted);