### Implementation of searchable encryption using a blind index in NodeJS.
Blind indexing is an approach to securely search encrypted data with minimal information leakage. All the personally identifiable information is encrypted and stored in a database/data store. The database is not accessible to the user. The user can only search for the data using the encrypted search query. Blind index implements encryption at rest.

## Requirements
1. Node

## Installation
1. Clone repository
2. cd node-encryption
3. npm install
4. npm run generate:data - Encrypts all the plain data and stores it in a json file for usage.
5. npm run start - To start the server.

## Testing
- Get all the records
```bash
curl http://localhost:3000/records
```

- Find by bvn (Change 12345678 to a valid bvn)
```bash
curl --header "Content-Type: application/json" -d "{\"bvn\":\"12345678\"}" http://localhost:3000/records/find-by-bvn
```

Please note all the records here are dummy data and this project was created to illustrate blind indexing in NodeJS.