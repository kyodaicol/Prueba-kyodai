export const BODY_HTML = `
<div id="intro" aria-hidden="true">
  <div class="stage">
    <svg class="brush" viewBox="0 0 700 120" preserveAspectRatio="none" aria-hidden="true">
      <path d="M20,84 C150,110 260,52 350,64 C450,78 560,96 682,58"/>
    </svg>
    <div class="kanji">兄弟<span class="seal">兄<br>弟</span></div>
    <div class="latin">KYODAI</div>
    <div class="rule"></div>
    <div class="motto">"El talento se agota. La constancia se alimenta."</div>
  </div>
  <div class="skip">Toca para continuar</div>
</div>

<!-- NAV -->
<nav>
  <a href="#top" class="logo">
    <span class="jp">兄弟</span>
    <span class="lt">KYODAI</span>
    <span class="tag">Suplementos</span>
  </a>
  <button id="cartBtn" onclick="UI.toggleCart()">Pedido <span id="cartCount">0</span></button>
</nav>

<!-- HERO -->
<header id="top">
  <div class="heroKanji">兄弟</div>
  <div class="heroLatin">KYODAI</div>
  <div class="heroSub">Suplementos · Edición 2026</div>
  <div class="heroQuote">"El talento se agota.<br>La constancia se alimenta."</div>
  <div class="heroCount" id="heroCount">…</div>
  <a href="#catalogo" class="heroCta">Ver catálogo</a>
  <div class="heroScroll">Scroll</div>
</header>

<!-- TOOLBAR -->
<div id="toolbar">
  <div id="tabs"></div>
  <div id="controls">
    <select id="brandSel" onchange="UI.setBrand(this.value)" aria-label="Filtrar por marca"></select>
    <select id="sortSel" onchange="UI.setSort(this.value)" aria-label="Ordenar productos">
      <option value="feat">Destacados</option>
      <option value="best">Más vendidos primero</option>
      <option value="priceAsc">Precio: menor a mayor</option>
      <option value="priceDesc">Precio: mayor a menor</option>
      <option value="az">Nombre: A–Z</option>
    </select>
    <div id="groupBrand" onclick="UI.toggleGroup()" role="switch" aria-checked="false" tabindex="0"><span class="box"></span> Agrupar por marca</div>
    <input type="search" id="q" placeholder="Buscar producto o marca…" oninput="UI.setQ(this.value)">
  </div>
</div>

<!-- CATALOG -->
<main id="catalogo"><div id="sections"></div></main>

<!-- DRAWER -->
<div id="overlay" onclick="UI.closeCart()"></div>
<aside id="drawer" aria-label="Pedido">
  <div class="dHead">
    <div class="dTitle" id="dTitle">Tu pedido <span class="jp">注文</span></div>
    <button class="dClose" onclick="UI.closeCart()">✕</button>
  </div>
  <div class="dBody" id="dBody"></div>
  <div class="dFoot" id="dFoot"></div>
</aside>

<!-- SUMMARY MODAL -->
<div id="summaryWrap">
  <div class="bg" onclick="UI.backToAddress()"></div>
  <div id="summary"></div>
</div>

<!-- FOOTER -->
<footer style="text-align:center;padding:80px 24px 90px;border-top:1px solid rgba(255,255,255,.05);background:radial-gradient(ellipse at 50% 100%,#101012,#000)">
  <div style="font-family:'Noto Serif JP',serif;font-size:46px;color:#fff;margin-bottom:8px">兄弟</div>
  <div style="font-family:'Cormorant Garamond',serif;letter-spacing:.5em;color:#8A8A92;font-size:17px;padding-left:.5em">KYODAI</div>
  <div style="margin-top:20px;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:19px;color:#8A8A92">No buscamos clientes. Buscamos hermanos.</div>
  <div style="display:flex;justify-content:center;gap:14px;margin-top:34px;flex-wrap:wrap">
    <a href="https://www.instagram.com/kyodai.col?igsh=MXg0b2xycWUwMThsdQ%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram de Kyodai"
       style="display:flex;align-items:center;gap:9px;text-decoration:none;border:1px solid rgba(255,255,255,.14);padding:11px 20px;border-radius:2px;color:#D6D6D2;font-size:11px;letter-spacing:.2em;text-transform:uppercase;transition:all .3s"
       onmouseover="this.style.borderColor='#A81829';this.style.color='#fff'" onmouseout="this.style.borderColor='rgba(255,255,255,.14)';this.style.color='#D6D6D2'">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none"/></svg>
      Instagram
    </a>
    <a href="https://www.tiktok.com/@kyodai.col?_r=1&_t=ZS-97jOwmpG4eb" target="_blank" rel="noopener" aria-label="TikTok de Kyodai"
       style="display:flex;align-items:center;gap:9px;text-decoration:none;border:1px solid rgba(255,255,255,.14);padding:11px 20px;border-radius:2px;color:#D6D6D2;font-size:11px;letter-spacing:.2em;text-transform:uppercase;transition:all .3s"
       onmouseover="this.style.borderColor='#A81829';this.style.color='#fff'" onmouseout="this.style.borderColor='rgba(255,255,255,.14)';this.style.color='#D6D6D2'">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.4 2.2 1.8 3.7 4.1 3.9v3c-1.6 0-3-.5-4.1-1.3v6.6c0 3.6-2.6 6-6 6-3.2 0-5.8-2.4-5.8-5.8 0-3.3 2.6-5.9 6-5.9.3 0 .7 0 1 .1v3.1c-.3-.1-.6-.2-1-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.8 2.9 2.8c1.7 0 2.8-1.2 2.8-3V3h3z"/></svg>
      TikTok
    </a>
    <a href="mailto:kyodai.col@gmail.com" aria-label="Correo de Kyodai"
       style="display:flex;align-items:center;gap:9px;text-decoration:none;border:1px solid rgba(255,255,255,.14);padding:11px 20px;border-radius:2px;color:#D6D6D2;font-size:11px;letter-spacing:.2em;text-transform:uppercase;transition:all .3s"
       onmouseover="this.style.borderColor='#A81829';this.style.color='#fff'" onmouseout="this.style.borderColor='rgba(255,255,255,.14)';this.style.color='#D6D6D2'">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6l9 7 9-7"/></svg>
      Correo
    </a>
  </div>
  <small style="display:block;margin-top:30px;color:#4A4A50;font-size:10px;letter-spacing:.2em;text-transform:uppercase">Precios en pesos colombianos · Sabores según disponibilidad</small>
</footer>
`;
