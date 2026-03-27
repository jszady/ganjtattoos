# Ganj Tattoos — SEO & content preservation audit

**Site:** [https://www.ganjtattoos.com](https://www.ganjtattoos.com)  
**Platform:** Squarespace  
**Audit date:** March 25, 2026  
**Method:** Static HTML fetch (no headless browser). `https://www.ganjtattoos.com/sitemap.xml` returned **HTTP 500** at audit time; URLs were taken from primary navigation, store listing, and `robots.txt` sitemap declaration.

---

## 1. URL inventory and page structure

### Primary navigation (collection pages)

| URL | Nav label | Notes |
|-----|-----------|--------|
| `https://www.ganjtattoos.com/` | Home | Intro, portfolio imagery, FAQ |
| `https://www.ganjtattoos.com/flash` | Flash | Image gallery (Squarespace “Gallery 3”) |
| `https://www.ganjtattoos.com/social-media` | Social Media | Instagram embed + links |
| `https://www.ganjtattoos.com/aftercare` | Aftercare | Aftercare copy + studio contact |
| `https://www.ganjtattoos.com/booknow` | Scheduling | Booking / consultation copy + form UI |
| `https://www.ganjtattoos.com/store` | Store | Product grid, filters |

### Commerce utility pages

| URL | Purpose |
|-----|---------|
| `https://www.ganjtattoos.com/cart` | Shopping cart (mostly client-rendered in static HTML) |

### Product detail pages (`/store/p/…`)

| URL | Product title (on-page) |
|-----|-------------------------|
| `https://www.ganjtattoos.com/store/p/country-frog-t` | Country Frog T |
| `https://www.ganjtattoos.com/store/p/demon-girl-zip-hoodie` | Demon Girl zip hoodie |
| `https://www.ganjtattoos.com/store/p/demon-girl-34-sleeve-raglan-shirt` | Demon Girl 3/4 sleeve raglan shirt |
| `https://www.ganjtattoos.com/store/p/womens-micro-rib-raglan-baby-tee` | Demon Girl micro rib raglan baby tee |
| `https://www.ganjtattoos.com/store/p/summoning-heavyweight-tee` | Summoning heavyweight Tee |
| `https://www.ganjtattoos.com/store/p/summoning-micro-rib-raglan-baby-tee` | Summoning micro rib raglan baby tee |
| `https://www.ganjtattoos.com/store/p/ancient-skull-box-tee` | Ancient Skull box tee |
| `https://www.ganjtattoos.com/store/p/ganj-snapback-hat` | GANJ Snapback Hat |
| `https://www.ganjtattoos.com/store/p/ganj-trucker-cap` | GANJ Trucker Cap |
| `https://www.ganjtattoos.com/store/p/embroidered-beanie` | GANJ Beanie |
| `https://www.ganjtattoos.com/store/p/ganj-patch` | GANJ Patch |
| `https://www.ganjtattoos.com/store/p/killmeister-tee` | Killmeister Tee |

### Information architecture (outline)

- **Global header:** Logo → nav links → Instagram / TikTok icons → cart → CTA to scheduling.
- **Home:** Hero / intro → tattoo portfolio grid → FAQ accordion-style blocks.
- **Flash:** Grid of flash / design images.
- **Social Media:** Intro copy + embedded social feed + “View fullsize” affordances.
- **Aftercare:** Single main column of aftercare instructions + “Find me at” contact.
- **Scheduling:** Intro copy + Squarespace form block.
- **Store:** Heading “Store”, filter UI, product cards linking to PDPs.

---

## 2. Page titles and meta descriptions

### Sitewide pattern

- **`og:site_name`:** Ganj Tattoos  
- **`twitter:card`:** summary  
- **Meta description (`name="description"`):** Empty on most marketing pages; **populated on product pages** (see below).  
- **`og:description`:** Empty on crawled marketing pages; populated on PDPs.

### Per page

| Page | `<title>` | Meta description (summary) |
|------|-----------|----------------------------|
| `/` | Ganj Tattoos | *(empty)* |
| `/flash` | Gallery 3 — Ganj Tattoos | *(empty)* |
| `/social-media` | Social Media — Ganj Tattoos | *(empty)* |
| `/aftercare` | About 1 — Ganj Tattoos | *(empty)* — *Squarespace page title does not match nav label “Aftercare”.* |
| `/booknow` | Scheduling — Ganj Tattoos | *(empty)* |
| `/store` | Store 2 — Ganj Tattoos | *(empty)* |
| `/cart` | Ganj Tattoos | *(empty in sample)* |

### Product pages — meta descriptions (full text from HTML)

**Country Frog T** — *If you’re looking for a thick, structured tee that’s also super soft and breathable—look no further! The unisex garment-dyed heavyweight t-shirt ticks all the boxes and is made of 100% ring-spun cotton. The regular t-shirt style will complement most looks and fit you to a tee.* — *(continues with bullet specs and print-on-demand paragraph in source HTML).*

**Demon Girl zip hoodie** — *This zip hoodie is soft, warm, and versatile enough for year-round layering. With its relaxed fit and clean design details, it’s the kind of hoodie you’ll reach for daily—whether you’re on the go or lounging.* — *(continues with material/care and print-on-demand copy in source).*

**Demon Girl 3/4 sleeve raglan shirt** — *A stylish spin on the classic baseball raglan. The combed cotton blend makes it super soft, comfortable, and lightweight.* — *(continues with fiber content bullets and print-on-demand copy in source).*

**Demon Girl micro rib raglan baby tee** — *Soft, sporty, and easy to style—this baby tee updates a classic baseball-inspired design. With its fitted cut, mid-length body, and soft ribbed texture, it pairs effortlessly with jeans, shorts, or joggers for a casual, flattering look.* — *(continues with specs and print-on-demand copy in source).*

**Summoning heavyweight Tee** — *If you’re looking for a thick, structured tee that’s also super soft and breathable—look no further! The unisex garment-dyed heavyweight t-shirt ticks all the boxes and is made of 100% ring-spun cotton.* — *(continues with specs and print-on-demand copy in source).*

**Summoning micro rib raglan baby tee** — Same opening as Demon Girl micro rib raglan baby tee (shared supplier copy pattern).

**Ancient Skull box tee** — Same pattern as Killmeister / box tee description opening (*Want a tee with a flattering fit and sturdy construction…*).

**GANJ Snapback Hat** — *This hat is structured with a classic fit, flat brim, and full buckram. The adjustable snap closure makes it a comfortable, one-size-fits-most hat.* — *(continues with material bullets in source).*

**GANJ Trucker Cap** — *This six-panel trucker cap with a mesh back will be a comfy and classic choice for a perfect day in the sun.* — *(continues with material/construction bullets in source).*

**GANJ Beanie** — *The perfect beanie has arrived! This embroidered beauty has a snug fit that ensures you're going to feel cozy and warm whatever you're doing.* — *(HTML entities decoded; continues with fiber content in source).*

**GANJ Patch** — *Spice up your outfit by adding an eye-catching embroidered patch. Thanks to its durable twill fabric, the patch is resilient to heat.* — *(continues with fiber / dimensions note in source).*

**Killmeister Tee** — *Want a tee with a flattering fit and sturdy construction? Look no further. Men’s boxy tee is the best choice for relaxed streetwear looks and layering. With a reinforced neckline and luxe feel, this shirt will be your go-to choice season after season.* — *(continues with cotton weight, fit, sourcing, and print-on-demand paragraph in source).*

### Canonical URLs

Present on crawled pages (examples): home `/`, `/flash`, `/social-media`, `/aftercare`, `/booknow`, `/store`, each `/store/p/…`. `/cart` canonical was not reliably present in the static snapshot.

---

## 3. Heading hierarchy (H1–H3, plus H4 where used)

**Important:** No `<h1>` elements appeared in the crawled HTML for any primary page. Primary topics use `<h3>` / `<h4>` (and product pages use template chrome with `<h2>` on store listing).

### Home (`/`)

| Level | Text |
|-------|------|
| H3 | Dave Ganjamie |
| H3 | FAQ |
| H4 | Where Do We Begin? |
| H4 | How Should I Prepare? |
| H4 | What Are Your Prices? |
| H4 | When Will You Draw My Design? |
| H4 | How Do I Take Care of My Tattoo? |
| H4 | Can I Bring a Friend? |
| H4 | Should I tip? |
| H4 | Do I Need a Touch Up? |
| H4 | Does It Hurt? |

### `/booknow`

| Level | Text |
|-------|------|
| H2 | Let’s Plan Your Tattoo |

### `/aftercare`

| Level | Text |
|-------|------|
| H3 | THINGS TO DO: |

### `/store`

| Level | Text |
|-------|------|
| H2 | Store *(appears twice in template)* |
| H4 | Filters |
| H4 | No results found *(filter empty state)* |

### `/flash`, `/social-media`, `/cart`

- No H1–H3 headings in static HTML (gallery and social content are not heading-wrapped).

---

## 4. Visible text content (preservation copy)

### Home — intro

**Label:** TATTOO ARTIST AND ILLUSTRATOR  

**Body:** I’m an NYC based tattoo artist working out of Hand of Glory Tattoo in Park Slope, Brooklyn. I specialize in comic book fine line illustrative and American Traditional styles, but take pride in using my background in illustration and graphic design to tailor a tattoo that fits your aesthetic.

**CTA link text:** Schedule Appointment or Consultation → `/booknow`

### Home — FAQ (question titles + answers)

**Where Do We Begin?**  
First things first, fill out the form in the Book Now section of this site to the best of your knowledge. If you’re not sure about a part of the tattoo such as style or size, that’s fine! We'll set up a free consultation to determine your tattoo needs and fill in the blanks. Once we’ve got enough info and both feel good about it, I’ll give you info to leave a deposit and get your tattoo appointment on the books.

**How Should I Prepare?**  
Get a good night’s sleep, don’t drink alcohol before the appointment, and make sure to eat a solid meal before the appointment. It can take several hours for some tattoos, so it’s a good idea to bring snacks that won’t make a mess and water. A book or something to listen to or watch with headphones is a great idea as well.

**What Are Your Prices?**  
Pricing is based on both the project's scope and your desired timeline. (I promise fair rates and will always require your approval before we begin).  
Pieces that we can finish in one session are typically a flat rate according to the size and scope. Anything that will require several sessions will likely be an hourly rate of **$200/hr** for as long as the tattoo will take to complete.  
If you have a budget in mind, let me know! I will do my best to work with you and figure out the best tattoo bang for your buck.

**When Will You Draw My Design?**  
Designs are typically prepared and ready to be shown to you in person at your appointment. If you want any changes to the design that’s perfectly fine, and I’ve found it’s best to do that in person at the appointment when we can talk it over face to face. My goal is to make sure you are 100% happy before we begin.

**How Do I Take Care of My Tattoo?**  
Check the aftercare tab of this site! If you have any questions, reach out to me by email or Instagram and I’ll answer any questions you may have.  
And remember, never listen to your friends or the internet about what to do. They are wrong.

**Can I Bring a Friend?**  
Like most tattoo artists, I do ask that you come on your own for the best possible experience and finished product. There’s nothing wrong with someone stopping by to say hello real quick, but tattoos require safety and concentration that is best achieved one on one. Plus, they can take a while and will be very boring for anyone tattooing or not getting tattooed.  
If you’re nervous, don’t worry; I’ll walk you through the process and make sure you’re comfortable.

**Should I tip?**  
As the saying goes, tips are never expected but always appreciated.

**Do I Need a Touch Up?**  
In general tattoos should not need touch ups, but in the event there’s a spot that needs it just reach out and we’ll set it up! Touch ups are free for the first 6 months after your appointment.

**Does It Hurt?**  
Yeah. However other than a few crazy spots it’s only mildly uncomfortable and I can almost guarantee you’ve dealt with way worse pain at some point in your life and just gone about your day. People chat, read, laugh, even sleep through tattoos so don’t be too nervous. A good mindset makes all the difference.

### `/booknow` — scheduling intro

**Heading:** Let’s Plan Your Tattoo  

**Body:** Describe the tattoo as best as you can. Any information you think might be relevant is probably worth sharing. If you’re not sure about something, that’s okay too! We can always talk it out and figure out specifics together; and consultation is always free. Once we have a tattoo idea together and a date picked, I’ll provide information to send a deposit and get artwork started. Reference images are always helpful, both of the subject matter and style you like for your tattoo. The images of the tattoo style do not necessarily have to be the same as the subject! For example, if you want a tattoo of a tiger, but saw a cool tattoo of a bird or a boat and like the way it’s drawn, that can be helpful to match my design to what you’re looking for.

### `/social-media`

**Body:** Check out my Instagram page for the most up to date tattoos, flash pages and news (like my personal news, not world events. This isn’t CNN)  
**Link labels:** Instagram, TikTok  
Repeated UI strings in static HTML include many instances of “View fullsize”.

### `/aftercare` — main column (“THINGS TO DO:”)

**THINGS TO DO:**  

Always wash your hands before touching your tattoo!

- If your artist applied Saniderm bandage, please follow the official guide (linked on site): `https://saniderm.com/how-to-use/` — watch the video and follow the instructions. Do not leave for more than 48 hours.
- Link to Guide: `https://saniderm.com/how-to-use/`

**When you get home:** Remove bandage within 2–3 hours after getting your tattoo. DO NOT re-bandage ever again!

- Wash your tattoo with an anti-bacterial liquid Dial Gold soap. Wash generously with sterile clean hands and cool water. Do not use a washcloth or anything that will exfoliate your tattoo; don’t be shy about lathering and cleaning until you remove pre-existing ointment, blood, and buildup. You want a clean sterile tattoo morning and night. **Only wash TWO TIMES A DAY.** Do not excessively wash.
- Gently pat dry with a clean cloth or paper towel. Do not rub, or use rough fabric.

**First 3–5 days:** Rub a small amount of Aquaphor or tattoo ointment 4 times a day, in thin light coats—not greasy or thick. Do not use any other product but Aquaphor or tattoo ointment. Wear clean, soft clothing over the tattoo for the first 2 weeks—nothing abrasive or irritating.

**After the first 4–5 days:** Switch to a water-based unscented lotion. You want the tattoo on the drier side so it can heal and not be over-hydrated. Oxygen helps healing.

**Peeling:** Continue lotion as directed; **do not pick or massage** itchy/sore areas—let them fall off naturally. Do not pick at the skin.

**Over-hydration:** If fully peeled areas look milky white / “dried glue,” the tattoo may be overly hydrated—cut back to hydrating once a day and let skin dry and mature.

**Timeline:** Most tattoos take 2–3 weeks to heal, sometimes longer to settle; “a tattoo is truly healed, protected, and sun-ready after two months,” with regular **50 SPF** sunscreen after the first month.

*(Source preserves a typo: “THIER” for “THEIR” in the peeling sentence.)*

### `/aftercare` — footer contact block

Find me at:

Hand of Glory Tattoo  
465A 7th Ave, Brooklyn, NY 11215  
ganjtattoos@gmail.com

### `/store` — listing strings (from static HTML text)

Filter UI: “Clear Filters”, “Filter”, “Clear Filter”, “No results found”, “No results match your search. Try removing a few filters.”

**Products and indicative pricing as shown in listing snapshot:**

- Country Frog T — from $27.00  
- Demon Girl zip hoodie — from $37.00  
- Demon Girl 3/4 sleeve raglan shirt — from $27.00  
- Demon Girl micro rib raglan baby tee — from $27.00  
- Summoning heavyweight Tee — from $27.00  
- Summoning micro rib raglan baby tee — from $27.00  
- Ancient Skull box tee — from $27.00  
- GANJ Snapback Hat — $27.00 *(variant color names listed in UI)*  
- GANJ Trucker Cap — $27.00  
- GANJ Beanie — $20.00  
- GANJ Patch — $12.00  
- Killmeister Tee — from $27.00  

Commerce UI strings: “View Options”, “Select Size”, “Add To Cart”, “Added!”, size option labels (e.g. S, M, L, XL, 2XL, 3XL, XS).

### `/flash` and `/cart`

- **Flash:** Page is image-driven; there is essentially no prose body in static HTML beyond chrome. Image `alt` values are the primary textual preservation for artwork filenames (see section 6).
- **Cart:** Static HTML snapshot contained negligible visible cart content (typical of Squarespace cart hydration).

---

## 5. Internal linking structure

### Global header navigation (desktop and mobile equivalents)

| Anchor text | Target |
|-------------|--------|
| Home | `/` |
| Flash | `/flash` |
| Social Media | `/social-media` |
| Aftercare | `/aftercare` |
| Scheduling | `/booknow` |
| Store | `/store` |
| Cart (icon / text) | `/cart` |
| *(CTA)* | `/booknow` (e.g. “Schedule Appointment or Consultation” on home) |

### Cross-links in copy

- Home FAQ “Book Now section” → conceptually `/booknow`
- Home FAQ aftercare → `/aftercare`
- Store → each `/store/p/{slug}`
- Product pages → breadcrumbs / back patterns per Squarespace commerce template (internal links back to `/store`)

### External links (not internal, but part of navigation)

| Label / aria | URL |
|--------------|-----|
| Instagram | `http://instagram.com/ganjtattoos` |
| TikTok | `http://Tiktok.com/@ganjtattoos` |
| Saniderm guide (aftercare) | `https://saniderm.com/how-to-use/` |

---

## 6. Image `alt` text inventory

### Sitewide logo

- **Alt:** `Ganj Tattoos` (header / repeated logo instances)

### Home — portfolio

Mix of **empty `alt`**, **camera filename alts** (e.g. `DSC00415.JPG`), and one **portrait-related** image with truncated URL in markup (verify in CMS). Representative alts include: `DSC00300.JPG`, `DSC01017~2.JPG`, `DSC00739(1).JPG`, `DSC07538~2.JPG`, `DSC00202(1).JPG`, `DSC01135.JPG`, `DSC01229~3.JPG`, `DSC00017(1).JPG`, `DSC00724(1).JPG`, `DSC01015(1).JPG`, `DSC00251~2(1).JPG`, `DSC07175.JPG`, `DSC01959~2.JPG`, `DSC01042~3(1).JPG`, `DSC00698(1).JPG`, `DSC00519-1(1).JPG`, `DSC01939.JPG`, `DSC02354.JPG`, `DSC00967(1).JPG`, `DSC02248.JPG`, `DSC00042.JPG`, `DSC00428.JPG`, `DSC09756.JPG`, `DSC00354.JPG`, `DSC00714.JPG`, `DSC00747-1.JPG`, `DSC00749~2.JPG`, `DSC01539-1.JPG`, `DSC03050.JPG`, `DSC03154~3.JPG`, `DSC06196.JPG`, `DSC07145~5.JPG`, `DSC07298.JPG`, `DSC09329-1~3.JPG`, `DSC07532~2.JPG`, `DSC08699~2.JPG`, `DSC07337.JPG`, `DSC03074.JPG`, `DSC09329~2.JPG`, `DSC09646.JPG`, `DSC09256~2.JPG`, `DSC09878~2.JPG`, `DSC07134~2.JPG`, `DSC01760.JPG` *(last image empty alt in sample)*.

### `/aftercare`

- Logo: `Ganj Tattoos`
- Content image: one photo with **empty alt** in sample

### `/flash` — gallery image alts (filename-style)

`tradmovies.jpg`, `Dave_Star_Trek_1.jpg`, `Copy of Dave LOTR 1.jpg`, `DnD_April.jpg`, `Dave_D&D_Flash_1.jpg`, `Copy of Dave Dinos.jpg`, `tradladies.jpg`, `Dave trad May.jpg`, `Dave_Comics_Flash_1.jpg`, `falloutcolor.jpg`, `Star wars trad.jpg`, `Dave_May_The_4th_Flash.jpg`, `voodoo.jpg`, `Dave_420_Flash.jpeg`, `Dave_Summer_flash_1.jpg`, `Trad zodiac 1.jpg`, `Dave_X-Men_1.jpg`, `Dave_X-Men_2.jpg`, `Skin_Rips_2.jpg`, `Animals 1.jpg`, `Skinrip 1.jpg`, `traddymix.jpg`, `Dave Spring flash 2.jpg`, `scrimshaw.jpg`, `swcolor.jpg`, `batman 1.jpg`, `horrormix.jpg`, `SwST.jpg`, `halloween 3.jpg`, `halloween 2.jpg`, `bigbois.jpg`, `halloween 1.jpg`, `witchy1.jpg`, `ff7.jpg`, `cincodemayo.jpg`, `dndscrimshaw.jpg`, `helldivers.jpg`, `birds.jpg`, `dune.jpg`, `baldursgate.jpg`, `Lightsabers.jpg`, `Untitled_Artwork.jpg`

### `/social-media`

- Several feed images: **no `alt` attribute** in markup.
- Others use **long Instagram-style captions** as `alt`, for example:
  - *Dark Mark tattoo 💀🐍 #harrypotter …*
  - *Love tattooing clipper ships! …*
  - *Got to do this cool Charlie Chaplin piece…*
  - *My good friend Scott was in town so we had to do a Star Trek tattoo since we* *(truncated in attribute)*
  - *Starting this week I* *(truncated)*
  - *No matter how crazy it can get, we love this city #statueofliberty …*
  - *Subtle nod to the Rental Alliance helmets…* *(note: likely “Rebel” in intent)*
  - *Rad custom reaper and his first tattoo! …*
  - *Who else is playing Metal Great Solid Delta? …* *(note: likely “Metal Gear” in intent)*

### `/store` and PDPs

- Many product thumbnails use **empty `alt`**.
- Example populated alt: `Summoning heavyweight Tee`
- PDP galleries repeat product imagery with mixed empty / descriptive alts depending on variant image.

---

## 7. Structured data (JSON-LD)

### On marketing pages (home, flash, social, aftercare, booknow, store, cart)

Two repeated blocks:

1. **`WebSite`**
   - `@context`: `http://schema.org`
   - `@type`: `WebSite`
   - `url`: `https://www.ganjtattoos.com`
   - `name`: `Ganj Tattoos`
   - `image`: `//images.squarespace-cdn.com/.../GanjTattoos+logo+white+clear.png`

2. **`LocalBusiness`**
   - `@type`: `LocalBusiness`
   - `address`: `""` *(empty string)*
   - `image`: Squarespace static logo URL
   - `openingHours`: `""` *(empty string)*

### On product detail pages (`/store/p/…`)

Same `WebSite` + `LocalBusiness` as above, **plus**:

3. **`Product`**
   - `@type`: `Product`
   - `name`: e.g. `Killmeister Tee — Ganj Tattoos`
   - `image`: primary product image URL
   - `description`: product description *(may mirror meta description; can truncate mid-sentence in JSON-LD)*
   - `brand`: `Ganj Tattoos`
   - `offers`: embedded **`AggregateOffer`**
     - `lowPrice`, `highPrice`, `priceCurrency` (e.g. USD), `offerCount`, `availability`: `InStock`

### Open Graph product properties (PDPs)

Examples: `og:type` = `product`; `product:price:amount`, `product:price:currency`, `product:availability` = `instock`.

### Microdata (`itemprop`)

Product pages include `itemprop` for `name`, `url`, `description`, `image`, `thumbnailUrl` on meta tags.

---

## 8. robots.txt (reference)

- Hosts standard Squarespace `Disallow` rules for `/config`, `/search`, `/account`, `/api/`, etc.
- **Sitemap:** `https://www.ganjtattoos.com/sitemap.xml` *(returned 500 at audit time)*

---

## 9. Preservation notes (technical)

1. **No H1 in DOM** on audited pages — content hierarchy is mostly H3/H4 on home and H2 on some sections; worth recording for any migration or SEO template work later (not a redesign directive here).  
2. **Aftercare `<title>`** still reads “About 1 — Ganj Tattoos” while navigation says “Aftercare.”  
3. **Meta descriptions** are blank on key landing pages — search snippets will fall back to other signals.  
4. **`LocalBusiness` schema** is under-populated (no structured address or hours despite NAP text on aftercare).  
5. **Cart and parts of commerce** may require JS execution for a complete DOM audit.  
6. **External social URLs** use `http://` in markup; browsers follow redirects but canonical HTTPS is preferred for migrations.

---

*End of audit document.*
