import { Calendar, MapPin, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-12 min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-20 right-10 w-52 h-52 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 "></div>
      <div className="absolute top-40 left-10 w-52 h-52 sm:w-72 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-52 h-52 sm:w-72 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <div className="space-y-2 sm:space-y-8 animate-fade-in-up">

          {/* Wisdom Students Logo */}
          <div className="flex justify-center">
            <img 
              src="/Wisdom_Students_logo.png"
              alt="Wisdom Students"
              className="h-12 sm:h-10 opacity-90"
            />
          </div>

          {/* Title */}
          <div className='flex justify-center'>
            <img 
              src="/Summerise_logo_Blue.png" 
              alt="Summerize Moral School" 
              className="h-20 sm:h-32 lg:h-45"
            />
          </div>
          <br />
          {/* Subtitle */}
          <p className="text-base sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-2">
            Empowering Students With Values, Purpose & Real-Life Guidance
          </p>

          {/* Event Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 text-left">
            
            <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <Calendar className="text-purple-600" size={22} />
              <div>
                <div className="text-xs sm:text-sm text-gray-500">Date</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  April 13-20, 2026
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <MapPin className="text-purple-600" size={22} />
              <div>
                <div className="text-xs sm:text-sm text-gray-500">Location</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  TIRURANGADI
                </div>
              </div>
            </div>

            <a
              href='https://maps.app.goo.gl/gpsfFJGa8Yx5MWzf6'
              target='_blank'
              rel='noopener noreferrer'
              className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <Building2 className="text-purple-600" size={22} />
              <div>
                <div className="text-xs sm:text-sm text-gray-500">Venue</div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">
                  KM Moulavi Quran Hadeeth Center
                </div>
              </div>
            </a>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
            
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSdc81FobNzjporc9q7SztNQQNEQFrIyy8vboOpq_HLZnq0ARg/viewform?usp=dialog'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
            >
              Register Now
            </a>

            <a
              href='/Summerise_pamphlet_site.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200"
            >
              View Details
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}