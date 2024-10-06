const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: ['5 dream interpretations/month', 'Basic dream journal', 'Email support']
  },
  {
    name: 'Pro',
    price: '$19.99',
    features: ['Unlimited dream interpretations', 'Advanced dream journal', 'Priority support', 'Trend analysis']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['All Pro features', 'Dedicated account manager', 'Custom integrations', 'Team collaboration']
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing