import { Shield, Languages, Clock, FileSearch, TrendingUp, Bell } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Smart Report Analysis",
      description: "AI reads your PDFs and images directly - no manual data entry needed",
      urdu: "Gemini directly reports ko read karta hai - koi manual entry nahi"
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Bilingual Support",
      description: "Get explanations in both English and Roman Urdu",
      urdu: "English aur Roman Urdu dono mein samajh paayein"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Health Timeline",
      description: "View your entire medical history in chronological order",
      urdu: "Apni puri medical timeline ek jagah dekhein"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your health data is encrypted and protected with enterprise-grade security",
      urdu: "Aapka data bilkul safe aur secure hai"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Insights",
      description: "Highlights abnormal values and suggests questions for your doctor",
      urdu: "Important points highlight hoti hain doctor ke liye"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Health Reminders",
      description: "Get personalized health tips and dietary recommendations",
      urdu: "Sehat ke tips aur khane ki salah milti hai"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Health Management
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sehat ka poora khayal - ek hi jagah par
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-emerald-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                {feature.description}
              </p>
              <p className="text-emerald-600 text-sm italic font-medium">
                {feature.urdu}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
