import React from 'react';
import { Home, Users, Sparkles, Layout, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-100 blur-3xl opacity-20 -top-32 -left-32 rounded-full" />

      <div className="container mx-auto px-4 py-20 relative mt-5">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-2 pb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Where Better Living Begins
          </h1>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Born from frustration, perfected through experience. Discover the Beiyo difference.
          </p>
        </motion.div>

        {/* The Why Section */}
        <section className="grid lg:grid-cols-2 gap-8 mb-28">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-full rounded-3xl shadow-lg border-2 border-yellow-200"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-6 h-full">
              {[
                { icon: Users, text: 'Vibrant Community', bg: 'bg-yellow-50' },
                { icon: Home, text: 'Comfortable Spaces', bg: 'bg-yellow-100' },
                { icon: Sparkles, text: 'Modern Amenities', bg: 'bg-yellow-200' },
                { icon: Layout, text: 'Supportive Environment', bg: 'bg-yellow-300' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`${item.bg} p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border-2 border-yellow-200`}
                >
                  <item.icon className="w-10 h-10 text-yellow-600 mb-4" />
                  <p className="text-lg font-semibold text-black">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white rounded-3xl shadow-md border-2 border-yellow-200">
              <h2 className="text-3xl font-bold text-yellow-600 mb-6">THE WHY</h2>
              <div className="space-y-6 text-black">
                <blockquote className="text-2xl font-semibold border-l-4 border-yellow-400 pl-4 text-yellow-700">
                  "We Couldn’t Find It, So We Built It for You"
                </blockquote>
                <p className="text-lg leading-relaxed">
                  Cramped hostels or overpriced PGs—where’s the real choice in that? In 2023, 
                  a group of like-minded entrepreneurs in Indore came together with a simple yet 
                  powerful vision—to make accommodation both <span className='font-semibold'> affordable and exceptional.</span>
                </p>
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <p className="text-lg text-black">
                    We believe that great living shouldn't come at a steep price. So, we set out 
                    to redefine urban stays, blending comfort, convenience, and community into 
                    a space you can truly call home.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Rest of the sections remain unchanged */}
        {/* VIBE Section */}
        <section className="mb-28">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-yellow-50 rounded-3xl p-12 relative overflow-hidden border-2 border-yellow-100"
          >
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold text-yellow-600 mb-12">THE VIBE</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Users, letter: 'V', title: 'Vibrant Community', 
                    text: 'Connect and build friendships that feel like family' },
                  { icon: Home, letter: 'I', title: 'Individual Comfort', 
                    text: 'Thoughtfully designed private spaces for your lifestyle' },
                  { icon: Sparkles, letter: 'B', title: 'Better Living', 
                    text: 'Modern, hassle-free accommodation that enhances daily life' },
                  { icon: Layout, letter: 'E', title: 'Empowering Environment', 
                    text: 'Supports your growth and keeps you motivated' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border-2 border-yellow-200"
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-4xl font-bold text-yellow-600 mr-3">{item.letter}</span>
                      <item.icon className="w-10 h-10 text-yellow-600" />
                    </div>
                    <h3 className={`text-2xl font-bold text-black mb-4 ${index===3 && "-mt-1"}`}>{item.title}</h3>
                    <p className="text-black/80">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* The How Section */}
        <section className="grid lg:grid-cols-2 gap-12 mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white rounded-3xl shadow-md border-2 border-yellow-200">
              <h2 className="text-3xl font-bold text-yellow-600 mb-6">THE HOW</h2>
              <div className="space-y-8">
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <h3 className="text-xl font-bold text-black mb-4">Crafted Backdrop of Your Life</h3>
                  <p className="text-black/80">
                    Every corner designed to match your lifestyle - from cozy beds for late-night 
                    study sessions to social spaces that spark connections.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <h3 className="text-xl font-bold text-black mb-4">Signature Style</h3>
                  <p className="text-black/80">
                    Unique residences sharing one vision: perfect blend of <span className='font-semibold'> comfort, convenience, 
                    and community</span>. Designed by students, for students.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <h3 className="text-xl font-bold text-black mb-4">Inspired by You, Built for You.</h3>
                  <p className="text-black/80">
                  Every part of Beiyo is tailored to make student living <span className='font-semibold'> easier, happier, and more fulfilling</span>. We understand the challenges of living away from home, which is why we go beyond just providing a room—we build a supportive community that understands you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative h-full rounded-3xl overflow-hidden shadow-lg border-2 border-yellow-100"
          >
            <img 
              src="/images/how-section.jpg" 
              alt="Beiyo living space" 
              className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
            />
          </motion.div>
        </section>

        {/* Promise Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-yellow-100 to-white rounded-3xl p-12 text-center mb-28 border-2 border-yellow-200"
        >
          <ShieldCheck className="w-20 h-20 text-yellow-600 mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-yellow-600 mb-6">Our Unwavering Promise</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-black mb-4">More Than Just a Room</h3>
              <p className="text-black/80">
                Spaces to <span className='font-semibold'> grow, connect, and thrive</span> - with community events and shared spaces 
                that create unforgettable experiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-black mb-4">Quality Assured</h3>
              <p className="text-black/80">
                Hassle-free living with sturdy furniture, modern amenities, and 
                <span className='font-semibold'> 24/7</span> support - so you can focus on what matters most.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-8">
            Ready to Experience Beiyo?
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto">
            Join our community where every detail is crafted for your comfort and success. 
            Your perfect student living experience awaits!
          </p>
          {/* WhatsApp Community Button */}
          <a
            // href=""
            target="_blank"
            className="mt-6 px-4 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition-all cursor-pointer flex w-[270px] justify-self-center items-center relative z-10"
          > 
            <span className=' text-white font-semibold z-20'>Join WhatsApp Community</span>
            <img src="/images/whatsapp.svg" className='absolute w-20 left-[76%] z-10' alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;