import React from 'react';

const RelatedItems = () => {
  // Mock data for related items
  const relatedItems = [
    { id: 1, name: 'Aftercare Kit', price: 30 },
    { id: 2, name: 'Tattoo Touch-Up Session', price: 50 },
    { id: 3, name: 'Gift Card', price: 100 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedItems.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
            <button className="mt-2 bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-300 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;