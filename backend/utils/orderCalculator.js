/*
RED PHASE

export function calculateOrderTotal(subtotal, deliveryFee) {

  return {
    subtotal: subtotal,
    deliveryFee: deliveryFee,
    total: subtotal + deliveryFee,
    discountApplied: 0,
    finalTotal: subtotal + deliveryFee
  };
}
*/

/*
GREEN PHASE

export function calculateOrderTotal(subtotal, deliveryFee) {
  const total = subtotal + deliveryFee;
  let discountApplied = 0;
  let finalTotal = total;

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
*/

// REFACTOR PHASE
export function calculateOrderTotal(subtotal, deliveryFee) {
  if (subtotal < 0) {
    throw new Error('Subtotal cannot be negative');
  }

  const total = subtotal + deliveryFee;
  let discountApplied = 0;
  let finalTotal = total;

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