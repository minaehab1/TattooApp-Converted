const RewardsDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Loyalty Program</h2>
        <p className="text-3xl font-bold text-purple-600">1,250 points</p>
        <p className="mt-2">Earn 1 point for every $1 spent</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Referral Program</h2>
        <p className="text-xl">Your referral code:</p>
        <p className="text-2xl font-bold text-blue-600">TATTOO123</p>
        <p className="mt-2">Earn 500 points for each referral</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Ambassador Program</h2>
        <p className="text-xl">Status: <span className="font-bold text-green-600">Active</span></p>
        <p className="mt-2">Exclusive perks for our top promoters</p>
      </div>
    </div>
  )
}

export default RewardsDisplay