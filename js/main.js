// Busca o idioma salvo no navegador ou usa 'pt' como padrão
let currentLang = localStorage.getItem('userLang') || 'pt';

const i18n = {
  pt: {
    badge_welcome: "SEJA BEM-VINDO!",
    wifi_btn: "Copiar",
    menu_house: "Regras da Casa",
    menu_rest: "Restaurantes",
    menu_bakeries: "Cafés & Padarias",
    menu_beaches: "Praias",
    menu_trails: "Trilhas",
    menu_how_to_get: "Como Chegar",
    menu_bus: "Ônibus & BRT",
    menu_emergencies: "Emergências",
    menu_host: "Falar com Anfitrião",
    btn_back: "← Voltar ao Início"
  },
  en: {
    badge_welcome: "WELCOME!",
    wifi_btn: "Copy",
    menu_house: "House Rules",
    menu_rest: "Restaurants",
    menu_bakeries: "Cafes & Bakeries",
    menu_beaches: "Beaches",
    menu_trails: "Hiking Trails",
    menu_how_to_get: "Directions",
    menu_bus: "Bus & BRT",
    menu_emergencies: "Emergencies",
    menu_host: "Talk to Host",
    btn_back: "← Back to Home"
  },
  es: {
    badge_welcome: "¡BIENVENIDO!",
    wifi_btn: "Copiar",
    menu_house: "Reglas de la Casa",
    menu_rest: "Restaurantes",
    menu_bakeries: "Cafés y Panaderías",
    menu_beaches: "Playas",
    menu_trails: "Senderos",
    menu_how_to_get: "Cómo Llegar",
    menu_bus: "Autobús & BRT",
    menu_emergencies: "Emergencias",
    menu_host: "Hablar con Anfitrión",
    btn_back: "← Volver al Inicio"
  }
};

function setLanguage(lang) {
  currentLang = lang;
  
  // Salva no navegador para manter o mesmo idioma ao abrir novas abas
  localStorage.setItem('userLang', lang);
  
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');

  if (btnPt) btnPt.classList.toggle('active', lang === 'pt');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnEs) btnEs.classList.toggle('active', lang === 'es');

  // Atualiza os elementos que possuem o atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerText = i18n[lang][key];
    }
  });

  // Atualiza blocos de conteúdo multilíngue nas páginas internas (se houver)
  document.querySelectorAll('.lang-content').forEach(el => {
    el.style.display = el.classList.contains(`lang-${lang}`) ? 'block' : 'none';
  });
}

function copyWifi() {
  const wifiPassEl = document.getElementById('wifi-pass');
  if (!wifiPassEl) return;
  
  const pass = wifiPassEl.innerText;
  navigator.clipboard.writeText(pass).then(() => {
    const msg = currentLang === 'es' ? '¡Contraseña copiada!' : (currentLang === 'en' ? 'Password copied!' : 'Senha copiada!');
    alert(msg);
  });
}

// Aplica o idioma assim que o arquivo é carregado
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});