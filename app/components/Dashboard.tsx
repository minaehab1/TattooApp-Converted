const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Your Rewards</h2>
        <p className="text-3xl font-bold text-purple-600">1,250 points</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Booking Status</h2>
        <p className="text-xl font-medium text-green-600">Open for appointments</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow col-span-full">
        <h2 className="text-2xl font-semibold mb-4">Latest News & Promotions</h2>
        <ul className="list-disc list-inside">
          <li>New artist joining our team next month!</li>
          <li>20% off on all tattoos above $200 this weekend</li>
          <li>Introducing our new loyalty program - earn points with every visit</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard