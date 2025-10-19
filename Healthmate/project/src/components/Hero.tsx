import { Heart, Upload, FileText, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-emerald-500 p-3 rounded-2xl shadow-lg">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              HealthMate
            </h1>
          </div>

          <p className="text-2xl text-emerald-600 font-medium mb-4">
            Sehat ka Smart Dost
          </p>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your personal health companion powered by AI. Upload medical reports,
            track vitals, and get easy-to-understand summaries in English and Roman Urdu.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-50 text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-emerald-200 transform hover:-translate-y-0.5 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <FeatureCard
            icon={<Upload className="w-6 h-6" />}
            title="Upload Reports"
            description="Upload lab reports, X-rays, and prescriptions in any format"
            urdu="Reports aur prescriptions upload karein"
          />
          <FeatureCard
            icon={<FileText className="w-6 h-6" />}
            title="AI Analysis"
            description="Get instant AI-powered summaries in simple language"
            urdu="Aasan zabaan mein AI summary paayein"
          />
          <FeatureCard
            icon={<Activity className="w-6 h-6" />}
            title="Track Vitals"
            description="Manually log BP, sugar, weight and monitor trends"
            urdu="Apni sehat ki monitoring karein"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, urdu }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  urdu: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 text-emerald-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-emerald-600 text-sm italic">{urdu}</p>
    </div>
  );
}
