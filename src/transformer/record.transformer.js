const encryptionService = require("../services/encryption.service");

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
    bvn: encryptionService.decrypt(record.bvn) || "",
  };
};

module.exports = transformer;
