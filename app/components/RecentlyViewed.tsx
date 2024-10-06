import React from 'react';

const RecentlyViewed = () => {
  // Mock data for recently viewed items
  const recentItems = [
    { id: 1, name: 'Floral Tattoo Design', price: 120 },
    { id: 2, name: 'Geometric Tattoo', price: 90 },
    { id: 3, name: 'Watercolor Tattoo Session', price: 180 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recently Viewed</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentItems.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;