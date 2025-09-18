const { isValidString, formatResponse } = require('../src/utils');

describe('Utils', () => {
  describe('isValidString', () => {
    test('should return true for valid non-empty strings', () => {
      expect(isValidString('hello')).toBe(true);
      expect(isValidString('test')).toBe(true);
      expect(isValidString('   hello world   ')).toBe(true);
    });

    test('should return false for empty or invalid strings', () => {
      expect(isValidString('')).toBe(false);
      expect(isValidString('   ')).toBe(false);
      expect(isValidString(null)).toBe(false);
      expect(isValidString(undefined)).toBe(false);
      expect(isValidString(123)).toBe(false);
    });
  });

  describe('formatResponse', () => {
    test('should format success response without data', () => {
      const response = formatResponse(true, 'Operation successful');
      expect(response).toEqual({
        success: true,
        message: 'Operation successful'
      });
    });

    test('should format error response', () => {
      const response = formatResponse(false, 'Operation failed');
      expect(response).toEqual({
        success: false,
        message: 'Operation failed'
      });
    });

    test('should format response with data', () => {
      const testData = { id: 1, name: 'Test' };
      const response = formatResponse(true, 'Data retrieved', testData);
      expect(response).toEqual({
        success: true,
        message: 'Data retrieved',
        data: testData
      });
    });
  });
});