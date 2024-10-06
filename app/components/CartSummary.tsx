import React from 'react';

const CartSummary = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>$250</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>$20</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mt-4">
        <span>Total</span>
        <span>$270</span>
      </div>
      <button className="w-full bg-black text-white py-2 rounded-md mt-6 hover:bg-gray-800 transition-colors">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;