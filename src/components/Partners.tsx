export default function Partners() {
  const partners = [
    { name: 'Education First', logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Youth Development Institute', logo: 'https://images.pexels.com/photos/6476805/pexels-photo-6476805.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Leadership Academy', logo: 'https://images.pexels.com/photos/6476778/pexels-photo-6476778.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Values Foundation', logo: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Student Success Network', logo: 'https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Character Education Center', logo: 'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=200' },
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Proudly fullfilled our mission of empowering students with strong moral values, leadership skills, and character development in the past couple of years.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
