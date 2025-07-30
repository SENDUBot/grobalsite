import Image from "next/image";
import { CheckCircle, Server, Shield, Zap, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/vr.svg"
                alt="SENDUBot Logo"
                width={24}
                height={24}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-white">SENDUBot</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#youtube" className="text-gray-300 hover:text-white transition-colors">YouTube</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
            <a 
              href="https://discord.gg/Gnr96XYdu5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
              Ultimate Support Tool
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Optimize Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Online Purchases</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          SENDUBot is the ultimate bot support tool made in Japan, used by over 400 people in total. It provides integrated proxies, virtual Windows servers, advanced proxy management, and variant acquisition tools to reduce costs and maximize purchase success rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://discord.gg/Gnr96XYdu5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 inline-block"
            >
              Start SENDUBot
            </a>
            <a 
              href="https://sendubot-dev.gitbook.io/sendubot-global-tutorial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r bg-purple-500/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="youtube" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Fusion Proxy is
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Powerful</span>
          </h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/KxTrb7FY-AI"
              title="Fusion Proxy Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Success</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to optimize your online purchasing workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Server className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fusion Proxy</h3>
              <p className="text-gray-300 leading-relaxed">
              The most powerful feature in the ecosystem that combines residential proxies with AWS instances, combining the stability of residential proxies and the speed of DC servers.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AWS Virtual Windows Servers & Proxy Generator</h3>
              <p className="text-gray-300 leading-relaxed">
              Easily create a virtual Windows and proxy on AWS with just one click, which offers advantages in uptime, high speed stability, and cost performance.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proxy Selection</h3>
              <p className="text-gray-300 leading-relaxed">
                Improve the probability of purchase by extracting only residential proxies with stable and fast speeds.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Variant Acquisition</h3>
              <p className="text-gray-300 leading-relaxed">
                Ability to easily bulk grab variants on Shopify sites, including Supreme online.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Log tool</h3>
              <p className="text-gray-300 leading-relaxed">
                Import log text files from specific Bot services to easily review your Bot strategy today.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Chat AI</h3>
              <p className="text-gray-300 leading-relaxed">
                The high-performance yet free Gemini API makes information gathering perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> SENDUBot</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            First, join SENDUBot's Discord, register for a subscription using the payment link below, and activate it by sending a DM to the administrator.
            </p>
          </div>
          <div className="flex justify-center items-center mb-14">
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/Gnr96XYdu5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all inline-block"
              >
                Discord
              </a>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Grobal Plan</h3>
                <p className="text-gray-300 mb-6">For power users and long-term subscribers</p>
                <div className="text-4xl font-bold text-white mb-2">
                  $15
                  <span className="text-lg text-gray-300 font-normal"> per month(in tax)</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  Fusion Proxy with AWS
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  Virtual Windows & High-Speed Proxy Construction (AWS)
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  Proxy Selection Function
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  Other features to increase the probability of purchase
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  Support within the Discord server
                </li>
                <p className="text-sm text-gray-400 mt-6 text-center">
                ※ Global Plan does not support virtual Windows and proxy and fusion proxy construction in the Japan region.
              </p>
              </ul>
              <a 
                href="https://buy.stripe.com/14k5kKefJeIW85q00F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all inline-block text-center"
              >
                Purchase
              </a>

            </div>
            <div className="text-center mt-10">
            <p className="text-l text-gray-300 max-w-2xl mx-auto">
            After completing the payment, please send a DM to the administrator account (@sendubot) on Discord with the email address used for Stripe payment.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-6 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/vr.svg"
                  alt="SENDUBot Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-2xl font-bold text-white">SENDUBot</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                The ultimate support tool for optimizing your online purchasing workflow. Reduce costs, increase success rates.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://discord.gg/Gnr96XYdu5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all inline-block"
                >
                  Discord
                </a>
                <a 
                  href="https://sendubot-dev.gitbook.io/sendubot-global-tutorial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all inline-block"
                >
                  Documentation
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="https://sendubot-dev.gitbook.io/sendubot-global-tutorial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="https://discord.gg/Gnr96XYdu5" className="text-gray-300 hover:text-white transition-colors">Discord Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 SENDUBot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}