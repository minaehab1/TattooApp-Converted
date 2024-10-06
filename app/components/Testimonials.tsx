import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Psychologist',
    image: '/testimonial1.jpg',
    quote: 'DreamApp has revolutionized how I approach dream interpretation in my practice. It\'s an invaluable tool.'
  },
  {
    name: 'Michael R.',
    role: 'Artist',
    image: '/testimonial2.jpg',
    quote: 'As an artist, DreamApp helps me tap into my subconscious and find inspiration for my work. It\'s amazing!'
  },
  {
    name: 'Emily L.',
    role: 'Student',
    image: '/testimonial3.jpg',
    quote: 'I\'ve always been fascinated by my dreams. DreamApp helps me understand them and myself better.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials