/**
 * Utility functions for the API
 */

/**
 * Simple function to validate if a string is not empty
 * @param {string} str - The string to validate
 * @returns {boolean} - True if string is valid (not empty), false otherwise
 */
function isValidString(str) {
  return typeof str === 'string' && str.trim().length > 0;
}

/**
 * Format response object for API endpoints
 * @param {boolean} success - Whether the operation was successful
 * @param {string} message - The message to include
 * @param {*} data - Optional data to include
 * @returns {object} - Formatted response object
 */
function formatResponse(success, message, data = null) {
  const response = {
    success,
    message
  };
  
  if (data !== null) {
    response.data = data;
  }
  
  return response;
}

module.exports = {
  isValidString,
  formatResponse
};