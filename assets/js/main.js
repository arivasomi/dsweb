/* ============================================================
   Maquinarias Mega — Interacciones de la página
   Menú móvil · reveal on scroll · contadores · validación
   barra de progreso · scroll-spy · volver arriba
   ============================================================ */

// Menú móvil
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Reveal al hacer scroll
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Contadores animados
function animateCounter(el) {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || '';
  const dur = 1600; const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('es') + suffix;
    if (p < 1) { requestAnimationFrame(tick); }
    else { el.textContent = target.toLocaleString('es') + suffix; el.classList.add('done'); }
  }
  requestAnimationFrame(tick);
}
const countObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); countObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('.num[data-target]').forEach(el => countObs.observe(el));

// Validación del formulario de contacto
const form = document.getElementById('ctaForm');
const emailInput = document.getElementById('ctaEmail');
const msg = document.getElementById('formMsg');
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = emailInput.value.trim();
  if (!emailRe.test(value)) {
    emailInput.classList.add('invalid');
    emailInput.focus();
    msg.textContent = 'Ingresa un correo válido para que podamos contactarte.';
    msg.className = 'form-msg err';
    return;
  }
  emailInput.classList.remove('invalid');
  // confirmación con check dibujado (el momento de conversión merece un acuse)
  msg.innerHTML = '<span class="check-draw" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg></span>Gracias. Un asesor técnico te contactará pronto.';
  msg.className = 'form-msg ok';
  form.reset();
});
emailInput.addEventListener('input', () => emailInput.classList.remove('invalid'));

// Barra de progreso de scroll + botón volver arriba + header transparente sobre el hero
const progress = document.getElementById('scrollProgress');
const toTop = document.getElementById('toTop');
const header = document.querySelector('header');
const doc = document.documentElement;
function onScroll(){
  const sc = doc.scrollTop || document.body.scrollTop;
  const max = doc.scrollHeight - doc.clientHeight;
  progress.style.width = max > 0 ? (sc / max * 100) + '%' : '0%';
  toTop.classList.toggle('show', sc > 600);
  // el header es transparente arriba del hero y se vuelve sólido tras ~300px de scroll
  header.classList.toggle('scrolled', sc > 300);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Quiénes somos — cross-fade lento de imágenes en la tela grande
const aboutRotate = document.getElementById('aboutRotate');
if (aboutRotate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const slides = [...aboutRotate.querySelectorAll('.photo-slide')];
  if (slides.length > 1) {
    let idx = 0;
    setInterval(() => {
      slides[idx].classList.remove('is-active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('is-active');
    }, 5000);
  }
}

// Scroll-spy: resalta la sección activa en el nav
const navAnchors = [...document.querySelectorAll('.nav-links a')];
const spyTargets = navAnchors
  .map(a => document.getElementById(a.getAttribute('href').slice(1)))
  .filter(Boolean);
const spyObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
spyTargets.forEach(s => spyObs.observe(s));
