const fs = require("fs");

const data = require("../resource/sample-data.json");
const EncryptionService = require("../src/services/encryption.service");

try {
  const service = new EncryptionService();

  const generated = data.map((record) => {
    return {
      name: record.name,
      role: record.role,
      bvn: service.encrypt(record.bvn),
      bvn_hash: service.getBlindIndex(record.bvn),
    };
  });

  fs.writeFileSync("resource/encrypted.json", JSON.stringify(generated));

  console.log("Encrypted record generated successfully");
} catch (error) {
  console.log(error.message);
}
