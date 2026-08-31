/* ==========================================================================
   Build script — generates the inner pages from one shared header/footer.
   Run:  node build.js
   Output is plain static HTML; no build step is needed to view the site.
   When porting to WordPress, HEAD/HEADER become header.php and FOOTER
   becomes footer.php.
   ========================================================================== */
const fs = require('fs');
const path = require('path');
const OUT = __dirname;

const NAV = [
  ['home',     'index.html',    'Home'],
  ['doctors',  'doctors.html',  'Doctors'],
  ['services', 'services.html', 'Services'],
  ['shop',     'shop.html',     'Shop'],
  ['about',    'about.html',    'About Us']
];

const DEPT_LINKS = `
        <a href="services.html#skin">Skin, Laser &amp; Aesthetic Dermatology</a>
        <a href="services.html#surgery">Plastic &amp; Aesthetic Surgery</a>
        <a href="services.html#dental">Dental &amp; Oral Care</a>
        <a href="services.html#nutrition">Nutrition &amp; Lifestyle Medicine</a>`;

const head = (title, desc) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="stylesheet" href="css/mito.css">
</head>
<body>`;

const header = (active) => `
<div class="topbar">
  <div class="wrap">
    <span data-hours>Saturday – Thursday · 4:00 PM – 8:00 PM</span>
    <div class="topbar__set">
      <a href="#" data-email>info@mitoskinlab.com</a>
      <a href="#" data-wa>WhatsApp</a>
    </div>
  </div>
</div>

<!-- Feedback 4: centered menu, exactly 5 items -->
<header class="header">
  <div class="wrap header__inner">
    <a class="brand" href="index.html">
      <span class="brand__mark">M</span>
      <span class="brand__name">Mito Skin Lab<span class="brand__sub">Aesthetic Clinic</span></span>
    </a>

    <nav class="nav">
      <ul class="nav__list">
${NAV.map(([key, href, label]) => key === 'services' ? `        <li class="nav__item nav__item--has-menu${active === key ? ' nav__item--active' : ''}">
          <a class="nav__link" href="${href}">${label}</a>
          <div class="dropdown">${DEPT_LINKS}
          </div>
        </li>` : `        <li class="nav__item${active === key ? ' nav__item--active' : ''}"><a class="nav__link" href="${href}">${label}</a></li>`).join('\n')}
      </ul>
    </nav>

    <div class="header__actions">
      <a class="icon-btn" href="shop.html" aria-label="Shop">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>
        <span class="icon-btn__count" data-cart-count style="display:none">0</span>
      </a>
      <a class="btn btn--sm header__cta" href="booking.html">Book Now</a>
      <button class="icon-btn burger" data-nav-open aria-label="Open menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </div>
</header>

<div class="mobile-nav" id="mobileNav" data-open="false">
  <div class="mobile-nav__head">
    <a class="brand" href="index.html"><span class="brand__mark">M</span><span class="brand__name">Mito Skin Lab</span></a>
    <button class="icon-btn" data-nav-close aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <ul class="mobile-nav__list">
    <li><a href="index.html">Home</a></li>
    <li><a href="doctors.html">Doctors</a></li>
    <li>
      <button class="mobile-nav__toggle">Services <span>+</span></button>
      <div class="mobile-nav__sub" data-open="false">${DEPT_LINKS}
      </div>
    </li>
    <li><a href="shop.html">Shop</a></li>
    <li><a href="about.html">About Us</a></li>
  </ul>
  <div class="mobile-nav__foot">
    <a class="btn btn--block" href="booking.html">Book an Appointment</a>
    <a class="btn btn--ghost btn--block" href="#" data-wa>Chat on WhatsApp</a>
  </div>
</div>
`;

const pagehead = (title, crumb) => `
  <section class="pagehead">
    <div class="wrap">
      <h1>${title}</h1>
      <p class="crumbs"><a href="index.html">Home</a> &nbsp;/&nbsp; <span id="pdpCrumb">${crumb}</span></p>
    </div>
  </section>`;

/* Feedback 2: map, branch info and WhatsApp live in the footer. No Contact page.
   Feedback 3: Mito Logo Png-05 goes here. */
const FOOTER = `
<footer class="footer">
  <div class="wrap footer__grid">
    <div class="footer__brand">
      <a class="brand" href="index.html">
        <span class="brand__mark">M</span>
        <span class="brand__name">Mito Skin Lab<span class="brand__sub">Aesthetic Clinic</span></span>
      </a>
      <p>Chattogram's first comprehensive luxury aesthetic clinic — dermatology, aesthetic medicine, cosmetic surgery, dental care and nutrition.</p>
      <div class="footer__social">
        <a href="#" data-facebook aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg></a>
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
        <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.5-5.3a2.8 2.8 0 0 0-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.7a2.8 2.8 0 0 0-2 2C1 8.4 1 12 1 12s0 3.6.5 5.3a2.8 2.8 0 0 0 2 2C5.2 20 12 20 12 20s6.8 0 8.5-.7a2.8 2.8 0 0 0 2-2C23 15.6 23 12 23 12zM10 15V9l5 3z"/></svg></a>
      </div>
    </div>

    <div>
      <h4>Explore</h4>
      <ul class="footer__links">
        <li><a href="index.html">Home</a></li>
        <li><a href="doctors.html">Doctors</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="booking.html">Book Appointment</a></li>
      </ul>
    </div>

    <div>
      <h4>Departments</h4>
      <ul class="footer__links">
        <li><a href="services.html#skin">Skin &amp; Laser</a></li>
        <li><a href="services.html#surgery">Plastic Surgery</a></li>
        <li><a href="services.html#dental">Dental &amp; Oral Care</a></li>
        <li><a href="services.html#nutrition">Nutrition</a></li>
      </ul>
    </div>

    <div>
      <h4>Visit Our Branch</h4>
      <ul class="footer__contact">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg><span data-address>Chattogram, Bangladesh</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span data-hours>Saturday – Thursday · 4:00 PM – 8:00 PM</span></li>
        <li><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20z"/></svg><a href="#" data-wa>WhatsApp us</a></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><a href="#" data-email>info@mitoskinlab.com</a></li>
      </ul>
      <iframe class="footer__map" title="Mito Skin Lab location"
        src="https://www.google.com/maps?q=Chattogram,Bangladesh&output=embed"
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  <div class="wrap footer__bar">
    <span>© 2026 Mito Skin Lab. All rights reserved.</span>
    <span>Chattogram's first comprehensive luxury aesthetic clinic.</span>
  </div>
</footer>

<a class="wa-float" href="#" data-wa aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm5.2 14c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.4-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.1.1.6-.1 1.2z"/></svg>
</a>

<script src="js/data.js"></script>
<script src="js/mito.js"></script>
</body>
</html>
`;

/* --------------------------------------------------------- booking block */
const BOOKING_SECTION = `
  <section class="section booking" id="book">
    <div class="wrap booking__grid">
      <div>
        <p class="eyebrow">Appointments</p>
        <h2>Book your consultation</h2>
        <hr class="rule">
        <p class="lede">Tell us what you need and our team will call you back to confirm a time that works. No obligation, no pressure.</p>
        <div class="booking__steps">
          <div class="booking__step"><b>1</b><div><h4>Choose your department</h4><p>Skin, surgery, dental or nutrition.</p></div></div>
          <div class="booking__step"><b>2</b><div><h4>Pick a service and doctor</h4><p>Or leave it to us to match you.</p></div></div>
          <div class="booking__step"><b>3</b><div><h4>We call to confirm</h4><p>We check the slot and confirm by phone or WhatsApp.</p></div></div>
          <div class="booking__step"><b>4</b><div><h4>Visit the clinic</h4><p>Arrive ten minutes early for your consultation.</p></div></div>
        </div>
        <div class="hours-list" data-hours-table></div>
      </div>
      <div class="form-card">
        <form id="bookingForm" novalidate>
          <div class="form-grid">
            <div class="field"><label for="bkName">Full name</label><input id="bkName" name="your-name" type="text" required placeholder="Your name"></div>
            <div class="field"><label for="bkPhone">Phone / WhatsApp</label><input id="bkPhone" name="your-phone" type="tel" required placeholder="01XXX-XXXXXX"></div>
            <div class="field"><label for="bkEmail">Email <span style="text-transform:none;letter-spacing:0">(optional)</span></label><input id="bkEmail" name="your-email" type="email" placeholder="you@email.com"></div>
            <div class="field"><label for="bkAge">Age</label><input id="bkAge" name="your-age" type="number" min="1" max="120" placeholder="28"></div>
            <div class="field"><label for="bkDept">Department</label><select id="bkDept" name="department" required></select></div>
            <div class="field"><label for="bkService">Service</label><select id="bkService" name="service"><option value="">Select a department first</option></select></div>
            <div class="field"><label for="bkDoctor">Preferred doctor</label><select id="bkDoctor" name="doctor"></select></div>
            <div class="field"><label for="bkDate">Preferred date</label><input id="bkDate" name="preferred-date" type="date"></div>
            <div class="field field--full"><label for="bkMsg">Tell us about your concern</label><textarea id="bkMsg" name="your-message" placeholder="Briefly describe what you would like treated…"></textarea></div>
          </div>
          <p class="form-note">Fields match the Contact Form 7 setup, so patient details are captured and stored in the WordPress admin.</p>
          <button class="btn btn--block" type="submit" style="margin-top:1.2rem">Request Appointment</button>
          <div class="form-ok" id="bookingOk" hidden></div>
        </form>
      </div>
    </div>
  </section>`;

/* ============================================================= PAGES ==== */
const pages = {

/* ---------------------------------------------------------- DOCTORS ---- */
'doctors.html': {
  active: 'doctors',
  title: 'Our Doctors — Mito Skin Lab',
  desc: 'Meet the specialists at Mito Skin Lab — aesthetic dermatology, plastic surgery, dental and nutrition consultants.',
  body: `${pagehead('Our Doctors', 'Doctors')}
  <section class="section">
    <div class="wrap">
      <div class="center" style="margin-bottom:3rem">
        <p class="eyebrow">Meet Our Specialists</p>
        <h2>Trusted expertise, in one place</h2>
        <hr class="rule">
        <p class="lede">Our consultants are trained across the USA, UK, Germany, Thailand, Malaysia, India and China, and practise at leading hospitals in Bangladesh.</p>
      </div>
      <!-- Rendered in the client's exact serial order (Feedback 4) -->
      <div class="doc-grid" id="docGrid"></div>
    </div>
  </section>
${BOOKING_SECTION}`
},

/* --------------------------------------------------------- SERVICES ---- */
'services.html': {
  active: 'services',
  title: 'Services — Mito Skin Lab',
  desc: 'Explore our four departments: skin and laser, plastic and aesthetic surgery, dental and oral care, and nutrition and lifestyle medicine.',
  body: `${pagehead('Our Services', 'Services')}
  <section class="section">
    <div class="wrap">
      <div class="center" style="margin-bottom:2.4rem">
        <p class="eyebrow">Four Departments</p>
        <h2>Choose a department</h2>
        <hr class="rule">
        <p class="lede">Select a department to see its treatments grouped into tabs — so you find what you need without scrolling through everything.</p>
      </div>
      <!-- Treatments-we-provide intro grid (Sirpi services reference) -->
      <div class="dept-grid" id="deptGrid" style="margin-bottom:clamp(2.6rem,5vw,4rem)"></div>
      <!-- Department tabs; each opens nested category tabs (Feedback 4) -->
      <div class="tabs" id="deptTabs" data-tabs="dept" role="tablist"></div>
      <div id="deptPanels"></div>
    </div>
  </section>
${BOOKING_SECTION}`
},

/* ------------------------------------------------------------- SHOP ---- */
'shop.html': {
  active: 'shop',
  title: 'Shop — Mito Skin Lab',
  desc: 'Dermatologist-selected skincare, sunscreen, serums and supplements available from Mito Skin Lab.',
  body: `${pagehead('Shop', 'Shop')}
  <section class="section">
    <div class="wrap">

      <!-- Products / Treatment prices switch -->
      <div class="tabs shop-switch" data-tabs="shop" role="tablist">
        <button class="tab" role="tab" data-tab="products" aria-selected="true">Products</button>
        <button class="tab" role="tab" data-tab="treatments" aria-selected="false">Treatment Prices</button>
      </div>

      <div class="panel" data-panel-for="shop" data-panel="products">
      <div class="shop-layout">

        <!-- Left filter column. Feedback 4: hidden on mobile, opened by a button. -->
        <aside class="filters" id="shopFilters" data-open="false">
          <div class="filters__close">
            <h3 style="font-size:1.2rem">Filters</h3>
            <button class="icon-btn" data-filter-close aria-label="Close filters">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div class="filter-group">
            <h4>Category</h4>
            <div id="filterCats"></div>
          </div>

          <div class="filter-group">
            <h4>Brand</h4>
            <div id="filterBrands"></div>
          </div>

          <div class="filter-group">
            <h4>Price</h4>
            <input type="range" id="priceRange" min="500" max="12000" step="500" value="12000" style="width:100%;accent-color:var(--dusty-mauve)">
            <p id="priceOut" style="font-size:.86rem;color:var(--ink-soft);margin:.6rem 0 0">Up to ৳12,000</p>
          </div>

          <button class="btn btn--ghost btn--sm btn--block" id="filterClear">Clear all</button>
        </aside>

        <div>
          <div class="shop-toolbar">
            <span class="shop-toolbar__count" id="prodCount"></span>
            <div style="display:flex;gap:.6rem;flex-wrap:wrap;align-items:center">
              <button class="btn btn--ghost btn--sm filter-open" data-filter-open>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" style="width:14px;height:14px"><path d="M3 5h18M6 12h12M10 19h4"/></svg>
                Filters
              </button>
              <label class="search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
                <input type="search" id="prodSearch" placeholder="Search products" aria-label="Search products">
              </label>
              <select class="select" id="prodSort" aria-label="Sort products">
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>

          <div class="prod-grid" id="prodGrid"></div>
        </div>

      </div>
      </div>

      <!-- Treatment price list (client's Price List sheet).
           Treatments route to booking, not the cart — they need a consultation. -->
      <div class="panel" data-panel-for="shop" data-panel="treatments" hidden>
        <div class="shop-toolbar">
          <span class="shop-toolbar__count" id="txCount"></span>
          <label class="search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            <input type="search" id="txSearch" placeholder="Search treatments" aria-label="Search treatments">
          </label>
        </div>
        <div class="tabs tx-cats" id="txCats" role="tablist"></div>
        <div id="txList"></div>
        <p class="form-note">Prices are per single session unless a note says otherwise. Treatments are booked after a consultation, and your consultant confirms the final plan and price.</p>
      </div>

    </div>
  </section>`
},

/* ---------------------------------------------------------- PRODUCT ---- */
'product.html': {
  active: 'shop',
  title: 'Product — Mito Skin Lab',
  desc: 'Product details, description and how to apply.',
  body: `${pagehead('Product', 'Product')}
  <section class="section" id="pdp">
    <div class="wrap">
      <div class="pdp">
        <div class="pdp__gallery">
          <div class="pdp__main" id="pdpPh"></div>
          <div class="pdp__thumbs" id="pdpThumbs">
            <div aria-current="true"></div><div></div><div></div><div></div>
          </div>
        </div>

        <div>
          <p class="prod-card__brand" id="pdpBrand">Brand</p>
          <h1 style="font-size:clamp(1.8rem,3.4vw,2.7rem)" id="pdpName">Product name</h1>
          <div class="pdp__rating"><span class="stars">★★★★★</span><span>Dermatologist-selected</span></div>
          <div class="pdp__price" id="pdpPrice">৳0</div>
          <p class="lede" style="font-size:.98rem">A dermatologist-selected formula stocked and recommended by our clinic. Suitable for daily use as part of a routine prescribed by your consultant.</p>

          <div class="pdp__cart">
            <div class="qty">
              <button type="button" id="qtyDown" aria-label="Decrease quantity">−</button>
              <input type="number" id="pdpQty" value="1" min="1" max="99" aria-label="Quantity">
              <button type="button" id="qtyUp" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn" id="pdpAdd">Add to Cart</button>
            <button class="btn btn--ghost" id="pdpBuy">Buy Now</button>
          </div>
          <div class="form-ok" id="pdpAdded" hidden>Added to your cart.</div>

          <div class="pdp__meta">
            <div><b>SKU</b><span id="pdpSku">—</span></div>
            <div><b>Category</b><span id="pdpCat">—</span></div>
            <div><b>Availability</b><span>In stock</span></div>
            <div><b>Delivery</b><span>Inside Chattogram 1–2 days · nationwide 2–4 days</span></div>
            <div><b>Advice</b><span>Ask your consultant before combining with active treatments.</span></div>
          </div>
        </div>
      </div>

      <!-- Feedback 2 #10: clean, well-spaced Description / How to apply.
           Tabbed (Dr. Leigh product-page reference) via the generic tab component. -->
      <div class="tabs pdp__tabs" data-tabs="pdp" role="tablist">
        <button class="tab" role="tab" data-tab="desc" aria-selected="true">Description</button>
        <button class="tab" role="tab" data-tab="apply" aria-selected="false">How to Apply</button>
      </div>
      <div class="pdp__panels">
        <div class="panel pdp__panel" data-panel-for="pdp" data-panel="desc">
          <h3>Description</h3>
          <p>Formulated to support the skin barrier while treating your primary concern, this product is selected by our dermatology team and stocked because it performs in clinic as well as it does at home.</p>
          <p>It layers cleanly under sunscreen and makeup, absorbs without residue, and is suitable for sensitive skin when introduced gradually. Every product we sell is sourced through authorised channels — no counterfeits, no grey imports.</p>
        </div>
        <div class="panel pdp__panel" data-panel-for="pdp" data-panel="apply" hidden>
          <h3>How to Apply</h3>
          <ol>
            <li>Cleanse with lukewarm water and pat the skin dry — do not rub.</li>
            <li>Take a pea-sized amount and warm it briefly between clean fingertips.</li>
            <li>Apply in upward strokes across the face and neck, avoiding the eye area.</li>
            <li>Follow with a moisturiser, and with SPF 30+ every morning without exception.</li>
            <li>Start every other night for the first two weeks, then build to daily use.</li>
          </ol>
        </div>
      </div>

      <div style="margin-top:clamp(3rem,6vw,5rem)">
        <h2 style="margin-bottom:2rem">You may also like</h2>
        <div class="prod-grid" id="pdpRelated"></div>
      </div>
    </div>
  </section>`
},

/* ------------------------------------------------------------ ABOUT ---- */
'about.html': {
  active: 'about',
  title: 'About Us — Mito Skin Lab',
  desc: "Mito Skin Lab is Chattogram's first comprehensive luxury aesthetic clinic, combining advanced technology with evidence-based treatments.",
  body: `${pagehead('About Mito Skin Lab', 'About Us')}

  <section class="section">
    <div class="wrap about-split">
      <div class="about-figure reveal">
        <div class="ph">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
          <span class="ph__label">About Us Photo</span>
          <span class="ph__name">Clinic interior or the team — shown beside the About Us text</span>
          <span class="ph__size">800 × 920</span>
        </div>
      </div>
      <div class="reveal">
        <p class="eyebrow">About Us</p>
        <h2>Because you deserve nothing but the very best</h2>
        <hr class="rule">
        <p>Mito Skin Lab is a premier multidisciplinary clinic offering expert services in dermatology, aesthetic medicine, cosmetic surgery, dental care, and nutrition. As Chattogram's first comprehensive luxury aesthetic clinic, we are committed to delivering world-class care through a team of some of the country's most trusted specialists. By combining advanced technology with evidence-based treatments, we provide safe, effective, and personalized solutions tailored to each individual's unique needs.</p>
        <p>Our philosophy goes beyond enhancing appearance—we strive to help every client feel confident, comfortable, and empowered in their own skin. Every treatment is performed with precision, compassion, and the highest standards of safety in a welcoming and professional environment.</p>
        <p>At Mito Skin Lab, excellence, innovation, and patient-centered care define everything we do. Whether you seek healthier skin, aesthetic enhancement, a brighter smile, or improved overall wellness, our expert team is dedicated to helping you achieve lasting results with confidence.</p>
      </div>
    </div>
  </section>

  <section class="section bg-lace">
    <div class="wrap founder center">
      <p class="eyebrow">Founder's Note</p>
      <h2>A word from our founder</h2>
      <hr class="rule">
      <div style="text-align:left">
        <p>When I founded Mito Skin Lab, my vision was to create Chattogram's first comprehensive luxury aesthetic clinic, where science, expertise, and compassionate care come together to deliver exceptional results. I wanted to bring together some of the country's most trusted specialists so our community could access world-class dermatology, aesthetic medicine, cosmetic surgery, dental, and nutrition services under one roof.</p>
        <p>At Mito Skin Lab, we believe true transformation is not about changing who you are—it is about enhancing your natural beauty and helping you feel confident, comfortable, and empowered in your own skin. Every treatment is carefully personalized, combining advanced technology, evidence-based medicine, and the highest standards of safety to achieve natural, lasting results.</p>
        <p>We are committed to providing a premium experience built on excellence, integrity, innovation, and genuine patient care. To us, luxury means exceptional expertise, personalized attention, and unwavering dedication to your well-being.</p>
        <p>Thank you for placing your trust in Mito Skin Lab. We are honored to be part of your journey and look forward to helping you look your best, feel your best, and embrace your confidence.</p>
      </div>
      <p class="founder__sign">Mito Skin Lab<span>Founder</span></p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="center" style="margin-bottom:3rem">
        <p class="eyebrow">Our Departments</p>
        <h2>Everything under one roof</h2>
        <hr class="rule">
      </div>
      <div class="dept-grid" id="deptGrid"></div>
    </div>
  </section>

  <section class="section section--tight bg-porcelain">
    <div class="wrap">
      <div class="assure-grid">
        <div class="assure reveal">
          <div class="assure__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
          <h4>Safe &amp; Certified</h4><p>Every procedure follows international safety protocols.</p>
        </div>
        <div class="assure reveal">
          <div class="assure__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg></div>
          <h4>Hygiene First</h4><p>Sterilised equipment and single-use consumables as standard.</p>
        </div>
        <div class="assure reveal">
          <div class="assure__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg></div>
          <h4>Expert Specialists</h4><p>Consultants trained in the USA, UK, Germany, Thailand and India.</p>
        </div>
        <div class="assure reveal">
          <div class="assure__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></div>
          <h4>Personalised Care</h4><p>Treatment plans built around your skin, not a template.</p>
        </div>
      </div>
    </div>
  </section>`
},

/* ---------------------------------------------------------- BOOKING ---- */
'booking.html': {
  active: '',
  title: 'Book an Appointment — Mito Skin Lab',
  desc: 'Request an appointment at Mito Skin Lab. Choose your department, service and preferred doctor.',
  body: `${pagehead('Book an Appointment', 'Booking')}
${BOOKING_SECTION}
  <section class="section bg-lace">
    <div class="wrap">
      <div class="center" style="margin-bottom:3rem">
        <p class="eyebrow">What People Say</p>
        <h2>Client reviews</h2>
        <hr class="rule">
      </div>
      <div class="rev-grid" id="revGrid" data-limit="6"></div>
    </div>
  </section>`
}

};

/* --------------------------------------------------------------- write -- */
let n = 0;
for (const [file, p] of Object.entries(pages)) {
  const html = head(p.title, p.desc) + header(p.active) + '\n<main>\n' + p.body + '\n\n</main>\n' + FOOTER;
  fs.writeFileSync(path.join(OUT, file), html, 'utf8');
  console.log('  built  ' + file);
  n++;
}
console.log('\n' + n + ' pages built.');
