const { okResponse, notFoundResponse } = require("response-transformer");
const { response, request } = require("express");

const EncryptionService = require("../services/encryption.service");
const service = new EncryptionService();
const data = require("../../resource/data.json");
const transformer = require("../transformer/record.transformer");

/**
 * Get all records.
 *
 * @param {request} request
 * @param {response} response
 *
 * @returns {response}
 */
const index = (request, response) => {
  const records = data.map((record) => {
    return transformer(record);
  });

  return okResponse(response, "All records retrieved successfully", records);
};

/**
 * Find a record by using the BVN.
 * Implemented search using the searchable encryption.
 *
 * @param {request} request
 * @param {response} response
 *
 * @returns {response}
 */
const find = (request, response) => {
  const blindIndex = service.getBlindIndex(request.body.bvn);

  const found = data.find((record) => record.bvn_hash === blindIndex);

  if (!found) {
    return notFoundResponse(response, "Record was not found");
  }

  return okResponse(
    response,
    "Record retrieved successfully",
    transformer(found)
  );
};

module.exports = {
  index,
  find,
};
