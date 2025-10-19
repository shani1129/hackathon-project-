import { Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold text-white">HealthMate</span>
            </div>
            <p className="text-gray-400 mb-2 max-w-md">
              Your personal health companion powered by AI. Making healthcare management easier for everyone.
            </p>
            <p className="text-emerald-400 italic text-sm">
              Sehat ka Smart Dost - AI ke zariye life easy banana
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@healthmate.com" className="hover:text-emerald-400 transition-colors">
                  support@healthmate.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              2025 HealthMate. All rights reserved.
            </p>
            <div className="bg-amber-900/30 border border-amber-700/50 px-4 py-2 rounded-lg">
              <p className="text-amber-400 text-sm font-medium">
                Disclaimer: AI is for understanding only, not for medical advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
