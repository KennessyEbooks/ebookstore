// Internationalization (i18n) Module for Kennessy Ebooks Store

const translations = {
    en: {
        'hero-title': 'Quality Farming & Educational Ebooks for Africa',
        'hero-subtitle': 'Learn, Grow, and Succeed with Our Premium Ebook Collection',
        'stat-ebooks': 'Ebooks Available',
        'stat-readers': 'Active Readers',
        'stat-countries': 'African Countries',
        'countries-title': 'We Serve Across Africa',
        'ebooks-title': 'Our Ebook Collection',
        'filter-all': 'All Categories',
        'filter-farming': 'Farming',
        'filter-education': 'Education',
        'filter-business': 'Business',
        'filter-health': 'Health',
        'cart-title': 'Shopping Cart',
        'subtotal': 'Subtotal:',
        'tax': 'Tax:',
        'total': 'Total:',
        'checkout-btn': 'Proceed to Checkout',
        'checkout-title': 'Checkout',
        'email-label': 'Email Address:',
        'fullname-label': 'Full Name:',
        'phone-label': 'Phone Number:',
        'country-label': 'Country:',
        'payment-label': 'Payment Method:',
        'complete-payment': 'Complete Payment',
        'about-title': 'About Kennessy Ebooks',
        'about-text': 'We are committed to providing high-quality, affordable ebooks to learners, farmers, and entrepreneurs across Africa. Our collection includes farming techniques, educational materials, and business guides tailored for African markets.',
        'contact-title': 'Contact Us',
        'send-message': 'Send Message'
    },
    fr: {
        'hero-title': 'Livres électroniques de qualité sur l\'agriculture et l\'éducation pour l\'Afrique',
        'hero-subtitle': 'Apprenez, grandissez et réussissez avec notre collection premium de livres électroniques',
        'stat-ebooks': 'Livres électroniques disponibles',
        'stat-readers': 'Lecteurs actifs',
        'stat-countries': 'Pays africains',
        'countries-title': 'Nous servons dans toute l\'Afrique',
        'ebooks-title': 'Notre collection de livres électroniques',
        'filter-all': 'Toutes les catégories',
        'filter-farming': 'Agriculture',
        'filter-education': 'Éducation',
        'filter-business': 'Affaires',
        'filter-health': 'Santé',
        'cart-title': 'Panier',
        'subtotal': 'Sous-total :',
        'tax': 'Taxe :',
        'total': 'Total :',
        'checkout-btn': 'Procéder au paiement',
        'checkout-title': 'Paiement',
        'email-label': 'Adresse e-mail :',
        'fullname-label': 'Nom complet :',
        'phone-label': 'Numéro de téléphone :',
        'country-label': 'Pays :',
        'payment-label': 'Mode de paiement :',
        'complete-payment': 'Effectuer le paiement',
        'about-title': 'À propos de Kennessy Ebooks',
        'about-text': 'Nous nous engageons à fournir des livres électroniques de haute qualité et abordables aux apprenants, agriculteurs et entrepreneurs d\'Afrique. Notre collection comprend des techniques agricoles, des matériels pédagogiques et des guides commerciaux adaptés aux marchés africains.',
        'contact-title': 'Nous contacter',
        'send-message': 'Envoyer un message'
    },
    sw: {
        'hero-title': 'Vitabu vya Kielektroniki vya Ukiculike na Elimu kwa Afrika',
        'hero-subtitle': 'Jifunze, Kukua, na Kujibu na Mkutano Wetu wa Premium wa Kitabu cha Kielektroniki',
        'stat-ebooks': 'Vitabu vya Kielektroniki Vilivyopatikana',
        'stat-readers': 'Wasomaji Wanatumika',
        'stat-countries': 'Nchi za Afrika',
        'countries-title': 'Tunatumikia Katika Nchi Zote za Afrika',
        'ebooks-title': 'Mkutano Wetu wa Vitabu vya Kielektroniki',
        'filter-all': 'Kategori Zote',
        'filter-farming': 'Ukiculike',
        'filter-education': 'Elimu',
        'filter-business': 'Biashara',
        'filter-health': 'Afya',
        'cart-title': 'Karata ya Mununuzi',
        'subtotal': 'Jumla ndogo:',
        'tax': 'Kodi:',
        'total': 'Jumla:',
        'checkout-btn': 'Endelea na Kulipa',
        'checkout-title': 'Kutoa Pesa',
        'email-label': 'Anwani ya Barua Pepe:',
        'fullname-label': 'Jina Kamili:',
        'phone-label': 'Nambari ya Simu:',
        'country-label': 'Nchi:',
        'payment-label': 'Njia ya Kulipa:',
        'complete-payment': 'Kamilisha Malipo',
        'about-title': 'Kuhusu Kennessy Ebooks',
        'about-text': 'Tumejitolea kutoa vitabu vya kielektroniki vya ubora wa juu na rahisi ya Bei kwa wanafunzi, wakulima, na wafanya biashara katika Afrika. Mkutano wetu unajumuisha mbinu za ukiculike, nyenzo za elimu, na mwongozo wa biashara unaojaheshiwa kwa soko la Afrika.',
        'contact-title': 'Wasiliana Nasi',
        'send-message': 'Tuma Ujumbe'
    },
    yo: {
        'hero-title': 'Ẹkó Ìjíntálé Ìmọ̀ Gbe ati Agbasọ fun Afrika',
        'hero-subtitle': 'Kó, Ní pẹ̀lú ati Já Pẹ̀lu Àwọn Ìjíntálé Ẹkó Giga wa',
        'stat-ebooks': 'Ẹkó Ìjíntálé Tí O Wà',
        'stat-readers': 'Àwọn Àkọ́kò Tí O Nbá Gbe',
        'stat-countries': 'Ìlú Afrika',
        'countries-title': 'A Ń Tẹ̀jú Àwọn Ìlú Gbogbo Afrika',
        'ebooks-title': 'Àwọn Ẹkó Ìjíntálé wa',
        'filter-all': 'Gbogbo Àwọn Eka',
        'filter-farming': 'Gbe',
        'filter-education': 'Àgbàlá',
        'filter-business': 'Ìdìbáje',
        'filter-health': 'Ífá',
        'cart-title': 'Àgò Rà Ẹkó',
        'subtotal': 'Àpèjọ Kékìkì:',
        'tax': 'Ẹniyameta:',
        'total': 'Àpèjọ:',
        'checkout-btn': 'Tẹ̀ jù Sí Ìfúnni',
        'checkout-title': 'Ìfúnni',
        'email-label': 'Àdìrẹ̀sì Ẹmệ̀ìlì:',
        'fullname-label': 'Orúkọ Kikọ:',
        'phone-label': 'Nọ́mbà Fónì:',
        'country-label': 'Ìlú:',
        'payment-label': 'Ọ̀nà Ìfúnni:',
        'complete-payment': 'Parí Ìfúnni',
        'about-title': 'Nípa Kennessy Ebooks',
        'about-text': 'A Ní ìpinnu láti fúnni àwọn ẹkó ìjíntálé giga ati olóore fun àwọn akọ́lẹ̀, àwọn olùgbẹ gbe, ati àwọn ọlọ́pẹ̀ ní Afrika. Àwọn ẹkó wa pẹ̀lú àwọn ọ̀nà gbe, ìjíntálé agbasọ, ati àwọn ìtọ́sọ́nà ìdìbáje tí o rọ̀ fún àwọn ọjà Afrika.',
        'contact-title': 'Pè wa',
        'send-message': 'Rán ìròhìn'
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageTranslations();
}

function updatePageTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
}

function t(key) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return translations.en[key] || key;
}

// Initialize translations on page load
window.addEventListener('DOMContentLoaded', updatePageTranslations);