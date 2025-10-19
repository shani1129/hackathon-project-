import { Users, Heart, Activity, Baby, Brain, Stethoscope } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "For Families",
      description: "Manage health records for all family members in one secure place",
      urdu: "Poore family ki reports ek jagah rakho"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Chronic Conditions",
      description: "Track ongoing conditions like diabetes, hypertension, and thyroid disorders",
      urdu: "Sugar, BP jaise long-term problems track karein"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Fitness Tracking",
      description: "Monitor vitals, weight, and health metrics over time",
      urdu: "Weight aur daily vitals ki monitoring"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Pregnancy Care",
      description: "Keep track of prenatal reports and vaccination schedules",
      urdu: "Pregnancy reports aur vaccination schedule"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Mental Wellness",
      description: "Document therapy sessions and mental health progress",
      urdu: "Mental health ki progress track karein"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Doctor Visits",
      description: "Prepare for appointments with organized medical history",
      urdu: "Doctor ke paas jaane se pehle ready raho"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Who Can Benefit?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            HealthMate is designed for everyone who cares about their health
          </p>
          <p className="text-lg text-emerald-600 font-medium mt-2">
            Har kisi ke liye perfect solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100"
            >
              <div className="bg-emerald-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                {useCase.description}
              </p>
              <p className="text-emerald-600 text-sm italic font-medium">
                {useCase.urdu}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
