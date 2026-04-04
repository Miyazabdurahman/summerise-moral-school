import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id='footer' className="bg-gray-900 text-white py-16 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
           <div className='flex justify-center'>
            <img 
              src="Summerise_logo_white.png" 
              alt="Summerize Moral School" 
              className="h-24 sm:h-24 lg:h-40"
            />
          </div> <br />
            <p className="text-gray-400 leading-relaxed">
              Transforming students through <br />values and moral education system.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
                <span>+91 9037161884</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
                <span>miyazabdurahman@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors">
                <MapPin size={20} />
                <span>KM Moulavi Quran Hadeeth Center</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/wisdomtirurangadi"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              
              <a
                href="https://www.instagram.com/wisdomstudents/"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 Summerize Moral School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
