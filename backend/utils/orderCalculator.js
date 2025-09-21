// utils/orderCalculator.js

export function calculateOrderTotal(subtotal, deliveryFee) {
  if (subtotal < 0) {
    throw new Error('Subtotal cannot be negative');
  }

  const total = subtotal + deliveryFee;
  let discountApplied = 0;
  let finalTotal = total;

  // Apply 10% discount if order total is 5000 or more
  if (total >= 5000) {
    discountApplied = total * 0.1;
    finalTotal = total - discountApplied;
  }

  return {
    subtotal,
    deliveryFee,
    total,
    discountApplied,
    finalTotal,
  };
}