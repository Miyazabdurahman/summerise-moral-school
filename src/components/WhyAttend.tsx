import { BookOpen, Award, Sparkles, Users } from 'lucide-react';

export default function WhyAttend() {
  const reasons = [
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'Gain valuable insights from expert speakers and interactive workshops focused on moral values and personal development.',
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Develop essential leadership skills and learn how to inspire positive change in your community and beyond.',
    },
    {
      icon: Sparkles,
      title: 'Motivation',
      description: 'Get inspired by success stories and discover your potential to make a meaningful impact in the world.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with like-minded students, educators, and mentors who share your passion for values-based education.',
    },
  ];

  return (
    <section id="why" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Attend
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes this program transformative
          </p>
        </div>

        {/* Changed Here */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                  {reason.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {reason.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}