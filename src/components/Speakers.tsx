export default function Speakers() {
  const speakers = [
    {
      name: 'Muhammed Ajmal C',
      title: 'Education Specialist',
      description: 'Expert in Educational Sector.',
      image: '/Ajmal Sir.png?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Shamil Kooriyaden',
      title: 'Leadership Coach',
      description: 'Renowned leadership trainer helping students unlock their full potential.',
      image: '?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Aman',
      title: 'Motivational Speaker',
      description: 'Inspiring youth advocate and TEDx speaker on personal growth and values.',
      image: '?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Adil',
      title: 'Child Psychologist',
      description: 'Specialist in adolescent development and ethical decision-making.',
      image: '?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Shuraih Salafi',
      title: 'Ethics Scholar',
      description: 'Teaching moral philosophy and practical ethics to young minds.',
      image: '?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Miyaz Abdurahman',
      title: 'Youth Mentor',
      description: 'Empowering students through mentorship and value-based education.',
      image: '?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="speakers" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Speakers
          </h2>
          <p className="text-xl text-gray-600">
            Learn from industry leaders and<br /> inspirational mentors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{speaker.title}</p>
                <p className="text-gray-600 text-sm">{speaker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
