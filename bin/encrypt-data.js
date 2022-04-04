const fs = require("fs");

const data = [
  {
    name: "Benjamin Iduwe",
    role: "Software Engineer",
    bvn: "1234858589",
  },
  {
    name: "John Blanco",
    role: "Product Manager",
    bvn: "2348581589",
  },
  {
    name: "Jerry Blake",
    role: "Product Designer",
    bvn: "3485128589",
  },
  {
    name: "James Westley",
    role: "DevOps Engineer",
    bvn: "8589123485",
  },
  {
    name: "Sunday Monday",
    role: "Quality Assurance Engineer",
    bvn: "9123485858",
  },
];

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
