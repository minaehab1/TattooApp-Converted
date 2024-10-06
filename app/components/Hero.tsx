import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-purple-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock the Mysteries of Your Dreams</h1>
          <p className="text-xl mb-8">DreamApp uses advanced AI to interpret your dreams and provide personalized insights.</p>
          <button className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition duration-300">
            Start Your Dream Journey
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero-image.png"
            alt="Dream interpretation illustration"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero