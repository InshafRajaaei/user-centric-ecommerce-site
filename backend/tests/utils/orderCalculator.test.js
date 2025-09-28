// backend/tests/utils/orderCalculator.test.js

import { calculateOrderTotal } from '../../utils/orderCalculator.js';

describe('Order Total Calculator', () => {
  
  /*
  RED PHASE TESTS
  
  describe('RED Phase ', () => {
    test('RED: should calculate total without discount for orders below 5000', () => {
      const subtotal = 4000;
      const deliveryFee = 500;
      const expectedTotal = 4500;

      const result = calculateOrderTotal(subtotal, deliveryFee);

      expect(result.total).toBe(expectedTotal);
      expect(result.discountApplied).toBe(0);
      expect(result.finalTotal).toBe(expectedTotal);
    });

    test('RED: should apply 10% discount for orders of 5000 or more', () => {
      const subtotal = 5000;
      const deliveryFee = 500;
      const expectedDiscount = 550;
      const expectedFinalTotal = 4950;

      const result = calculateOrderTotal(subtotal, deliveryFee);
      expect(result.discountApplied).toBe(expectedDiscount);
      expect(result.finalTotal).toBe(expectedFinalTotal);
    });

    test('RED: should throw error for negative subtotal', () => {
      const subtotal = -100;
      const deliveryFee = 500;

      expect(() => calculateOrderTotal(subtotal, deliveryFee))
        .toThrow('Subtotal cannot be negative');
    });
  });
  */

  // GREEN PHASE & REFACTOR PHASE TESTS
  describe('GREEN & REFACTOR Phase - Passing Tests', () => {
    
    test('should calculate total without discount for orders below 5000', () => {
      const subtotal = 4000;
      const deliveryFee = 500;
      const expectedTotal = 4500;

      const result = calculateOrderTotal(subtotal, deliveryFee);
      expect(result.total).toBe(expectedTotal);
      expect(result.discountApplied).toBe(0);
      expect(result.finalTotal).toBe(expectedTotal);
    });

    test('should apply 10% discount for orders of 5000 or more', () => {
      const subtotal = 5000;
      const deliveryFee = 500;
      const expectedDiscount = 550;
      const expectedFinalTotal = 4950;

      const result = calculateOrderTotal(subtotal, deliveryFee);
      expect(result.discountApplied).toBe(expectedDiscount);
      expect(result.finalTotal).toBe(expectedFinalTotal);
    });

    test('should throw error for negative subtotal', () => {
      const subtotal = -100;
      const deliveryFee = 500;

      expect(() => calculateOrderTotal(subtotal, deliveryFee))
        .toThrow('Subtotal cannot be negative');
    });

    // REFACTOR Phase 
    test('should handle zero subtotal correctly', () => {
      const subtotal = 0;
      const deliveryFee = 500;
      const expectedTotal = 500;

      const result = calculateOrderTotal(subtotal, deliveryFee);
      expect(result.total).toBe(expectedTotal);
      expect(result.discountApplied).toBe(0);
      expect(result.finalTotal).toBe(expectedTotal);
    });

    test('should handle edge case of exactly 5000 total', () => {
      const subtotal = 4500;
      const deliveryFee = 500;
      const expectedDiscount = 500;
      const expectedFinalTotal = 4500;

      const result = calculateOrderTotal(subtotal, deliveryFee);
      expect(result.discountApplied).toBe(expectedDiscount);
      expect(result.finalTotal).toBe(expectedFinalTotal);
    });

    test('should return correct object structure with all properties', () => {
      const subtotal = 3000;
      const deliveryFee = 500;
      
      const result = calculateOrderTotal(subtotal, deliveryFee);
      
      // Verify the object has all expected properties
      expect(result).toHaveProperty('subtotal');
      expect(result).toHaveProperty('deliveryFee');
      expect(result).toHaveProperty('total');
      expect(result).toHaveProperty('discountApplied');
      expect(result).toHaveProperty('finalTotal');
      
      // Verify values are correct
      expect(result.subtotal).toBe(subtotal);
      expect(result.deliveryFee).toBe(deliveryFee);
      expect(result.total).toBe(3500);
      expect(result.discountApplied).toBe(0);
      expect(result.finalTotal).toBe(3500);
    });
  });
});