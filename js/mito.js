/* ==========================================================================
   Mito Skin Lab — interactions & rendering
   ========================================================================== */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, m =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
  const taka = (n) => '৳' + n.toLocaleString('en-US');

  /* ---------------------------------------------------- image placeholders
     Marks every picture slot so the client can see which photo goes where.
     Replace the returned element with an <img> once the real asset arrives. */
  const PH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
    '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/>' +
    '<path d="m21 15-5-5L5 21"/></svg>';

  function ph(label, name, size, mod) {
    return `<div class="ph${mod ? ' ' + mod : ''}">${PH_ICON}` +
      `<span class="ph__label">${esc(label)}</span>` +
      (name ? `<span class="ph__name">${esc(name)}</span>` : '') +
      (size ? `<span class="ph__size">${esc(size)}</span>` : '') +
      '</div>';
  }

  /* ---------------------------------------------------------------- cart */
  const cart = {
    get() { try { return parseInt(localStorage.getItem('mito_cart') || '0', 10) || 0; } catch (e) { return 0; } },
    set(n) { try { localStorage.setItem('mito_cart', String(n)); } catch (e) {} paintCart(n); },
    add(n) { this.set(this.get() + (n || 1)); }
  };
  function paintCart(n) { $$('[data-cart-count]').forEach(el => { el.textContent = n; el.style.display = n ? '' : 'none'; }); }

  /* ------------------------------------------------------------ mobile nav */
  function initNav() {
    const panel = $('#mobileNav');
    if (!panel) return;
    const open = (v) => { panel.dataset.open = v; document.body.style.overflow = v === 'true' ? 'hidden' : ''; };
    $$('[data-nav-open]').forEach(b => b.addEventListener('click', () => open('true')));
    $$('[data-nav-close]').forEach(b => b.addEventListener('click', () => open('false')));
    $$('.mobile-nav__toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const sub = btn.nextElementSibling;
        sub.dataset.open = sub.dataset.open === 'true' ? 'false' : 'true';
      });
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') open('false'); });
  }

  /* ------------------------------------------------------------- reveal */
  function initReveal() {
    const els = $$('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -60px 0px' });
    els.forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el); });
  }

  /* --------------------------------------------------- generic tab groups */
  function wireTabs(root) {
    $$('[data-tabs]', root || document).forEach(group => {
      if (group.dataset.wired === 'true') return;   // render + boot both call this
      group.dataset.wired = 'true';
      const tabs = $$('.tab', group);
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const scope = group.dataset.tabs;
          tabs.forEach(t => t.setAttribute('aria-selected', String(t === tab)));
          $$('[data-panel-for="' + scope + '"]').forEach(p => { p.hidden = p.dataset.panel !== tab.dataset.tab; });
        });
      });
    });
  }

  /* ============================================================ RENDERERS */

  /* Departments — numbered photo cards (Sirpi services-grid reference) */
  function renderDepartments(el) {
    if (!el || typeof DEPARTMENTS === 'undefined') return;
    el.innerHTML = DEPARTMENTS.map((d, i) => `
      <a class="dept-card reveal" href="services.html#${d.id}">
        <div class="dept-card__photo">
          ${ph('Department Photo ' + (i + 1), d.name, '800 × 600')}
          <span class="dept-card__num">${d.n}</span>
        </div>
        <div class="dept-card__body">
          <h3>${esc(d.name)}</h3>
          <p>${esc(d.blurb)}</p>
          <span class="dept-card__link">Explore</span>
        </div>
      </a>`).join('');
  }

  /* Working Hours panel — booking page (Sirpi appointment reference) */
  function renderWorkingHours(el) {
    if (!el || typeof WORKING_HOURS === 'undefined') return;
    el.innerHTML = '<h4>Working Hours</h4>' + WORKING_HOURS.map(([day, hours]) => `
      <div class="hours-row"${hours === 'Closed' ? ' data-closed' : ''}>
        <b>${esc(day)}</b><span class="leader"></span><span>${esc(hours)}</span>
      </div>`).join('');
  }

  /* Most popular services — homepage */
  function renderPopular(el) {
    if (!el || typeof POPULAR === 'undefined') return;
    el.innerHTML = POPULAR.map(([name, desc, dept]) => `
      <div class="pop-card reveal">
        <h4>${esc(name)}</h4>
        <p>${esc(desc)}</p>
        <span class="pop-card__meta">${esc(dept)}</span>
      </div>`).join('');
  }

  /* Doctors — client's serial order, no working shifts (Feedback 3 & 4) */
  function renderDoctors(el, limit) {
    if (!el || typeof DOCTORS === 'undefined') return;
    const list = limit ? DOCTORS.slice(0, limit) : DOCTORS;
    el.innerHTML = list.map((d, i) => {
      const photo = d.photo
        ? `<img src="${esc(d.photo)}" alt="${esc(d.name)}">`
        : ph('Doctor Photo ' + (i + 1), d.name, '600 × 700');
      return `
      <article class="doc-card reveal">
        <div class="doc-card__photo">${photo}</div>
        <div class="doc-card__body">
          <h3 class="doc-card__name">${esc(d.name)}</h3>
          <p class="doc-card__title">${esc(d.title)}</p>
          ${d.title2 ? `<p class="doc-card__title2">${esc(d.title2)}</p>` : ''}
          <p class="doc-card__edu">${esc(d.edu)}</p>
          <p class="doc-card__bio">${esc(d.bio)}</p>
          <a class="btn btn--ghost btn--sm" href="booking.html?doctor=${encodeURIComponent(d.name)}">Book Appointment</a>
        </div>
      </article>`;
    }).join('');
  }

  /* Reviews (renamed from Success Stories — Feedback 2) */
  function renderReviews(el, limit) {
    if (!el || typeof REVIEWS === 'undefined') return;
    const list = limit ? REVIEWS.slice(0, limit) : REVIEWS;
    el.innerHTML = list.map(([who, svc, text]) => `
      <article class="rev-card reveal">
        <div class="rev-card__stars">★★★★★</div>
        <p>“${esc(text)}”</p>
        <div class="rev-card__who">
          <div class="rev-card__av">${esc(who[0])}</div>
          <div><b>${esc(who)}</b><span>${esc(svc)}</span></div>
        </div>
      </article>`).join('');
  }

  /* Services page — department tabs + nested category tabs */
  function renderServices(tabsEl, panelsEl) {
    if (!tabsEl || !panelsEl || typeof DEPARTMENTS === 'undefined') return;

    tabsEl.innerHTML = DEPARTMENTS.map((d, i) => `
      <button class="tab" role="tab" data-tab="${d.id}" aria-selected="${i === 0}">${esc(d.short)}</button>`).join('');

    panelsEl.innerHTML = DEPARTMENTS.map((d, i) => `
      <section class="panel" data-panel-for="dept" data-panel="${d.id}" id="${d.id}" ${i === 0 ? '' : 'hidden'}>
        <div class="center" style="margin-bottom:2.4rem">
          <h2>${esc(d.name)}</h2>
          <hr class="rule">
          <p class="lede">${esc(d.blurb)}</p>
        </div>
        <div class="tabs tabs--nested" data-tabs="${d.id}" role="tablist">
          ${d.groups.map((g, j) => `
            <button class="tab" role="tab" data-tab="${d.id}-${j}" aria-selected="${j === 0}">${esc(g.name)}</button>`).join('')}
        </div>
        ${d.groups.map((g, j) => `
          <div class="panel" data-panel-for="${d.id}" data-panel="${d.id}-${j}" ${j === 0 ? '' : 'hidden'}>
            <div class="svc-list">
              ${g.items.map(([name, desc]) => `
                <article class="svc-item">
                  <span class="svc-item__dot"></span>
                  <div>
                    <h4>${esc(name)}</h4>
                    <p>${esc(desc)}</p>
                  </div>
                  <a class="btn btn--ghost btn--sm svc-item__book" href="booking.html?service=${encodeURIComponent(name)}">Book</a>
                </article>`).join('')}
            </div>
          </div>`).join('')}
      </section>`).join('');

    wireTabs();

    // deep link: services.html#dental
    const hash = location.hash.replace('#', '');
    if (hash) {
      const tab = $(`.tab[data-tab="${CSS.escape(hash)}"]`, tabsEl);
      if (tab) tab.click();
    }
  }

  /* Shop — filter, search, sort */
  function initShop() {
    const grid = $('#prodGrid');
    if (!grid || typeof PRODUCTS === 'undefined') return;

    const brandBox = $('#filterBrands');
    const catBox   = $('#filterCats');
    if (brandBox) brandBox.innerHTML = BRANDS.map(b =>
      `<label class="filter-opt"><input type="checkbox" value="${esc(b)}" data-f="brand">${esc(b)}</label>`).join('');
    if (catBox) catBox.innerHTML = CATEGORIES.map(c =>
      `<label class="filter-opt"><input type="checkbox" value="${esc(c)}" data-f="cat">${esc(c)}</label>`).join('');

    const state = { q: '', brand: [], cat: [], max: 12000, sort: 'featured' };

    function card(p, i) {
      return `
      <article class="prod-card reveal">
        <a class="prod-card__media" href="product.html?id=${encodeURIComponent(p.id)}">
          ${p.tag ? `<span class="prod-card__tag">${esc(p.tag)}</span>` : ''}
          ${ph('Product Photo ' + (i + 1), p.name, '800 × 900')}
          <div class="prod-card__quick"><button class="btn btn--sm btn--block" data-add="${esc(p.id)}">Add to cart</button></div>
        </a>
        <p class="prod-card__brand">${esc(p.brand)}</p>
        <h4><a href="product.html?id=${encodeURIComponent(p.id)}">${esc(p.name)}</a></h4>
        <div class="prod-card__price">${p.was ? `<s>${taka(p.was)}</s>` : ''}${taka(p.price)}</div>
      </article>`;
    }

    function apply() {
      let list = PRODUCTS.filter(p =>
        (!state.q || (p.name + ' ' + p.brand).toLowerCase().includes(state.q)) &&
        (!state.brand.length || state.brand.includes(p.brand)) &&
        (!state.cat.length   || state.cat.includes(p.cat)) &&
        p.price <= state.max
      );
      if (state.sort === 'low')  list = list.slice().sort((a, b) => a.price - b.price);
      if (state.sort === 'high') list = list.slice().sort((a, b) => b.price - a.price);
      if (state.sort === 'name') list = list.slice().sort((a, b) => a.name.localeCompare(b.name));

      grid.innerHTML = list.length ? list.map(card).join('')
        : '<p class="lede">No products match those filters.</p>';
      const c = $('#prodCount');
      if (c) c.textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
      initReveal();
    }

    document.addEventListener('change', e => {
      const f = e.target.dataset && e.target.dataset.f;
      if (!f) return;
      const key = f === 'brand' ? 'brand' : 'cat';
      state[key] = $$(`[data-f="${f}"]:checked`).map(i => i.value);
      apply();
    });

    const search = $('#prodSearch');
    if (search) search.addEventListener('input', e => { state.q = e.target.value.toLowerCase().trim(); apply(); });

    const sort = $('#prodSort');
    if (sort) sort.addEventListener('change', e => { state.sort = e.target.value; apply(); });

    const price = $('#priceRange');
    if (price) price.addEventListener('input', e => {
      state.max = +e.target.value;
      $('#priceOut').textContent = 'Up to ' + taka(state.max);
      apply();
    });

    const clear = $('#filterClear');
    if (clear) clear.addEventListener('click', () => {
      $$('[data-f]').forEach(i => { i.checked = false; });
      state.brand = []; state.cat = []; state.max = 12000; state.q = '';
      if (search) search.value = '';
      if (price) { price.value = 12000; $('#priceOut').textContent = 'Up to ' + taka(12000); }
      apply();
    });

    /* Feedback 4 — filter panel hidden on mobile, opened by a button */
    const panel = $('#shopFilters');
    const setF = (v) => { panel.dataset.open = v; document.body.style.overflow = v === 'true' ? 'hidden' : ''; };
    $$('[data-filter-open]').forEach(b => b.addEventListener('click', () => setF('true')));
    $$('[data-filter-close]').forEach(b => b.addEventListener('click', () => setF('false')));

    apply();
  }

  /* Treatment price list — shop page (client's Price List sheet).
     Treatments are booked after consultation, so each row links to the
     booking form rather than the cart. */
  function initTreatments() {
    const list = $('#txList');
    if (!list || typeof TREATMENTS === 'undefined') return;

    const state = { q: '', cat: '' };
    const chips = $('#txCats');
    if (chips) chips.innerHTML =
      '<button class="tab" data-tx-cat="" aria-selected="true">All</button>' +
      TREATMENTS.map(g => `<button class="tab" data-tx-cat="${esc(g.cat)}" aria-selected="false">${esc(g.cat)}</button>`).join('');

    function apply() {
      const groups = TREATMENTS
        .filter(g => !state.cat || g.cat === state.cat)
        .map(g => ({
          cat: g.cat,
          items: g.items.filter(([name]) => !state.q || (g.cat + ' ' + name).toLowerCase().includes(state.q))
        }))
        .filter(g => g.items.length);

      list.innerHTML = groups.length ? groups.map(g => `
        <section class="tx-group">
          <h3 class="tx-group__head">${esc(g.cat)}</h3>
          ${g.items.map(([name, price, note]) => `
            <div class="tx-row">
              <div class="tx-row__name">${esc(name)}${note ? `<span>${esc(note)}</span>` : ''}</div>
              <span class="tx-row__leader"></span>
              <div class="tx-row__price">${taka(price)}</div>
              <a class="btn btn--ghost btn--sm tx-row__book" href="booking.html?service=${encodeURIComponent(g.cat + ' — ' + name)}">Book</a>
            </div>`).join('')}
        </section>`).join('')
        : '<p class="lede">No treatments match that search.</p>';

      const n = groups.reduce((s, g) => s + g.items.length, 0);
      const c = $('#txCount');
      if (c) c.textContent = `Showing ${n} treatment${n === 1 ? '' : 's'}`;
    }

    document.addEventListener('click', e => {
      const chip = e.target.closest('[data-tx-cat]');
      if (!chip) return;
      state.cat = chip.dataset.txCat;
      $$('[data-tx-cat]').forEach(b => b.setAttribute('aria-selected', String(b === chip)));
      apply();
    });

    const search = $('#txSearch');
    if (search) search.addEventListener('input', e => { state.q = e.target.value.toLowerCase().trim(); apply(); });

    apply();
  }

  /* Product detail page */
  function initProduct() {
    const root = $('#pdp');
    if (!root || typeof PRODUCTS === 'undefined') return;
    const id = new URLSearchParams(location.search).get('id');
    const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

    $('#pdpBrand').textContent = p.brand;
    $('#pdpName').textContent  = p.name;
    $('#pdpPrice').innerHTML   = (p.was ? `<s>${taka(p.was)}</s>` : '') + taka(p.price);
    $('#pdpPh').innerHTML      = ph('Product Photo — Main', p.name, '1000 × 1000');
    $$('#pdpThumbs div').forEach((t, i) => {
      t.innerHTML = ph('Photo ' + (i + 2), '', '', 'ph--sm');
    });
    $('#pdpCat').textContent   = p.cat;
    $('#pdpCrumb').textContent = p.name;
    const sku = $('#pdpSku'); if (sku) sku.textContent = p.id.toUpperCase();
    document.title = p.name + ' — Mito Skin Lab';

    const qty = $('#pdpQty');
    $('#qtyUp').addEventListener('click',   () => { qty.value = Math.min(99, +qty.value + 1); });
    $('#qtyDown').addEventListener('click', () => { qty.value = Math.max(1,  +qty.value - 1); });
    $('#pdpAdd').addEventListener('click',  () => {
      cart.add(+qty.value);
      const n = $('#pdpAdded');
      n.textContent = 'Added to your cart.';
      n.hidden = false;
      setTimeout(() => { n.hidden = true; }, 2600);
    });
    const buyBtn = $('#pdpBuy');
    if (buyBtn) buyBtn.addEventListener('click', () => {
      cart.add(+qty.value);
      const n = $('#pdpAdded');
      n.textContent = 'Added to your cart — message us on WhatsApp to complete your order.';
      n.hidden = false;
    });

    $$('.pdp__thumbs div').forEach((t, i) => t.addEventListener('click', () => {
      $$('.pdp__thumbs div').forEach(x => x.removeAttribute('aria-current'));
      t.setAttribute('aria-current', 'true');
    }));

    /* related */
    const rel = $('#pdpRelated');
    if (rel) {
      rel.innerHTML = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4).map((x, i) => `
        <article class="prod-card reveal">
          <a class="prod-card__media" href="product.html?id=${encodeURIComponent(x.id)}">
            ${ph('Product Photo ' + (i + 1), x.name, '800 × 900')}
          </a>
          <p class="prod-card__brand">${esc(x.brand)}</p>
          <h4><a href="product.html?id=${encodeURIComponent(x.id)}">${esc(x.name)}</a></h4>
          <div class="prod-card__price">${taka(x.price)}</div>
        </article>`).join('');
    }
  }

  /* Booking form — mirrors the Contact Form 7 fields (Feedback 4) */
  function initBooking() {
    const form = $('#bookingForm');
    if (!form) return;

    const dept = $('#bkDept'), svc = $('#bkService'), doc = $('#bkDoctor');
    if (dept && typeof DEPARTMENTS !== 'undefined') {
      dept.innerHTML = '<option value="">Select a department</option>' +
        DEPARTMENTS.map(d => `<option value="${esc(d.id)}">${esc(d.name)}</option>`).join('');
      dept.addEventListener('change', () => {
        const d = DEPARTMENTS.find(x => x.id === dept.value);
        svc.innerHTML = d
          ? '<option value="">Select a service</option>' +
            d.groups.flatMap(g => g.items).map(([n]) => `<option value="${esc(n)}">${esc(n)}</option>`).join('')
          : '<option value="">Select a department first</option>';
      });
    }
    if (doc && typeof DOCTORS !== 'undefined') {
      doc.innerHTML = '<option value="">No preference</option>' +
        DOCTORS.map(d => `<option value="${esc(d.name)}">${esc(d.name)} — ${esc(d.title)}</option>`).join('');
    }

    /* prefill from ?service= / ?doctor= links */
    const q = new URLSearchParams(location.search);
    const wantSvc = q.get('service'), wantDoc = q.get('doctor');
    if (wantSvc && typeof DEPARTMENTS !== 'undefined') {
      const d = DEPARTMENTS.find(x => x.groups.some(g => g.items.some(([n]) => n === wantSvc)));
      if (d) {
        dept.value = d.id; dept.dispatchEvent(new Event('change')); svc.value = wantSvc;
      } else {
        /* Treatment-price-list links carry names that aren't in DEPARTMENTS —
           carry the request through in the message instead of dropping it. */
        const msg = $('#bkMsg');
        if (msg && !msg.value) msg.value = `I would like to book: ${wantSvc}`;
      }
    }
    if (wantDoc && doc) doc.value = wantDoc;

    const date = $('#bkDate');
    if (date) date.min = new Date().toISOString().split('T')[0];

    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = $('#bookingOk');
      ok.hidden = false;
      ok.textContent = `Thank you ${$('#bkName').value.split(' ')[0] || ''} — your request is received. Our team will call ${$('#bkPhone').value} to confirm your appointment.`;
      form.reset();
      ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* -------------------------------------------------------------- boot */
  document.addEventListener('DOMContentLoaded', () => {
    /* fill WhatsApp / contact placeholders from CLINIC */
    if (typeof CLINIC !== 'undefined') {
      $$('[data-wa]').forEach(a => { a.href = 'https://wa.me/' + CLINIC.whatsapp; });
      $$('[data-email]').forEach(a => { a.href = 'mailto:' + CLINIC.email; a.textContent = CLINIC.email; });
      $$('[data-phone]').forEach(a => { a.href = 'tel:' + CLINIC.phone.replace(/\s|-/g, ''); a.textContent = CLINIC.phone; });
      $$('[data-hours]').forEach(el => { el.textContent = CLINIC.hours; });
      $$('[data-address]').forEach(el => { el.textContent = CLINIC.address; });
      $$('[data-facebook]').forEach(a => { a.href = CLINIC.facebook; });
    }

    initNav();
    paintCart(cart.get());
    renderDepartments($('#deptGrid'));
    renderPopular($('#popGrid'));
    renderDoctors($('#docGrid'), $('#docGrid') && $('#docGrid').dataset.limit ? +$('#docGrid').dataset.limit : 0);
    renderReviews($('#revGrid'), $('#revGrid') && $('#revGrid').dataset.limit ? +$('#revGrid').dataset.limit : 0);
    renderWorkingHours($('[data-hours-table]'));
    renderServices($('#deptTabs'), $('#deptPanels'));
    initShop();
    initTreatments();
    initProduct();
    initBooking();
    wireTabs();
    initReveal();

    document.addEventListener('click', e => {
      const add = e.target.closest('[data-add]');
      if (add) { e.preventDefault(); cart.add(1); }
    });
  });
})();
