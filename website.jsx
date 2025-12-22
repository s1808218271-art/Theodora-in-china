import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  BookOpen, 
  Briefcase, 
  Compass, 
  Check, 
  ArrowRight, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Menu,
  X,
  Star,
  Globe,
  MessageSquare,
  Send, 
  Calendar,
  ExternalLink,
  Download,
  Phone,
  Coffee,
  Headphones,
  User,
  Copy
} from 'lucide-react';

// --- 配置区域 (你需要替换这里) ---
const CONFIG = {
  notionLink: "https://www.notion.so/theodorashi/Hi-I-am-Theodora-Shi-...", 
  bookingSection: "booking-section", 
  // Gumroad 商品链接示例: https://gumroad.com/l/your-survival-kit
  kitPaymentLink: "https://gumroad.com/...", 
  audioPaymentLink: "https://gumroad.com/...", 
  contact: {
    wechat: { link: "#", display: "ID: Theodora_CN" },
    whatsapp: { link: "https://wa.me/1234567890", display: "+86 138 0000 0000" },
    telegram: { link: "https://t.me/TheodoraShi", display: "@TheodoraShi" },
  }
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 模拟日历状态 (仅用于展示设计效果，Framer中会被Calendly替代)
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState("November 2024");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-sans text-stone-800 bg-[#FAFAF9]">
      
      {/* --- 1. 导航栏 --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-stone-900' : 'bg-transparent py-6 text-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-tight cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            Theodora.
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href={CONFIG.notionLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex items-center gap-1">
              Blogs <ExternalLink size={12}/>
            </a>
            <button onClick={() => scrollToSection('services')} className="hover:opacity-70 transition-opacity">Services</button>
            <button onClick={() => scrollToSection('faq')} className="hover:opacity-70 transition-opacity">FAQ</button>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection(CONFIG.bookingSection)} 
              className={`hidden md:inline-flex px-6 py-2 text-sm font-medium rounded-full transition-all ${isScrolled ? 'bg-stone-900 text-white hover:bg-stone-700' : 'bg-white text-stone-900 hover:bg-stone-200'}`}
            >
              Book A Chat
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white text-stone-900 border-t border-stone-100 py-4 px-6 flex flex-col space-y-4 shadow-lg">
            <a href={CONFIG.notionLink} target="_blank" rel="noopener noreferrer" className="block py-2 font-medium">Blogs</a>
            <button onClick={() => scrollToSection('services')} className="text-left py-2 font-medium">Services</button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 font-medium">FAQ</button>
            <button onClick={() => scrollToSection(CONFIG.bookingSection)} className="w-full py-3 bg-stone-900 text-white rounded-lg">Book A Chat</button>
          </div>
        )}
      </nav>

      {/* --- 2. Hero 区域 --- */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop")',
            transform: isScrolled ? 'scale(1.1)' : 'scale(1.0)',
            filter: 'brightness(0.7)' 
          }}
        ></div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in-up max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
            Unlock the Real China.
          </h1>
          <p className="text-lg md:text-2xl text-stone-200 font-light tracking-wide">
            Seamless Travel. Authentic Culture. Practical Language.
          </p>
          <div className="mt-10">
             <ChevronDown className="text-white mx-auto animate-bounce opacity-80" size={32} />
          </div>
        </div>
      </section>

      {/* --- 3. About Me --- */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
             <span className="text-xs font-bold tracking-widest uppercase text-red-700">Theodora's Mission</span>
             <h2 className="font-serif text-4xl text-stone-900 leading-tight">
               More than a guide.<br/>Your local friend.
             </h2>
             <div className="w-12 h-1 bg-stone-900"></div>
             
             <p className="text-stone-600 text-lg leading-relaxed">
               Hi, I'm <span className="font-bold text-stone-900">Theodora</span>. I founded this platform not as a big agency, but as a personal bridge. Whether you are here for business, adventure, or study, the biggest barrier isn't the distance—it's the information gap.
             </p>
             <p className="text-stone-600 text-lg leading-relaxed">
               My mission is simple: to be the trusted friend I wish I had when I first explored the world.
             </p>
             
             <blockquote className="border-l-4 border-red-700 pl-4 mt-6 italic text-stone-500 text-lg">
                "I believe the best way to see China isn't through a tour bus window, but through shared meals and real conversations."
             </blockquote>
          </div>

          <div className="relative h-[500px] w-full bg-stone-100 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                 src="https://images.unsplash.com/photo-1528659587707-1601235d949c?q=80&w=1000&auto=format&fit=crop" 
                 alt="Theodora" 
                 className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
          </div>
        </div>
      </section>

      {/* --- 4. Services (Funnel Strategy) --- */}
      <section id="services" className="py-24 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="font-serif text-4xl text-stone-900">Choose Your Journey</h2>
             <p className="text-stone-500 mt-4">Connect first, explore later. Start simple.</p>
          </div>

          {/* Path 1: China Travel */}
          <div className="mb-24">
             <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-stone-900 text-white rounded-full"><Compass size={24}/></div>
                <h3 className="font-serif text-3xl text-stone-900">Path 1: China Travel</h3>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                <ServiceTierCard 
                   level="Level 1: Connection"
                   title="Coffee Chat"
                   price="Free"
                   icon={<Coffee size={20} />}
                   desc="Let's just talk. Tell me your travel dreams or business goals. No sales pitch, just 20 minutes of honest advice from a local friend."
                   features={["20-Min Video Call", "Itinerary Assessment", "Q&A Session"]}
                   cta="Book Free Chat"
                   ctaLink={`#${CONFIG.bookingSection}`}
                   highlight={false}
                />
                <ServiceTierCard 
                   level="Level 2: Preparation"
                   title="Survival Kit"
                   price="$4.99"
                   icon={<Download size={20} />}
                   desc="Ready to plan it yourself? Get my essential digital pack: App setup guides (Alipay/WeChat) + 50 Audio phrases to survive."
                   features={["App Setup PDF Guide", "50 Audio Survival Phrases", "Culture Cheat Sheet"]}
                   cta="Get the Kit"
                   ctaLink={CONFIG.kitPaymentLink} // Link to Gumroad
                   highlight={true} 
                />
                <ServiceTierCard 
                   level="Level 3: Experience"
                   title="Signature Concierge"
                   price="By Request"
                   icon={<Star size={20} />}
                   desc="For those who want a seamless, fully curated experience. I become your remote guardian and planner. Let's discuss your vision first."
                   features={["Custom Route Design", "24/7 Remote Guardian", "Restaurant/Ticket Booking"]}
                   cta="Start Conversation"
                   ctaLink={`#${CONFIG.bookingSection}`}
                   highlight={false}
                />
             </div>
          </div>

          {/* Path 2: Real-World Chinese */}
          <div>
             <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-red-700 text-white rounded-full"><MessageSquare size={24}/></div>
                <h3 className="font-serif text-3xl text-stone-900">Path 2: Real-World Chinese</h3>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                <ServiceTierCard 
                   level="Level 1: Icebreaker"
                   title="Language Chat"
                   price="Free"
                   icon={<Coffee size={20} />}
                   desc="A relaxed 20-min chat to assess your level and learn your first 3 'survival' phrases perfectly. See if my teaching style fits you."
                   features={["Level Assessment", "Goal Setting", "Fun & Casual Vibe"]}
                   cta="Book Free Chat"
                   ctaLink={`#${CONFIG.bookingSection}`}
                   highlight={false}
                />
                <ServiceTierCard 
                   level="Level 2: Self-Study"
                   title="Audio Survival Pack"
                   price="$4.99"
                   icon={<Headphones size={20} />}
                   desc="Learn strictly what you need to survive. Ordering food, taking taxis, and bargaining. No grammar, just utility."
                   features={["100+ Scenario Audios", "Pinyin Cheat Sheet", "Slang Guide"]}
                   cta="Download Pack"
                   ctaLink={CONFIG.audioPaymentLink} // Link to Gumroad
                   highlight={true}
                />
                <ServiceTierCard 
                   level="Level 3: Fluency"
                   title="Private Mentorship"
                   price="By Request"
                   icon={<User size={20} />}
                   desc="Serious about connecting? I offer long-term mentorship to help you navigate business or life in China with confidence."
                   features={["Custom Curriculum", "Weekly 1-on-1", "WeChat Text Practice"]}
                   cta="Apply for Mentorship"
                   ctaLink={`#${CONFIG.bookingSection}`}
                   highlight={false}
                />
             </div>
          </div>

        </div>
      </section>

      {/* --- 5. FAQ --- */}
      <section id="faq" className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-stone-900 mb-10 text-center">Common Questions</h2>
          <div className="space-y-4">
            <AccordionItem 
              question="Is your service a travel agency?"
              answer="No, and that's my advantage. I am a personalized cultural consultant and a local friend. I don't book flights for commission. I provide the honest advice, route planning, and digital setup support that big agencies can't offer."
            />
            <AccordionItem 
              question="I don't speak any Chinese. Is the Survival Kit enough?"
              answer="For a short trip, yes! The kit is designed to get your phone set up (which is 80% of the battle) and give you the essential phrases to survive. For longer stays, I recommend a few coaching sessions."
            />
            <AccordionItem 
              question="How does the 'Remote Support' work?"
              answer="We connect on WeChat. If you get stuck in a taxi or can't read a menu, you send me a picture or voice note, and I translate or call the driver for you instantly. It's like having a friend in your pocket."
            />
          </div>
        </div>
      </section>

      {/* --- 6. Booking / Contact (Calendly Area) --- */}
      <section id={CONFIG.bookingSection} className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
           
           {/* Left: Contact Info (Updated with Display Numbers) */}
           <div className="space-y-10">
              <div>
                <h2 className="font-serif text-4xl mb-4">Let's Talk.</h2>
                <p className="text-stone-300 text-lg">
                    The first step is just a conversation. Schedule a free chat to see if we're a good fit.
                </p>
              </div>
              
              <div className="space-y-8">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-red-500 shrink-0"><Calendar /></div>
                    <div>
                       <p className="font-bold text-lg">Book a Video Chat</p>
                       <p className="text-sm text-stone-400">Via Calendly (Zoom/Google Meet)</p>
                       <p className="text-xs text-stone-500 mt-1">Select a time on the right ➜</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-red-500 shrink-0"><Phone /></div>
                    <div className="w-full">
                       <p className="font-bold text-lg mb-3">Direct Message</p>
                       
                       {/* Social Links with Display Text */}
                       <div className="space-y-3">
                           <a href={CONFIG.contact.whatsapp.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <MessageSquare size={18} className="text-green-500"/>
                                    <span className="text-sm font-medium">WhatsApp</span>
                                </div>
                                <span className="text-xs text-stone-400 group-hover:text-white transition-colors">{CONFIG.contact.whatsapp.display}</span>
                           </a>
                           
                           <a href={CONFIG.contact.telegram.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <Send size={18} className="text-blue-400"/>
                                    <span className="text-sm font-medium">Telegram</span>
                                </div>
                                <span className="text-xs text-stone-400 group-hover:text-white transition-colors">{CONFIG.contact.telegram.display}</span>
                           </a>

                           <div className="flex items-center justify-between p-3 bg-stone-800 rounded-lg group cursor-default">
                                <div className="flex items-center gap-3">
                                    <MessageSquare size={18} className="text-green-600"/>
                                    <span className="text-sm font-medium">WeChat</span>
                                </div>
                                <span className="text-xs text-stone-400">{CONFIG.contact.wechat.display}</span>
                           </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Calendly Embed Area (Simulated UI for Preview) */}
           <div className="bg-white text-stone-900 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
              {/* Calendly Header Simulation */}
              <div className="p-6 border-b border-stone-100 flex justify-between items-center">
                 <div>
                    <h3 className="font-bold text-lg">Theodora Shi</h3>
                    <p className="text-sm text-stone-500">Free Discovery Call (20 min)</p>
                 </div>
                 <div className="text-stone-400"><Globe size={20}/></div>
              </div>

              {/* Calendly Body Simulation */}
              <div className="flex-grow p-6 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                      <button className="p-1 hover:bg-stone-100 rounded" onClick={()=>setCurrentMonth("October 2024")}><ChevronDown className="rotate-90" size={20}/></button>
                      <span className="font-bold text-lg">{currentMonth}</span>
                      <button className="p-1 hover:bg-stone-100 rounded" onClick={()=>setCurrentMonth("December 2024")}><ChevronDown className="-rotate-90" size={20}/></button>
                  </div>
                  
                  {/* Fake Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs text-stone-400 font-medium">
                      <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                      {[...Array(30)].map((_, i) => (
                         <button 
                            key={i} 
                            onClick={() => setSelectedDate(i+1)}
                            className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-all ${
                                selectedDate === i+1 
                                ? 'bg-red-700 text-white font-bold shadow-lg' 
                                : 'text-stone-700 hover:bg-stone-100 hover:text-red-700'
                            }`}
                         >
                            {i+1}
                         </button>
                      ))}
                  </div>

                  {selectedDate && (
                      <div className="mt-auto animate-fade-in-up">
                          <p className="text-xs text-center text-stone-500 mb-2">Selected: November {selectedDate}</p>
                          <div className="grid grid-cols-2 gap-2">
                            <button className="py-2 border border-red-700 text-red-700 rounded hover:bg-red-50 text-sm">10:00 AM</button>
                            <button className="py-2 border border-red-700 text-red-700 rounded hover:bg-red-50 text-sm">2:30 PM</button>
                          </div>
                      </div>
                  )}
                  
                  {!selectedDate && (
                      <div className="mt-auto text-center text-sm text-stone-400 py-4">
                          Select a date to see available times
                      </div>
                  )}
              </div>
           </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-600 py-8 text-center text-sm border-t border-stone-900">
        <p>&copy; 2024 Theodora. Connecting Cultures.</p>
      </footer>
    </div>
  );
};

// --- 子组件 (Service Tier Card) ---
const ServiceTierCard = ({ level, title, price, icon, desc, features, cta, ctaLink, highlight }) => (
  <div className={`p-8 rounded-xl border flex flex-col transition-all duration-300 ${highlight ? 'bg-white border-red-200 shadow-xl scale-105 z-10' : 'bg-[#FAFAF9] border-stone-200 hover:shadow-lg'}`}>
     <div className="mb-4 flex justify-between items-start">
        <div>
            <span className={`text-xs font-bold uppercase tracking-wider ${highlight ? 'text-red-600' : 'text-stone-400'}`}>{level}</span>
            <h4 className="text-xl font-bold text-stone-900 mt-1">{title}</h4>
        </div>
        <div className={`p-2 rounded-full ${highlight ? 'bg-red-50 text-red-600' : 'bg-stone-100 text-stone-400'}`}>
            {icon}
        </div>
     </div>
     <div className="mb-6">
        <span className="text-3xl font-serif font-bold text-stone-900">{price}</span>
     </div>
     <p className="text-sm text-stone-600 mb-6 leading-relaxed flex-grow">{desc}</p>
     
     <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
           <li key={i} className="flex items-start text-xs text-stone-600">
              <Check size={14} className="mr-2 mt-0.5 text-red-600 flex-shrink-0" />
              {f}
           </li>
        ))}
     </ul>
     
     <a 
        href={ctaLink} 
        target={ctaLink.startsWith('http') ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`block w-full py-3 text-sm font-bold rounded-lg text-center transition-colors ${highlight ? 'bg-red-700 text-white hover:bg-red-800' : 'bg-stone-200 text-stone-900 hover:bg-stone-300'}`}
     >
        {cta}
     </a>
  </div>
);

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-stone-900 group-hover:text-red-700 transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-red-700" size={18}/> : <ChevronDown className="text-stone-400" size={18}/>}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-sm text-stone-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default App;
