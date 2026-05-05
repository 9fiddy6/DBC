/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  CreditCard, 
  Monitor, 
  Share2, 
  Zap, 
  Layout, 
  Smartphone, 
  Users, 
  MessagesSquare, 
  MapPin, 
  Star, 
  Clock, 
  RefreshCw, 
  ShieldCheck,
  Send,
  Phone
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';

// --- Components ---

const Navbar = () => {
  const { t, setLanguage, language, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav_products'), href: '#products' },
    { name: t('nav_features'), href: '#features' },
    { name: t('nav_pricing'), href: '#pricing' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e11]/80 backdrop-blur-md border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center font-bold text-xl text-white">db</div>
          <span className="text-xl font-bold tracking-tighter uppercase">Digibridge</span>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold hover:text-brand-primary transition-colors uppercase tracking-[0.1em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Language Switcher & Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center border border-white/10 rounded-full px-4 py-1.5 bg-white/5 text-[10px] font-bold tracking-widest">
            <button 
              onClick={() => setLanguage('en')}
              className={`transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              EN
            </button>
            <span className="mx-2 opacity-20">|</span>
            <button 
              onClick={() => setLanguage('ar')}
              className={`transition-opacity ${language === 'ar' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              AR
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col items-center text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium hover:text-brand-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-[5.5rem] font-bold leading-[0.9] tracking-tighter mb-8 uppercase">
            Revolutionize Your <br/>
            <span className="text-brand-primary">Networking</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-muted max-w-xl mb-12 leading-relaxed">
            {t('hero_subheadline')}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#products"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-brand-primary text-white font-bold rounded-sm text-xs uppercase tracking-widest transition-all"
            >
              {t('hero_cta_products')}
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-bold rounded-sm text-xs uppercase tracking-widest transition-all"
            >
              {t('hero_cta_start')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Products = () => {
  const { t } = useLanguage();
  return (
    <section id="products" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* DigiCard */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-primary/50 transition-all group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg mb-6 flex items-center justify-center text-white">
              <CreditCard className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t('products_digicard_title')}</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              {t('products_digicard_desc')}
            </p>
          </motion.div>

          {/* DigiStand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-primary/50 transition-all group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg mb-6 flex items-center justify-center text-white">
              <Monitor className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{t('products_digistand_title')}</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              {t('products_digistand_desc')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const { t } = useLanguage();
  const features = [
    { title: t('features_networking_title'), desc: t('features_networking_desc') },
    { title: t('features_versatility_title'), desc: t('features_versatility_desc') },
    { title: t('features_custom_title'), desc: t('features_custom_desc') },
    { title: t('features_integrations_title'), desc: t('features_integrations_desc') },
    { title: t('features_support_title'), desc: t('features_support_desc') },
  ];

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 p-5 border border-white/5 rounded-lg group"
            >
              <div className="text-brand-primary text-[10px] font-bold uppercase mb-2 tracking-[0.2em] group-hover:tracking-[0.25em] transition-all">
                {f.title}
              </div>
              <p className="text-[10px] text-brand-muted leading-relaxed uppercase tracking-tighter">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'card' | 'stand'>('card');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const cardPackages = [
    { name: t('pricing_basic'), detail: '1-2 ' + t('pricing_cards_unit'), price: '25 JDs/yr' },
    { name: t('pricing_standard'), detail: '3-5 ' + t('pricing_cards_unit'), price: '20 JDs/yr' },
    { name: t('pricing_premium'), detail: '5+ ' + t('pricing_cards_unit'), price: '15 JDs/yr' },
    { name: t('pricing_enterprise'), detail: '30+', price: t('pricing_contact_us') },
  ];

  const standPackages = [
    { name: t('pricing_basic'), detail: '1-9 ' + t('pricing_stands_unit'), price: '30 JDs/yr' },
    { name: t('pricing_premium'), detail: '10-30 ' + t('pricing_stands_unit'), price: '25 JDs/yr' },
    { name: t('pricing_enterprise'), detail: '30+', price: t('pricing_contact_us') },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-12">{t('pricing_title')}</h2>
          
          <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 mb-12">
            <button 
              onClick={() => setActiveTab('card')}
              className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${activeTab === 'card' ? 'bg-brand-primary text-white' : 'text-brand-muted hover:text-white'}`}
            >
              {t('pricing_card_tab')}
            </button>
            <button 
              onClick={() => setActiveTab('stand')}
              className={`px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${activeTab === 'stand' ? 'bg-brand-primary text-white' : 'text-brand-muted hover:text-white'}`}
            >
              {t('pricing_stand_tab')}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(activeTab === 'card' ? cardPackages : standPackages).map((pkg, i) => (
            <motion.div 
              key={pkg.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-brand-primary/30 transition-all"
            >
              <div className="bg-white/5 px-6 py-3 flex justify-between items-center border-b border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest">{pkg.name}</span>
                <span className="text-[8px] text-brand-primary uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="text-sm font-bold text-white mb-1 uppercase tracking-tight">{pkg.detail}</div>
                  <div className="text-[10px] text-brand-muted uppercase tracking-widest">Yearly Subscription</div>
                </div>
                <div className="mt-auto pt-6 flex justify-between items-end">
                   <div>
                      <div className="text-2xl font-bold text-brand-primary tracking-tighter">{pkg.price.split(' ')[0]} <span className="text-[10px] text-white/50">{pkg.price.split(' ')[1]}</span></div>
                      <button 
                        onClick={() => setIsFormOpen(true)}
                        className="text-[10px] uppercase font-bold text-white/40 hover:text-brand-primary transition-colors tracking-widest mt-2"
                      >
                        {t('pricing_request')}
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Request Modal Placeholder */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md glass p-8 rounded-3xl"
            >
              <button onClick={() => setIsFormOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white"><X /></button>
              <h3 className="text-2xl font-black mb-6">{t('price_form_title')}</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Request sent to sales@digibridge.me'); setIsFormOpen(false); }}>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-2 block">{t('contact_name_label')}</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-2 block">{t('contact_email_label')} / {t('contact_phone_label')}</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary transition-all" />
                </div>
                <button type="submit" className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl mt-4 shadow-lg shadow-brand-primary/20">
                  {t('price_form_submit')}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Portfolio = () => {
  const { t } = useLanguage();
  const projects = [
    { name: 'BRISTOL HOTEL', logo: '/bhlogo.svg' },
    { name: 'BLACKFROG', logo: '/bflogo.svg' },
    { name: 'MATSU', logo: '/matsulogo.svg' },
    { name: 'THRIFTY', logo: '/thriftylogo.svg' },
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-12 mb-16 overflow-hidden">
          <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] whitespace-nowrap">Selected Clients</div>
          <div className="h-px bg-white/5 flex-1" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group transition-all"
            >
              <img src={p.logo} alt={p.name} className="w-10 h-10 rounded-lg grayscale group-hover:grayscale-0 transition-all border border-white/5" />
              <span className="font-bold text-xs uppercase tracking-widest">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="py-32 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-12">{t('about_title')}</h2>
        <p className="text-2xl md:text-3xl text-brand-muted leading-relaxed font-light italic">
          "{t('about_text')}"
        </p>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (type: string) => (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${type} submitted to info@digibridge.me`);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-none">
              Get in <br/>
              <span className="text-brand-primary">Touch</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-md mb-12">
              Our experts are ready to transform your brand identity. Reach out for a custom consultation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
                <MapPin className="text-brand-primary w-4 h-4" /> Amman, Jordan
              </div>
              <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
                <Clock className="text-brand-primary w-4 h-4" /> 10:00AM - 10:00PM AST
              </div>
            </div>
          </div>
          
          <div className="bg-brand-primary/5 border border-brand-primary/20 p-8 rounded-2xl">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Inquiry</h4>
            <form onSubmit={handleSubmit('Contact form')} className="space-y-4">
              <input required placeholder={t('contact_name_label')} type="text" className="w-full bg-black/40 border border-white/10 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-brand-primary transition-all" />
              <input required placeholder={t('contact_email_label') + ' / ' + t('contact_phone_label')} type="text" className="w-full bg-black/40 border border-white/10 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-brand-primary transition-all" />
              <textarea required placeholder={t('contact_message_label')} rows={4} className="w-full bg-black/40 border border-white/10 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-brand-primary transition-all shadow-inner" />
              <button type="submit" className="w-full py-4 bg-brand-primary text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm hover:brightness-110 transition-all shadow-lg shadow-brand-primary/20">
                {t('contact_submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-brand-primary rounded flex items-center justify-center font-bold text-[10px] text-white">db</div>
           <span className="font-bold tracking-tighter text-sm uppercase">Digibridge.me</span>
        </div>
        <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
          Since 2026 • Amman, Jordan • Digibridge.me
        </div>
        <p className="text-brand-muted text-[10px] uppercase tracking-widest">
          © {t('footer_rights')}
        </p>
      </div>
    </footer>
  );
};

// --- Main App Wrapper ---

const MainContent = () => {
  const { isRTL } = useLanguage();
  return (
    <div className={`overflow-x-hidden ${isRTL ? 'font-arabic' : 'font-sans'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Pricing />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
