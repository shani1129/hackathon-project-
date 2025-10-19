import { Upload, Sparkles, FileText, LineChart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      number: "01",
      title: "Upload Your Reports",
      description: "Upload medical reports, lab results, X-rays, or prescriptions in any format (PDF, JPG, PNG)",
      urdu: "Apni medical reports upload karein - kisi bhi format mein"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      number: "02",
      title: "AI Analysis",
      description: "Gemini AI reads and analyzes your documents automatically, no manual entry needed",
      urdu: "AI automatically report ko samajh leta hai"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      number: "03",
      title: "Get Summary",
      description: "Receive easy-to-understand explanations in English and Roman Urdu with key insights",
      urdu: "Aasan zabaan mein summary paayein - dono languages mein"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      number: "04",
      title: "Track Progress",
      description: "View your health timeline, track vitals manually, and monitor your health journey",
      urdu: "Apni sehat ki progress track karein timeline mein"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How HealthMate Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to better health management
          </p>
          <p className="text-lg text-emerald-600 font-medium mt-2">
            Kaise kaam karta hai? Bahut aasan!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 transform translate-y-1/2 -translate-x-4"></div>
              )}

              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 h-full">
                <div className="absolute -top-4 -left-4 bg-emerald-500 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="text-emerald-500 mb-4 mt-2">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 mb-3 leading-relaxed">
                  {step.description}
                </p>

                <p className="text-emerald-600 text-sm italic font-medium">
                  {step.urdu}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-100">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-xl flex-shrink-0">
              <Shield className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Important Disclaimer</h4>
              <p className="text-gray-600 mb-1">
                AI is for understanding only, not for medical advice. Always consult your doctor before making any decision.
              </p>
              <p className="text-emerald-600 italic font-medium">
                Yeh AI sirf samajhne ke liye hai, ilaaj ke liye nahi. Hamesha doctor ki salah lein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
