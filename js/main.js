let currentLang = 'pt';

// Dados embutidos direto no JS para evitar erros de leitura do fetch/CORS
const siteData = {
  "wifi": {
    "network": "NomeDaSuaRede",
    "pass": "SuaSenhaAqui"
  },
  "distances": [
    { "name_pt": "Praia da Macumba", "name_en": "Macumba Beach", "name_es": "Playa de Macumba", "dist": "200m", "time": "3 min a pé / walk / a pie", "icon": "🏖️" },
    { "name_pt": "Praia do Pontal", "name_en": "Pontal Beach", "name_es": "Playa del Pontal", "dist": "600m", "time": "7 min a pé / walk / a pie", "icon": "🌊" },
    { "name_pt": "Prainha", "name_en": "Prainha Beach", "name_es": "Playa Prainha", "dist": "4.2 km", "time": "8 min de carro / drive / en auto", "icon": "🏄" },
    { "name_pt": "Praia de Grumari", "name_en": "Grumari Beach", "name_es": "Playa de Grumari", "dist": "7.5 km", "time": "12 min de carro / drive / en auto", "icon": "🌴" },
    { "name_pt": "Recreio Shopping", "name_en": "Recreio Shopping Mall", "name_es": "Centro Comercial Recreio", "dist": "3.5 km", "time": "6 min de carro / drive / en auto", "icon": "🛒" },
    { "name_pt": "Aeroporto Galeão (GIG)", "name_en": "Galeão Airport (GIG)", "name_es": "Aeropuerto Galeão (GIG)", "dist": "45 km", "time": "~50 min de carro / drive / en auto", "icon": "✈️" },
    { "name_pt": "Aeroporto Santos Dumont", "name_en": "Santos Dumont Airport", "name_es": "Aeropuerto Santos Dumont", "dist": "40 km", "time": "~55 min de carro / drive / en auto", "icon": "🛩️" }
  ],
  "restaurants": [
    {
      "name": "Quiosques da Macumba",
      "rating": "4.8 ⭐",
      "type_pt": "Quiosques de Praia / Açaí / Frutos do Mar",
      "type_en": "Beach Kiosks / Açaí / Seafood",
      "type_es": "Chiringuitos de Playa / Açaí / Mariscos",
      "price": "$$",
      "dist": "200m",
      "phone": "+5521999833623",
      "maps": "https://maps.google.com/?q=Praia+da+Macumba+Recreio"
    },
    {
      "name": "Restaurante Kaçuá",
      "rating": "4.6 ⭐",
      "type_pt": "Comida Nordestina & Frutos do Mar",
      "type_en": "Northeastern Brazilian & Seafood",
      "type_es": "Comida del Noreste & Mariscos",
      "price": "$$$",
      "dist": "1.8 km",
      "phone": "+5521999833623",
      "maps": "https://maps.google.com/?q=Restaurante+Kacua+Recreio"
    },
    {
      "name": "Bira Guaratiba",
      "rating": "4.7 ⭐",
      "type_pt": "Frutos do Mar com Vista Panorâmica",
      "type_en": "Seafood with Panoramic View",
      "type_es": "Mariscos con Vista Panorámica",
      "price": "$$$$",
      "dist": "11 km",
      "phone": "+5521999833623",
      "maps": "https://maps.google.com/?q=Bira+Guaratiba"
    }
  ],
  "beaches": [
    {
      "name_pt": "Praia da Macumba",
      "name_en": "Macumba Beach",
      "name_es": "Playa de Macumba",
      "dist": "200m",
      "desc_pt": "Famosa pelo surfe de longboard, calçadão agradável e quiosques com música e petiscos.",
      "desc_en": "Famous for longboard surfing, pleasant boardwalk, and kiosks with food and music.",
      "desc_es": "Famosa por el surf de longboard, paseo marítimo y chiringuitos con música y aperitivos.",
      "maps": "https://maps.google.com/?q=Praia+da+Macumba"
    },
    {
      "name_pt": "Prainha",
      "name_en": "Prainha",
      "name_es": "Prainha",
      "dist": "4.2 km",
      "desc_pt": "Reserva ambiental cercada por morros e mata atlântica. Ponto de surfe mundial.",
      "desc_en": "Environmental reserve surrounded by hills and rainforest. World surf spot.",
      "desc_es": "Reserva ambiental rodeada de montañas y selva tropical. Punto de surf mundial.",
      "maps": "https://maps.google.com/?q=Prainha+Rio+de+Janeiro"
    },
    {
      "name_pt": "Grumari",
      "name_en": "Grumari",
      "name_es": "Grumari",
      "dist": "7.5 km",
      "desc_pt": "Praia selvagem, preservada e paradisíaca. Excelente para relaxar o dia todo.",
      "desc_en": "Wild, preserved, and paradise beach. Great for relaxing all day.",
      "desc_es": "Playa virgen, preservada y paradisíaca. Excelente para relajarse todo el día.",
      "maps": "https://maps.google.com/?q=Praia+de+Grumari"
    }
  ],
  "trails": [
    {
      "name_pt": "Trilha da Pedra do Pontal",
      "name_en": "Pontal Rock Trail",
      "name_es": "Sendero Piedra del Pontal",
      "dist": "600m",
      "time": "~30 min",
      "diff_pt": "Moderada",
      "diff_en": "Moderate",
      "diff_es": "Moderada",
      "desc_pt": "Acesso pela praia na maré baixa. Vista incrível em 360° da Macumba e Recreio.",
      "desc_en": "Access via beach during low tide. Amazing 360° view of Macumba and Recreio.",
      "desc_es": "Acceso por la playa en marea baja. Increíble vista panorámica de 360°.",
      "maps": "https://maps.google.com/?q=Pedra+do+Pontal"
    },
    {
      "name_pt": "Mirante do Caeté (Prainha)",
      "name_en": "Caeté Viewpoint Trail",
      "name_es": "Mirador de Caeté (Prainha)",
      "dist": "4.2 km",
      "time": "~35 min",
      "diff_pt": "Leve",
      "diff_en": "Easy",
      "diff_es": "Fácil",
      "desc_pt": "Caminhada leve dentro do Parque da Prainha com deck de madeira e vista pra praia.",
      "desc_en": "Easy walk inside Prainha Park with wooden deck and ocean views.",
      "desc_es": "Caminata fácil dentro del Parque Prainha con mirador de madera y vistas al mar.",
      "maps": "https://maps.google.com/?q=Mirante+do+Caete"
    }
  ],
  "house_info": [
    {
      "title_pt": "📍 Endereço da Casa",
      "title_en": "📍 Property Address",
      "title_es": "📍 Dirección de la Casa",
      "content_pt": "Estrada do Pontal, 7.350 - Recreio dos Bandeirantes, Rio de Janeiro - RJ.",
      "content_en": "Estrada do Pontal, 7.350 - Recreio dos Bandeirantes, Rio de Janeiro - RJ.",
      "content_es": "Estrada do Pontal, 7.350 - Recreio dos Bandeirantes, Rio de Janeiro - RJ."
    },
    {
      "title_pt": "🕚 Check-in & Check-out",
      "title_en": "🕚 Check-in & Check-out",
      "title_es": "🕚 Check-in & Check-out",
      "content_pt": "Check-in a partir das 14:00. Check-out até as 11:00.",
      "content_en": "Check-in from 2:00 PM. Check-out by 11:00 AM.",
      "content_es": "Check-in a partir de las 14:00. Check-out hasta las 11:00."
    },
    {
      "title_pt": "❄️ Ar-Condicionado & Luz",
      "title_en": "❄️ Air Conditioner & Electricity",
      "title_es": "❄️ Aire Acondicionado & Luz",
      "content_pt": "Por favor, desligue o ar-condicionado e as luzes ao sair da casa.",
      "content_en": "Please turn off the air conditioner and lights when leaving.",
      "content_es": "Por favor, apague el aire acondicionado y las luces al salir de la casa."
    },
    {
      "title_pt": "🗑️ Lixo",
      "title_en": "🗑️ Trash Disposal",
      "title_es": "🗑️ Basura",
      "content_pt": "O lixo acumulado pode ser deixado na lixeira da entrada.",
      "content_en": "Accumulated trash can be left in the entrance bin.",
      "content_es": "La basura acumulada se puede dejar en el contenedor de la entrada."
    }
  ]
};

const i18n = {
  pt: {
    badge_welcome: "🏡 BEM-VINDO",
    hero_title: "Aproveite sua estadia!",
    hero_subtitle: "Preparamos este guia para facilitar sua viagem.",
    wifi_btn: "Copiar",
    menu_rest: "Restaurantes",
    menu_beaches: "Praias",
    menu_trails: "Trilhas",
    menu_distances: "Distâncias",
    menu_house: "Informações da Casa",
    menu_host: "Falar com Anfitrião",
    btn_maps: "Como Chegar",
    btn_call: "📞 Ligar"
  },
  en: {
    badge_welcome: "🏡 WELCOME",
    hero_title: "Enjoy your stay!",
    hero_subtitle: "We prepared this guide to help your trip.",
    wifi_btn: "Copy",
    menu_rest: "Restaurants",
    menu_beaches: "Beaches",
    menu_trails: "Hiking Trails",
    menu_distances: "Distances",
    menu_house: "House Rules & Info",
    menu_host: "Talk to Host",
    btn_maps: "Directions",
    btn_call: "📞 Call"
  },
  es: {
    badge_welcome: "🏡 BIENVENIDO",
    hero_title: "¡Disfruta tu estancia!",
    hero_subtitle: "Preparamos esta guía para facilitar tu viaje.",
    wifi_btn: "Copiar",
    menu_rest: "Restaurantes",
    menu_beaches: "Playas",
    menu_trails: "Senderos",
    menu_distances: "Distancias",
    menu_house: "Información de la Casa",
    menu_host: "Hablar con Anfitrión",
    btn_maps: "Cómo Llegar",
    btn_call: "📞 Llamar"
  }
};

function initApp() {
  if (siteData.wifi) {
    document.getElementById('wifi-net').innerText = siteData.wifi.network;
    document.getElementById('wifi-pass').innerText = siteData.wifi.pass;
  }
}

function setLanguage(lang) {
  currentLang = lang;
  
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');

  if (btnPt) btnPt.classList.toggle('active', lang === 'pt');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnEs) btnEs.classList.toggle('active', lang === 'es');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerText = i18n[lang][key];
    }
  });
}

function openSection(section) {
  const modal = document.getElementById('detail-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');

  if (!modal || !title || !body) return;

  body.innerHTML = '';

  const getLangField = (obj, fieldPrefix) => obj[`${fieldPrefix}_${currentLang}`] || obj[`${fieldPrefix}_pt`] || '';

  if (section === 'restaurants' && siteData.restaurants) {
    title.innerText = i18n[currentLang].menu_rest;
    body.innerHTML = siteData.restaurants.map(r => `
      <div style="background:#f8fafc; padding:12px; border-radius:12px; margin-bottom:12px; border:1px solid #e2e8f0;">
        <h3 style="color:#0f172a; margin-bottom:4px;">${r.name} <span style="font-size:0.8rem; color:#d97706;">${r.rating}</span></h3>
        <p style="font-size:0.85rem; color:#64748b;">${getLangField(r, 'type')} • ${r.price}</p>
        <p style="font-size:0.8rem; margin-top:4px; color:#334155;">📍 ${r.dist}</p>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <a href="${r.maps}" target="_blank" style="background:#0284c7; color:white; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:0.8rem; font-weight:bold;">${i18n[currentLang].btn_maps}</a>
          <a href="tel:${r.phone}" style="background:#e2e8f0; color:#0f172a; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:0.8rem; font-weight:bold;">${i18n[currentLang].btn_call}</a>
        </div>
      </div>
    `).join('');
  } 

  else if (section === 'beaches' && siteData.beaches) {
    title.innerText = i18n[currentLang].menu_beaches;
    body.innerHTML = siteData.beaches.map(b => `
      <div style="background:#f8fafc; padding:12px; border-radius:12px; margin-bottom:12px; border:1px solid #e2e8f0;">
        <h3 style="color:#0f172a; margin-bottom:4px;">${getLangField(b, 'name')}</h3>
        <p style="font-size:0.85rem; color:#475569; margin:6px 0;">${getLangField(b, 'desc')}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
          <span style="font-size:0.8rem; font-weight:bold; color:#0284c7;">📍 ${b.dist}</span>
          <a href="${b.maps}" target="_blank" style="background:#0284c7; color:white; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:0.8rem; font-weight:bold;">${i18n[currentLang].btn_maps}</a>
        </div>
      </div>
    `).join('');
  }

  else if (section === 'trails' && siteData.trails) {
    title.innerText = i18n[currentLang].menu_trails;
    body.innerHTML = siteData.trails.map(t => `
      <div style="background:#f8fafc; padding:12px; border-radius:12px; margin-bottom:12px; border:1px solid #e2e8f0;">
        <h3 style="color:#0f172a; margin-bottom:4px;">${getLangField(t, 'name')}</h3>
        <p style="font-size:0.8rem; color:#15803d; font-weight:bold; margin:4px 0;">⏱️ ${t.time} • 🟢 ${getLangField(t, 'diff')}</p>
        <p style="font-size:0.85rem; color:#475569;">${getLangField(t, 'desc')}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
          <span style="font-size:0.8rem; font-weight:bold; color:#0284c7;">📍 ${t.dist}</span>
          <a href="${t.maps}" target="_blank" style="background:#0284c7; color:white; padding:6px 12px; border-radius:6px; text-decoration:none; font-size:0.8rem; font-weight:bold;">${i18n[currentLang].btn_maps}</a>
        </div>
      </div>
    `).join('');
  }

  else if (section === 'house-info' && siteData.house_info) {
    title.innerText = i18n[currentLang].menu_house;
    body.innerHTML = siteData.house_info.map(info => `
      <div style="margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid #f1f5f9;">
        <strong style="color:#0f172a;">${getLangField(info, 'title')}</strong>
        <p style="font-size:0.85rem; color:#475569; margin-top:4px;">${getLangField(info, 'content')}</p>
      </div>
    `).join('');
  }

  else if (section === 'distances' && siteData.distances) {
    title.innerText = i18n[currentLang].menu_distances;
    body.innerHTML = siteData.distances.map(d => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #f1f5f9;">
        <div>
          <span style="color:#0f172a;">${d.icon} <strong>${getLangField(d, 'name')}</strong></span>
          <small style="display:block; color:#64748b;">${d.time}</small>
        </div>
        <span style="background:#e0f2fe; color:#0369a1; padding:4px 8px; border-radius:6px; font-weight:bold; font-size:0.8rem;">${d.dist}</span>
      </div>
    `).join('');
  }

  modal.style.display = 'block';
}

function closeSection() {
  const modal = document.getElementById('detail-modal');
  if (modal) modal.style.display = 'none';
}

function copyWifi() {
  if (!siteData.wifi) return;
  navigator.clipboard.writeText(siteData.wifi.pass).then(() => {
    const msg = currentLang === 'es' ? '¡Contraseña copiada!' : (currentLang === 'en' ? 'Password copied!' : 'Senha copiada!');
    alert(msg);
  });
}

// Inicializa a aplicação
initApp();