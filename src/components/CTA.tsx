export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-6xl font-bold mb-6">
          Don't Miss This Opportunity
        </h2>
        
        <p className="text-xl mb-10 text-gray-300">
          Join hundreds of students in this life-changing experience. Limited seats available!
        </p>
        
        <a
           href='https://docs.google.com/forms/d/e/1FAIpQLSdc81FobNzjporc9q7SztNQQNEQFrIyy8vboOpq_HLZnq0ARg/viewform?usp=dialog'
           target='_blank'
           rel='noopener noreferrer'
           className='px-10 py-5 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
           >
            Register Now
           </a>

      </div>
    </section>
  );
}
