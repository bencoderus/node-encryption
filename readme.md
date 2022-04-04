### Implementation of searchable encryption using a blind index in NodeJS.
Blind indexing is an approach to securely search encrypted data with minimal information leakage. All the personally identifiable information is encrypted and stored in a database/data store. The database is not accessible to the user. The user can only search for the data using the encrypted search query. Blind index implements encryption at rest.

## Requirements
1. Node

## Installation
1. Clone repository
2. cd node-encryption
3. npm install
4. npm run generate:encrypted - to generate encrypted data.
5. npm run start - to start the server.

## Usage
GET localhost:3000/records
GET localhost:3000/records/find-by-bvn {bvn: "123456789"}