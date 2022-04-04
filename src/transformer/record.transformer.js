const EncryptionService = require("../services/encryption.service");
const service = new EncryptionService();

/**
 * Format an object and decrypt the encrypted value.
 *
 * @param {object} record
 *
 * @returns {object}
 */
const transformer = (record) => {
  return {
    name: record.name || "",
    role: record.role || "",
    bvn: service.decrypt(record.bvn) || "",
  };
};

module.exports = transformer;
