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
    <section id="why" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Attend
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes this program transformative
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
