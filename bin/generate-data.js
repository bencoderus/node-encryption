const fs = require("fs");
const encryptionService = require("../src/services/encryption.service");

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

try {
  const generated = data.map((record) => {
    return {
      name: record.name,
      role: record.role,
      bvn: encryptionService.encrypt(record.bvn),
      bvn_hash: encryptionService.getBlindIndex(record.bvn),
    };
  });

  fs.writeFileSync("resource/data.json", JSON.stringify(generated));

  console.log("Encrypted record generated successfully");
} catch (error) {
  console.log(error.message);
}
