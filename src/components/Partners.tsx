export default function Partners() {
  const partners = [
    { name: 'Education First', logo: '/partners/summerise2025backb.png' },
    { name: 'Youth Development Institute', logo: '/partners/summerise2025backg.png' },
    { name: 'Leadership Academy', logo: '/partners/summerise2025frontb.png' },
    { name: 'Values Foundation', logo: '/partners/summerise2026backg.png' },
    { name: 'Student Success Network', logo: '/partners/summerise2026backg2.png' },
    { name: 'Character Education Center', logo: '/partners/summerise2026frontb.png' },
  ];

  return (
    <section id="partners" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Proudly fulfilled our mission of empowering students with strong moral values, leadership skills, and character development in the past couple of years.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl hover:scale-[1.02] transition duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}