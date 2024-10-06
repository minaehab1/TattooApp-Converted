import React from 'react';

const CartItems = () => {
  // Mock data for cart items
  const cartItems = [
    { id: 1, name: 'Custom Tattoo Design', price: 150, quantity: 1 },
    { id: 2, name: 'Small Tattoo Session', price: 100, quantity: 1 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center py-4 border-b">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
          </div>
          <p className="font-semibold">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItems;