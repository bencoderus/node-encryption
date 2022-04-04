const CryptoJS = require("crypto-js");

const encryptionHash = "123445@#$$";

class EncryptionService {
  /**
   * Create a new service instance.
   *
   * Verify if encryption key is set.
   */
  constructor() {
    if (!encryptionHash) {
      throw new Error("Please set encryption hash first");
    }
  }

  /**
   * Encrypt a plain value.
   *
   * @param {string} value
   *
   * @returns {string}
   */
  encrypt(value) {
    return CryptoJS.AES.encrypt(value, encryptionHash).toString();
  }

  /**
   * Decrypt an encrypted value.
   *
   * @param {string} encryptValue
   *
   * @returns {string}
   */
  decrypt(encryptValue) {
    return CryptoJS.AES.decrypt(encryptValue, encryptionHash).toString(
      CryptoJS.enc.Utf8
    );
  }

  /**
   * Get blind index for a plain value.
   *
   * @param {string} value
   *
   * @returns {string}
   */
  getBlindIndex(value) {
    return CryptoJS.HmacSHA256(value, encryptionHash).toString();
  }
}

module.exports = new EncryptionService();
