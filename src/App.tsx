/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Facebook, 
  MapPin, 
  Phone, 
  Clock, 
  Utensils, 
  Coffee, 
  Cake, 
  Users,
  Star,
  ChevronRight
} from "lucide-react";

const IMAGES = [
  "https://i.postimg.cc/brrhbVF2/495191257-1199435055312748-3259991485256099528-n.jpg",
  "https://i.postimg.cc/Bbb0D7wg/496928716-1208253524430901-3113211066456414922-n.jpg",
  "https://i.postimg.cc/wMMpJ4bk/518907240-1257354832854103-7966558247791685819-n.jpg",
  "https://i.postimg.cc/C55gDr6s/521750171-1261133695809550-7280130313832306673-n.jpg",
  "https://i.postimg.cc/prStBQgY/597850192-1379795300610055-7770709818684444986-n.jpg",
  "https://i.postimg.cc/Fz6Qxb20/597861559-1379795323943386-454256446351395457-n.jpg",
  "https://i.postimg.cc/1XdZK0Lq/597930662-1379795283943390-6491592403203901382-n.jpg",
  "https://i.postimg.cc/KYjw03Dd/493860401-1198486198740967-6063365606263353327-n.jpg"
];

const LOGO = "https://i.postimg.cc/1zD55dL9/458926443-1021478216441767-4906521863872247632-n.jpg";

export default function App() {
  const navItem = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const slideUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-20px" },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  const float = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen selection:bg-amber-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdfae7]/80 backdrop-blur-md border-b border-amber-100">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
        >
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img src={LOGO} alt="Górnicza 54 Logo" className="w-12 h-12 rounded-full border-2 border-amber-400" />
            <span className="font-serif text-xl font-bold text-gray-800 hidden sm:block">Górnicza 54</span>
          </motion.div>
          
          <div className="flex items-center gap-8">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
              }}
              className="hidden md:flex gap-6 font-medium text-gray-600"
            >
              {['O nas', 'Oferta', 'Galeria', 'Kontakt'].map((item) => (
                <motion.a 
                  key={item}
                  variants={navItem}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="hover:text-amber-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.a 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              href="https://www.facebook.com/gornicza54" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1877F2] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#166fe5] transition-all shadow-md active:scale-95 hover:shadow-lg"
            >
              <Facebook size={18} />
              <span className="hidden sm:block">Facebook</span>
            </motion.a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden relative">
        {/* Decorative Whimsical Elements */}
        <motion.div 
          variants={float}
          animate="animate"
          className="absolute top-40 left-[5%] w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -z-10" 
        />
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-amber-100/30 rounded-full blur-3xl -z-10" 
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.2 } }
            }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <motion.div 
              variants={slideUp}
              className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold uppercase tracking-wider"
            >
              Pyszne i domowe
            </motion.div>
            <motion.h1 
              variants={slideUp}
              className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight"
            >
              Jadłodajnia <br />
              <span className="text-amber-600">Górnicza 54</span>
            </motion.h1>
            <motion.p 
              variants={slideUp}
              className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              Naszą jadłodajnię prowadzimy od niedawna, staramy się dbać o wymagania klientów i miłą atmosferę. 
              Zapraszamy na prawdziwie domowe smaki.
            </motion.p>
            <motion.div 
              variants={slideUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#oferta" className="px-8 py-3 bg-amber-500 text-white rounded-xl font-bold shadow-lg hover:bg-amber-600 transition-all active:scale-95 text-center">
                Sprawdź Ofertę
              </a>
              <a href="tel:884224841" className="px-8 py-3 bg-white border-2 border-amber-100 text-gray-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-amber-400 transition-all active:scale-95">
                <Phone size={20} />
                884 224 841
              </a>
            </motion.div>
          </motion.div>
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <img 
                src={IMAGES[2]} 
                alt="Jedzenie" 
                className="w-full max-w-[500px] h-auto rounded-3xl shadow-2xl whimsical-border border-8 border-white mx-auto"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-200/30 rounded-full blur-3xl -z-10" />
            
            {/* Floating floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 md:right-0 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-amber-50"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                <Utensils size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">U nas</p>
                <p className="text-sm font-bold text-gray-800">Obiady Domowe</p>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-8 -left-4 md:left-0 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-amber-50"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Jakość</p>
                <p className="text-sm font-bold text-gray-800">Świeże produkty</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl text-gray-900">Co u nas zjesz?</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Szeroki wybór dań przygotowywanych na miejscu, z pasją i według tradycyjnych receptur.
            </p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { 
                title: "Śniadania", 
                desc: "Energetyczny start dnia z pysznymi propozycjami na ciepło i zimno.",
                icon: Coffee,
                color: "bg-orange-100 text-orange-600"
              },
              { 
                title: "Obiady Domowe", 
                desc: "Klasyczne drugie dania, aromatyczne zupy i sałatki każdego dnia.",
                icon: Utensils,
                color: "bg-amber-100 text-amber-600"
              },
              { 
                title: "Garmażeria", 
                desc: "Dania garmażeryjne gotowe do zabrania do domu i szybkiego podania.",
                icon: Cake,
                color: "bg-red-100 text-red-600"
              },
              { 
                title: "Przyjęcia", 
                desc: "Organizujemy chrzciny, komunie, urodziny i inne przyjęcia okolicznościowe.",
                icon: Users,
                color: "bg-blue-100 text-blue-600"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={slideUp}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-gray-100 hover:border-amber-200 transition-all hover:bg-amber-50/30 group shadow-sm hover:shadow-md"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Polaroid Gallery */}
      <section id="galeria" className="py-24 px-6 bg-[#fdfae7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl text-gray-900">Migawki z kuchni</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-gray-500">Nasze dania w obiektywie</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotate: idx % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: idx % 2 === 0 ? -2 : 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="polaroid"
              >
                <img src={img} alt={`Galeria ${idx + 1}`} referrerPolicy="no-referrer" />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-serif italic text-gray-400">#Górnicza54</span>
                  <div className="flex gap-1 text-amber-400">
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                    <Star size={10} fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social / Reviews Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">Co mówią nasi <br /> <span className="text-amber-500 underline decoration-amber-200 underline-offset-8">szczęśliwi goście?</span></h2>
              <p className="text-lg text-gray-600">
                Wasze opinie są dla nas najważniejsze. Sprawdź co piszą inni lub zostaw swoją recenzję na Facebooku!
              </p>
            </motion.div>

            <a 
              href="https://www.facebook.com/gornicza54/reviews/?id=100057387942817&sk=reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-2xl font-bold shadow-xl hover:bg-[#166fe5] transition-all hover:-translate-y-1 active:scale-95"
            >
              <Facebook size={24} />
              Zobacz wszystkie opinie
            </a>
          </div>

          <div className="flex-1 relative w-full">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-inner relative z-10"
            >
              <div className="flex gap-4 items-center mb-6">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">F</div>
                <div>
                  <h4 className="font-bold text-gray-800 tracking-tight text-lg">Świetne jedzenie!</h4>
                  <div className="flex text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "Pyszne, domowe obiady w bardzo przystępnych cenach. Obsługa przemiła, atmosfera jak u mamy w domu. Szczerze polecam każdemu, kto szuka prawdziwego domowego smaku!"
              </p>
            </motion.div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-full blur-[80px] opacity-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-[80px] opacity-10" />
          </div>
        </div>
      </section>

      {/* Map & Contact Section */}
      <section id="kontakt" className="py-24 px-6 bg-[#fdfae7]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden border border-amber-100 flex flex-col lg:flex-row">
            {/* Info Side */}
            <div className="lg:w-1/3 p-8 sm:p-12 lg:p-16 space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl text-gray-900 mb-6 font-serif underline decoration-amber-200 underline-offset-8">Gdzie jesteśmy?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-amber-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Adres</h4>
                      <p className="text-gray-600">Ul. Górnicza 54<br />43-502 Czechowice-Dziedzice</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-amber-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Telefon</h4>
                      <a href="tel:884224841" className="text-gray-600 hover:text-amber-600 transition-colors">884 224 841</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 text-xl font-serif">Godziny Otwarcia</h4>
                </div>
                <div className="space-y-3 font-medium">
                  {[
                    "poniedziałek: 09:00 - 17:00",
                    "wtorek: 09:00 - 17:00",
                    "środa: 09:00 - 17:00",
                    "czwartek: 09:00 - 17:00",
                    "piątek: 09:00 - 17:00",
                    "sobota: ZAMKNIĘTE",
                    "niedziela: ZAMKNIĘTE"
                  ].map((day, idx) => (
                    <div key={idx} className="flex justify-between text-gray-600 border-b border-gray-50 pb-2">
                       <span>{day.split(': ')[0]}</span>
                       <span className="font-bold">{day.split(': ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="flex-1 h-[300px] sm:h-[450px] lg:h-auto min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.989253099557!2d19.0119761770082!3d49.936542924232334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a3525caf0445%3A0x9821f83da0a0c9b8!2sG%C3%B3rnicza%2054%2C%2043-502%20Czechowice-Dziedzice!5e0!3m2!1spl!2spl!4v1778511883505!5m2!1spl!2spl" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src={LOGO} alt="Logo" className="w-12 h-12 rounded-full border-2 border-amber-400" />
            <div>
              <h4 className="font-serif text-xl font-bold">Górnicza 54</h4>
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/gornicza54" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all">
              <Facebook size={20} />
            </a>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            Designed with ❤️ for Jadłodajnia Górnicza 54
          </div>
        </div>
      </footer>
    </div>
  );
}
