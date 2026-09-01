/* ==========================================================================
   Mito Skin Lab — site data
   Sourced from: Departments tab, Mito Doctor Information doc, Skin Products sheet.
   Edit here; every page reads from this one file.
   ========================================================================== */

/* --------------------------------------------------------------------------
   DOCTORS — in the client's exact serial order (Feedback 4).
   Order below = order rendered. Jahanara Akter is #1 as specified.
   Per Feedback 3: name bold -> title -> (2nd title on its own line) ->
   education, then a short bio. Working shifts are deliberately NOT shown.
   -------------------------------------------------------------------------- */
const DOCTORS = [
  {
    name: 'Jahanara Akter',
    title: 'Aesthetic Cosmetologist',
    title2: 'Lifestyle Motivational Counselor',
    edu: 'Advanced Training in Aesthetic Systems (UNT Technology Co., Ltd., Beijing, China)',
    bio: 'Specialises in anti-aging botox, fillers, thread lifts, chemical peels, Hydrafacial, HIFU therapy, laser hair removal and slimming therapy.',
    photo: 'assets/dr-profiles/jahanara-akter.jpg'
  },
  {
    name: 'Dr. Tasnim Khan',
    title: 'Aesthetic Dermatologist',
    title2: 'Skin, Hair, Sex, Laser Specialist & Cosmetic Surgeon',
    edu: 'MBBS (DU), DDV (BSMMU), Diploma in Aesthetic Medicine (USA), Diploma in Cosmetic Gynaecology. Advanced Training in Aesthetic Dermatology (USA, Germany, Thailand, Malaysia, India). Associate Professor (Skin & VD), NIMCH.',
    bio: 'Performs Botox, filler, chemical peel, thread lift, CO2 laser, Q-Switched laser, HIFU, PRP, P-Shot, O-Shot and carbon laser.',
    /* Dropped profile card says "Dr. Tasnim AKTER" (same MBBS/DDV/USA-diploma credentials) — confirm which surname is correct. */
    photo: 'assets/dr-profiles/dr-tasnim-akter.jpg'
  },
  {
    name: 'Aysha Siddika',
    title: 'Dietitian & Nutritionist',
    title2: 'Consultant — Diet & Nutrition',
    edu: 'B.Sc. & M.Sc. in Food & Nutrition (DU). Consultant, Easy Diet. Ex. Chief Dietitian, Square Hospital Ltd. Ex. Dietitian, Apollo Hospital. Lecturer, Square Nursing College.',
    bio: 'Nutritionist consultant and diet planner building personalised, clinically sound eating plans for lasting results.',
    photo: 'assets/dr-profiles/aysha-siddika.jpg'
  },
  {
    /* Feedback 3 #1 — "Anti-Aging Expert" sits as the 2nd title, on the 2nd line. */
    name: 'Dr. Kamrun Nahar',
    title: 'Aesthetic Dermatologist',
    title2: 'Anti-Aging Expert',
    edu: 'MBBS, PGT in Dermatology & Venereology (CMCH), Foundation Training in Medical Aesthetics (IIMARM), Advanced Dermatosurgery & Dermoscopy (IIMARM), Masters in Medical Aesthetics (IIMARM). HMO, Department of Dermatology and Venereology, Chittagong Medical College Hospital.',
    bio: 'Focuses on acne, spot and melasma treatment, Botox, filler, chemical peel, thread lift, CO2 laser, Q-Switched laser, HIFU, PRP and carbon laser.',
    photo: 'assets/dr-profiles/dr-kamrun-nahar.jpg'
  },
  {
    name: 'Dr. Ilmoon Kabir',
    title: 'Plastic Surgeon',
    title2: 'Consultant of Plastic & Aesthetic Surgery',
    edu: 'MBBS, BCS (Health), MS (Plastic Surgery, DMC), MRCS (General Surgery, Edinburgh, UK). Dhaka Medical College & Hospital. BIO Plastic Surgery Clinic (Bangladesh Branch). City Hospital Ltd.',
    bio: 'Consultant plastic and aesthetic surgeon covering reconstructive and cosmetic surgical procedures.',
    photo: 'assets/dr-profiles/dr-ilmoon-kabir.jpg'
  },
  {
    name: 'Dr. Ikratuz Jahan',
    title: 'Oral & Dental Surgeon',
    title2: 'Specially Trained in Endodontics',
    edu: 'B.D.S (Chattogram International Dental College). Specially Trained in Endodontics.',
    bio: 'Key treatments include scaling & polishing, teeth whitening, root canal treatment, dental implants and core build-up.',
    photo: 'assets/dr-profiles/dr-ikratuz-jahan.jpg'
  },
  {
    name: 'Dr. Shahinur Sultana',
    title: 'Aesthetic Dermatologist',
    title2: '',
    edu: 'MBBS (CU), PGT (Dermatology & Venereology), Master Injector Programme (ILAMED, Thailand), CCD (BIRDEM), CMU (USG). HMO, Department of Dermatology and Venereology, Chittagong Medical College Hospital.',
    bio: 'Aesthetic dermatology and injectable treatments delivered to international master-injector standards.',
    photo: 'assets/dr-profiles/dr-shahinur-sultana.jpg'
  }
];

/* --------------------------------------------------------------------------
   DEPARTMENTS — 4 departments (Departments tab + live site nav).
   Laser is NOT a separate department: it lives inside Skin (Feedback 4).
   Each department opens NESTED TABS instead of one long page (Feedback 4).
   Service lists show name + short description only — no prices (Feedback 4).
   -------------------------------------------------------------------------- */
const DEPARTMENTS = [
  {
    id: 'skin',
    n: '01',
    name: 'Skin, Laser & Aesthetic Dermatology',
    short: 'Skin & Laser',
    blurb: 'Medical-grade dermatology, laser platforms and injectables for clearer, firmer, more even skin.',
    groups: [
      {
        name: 'Consultation & Facials',
        items: [
          ['Dermatology Consultations', 'A one-to-one assessment with a dermatologist to diagnose your concern and map out a treatment plan.'],
          ['Hydrafacial', 'A medical facial that cleanses, exfoliates, extracts and hydrates the skin in a single session.'],
          ['Carbon Laser Facial', 'A carbon mask activated by laser to shrink pores, lift oil and leave an instant glow.'],
          ['Chemical Peels', 'A controlled peel solution that clears the dull surface layer to reveal smoother, brighter skin.'],
          ['Skin Rejuvenation', 'Combined treatments that restore radiance, texture and tone to tired or sun-damaged skin.']
        ]
      },
      {
        name: 'Laser Treatments',
        items: [
          ['Laser Hair Removal', 'Laser energy targets the follicle to permanently reduce unwanted hair, session by session.'],
          ['CO2 Fractional Laser', 'Resurfaces the skin to soften deep scars, wrinkles and open pores by triggering new collagen.'],
          ['Q-Switched Laser', 'Breaks down stubborn pigment, melasma and tattoo ink without harming surrounding skin.']
        ]
      },
      {
        name: 'Injectables & Lifting',
        items: [
          ['Botox & Dermal Fillers', 'Relaxes expression lines and restores lost volume for a naturally refreshed face.'],
          ['HIFU Skin Tightening', 'Focused ultrasound lifts and tightens the face and neck with no surgery and no downtime.'],
          ['Anti-Aging Treatments', 'A tailored programme of injectables, energy devices and skincare to slow visible ageing.'],
          ['Microneedling', 'Fine needles create micro-channels that stimulate collagen and smooth scars and texture.'],
          ['PRP Therapy', 'Your own platelet-rich plasma is re-injected to repair, thicken and rejuvenate the skin.']
        ]
      },
      {
        name: 'Skin Concerns',
        items: [
          ['Acne & Acne Scar Treatment', 'Clears active breakouts and then resurfaces the scarring they leave behind.'],
          ['Pigmentation Treatment', 'Targets melasma, dark spots and uneven tone to even out overall skin colour.']
        ]
      },
      {
        name: 'Hair & Scalp',
        items: [
          ['Hair & Scalp Treatments', 'Diagnoses and treats hair thinning, dandruff and scalp conditions at the root cause.'],
          ['Hair PRP Therapy', 'Platelet-rich plasma injected into the scalp to strengthen follicles and reduce hair fall.']
        ]
      }
    ]
  },
  {
    id: 'surgery',
    n: '02',
    name: 'Plastic & Aesthetic Surgery',
    short: 'Surgery',
    blurb: 'Surgical facial and body procedures performed by a consultant plastic surgeon.',
    groups: [
      {
        name: 'Facial Surgery',
        items: [
          ['Rhinoplasty (Nose Reshaping)', 'Reshapes the nose to balance the face and, where needed, improve breathing.'],
          ['Blepharoplasty (Eyelid Surgery)', 'Removes excess skin and puffiness from the eyelids for a more open, rested look.'],
          ['Facelift', 'Lifts and repositions sagging facial tissue to restore a firmer, younger contour.'],
          ['Neck Lift', 'Tightens loose skin and banding along the neck and jawline for a cleaner profile.']
        ]
      },
      {
        name: 'Body Contouring',
        items: [
          ['Liposuction', 'Removes localised fat deposits that resist diet and exercise to reshape the body.'],
          ['Tummy Tuck (Abdominoplasty)', 'Removes loose abdominal skin and tightens the underlying muscle for a flatter stomach.'],
          ['Brazilian Butt Lift (BBL)', 'Transfers your own purified fat to add shape and projection to the buttocks.'],
          ['Mommy Makeover', 'A combined plan of procedures that restores the body after pregnancy and feeding.']
        ]
      },
      {
        name: 'Breast Surgery',
        items: [
          ['Breast Augmentation', 'Increases breast size and improves shape using implants or your own fat.'],
          ['Breast Reduction', 'Reduces breast volume and lifts the shape to relieve neck, back and shoulder strain.']
        ]
      },
      {
        name: 'Restoration & Aftercare',
        items: [
          ['Hair Transplant', 'Moves your own healthy follicles into thinning areas for permanent, natural regrowth.'],
          ['Scar Revision', 'Surgically improves the appearance of raised, wide or contracted scars.'],
          ['Reconstructive Procedures', 'Restores form and function after injury, burns, infection or previous surgery.'],
          ['Post-Surgical Aesthetic Care', 'Structured aftercare that protects your result and speeds up healing.']
        ]
      }
    ]
  },
  {
    id: 'dental',
    n: '03',
    name: 'Dental & Oral Care',
    short: 'Dental',
    blurb: 'Everyday dentistry and cosmetic smile work with a specialist in endodontics.',
    groups: [
      {
        name: 'General & Preventive',
        items: [
          ['Oral Health Consultations', 'A full check of teeth and gums with clear advice on what needs doing and when.'],
          ['General Dentistry', 'Routine care — fillings, check-ups and gum treatment — that keeps problems small.'],
          ['Dental Scaling & Polishing', 'Removes hardened plaque and surface stain to leave teeth clean and gums healthy.']
        ]
      },
      {
        name: 'Cosmetic Dentistry',
        items: [
          ['Teeth Whitening', 'Professionally lifts stains and yellowing to brighten your teeth several shades.'],
          ['Cosmetic Dentistry', 'Reshapes, veneers and refines individual teeth to improve how your smile sits.'],
          ['Smile Makeovers', 'A full plan combining whitening, veneers and alignment to rebuild the whole smile.']
        ]
      },
      {
        name: 'Restorative Treatment',
        items: [
          ['Root Canal Treatment', 'Clears infection from inside the tooth so it can be saved rather than removed.'],
          ['Restorative Dentistry', 'Rebuilds damaged or missing teeth with crowns, implants and core build-ups.'],
          ['Tooth Extraction', 'Safe, comfortable removal of a tooth that is too damaged or impacted to keep.']
        ]
      }
    ]
  },
  {
    id: 'nutrition',
    n: '04',
    name: 'Nutrition & Lifestyle Medicine',
    short: 'Nutrition',
    blurb: 'Clinical nutrition and lifestyle programmes built around your body and your routine.',
    groups: [
      {
        name: 'Consultation & Planning',
        items: [
          ['Diet & Nutrition Consultation', 'A full dietary assessment with a qualified dietitian and a plan you can actually follow.'],
          ['Personalized Meal Plans', 'Day-by-day meal planning built around your goals, budget and food preferences.'],
          ['Clinical Nutrition', 'Medical nutrition support for diabetes, PCOS, thyroid, pregnancy and other conditions.']
        ]
      },
      {
        name: 'Programmes',
        items: [
          ['Weight Management Programs', 'Structured, supervised weight loss or gain with regular review and adjustment.'],
          ['Nutritional Therapy', 'Targeted nutrition to correct deficiencies affecting your skin, hair and energy.']
        ]
      },
      {
        name: 'Wellness',
        items: [
          ['Lifestyle Counseling', 'Practical coaching on sleep, stress, movement and habits that hold results in place.'],
          ['Wellness & Preventive Care', 'Regular screening and guidance that catches problems before they start.']
        ]
      }
    ]
  }
];

/* --------------------------------------------------------------------------
   MOST POPULAR SERVICES — highlighted on the homepage (Feedback 2)
   -------------------------------------------------------------------------- */
const POPULAR = [
  ['Hydrafacial', 'Cleanse, exfoliate, extract and hydrate in one sitting.', 'Skin & Laser'],
  ['Botox & Dermal Fillers', 'Softens lines and restores volume, naturally.', 'Skin & Laser'],
  ['Laser Hair Removal', 'Permanent hair reduction, session by session.', 'Skin & Laser'],
  ['HIFU Skin Tightening', 'Lifts and tightens with zero downtime.', 'Skin & Laser'],
  ['Hair Transplant', 'Permanent, natural regrowth from your own follicles.', 'Surgery'],
  ['Teeth Whitening', 'Several shades brighter in a single visit.', 'Dental'],
  ['Acne & Acne Scar Treatment', 'Clears breakouts, then resurfaces the scars.', 'Skin & Laser'],
  ['Diet & Nutrition Consultation', 'A clinical plan you can actually follow.', 'Nutrition']
];

/* --------------------------------------------------------------------------
   PRODUCTS — from the client's Skin Products sheet. Prices in BDT.
   -------------------------------------------------------------------------- */
const PRODUCTS = [
  { id:'cerave-cream',      name:'CeraVe Moisturising Cream',            brand:'CeraVe',        cat:'Moisturiser', price:3000,  was:0,     tag:'' },
  { id:'eucerin-cc',        name:'Eucerin 50+ Sun Spots CC Cream',        brand:'Eucerin',       cat:'Sunscreen',   price:9000,  was:0,     tag:'' },
  { id:'kose-whitening',    name:'Kose Kokutousel Premium Whitening Lotion', brand:'Kose',       cat:'Moisturiser', price:6000,  was:0,     tag:'Best seller' },
  { id:'melasyl',           name:'Melasyl Mela B3 Serum',                 brand:'La Roche',      cat:'Serum',       price:11000, was:0,     tag:'' },
  { id:'gubon-spf',         name:'Gubon SPF 30+ Sunscreen',               brand:'Gubon',         cat:'Sunscreen',   price:3700,  was:0,     tag:'' },
  { id:'hra-spf',           name:'HRA SPF 50+++ Sunscreen',               brand:'HRA',           cat:'Sunscreen',   price:3700,  was:4500,  tag:'Sale' },
  { id:'aplb-sun',          name:'APLB Glutathione Sunscreen',            brand:'APLB',          cat:'Sunscreen',   price:3000,  was:0,     tag:'' },
  { id:'gubon-cleanser',    name:'Gubon Ceramide Cleanser',               brand:'Gubon',         cat:'Cleanser',    price:3600,  was:0,     tag:'' },
  { id:'hyfac-foam',        name:'Hyfac Cleansing Foam',                  brand:'Hyfac',         cat:'Cleanser',    price:2500,  was:0,     tag:'' },
  { id:'hyfac-acne',        name:'Hyfac Moisturiser for Acne',            brand:'Hyfac',         cat:'Moisturiser', price:2300,  was:0,     tag:'' },
  { id:'axis-y',            name:'Axis-Y Dark Spot Correcting Glow Serum',brand:'Axis-Y',        cat:'Serum',       price:4000,  was:0,     tag:'' },
  { id:'turu-vitc',         name:'Turu Brightening Vitamin C Spot Serum', brand:'Turu',          cat:'Serum',       price:5500,  was:0,     tag:'Best seller' },
  { id:'remedist-niacin',   name:'The Remedist Niacinamide Face Serum',   brand:'The Remedist',  cat:'Serum',       price:1450,  was:0,     tag:'' },
  { id:'provamed-retinol',  name:'Provamed Bio-Retinol Aging Serum',      brand:'Provamed',      cat:'Serum',       price:4000,  was:0,     tag:'' },
  { id:'abib-serum',        name:'Abib Dark Spot Serum',                  brand:'Abib',          cat:'Serum',       price:5500,  was:0,     tag:'' },
  { id:'boots-eye',         name:"Boot's Brightening Eye Cream",          brand:"Boot's",        cat:'Moisturiser', price:2500,  was:0,     tag:'' },
  { id:'palmers-hydrate',   name:"Palmer's Cocoa Butter Formula — Hydrate",brand:"Palmer's",     cat:'Body Care',   price:1500,  was:0,     tag:'' },
  { id:'verite-body',       name:'VERITE Restorative Body Lotion',        brand:'Verite',        cat:'Body Care',   price:4600,  was:0,     tag:'' },
  { id:'ordinary-hair',     name:'The Ordinary Multi-Peptide Hair Serum', brand:'The Ordinary',  cat:'Hair Care',   price:2350,  was:0,     tag:'' },
  { id:'soul-shampoo',      name:'Soul Good Volumising Shampoo',          brand:'Soul',          cat:'Hair Care',   price:8000,  was:0,     tag:'' },
  { id:'kerahix-pro',       name:'Kerahix Pro Hair Growth',               brand:'Kerahix',       cat:'Supplements', price:2490,  was:0,     tag:'' },
  { id:'b-bright',          name:'B-Bright Tablets',                      brand:'B-Bright',      cat:'Supplements', price:3600,  was:0,     tag:'' },

  /* --- Added from the Skin Products sheet: rows priced and in stock (>= 1). --- */
  { id:'palmers-softness',  name:"Palmer's Cocoa Butter Formula — Softness", brand:"Palmer's",   cat:'Body Care',   price:1500,  was:0,     tag:'' },
  { id:'ancolany-oil',      name:'Ancolany Cleansing Essential Oil',      brand:'Ancolany',      cat:'Cleanser',    price:3690,  was:0,     tag:'' },
  { id:'kose-perfect',      name:'Kose Kokutousel Premium Perfect Lotion',brand:'Kose',          cat:'Moisturiser', price:6000,  was:0,     tag:'' },
  { id:'kose-daycare',      name:'Kose Kokutousel Premium Day Care Gel SPF', brand:'Kose',       cat:'Sunscreen',   price:6000,  was:0,     tag:'' },
  { id:'rsar-extract',      name:'RSAR Plant Extract',                    brand:'RSAR',          cat:'Serum',       price:7000,  was:0,     tag:'' },
  { id:'belingzhimi-mask',  name:'Belingzhimi Royal Honey Facial Mask',   brand:'Belingzhimi',   cat:'Mask',        price:3075,  was:0,     tag:'' },
  { id:'soul-water-mask',   name:'Soul Good Water Treatment Mask',        brand:'Soul',          cat:'Hair Care',   price:8000,  was:0,     tag:'' },
  { id:'soul-strength',     name:'Soul Strengthening Treatment Mask + Shampoo', brand:'Soul',    cat:'Hair Care',   price:8000,  was:0,     tag:'' },
  { id:'soul-asta',         name:'Soul Asta Collagen Repairing Shampoo + Mask', brand:'Soul',    cat:'Hair Care',   price:8000,  was:0,     tag:'' },
  { id:'vitapps-vitc',      name:'Vitapps 100apps Vitamin C Serum',       brand:'Vitapps',       cat:'Serum',       price:4600,  was:0,     tag:'' },
  { id:'kerahix-tab',       name:'Kerahix Tablets',                       brand:'Kerahix',       cat:'Supplements', price:1500,  was:0,     tag:'' },
  { id:'rotto-spf',         name:'Rotto SPF 50++++ Sunscreen',            brand:'Rotto',         cat:'Sunscreen',   price:6000,  was:0,     tag:'' },
  { id:'rotto-cream',       name:'Rotto Cream',                           brand:'Rotto',         cat:'Moisturiser', price:6000,  was:0,     tag:'' },
  { id:'photonat-spf',      name:'Photonat Max SPF',                      brand:'Photonat',      cat:'Sunscreen',   price:2250,  was:0,     tag:'' },
  { id:'hb-vite',           name:'HB Pro Vitamin E Cream',                brand:'HB Pro',        cat:'Moisturiser', price:3050,  was:0,     tag:'' },
  { id:'bio-ed',            name:'Bio-Ed Tablets',                        brand:'Bio-Ed',        cat:'Supplements', price:1140,  was:0,     tag:'' },
  { id:'revolation-peel',   name:'Revolation Solution Peeling',           brand:'Revolation',    cat:'Serum',       price:2950,  was:0,     tag:'' },
  { id:'stemcell-serum',    name:'The Stem Cell Serum',                   brand:'The Stem Cell', cat:'Serum',       price:4200,  was:0,     tag:'' },
  { id:'blue-spirulina',    name:'Blue Spirulina',                        brand:'Blue Spirulina',cat:'Supplements', price:5000,  was:0,     tag:'' },
  { id:'listerine-rinse',   name:'Listerine Sweet Rinse',                 brand:'Listerine',     cat:'Oral Care',   price:1050,  was:0,     tag:'' },
  { id:'aloe22-lotion',     name:'ALOE-22 Whitening Body Lotion',         brand:'ALOE-22',       cat:'Body Care',   price:975,   was:0,     tag:'' },
  { id:'boots-hair-moist',  name:"Boot's Moisturising Hair Serum",        brand:"Boot's",        cat:'Hair Care',   price:2500,  was:0,     tag:'' },
  { id:'boots-hair-repair', name:"Boot's Repair Hair Serum",              brand:"Boot's",        cat:'Hair Care',   price:2500,  was:0,     tag:'' },
  { id:'boots-hair-volume', name:"Boot's Volume Serum",                   brand:"Boot's",        cat:'Hair Care',   price:2500,  was:0,     tag:'' },
  { id:'boots-rose-toner',  name:"Boot's Rose Toner",                     brand:"Boot's",        cat:'Toner',       price:1120,  was:0,     tag:'' },
  { id:'finale-underarm',   name:'Finale Whitening Underarm Cream',       brand:'Finale',        cat:'Body Care',   price:1800,  was:0,     tag:'' },
  { id:'folvinat-f',        name:'Folvinat-F',                            brand:'Folvinat',      cat:'Supplements', price:2250,  was:0,     tag:'' },
  { id:'remedist-aqua',     name:'The Remedist Aqua Moist Gel',           brand:'The Remedist',  cat:'Moisturiser', price:2490,  was:0,     tag:'' },
  { id:'remedist-exfoliate',name:'The Remedist Gentle Exfoliating Face Wash', brand:'The Remedist', cat:'Cleanser', price:1750,  was:0,     tag:'' },
  { id:'eucerin-lip',       name:'Eucerin Lip Active',                    brand:'Eucerin',       cat:'Moisturiser', price:1500,  was:0,     tag:'' },
  { id:'rojukiss-cream',    name:'Rojukiss Whitening Poreless Cream',     brand:'Rojukiss',      cat:'Moisturiser', price:6720,  was:0,     tag:'' },
  { id:'boots-bright-serum',name:"Boot's Brightening Face Serum",         brand:"Boot's",        cat:'Serum',       price:2500,  was:0,     tag:'' },
  { id:'vitc-glutathione',  name:'Vitamin C + Glutathione Cream',         brand:'Other',         cat:'Moisturiser', price:3850,  was:0,     tag:'' },
  { id:'remedist-age',      name:'The Remedist Age Reversal Serum',       brand:'The Remedist',  cat:'Serum',       price:2490,  was:0,     tag:'' },
  { id:'baby-oil',          name:'Baby Oil',                              brand:'Other',         cat:'Body Care',   price:1800,  was:0,     tag:'' },
  { id:'remedist-dandruff', name:'The Remedist Anti-Dandruff Shampoo',    brand:'The Remedist',  cat:'Hair Care',   price:690,   was:0,     tag:'' },
  { id:'hyfac-toner',       name:'Hyfac Toner',                           brand:'Hyfac',         cat:'Toner',       price:2050,  was:0,     tag:'' },
  { id:'hyfac-women',       name:'Hyfac Moisturiser for Women',           brand:'Hyfac',         cat:'Moisturiser', price:2300,  was:0,     tag:'' },
  { id:'tecnoskin-wash',    name:'Tecnoskin Foaming Wash',                brand:'Tecnoskin',     cat:'Cleanser',    price:2300,  was:0,     tag:'' },
  { id:'remedist-niacin-wash', name:'The Remedist Niacinamide Face Wash', brand:'The Remedist',  cat:'Cleanser',    price:1790,  was:0,     tag:'' }
];

/* Derived from PRODUCTS so the filters can never drift out of sync with the
   catalogue (the previous hand-written lists were already missing brands). */
const BRANDS = [...new Set(PRODUCTS.map(p => p.brand))].sort();
const CATEGORIES = [...new Set(PRODUCTS.map(p => p.cat))].sort();

/* --------------------------------------------------------------------------
   TREATMENT PRICE LIST — from the client's "Price List" sheet.
   Format: [name, price in BDT, optional note (course pricing / conditions)].
   Rows in the sheet with no price, or with no treatment name, are deliberately
   NOT invented here — see site/README.md "Open questions" for the list.
   Prices are per single session unless the note says otherwise.
   -------------------------------------------------------------------------- */
const TREATMENTS = [
  {
    cat: 'Laser Hair Removal',
    items: [
      ['Upper Lip / Chin / Nose / Eyebrows / Earlobes', 4900],
      ['Side Burns / Beard', 4900],
      ['Upper Lip + Chin', 5900],
      ['Full Face', 10900],
      ['Full Face + Neck', 11900],
      ['Nipples Area', 10900],
      ['Full Back Side', 14900],
      ['Half Back Side', 14900],
      ['Shoulder', 11900],
      ['Underarms', 10900],
      ['Chest', 10900],
      ['Full Arms + Hands', 14900],
      ['Half Arms', 11900],
      ['Abdomen', 10900],
      ['Bikini', 14900],
      ['Half Legs', 11900],
      ['Full Legs', 14900],
      ['Full Body with Face', 54900]
    ]
  },
  {
    cat: 'Medical Facials',
    items: [
      ['Mito Shine Facial', 12900],
      ['Advance Hydra Facial — Full Face', 8000],
      ['Hydra Facial', 4000],
      ['Hydra Facial — Full Face + Neck', 12900],
      ['Premium Hydra Facial', 8000],
      ['Mini Hydra', 2000],
      ['Carbon Laser Facial', 11900],
      ['Carbon Laser Facial + Neck', 14900],
      ['Carbon Laser Lips', 7900],
      ['Vampire Facial', 12900],
      ['Vampire Facial — Face + Neck', 13900],
      ['Oxylift Treatment', 16900],
      ['Microderma', 3000],
      ['Global Eyecon Treatment', 10900, 'Course of 6 — ৳65,900'],
      ['Melanoclear Treatment (Melasma)', 14900, 'Course of 3 — ৳44,700 · 4 — ৳59,600 · 6 — ৳89,400 · 8 — ৳119,200']
    ]
  },
  {
    cat: 'Chemical Peels',
    items: [
      ['Yellow Peel', 10900],
      ['Black Peel', 10900, 'Carbon'],
      ['Blue Peel', 10900, 'Salicylic'],
      ['Chemical Peel — Face', 10900],
      ['Chemical Peel — Underarms Brightening', 10900],
      ['Chemical Peel — Neck Brightening', 10900],
      ['Chemical Peel — Half Arms Brightening', 12900],
      ['Chemical Peel — Full Arms Brightening', 15900],
      ['Chemical Peel — Bikini Brightening', 15900],
      ['Chemical Peel — Half Legs Brightening', 15900],
      ['Chemical Peel — Full Legs Brightening', 18900],
      ['Chemical Peel — Full Body Brightening', 29900]
    ]
  },
  {
    cat: 'Mesotherapy',
    items: [
      ['Mesotherapy Face by Derma Pen', 10900],
      ['Mesotherapy Hair by Derma Pen', 10900],
      ['Mesotherapy Neck by Derma Pen', 10900],
      ['Mesotherapy Lips by Derma Pen', 7900]
    ]
  },
  {
    cat: 'PRP & PRF',
    items: [
      ['Advance PRP', 15900, 'PRP with exosome'],
      ['Face Rejuvenation PRP', 12900],
      ['Face Rejuvenation PRP with Microneedling', 14900],
      ['Face Rejuvenation PRP with MNRF', 14900],
      ['Hair Treatment PRP', 12900],
      ['PRP Under Eye', 12900],
      ['P-Shot PRP', 14900],
      ['O-Shot PRP', 14900],
      ['PRF Face', 7900],
      ['PRF Hair', 7900]
    ]
  },
  {
    cat: 'HIFU',
    items: [
      ['HIFU Full Face', 12900],
      ['HIFU Abdomen', 18900]
    ]
  },
  {
    cat: 'Botox — Allergan',
    items: [
      ['Forehead Lines', 25900],
      ['Frown Lines', 15900],
      ['Eyebrow Lift', 15900],
      ["Crow's Feet", 15900],
      ['Nose Bunny Lines', 15900],
      ['Gummy Smile Lift', 14900],
      ['Dimpled Chin', 15900],
      ['Neck Lines', 26900],
      ['Masseter', 36900],
      ['50 Units — Upper Face / Lower Face', 49900],
      ['Different Area Botox (max 50 units)', 49900],
      ['Underarms / Palms Sweating', 59900]
    ]
  },
  {
    cat: 'Botox — Neuronox',
    items: [
      ['Forehead Lines', 20900],
      ['Frown Lines', 12900],
      ['Eyebrow Lift', 12900],
      ["Crow's Feet", 12900],
      ['Nose Bunny Lines', 11900],
      ['Gummy Smile Lift', 12900],
      ['Dimpled Chin', 12900],
      ['Neck Lines', 20900],
      ['Masseter', 30900],
      ['Up to 22 Units', 25900],
      ['Up to 50 Units — Upper Face', 39900],
      ['Underarms / Palms Sweating', 39900]
    ]
  },
  {
    cat: 'Dermal Fillers',
    items: [
      ['Juvederm — 1ml', 54900],
      ['Restylane — 1ml', 54900],
      ['Profhilo — 1ml', 64900],
      ['Neuramis — 1ml', 37900],
      ['Body Filler — 150ml', 225000],
      ['Body Filler — 200ml+', 300000],
      ['Filler Dissolve', 7900]
    ]
  },
  {
    cat: 'Other Injectables',
    items: [
      ['Glutathione Glow Booster — Advance', 10900, '10 sessions — ৳109,000'],
      ['Glutathione Glow Booster — Standard', 7900, '10 sessions — ৳79,000'],
      ['Small Threads', 5900],
      ['Large Threads', 10900],
      ['Lipolysis Fat Reduction — 10ml', 14900],
      ['Lipolysis Fat Reduction, Double Chin — 3ml', 12900],
      ['I/L Scar Treatment Injection', 7900],
      ['Subcision', 10900]
    ]
  },
  {
    cat: 'CO2 Laser',
    items: [
      ['Comedo Extraction', 10900],
      ['Freckles / DPN', 11900],
      ['Keloid (small)', 10900],
      ['Keloid (large)', 15900],
      ['Mole Removal (single)', 10900],
      ['Molluscum Contagiosum', 10900],
      ['Resurfacing', 14900],
      ['Rejuvenation', 14900],
      ['Seborrheic Keratosis', 13900],
      ['Skin Tag (small area)', 12900],
      ['Skin Tag (large area)', 17900],
      ['Verruca / Wart', 14900],
      ['Xanthelasma', 10900]
    ]
  },
  {
    cat: 'Fractional CO2',
    items: [
      ['Lips', 7900],
      ['Resurfacing (face)', 12900],
      ['Skin Rejuvenation — face, small area', 10900],
      ['Skin Rejuvenation — face, large area', 14900],
      ['Skin Rejuvenation — hands', 14900],
      ['Stretch Marks', 14900]
    ]
  },
  {
    cat: 'Q-Switched Laser',
    items: [
      ['Freckles', 11900],
      ['Melasma', 14900],
      ['Tattoo Removal (small area)', 10900],
      ['Tattoo Removal (medium area)', 13900],
      ['Tattoo Removal (large area)', 15900],
      ['Neck Line Rejuvenation', 12900],
      ['Arms Rejuvenation', 17900],
      ['Half Back Rejuvenation', 17900],
      ['Full Back Rejuvenation', 21900],
      ['Half Leg Rejuvenation', 17900],
      ['Full Leg Rejuvenation', 21900]
    ]
  },
  {
    cat: 'Dark Circle Treatment',
    items: [
      ['By Glycolic Peel / Lactipeel', 7900],
      ['By Fractional Laser', 8900],
      ['By Diamond Peel', 9900],
      ['By Diamond Peel + Eye Meso', 10900],
      ['By Diamond Peel + Glycolic Peel / TCA', 11900]
    ]
  },
  {
    cat: 'Bio LED Light Therapy',
    items: [
      ['Red Light — Rejuvenation', 1000],
      ['Yellow Light — Rejuvenation', 1000],
      ['Blue Light — Acne', 1000],
      ['Green Light — Soothing', 1000]
    ]
  },
  {
    cat: 'Low-Level Laser Therapy',
    items: [
      ['LLLT — single session', 3000],
      ['LLLT — 6 sessions', 12900, 'Weekly, once or twice'],
      ['LLLT — 12 sessions over 3 months', 24900, '40 min, weekly'],
      ['LLLT — 24 sessions over 6 months', 49900, '40 min, weekly']
    ]
  },
  {
    cat: 'Body Shaping — SlimPro',
    items: [
      ['Axillary Fat', 7900],
      ['Arms', 9900],
      ['Chest', 9900],
      ['Double Chin / Face', 9900],
      ['Upper Back / Buffalo Hump', 9900],
      ['Abdomen + Flanks', 10900],
      ['Back Folds / Saddle Bags', 10900],
      ['Hip', 10900],
      ['Thighs', 10900],
      ['Abdomen + Chest', 12900],
      ['Abdomen + Face', 12900],
      ['Arms + Back Folds', 12900],
      ['Abdomen + Back Folds + Flanks', 14900],
      ['Arms + Thighs', 14900],
      ['Double Chin + Back Folds', 14900],
      ['Hip + Back Folds', 14900],
      ['Hips + Thighs', 14900],
      ['Thighs + Back Folds', 14900],
      ['Upper Back + Back Folds', 14900],
      ['Abdomen + Thighs + Flanks', 18900],
      ['Abdomen + Upper Back + Flanks', 18900],
      ['Upper Back + Back Folds + Hip', 18900]
    ]
  },
  {
    cat: 'Body Shaping — Emsculpt',
    items: [
      ['Axillary Fat', 9900],
      ['Thighs', 11900],
      ['Abdomen + Flanks', 12900],
      ['Abdomen + Chest', 12900],
      ['Abdomen + Face', 12900],
      ['Arms', 12900],
      ['Arms + Back Folds', 12900],
      ['Back Folds / Saddle Bags', 12900],
      ['Chest', 12900],
      ['Double Chin / Face', 12900],
      ['Double Chin + Back Folds', 12900],
      ['Hip', 12900],
      ['Hips + Thighs', 12900],
      ['Upper Back / Buffalo Hump', 12900],
      ['Abdomen + Back Folds + Flanks', 14900],
      ['Arms + Thighs', 15900],
      ['Hip + Back Folds', 15900],
      ['Thighs + Back Folds', 15900],
      ['Upper Back + Back Folds', 16900],
      ['Abdomen + Thighs + Flanks', 19900],
      ['Abdomen + Upper Back + Flanks', 19900],
      ['Upper Back + Back Folds + Hip', 19900]
    ]
  },
  {
    cat: 'Slimming Packages',
    items: [
      ['1.5 Months Slimming Package', 70000, '5 kg · 3 sessions + 5 lipo sessions'],
      ['Belly Shaping — 1.5 months', 70000, '5–6 inch · 3 sessions + 3 lipo sessions'],
      ['Arms Shaping — 1.5 months', 70000, '3–4 inch · 3 sessions + 3 lipo sessions'],
      ['Thigh Shaping — 1.5 months', 90000, '3–4 inch · 10 sessions + 3 lipo sessions'],
      ['Hip Shaping — 1.5 months', 90000, '3–4 inch · 10 sessions + 3 lipo sessions'],
      ['3 – 3.5 Months Slimming Package', 100000, '10 kg · 5 sessions + 5 lipo sessions']
    ]
  },
  {
    cat: 'Liposuction',
    items: [
      ['Liposuction — Double Chin', 60000],
      ['Liposuction — Arms', 150000],
      ['Liposuction — Tummy', 330000]
    ]
  },
  {
    cat: 'Transplant',
    items: [
      ['Eyebrow Transplant', 50000],
      ['Beard Transplant', 80000],
      ['Hair Transplant', 150000]
    ]
  },
  {
    cat: 'Other Treatments',
    items: [
      ['Dermaroller', 5000],
      ['Electrocautery — Mole / Milia, small area', 10900, '1 to 10'],
      ['Electrocautery — Mole / Milia, large area', 15900, '10 or more']
    ]
  }
];

/* --------------------------------------------------------------------------
   CLIENT REVIEWS — renamed from "Success Stories" (Feedback 2).
   PLACEHOLDER COPY: swap for the 8–12 real reviews from the client's
   Drive link when it arrives (Feedback 4).
   -------------------------------------------------------------------------- */
const REVIEWS = [
  ['Rumana H.',   'Hydrafacial',            'My skin has never looked this clear. The team explained every step before starting and there was no pressure to buy anything extra.'],
  ['Nusrat J.',   'Laser Hair Removal',     'Six sessions in and the difference is huge. Clean clinic, on-time appointments, and the staff genuinely check how you are doing.'],
  ['Tanvir A.',   'Hair Transplant',        'Dr. Ilmoon walked me through the whole plan honestly, including what it would not fix. The result after eight months speaks for itself.'],
  ['Farzana K.',  'Melasma Treatment',      'I had tried creams for years. Dr. Kamrun sorted out my pigmentation in a few months with a proper plan rather than guesswork.'],
  ['Shirin S.',   'Diet Consultation',      'Aysha built a plan around food I actually eat. Fourteen kilos down and nothing about it felt extreme or unsustainable.'],
  ['Mahmuda R.',  'Botox & Fillers',        'Subtle and natural — exactly what I asked for. Nobody could tell I had anything done, they just said I looked well rested.'],
  ['Ishrat N.',   'Teeth Whitening',        'Quick, painless, and a noticeable difference in one visit. Dr. Ikratuz is very gentle and explains everything as she goes.'],
  ['Sadia M.',    'Acne Scar Treatment',    'The scarring from my teens is finally fading. It took patience but the team kept me on track through every session.'],
  ['Nabila T.',   'HIFU Skin Tightening',   'No downtime at all, I went back to work the same afternoon. My jawline looks noticeably firmer three months on.'],
  ['Rehana B.',   'Dermatology Consult',    'Finally a clinic that diagnoses before it sells. Dr. Tasnim spent proper time with me and the plan was clear and costed upfront.']
];

/* --------------------------------------------------------------------------
   WORKING HOURS — tabulated from CLINIC.hours below (Saturday–Thursday,
   4:00 PM – 8:00 PM, closed Friday). Same schedule, just one row per day
   for the booking page's hours panel (Sirpi appointment reference).
   -------------------------------------------------------------------------- */
const WORKING_HOURS = [
  ['Saturday',  '4:00 PM – 8:00 PM'],
  ['Sunday',    '4:00 PM – 8:00 PM'],
  ['Monday',    '4:00 PM – 8:00 PM'],
  ['Tuesday',   '4:00 PM – 8:00 PM'],
  ['Wednesday', '4:00 PM – 8:00 PM'],
  ['Thursday',  '4:00 PM – 8:00 PM'],
  ['Friday',    'Closed']
];

/* --------------------------------------------------------------------------
   STOCK PHOTOS — generic placeholder photography (not the clinic's real
   product shots) used only on product cards, so the shop/home/product pages
   don't sit empty while real photography is pending. Cycled by index, not
   matched to any specific product's real brand — every card still carries a
   "Stock photo" ribbon so nobody mistakes these for final assets.
   Doctors, departments, the hero and the logo are NOT covered by this —
   a generic bottle standing in for "a product" is harmless; standing in for
   "Dr. Tasnim Khan" or "the Skin department" would be misleading, so those
   stay as labelled placeholder boxes until the real photos arrive.
   -------------------------------------------------------------------------- */
/* stock-01, -03 and -04 are excluded on purpose: those three source mockups
   have a "-38% / -13% / -12%" badge baked into the image pixels. Showing
   that next to a product's real price (which may have no discount at all)
   would read as a fake, unearned discount — a real accuracy problem, not
   just visual clutter. The files are still on disk if a future crop makes
   them usable; they are just not in the cycle. */
const STOCK_PHOTOS = [
  'assets/stock/stock-02.png',
  'assets/stock/stock-05.png',
  'assets/stock/stock-06.png',
  'assets/stock/stock-07.png',
  'assets/stock/stock-08.png',
  'assets/stock/stock-09.png'
];

/* --------------------------------------------------------------------------
   Clinic details — used in the footer and booking form
   -------------------------------------------------------------------------- */
const CLINIC = {
  whatsapp: '8801XXXXXXXXX',            /* TODO: client's real WhatsApp number */
  phone:    '+880 1XXX-XXXXXX',         /* TODO */
  email:    'info@mitoskinlab.com',
  address:  'Chattogram, Bangladesh',   /* TODO: full branch address */
  hours:    'Saturday – Thursday · 4:00 PM – 8:00 PM',
  facebook: 'https://www.facebook.com/share/1NvanyXphb/'
};
