/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_products: 'Products',
    nav_features: 'Features',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    hero_headline: 'Revolutionize Your Networking with Digibridge',
    hero_subheadline: 'Premium Digital Business Cards and NFC Stands designed for elegant brands.',
    hero_cta_products: 'View Products',
    hero_cta_start: 'Get Started',
    products_digicard_title: 'DigiCard',
    products_digicard_desc: 'Create your custom Digital business cards, provided with physical NFC enabled card with your own branding and design.',
    products_digistand_title: 'DigiStand',
    products_digistand_desc: 'Create your custom Digital NFC stands, provided with physical NFC enabled acrylic stands with your own branding and design.',
    features_title: 'Why Choose Digibridge?',
    features_networking_title: 'Networking',
    features_networking_desc: 'Grow your network, make a great first impression.',
    features_versatility_title: 'Versatility',
    features_versatility_desc: 'Share via NFC, QR code, Link, or Social Media.',
    features_custom_title: 'Customization',
    features_custom_desc: 'Custom website design, custom card/stand design, and yourcompany.digibridge.me subdomain.',
    features_integrations_title: 'Integrations',
    features_integrations_desc: 'WhatsApp enabled, Google Maps, and Review platforms (Google, TripAdvisor).',
    features_support_title: 'Business Support',
    features_support_desc: '365 days of support (10:00AM-10:00PM AST), 2 free webpage changes per year, and employee management.',
    pricing_title: 'Pricing Packages',
    pricing_card_tab: 'DigiCard Packages',
    pricing_stand_tab: 'DigiStand Packages',
    pricing_basic: 'Basic',
    pricing_standard: 'Standard',
    pricing_premium: 'Premium',
    pricing_enterprise: 'Enterprise',
    pricing_request: 'Request Price',
    pricing_cards_unit: 'cards',
    pricing_stands_unit: 'stands',
    pricing_contact_us: 'Contact Us',
    portfolio_title: 'Completed Projects',
    about_title: 'About Us',
    about_text: 'Since 2026, based in Amman, Jordan, Digibridge.me crafts digital business cards and NFC stands that make your company stand out. We focus on efficiency, professionalism, and elegant designs that showcase your brand’s maturity and confidence.',
    contact_title: 'Contact Us',
    contact_email_header: 'Email Us',
    contact_phone_header: 'Call Us',
    contact_name_label: 'Name',
    contact_email_label: 'Email',
    contact_phone_label: 'Phone',
    contact_message_label: 'Message',
    contact_submit: 'Send Message',
    price_form_title: 'Request Pricing Information',
    price_form_submit: 'Send Request',
    footer_rights: 'All Rights Reserved.',
    lang_en: 'English',
    lang_ar: 'العربية',
  },
  ar: {
    nav_products: 'المنتجات',
    nav_features: 'الميزات',
    nav_pricing: 'الأسعار',
    nav_contact: 'اتصل بنا',
    hero_headline: 'أحدث ثورة في تواصلك مع Digibridge',
    hero_subheadline: 'بطاقات عمل رقمية فاخرة وستاندات NFC مصممة للعلامات التجارية الأنيقة.',
    hero_cta_products: 'عرض المنتجات',
    hero_cta_start: 'ابدأ الآن',
    products_digicard_title: 'DigiCard',
    products_digicard_desc: 'اصنع بطاقات عملك الرقمية المخصصة، المزودة ببطاقة NFC فعالة بتصميم وعلامة تجارية خاصة بك.',
    products_digistand_title: 'DigiStand',
    products_digistand_desc: 'اصنع ستاندات NFC الرقمية المخصصة، المزودة بستاندات أكريليك NFC فعالة بتصميم وعلامة تجارية خاصة بك.',
    features_title: 'لماذا تختار Digibridge؟',
    features_networking_title: 'التواصل',
    features_networking_desc: 'وسع شبكة معارفك، واترك انطباعاً أولاً رائعاً.',
    features_versatility_title: 'تعدد الاستخدامات',
    features_versatility_desc: 'شارك عبر NFC، رمز QR، رابط، أو وسائل التواصل الاجتماعي.',
    features_custom_title: 'التخصيص',
    features_custom_desc: 'تصميم موقع ويب مخصص، تصميم بطاقة/ستاند مخصص، ونطاق فرعي yourcompany.digibridge.me.',
    features_integrations_title: 'التكاملات',
    features_integrations_desc: 'مفعل بواتساب، خرائط جوجل، ومنصات التقييم (Google, TripAdvisor).',
    features_support_title: 'دعم الأعمال',
    features_support_desc: 'دعم على مدار 365 يوماً (10:00 ص - 10:00 م بتوقيت مكة)، تغييرين مجانيين لصفحة الويب سنوياً، وإدارة الموظفين.',
    pricing_title: 'باقات الأسعار',
    pricing_card_tab: 'باقات DigiCard',
    pricing_stand_tab: 'باقات DigiStand',
    pricing_basic: 'أساسي',
    pricing_standard: 'قياسي',
    pricing_premium: 'مميز',
    pricing_enterprise: 'شركات',
    pricing_request: 'اطلب السعر',
    pricing_cards_unit: 'بطاقات',
    pricing_stands_unit: 'ستاندات',
    pricing_contact_us: 'اتصل بنا',
    portfolio_title: 'مشاريع مكتملة',
    about_title: 'عن الشركة',
    about_text: 'منذ عام 2026، ومن مقرنا في عمان، الأردن، تقوم Digibridge.me بابتكار بطاقات عمل رقمية وستاندات NFC تجعل شركتك تبرز. نركز على الكفاءة، الاحترافية، والتصاميم الأنيقة التي تعكس نضج وثقة علامتك التجارية.',
    contact_title: 'اتصل بنا',
    contact_email_header: 'راسلنا عبر البريد',
    contact_phone_header: 'اتصل بنا هاتفياً',
    contact_name_label: 'الاسم',
    contact_email_label: 'البريد الإلكتروني',
    contact_phone_label: 'الهاتف',
    contact_message_label: 'الرسالة',
    contact_submit: 'إرسال الرسالة',
    price_form_title: 'طلب معلومات الأسعار',
    price_form_submit: 'إرسال الطلب',
    footer_rights: 'جميع الحقوق محفوظة.',
    lang_en: 'English',
    lang_ar: 'العربية',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
