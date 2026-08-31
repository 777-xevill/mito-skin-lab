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
    photo: ''
  },
  {
    name: 'Dr. Tasnim Khan',
    title: 'Aesthetic Dermatologist',
    title2: 'Skin, Hair, Sex, Laser Specialist & Cosmetic Surgeon',
    edu: 'MBBS (DU), DDV (BSMMU), Diploma in Aesthetic Medicine (USA), Diploma in Cosmetic Gynaecology. Advanced Training in Aesthetic Dermatology (USA, Germany, Thailand, Malaysia, India). Associate Professor (Skin & VD), NIMCH.',
    bio: 'Performs Botox, filler, chemical peel, thread lift, CO2 laser, Q-Switched laser, HIFU, PRP, P-Shot, O-Shot and carbon laser.',
    photo: ''
  },
  {
    name: 'Aysha Siddika',
    title: 'Dietitian & Nutritionist',
    title2: 'Consultant — Diet & Nutrition',
    edu: 'B.Sc. & M.Sc. in Food & Nutrition (DU). Consultant, Easy Diet. Ex. Chief Dietitian, Square Hospital Ltd. Ex. Dietitian, Apollo Hospital. Lecturer, Square Nursing College.',
    bio: 'Nutritionist consultant and diet planner building personalised, clinically sound eating plans for lasting results.',
    photo: ''
  },
  {
    /* Feedback 3 #1 — "Anti-Aging Expert" sits as the 2nd title, on the 2nd line. */
    name: 'Dr. Kamrun Nahar',
    title: 'Aesthetic Dermatologist',
    title2: 'Anti-Aging Expert',
    edu: 'MBBS, PGT in Dermatology & Venereology (CMCH), Foundation Training in Medical Aesthetics (IIMARM), Advanced Dermatosurgery & Dermoscopy (IIMARM), Masters in Medical Aesthetics (IIMARM). HMO, Department of Dermatology and Venereology, Chittagong Medical College Hospital.',
    bio: 'Focuses on acne, spot and melasma treatment, Botox, filler, chemical peel, thread lift, CO2 laser, Q-Switched laser, HIFU, PRP and carbon laser.',
    photo: ''
  },
  {
    name: 'Dr. Ilmoon Kabir',
    title: 'Plastic Surgeon',
    title2: 'Consultant of Plastic & Aesthetic Surgery',
    edu: 'MBBS, BCS (Health), MS (Plastic Surgery, DMC), MRCS (General Surgery, Edinburgh, UK). Dhaka Medical College & Hospital. BIO Plastic Surgery Clinic (Bangladesh Branch). City Hospital Ltd.',
    bio: 'Consultant plastic and aesthetic surgeon covering reconstructive and cosmetic surgical procedures.',
    photo: ''
  },
  {
    name: 'Dr. Ikratuz Jahan',
    title: 'Oral & Dental Surgeon',
    title2: 'Specially Trained in Endodontics',
    edu: 'B.D.S (Chattogram International Dental College). Specially Trained in Endodontics.',
    bio: 'Key treatments include scaling & polishing, teeth whitening, root canal treatment, dental implants and core build-up.',
    photo: ''
  },
  {
    name: 'Dr. Shahinur Sultana',
    title: 'Aesthetic Dermatologist',
    title2: '',
    edu: 'MBBS (CU), PGT (Dermatology & Venereology), Master Injector Programme (ILAMED, Thailand), CCD (BIRDEM), CMU (USG). HMO, Department of Dermatology and Venereology, Chittagong Medical College Hospital.',
    bio: 'Aesthetic dermatology and injectable treatments delivered to international master-injector standards.',
    photo: ''
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
  { id:'b-bright',          name:'B-Bright Tablets',                      brand:'B-Bright',      cat:'Supplements', price:3600,  was:0,     tag:'' }
];

const BRANDS = ['CeraVe','Eucerin','Kose','Gubon','HRA','Hyfac','The Remedist',"Boot's","Palmer's",'The Ordinary','Axis-Y','Soul'];
const CATEGORIES = ['Sunscreen','Serum','Cleanser','Moisturiser','Body Care','Hair Care','Supplements'];

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
