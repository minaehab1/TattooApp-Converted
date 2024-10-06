import { FaBrain, FaChartLine, FaLock } from 'react-icons/fa'

const features = [
  {
    icon: <FaBrain className="text-4xl mb-4 text-purple-500" />,
    title: 'AI-Powered Analysis',
    description: 'Our advanced AI algorithms provide deep insights into your dreams.'
  },
  {
    icon: <FaChartLine className="text-4xl mb-4 text-purple-500" />,
    title: 'Personalized Tracking',
    description: 'Track your dream patterns and see how they evolve over time.'
  },
  {
    icon: <FaLock className="text-4xl mb-4 text-purple-500" />,
    title: 'Secure and Private',
    description: 'Your dreams are personal. We ensure your data is kept safe and confidential.'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features