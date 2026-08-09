import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Send,
  CheckCircle2,
  HardHat,
  PenLine,
  Wrench,
  Flame,
  Snowflake,
  Home,
  Info,
  HelpCircle,
  Image as ImageIcon,
  Building2,
  Package,
  Truck,
  ShoppingBag,
  Sun,
  Moon,
  ShoppingCart,
  Search,
  Trash2,
  Plus,
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DIVISIONS = [
  {
    id: "ppe",
    code: "PPE-01",
    title: "PPE",
    icon: HardHat,
    blurb: "Head-to-toe protection for site, factory and warehouse teams.",
    bullets: [
      "Helmets & hard hats",
      "Gloves — leather, nitrile, cut-resistant",
      "Safety boots & footwear",
      "Hi-vis vests & overalls",
      "Respirators & dust masks",
    ],
  },
  {
    id: "stationery",
    code: "STA-02",
    title: "Stationery",
    icon: PenLine,
    blurb: "Office and school stationery, supplied in bulk or by the box.",
    bullets: [
      "Office paper, pens & filing supplies",
      "School stationery packs",
      "Printing & branding consumables",
      "Bulk supply for schools, offices & NGOs",
    ],
  },
  {
    id: "tools",
    code: "TLS-03",
    title: "Tools & Hardware",
    icon: Wrench,
    blurb: "Hand tools, power tools and hardware for trade and site work.",
    bullets: [
      "Hand tools & power tools",
      "Fixings, fasteners & fittings",
      "Site & workshop hardware",
      "Supply for contractors & maintenance teams",
    ],
  },
  {
    id: "fabrication",
    code: "FAB-04",
    title: "Fabrication",
    icon: Flame,
    blurb: "Custom metal fabrication and welding, built to your spec.",
    bullets: [
      "Custom metal fabrication",
      "Welding & structural steel work",
      "Gates, burglar bars & site fittings",
      "Built on-site or to drawing",
    ],
  },
  {
    id: "ice",
    code: "ICE-05",
    title: "Ice Manufacturing",
    icon: Snowflake,
    blurb: "Canbri Cool & Cold — fresh ice blocks for Murehwa and beyond.",
    bullets: [
      "5kg ice blocks, made fresh",
      "Supply for bars, butcheries & events",
      "Murehwa depot — call or WhatsApp for delivery",
      "Ask about bulk & standing orders",
    ],
  },
];

const NAV_LINKS = [
  { label: "Home", id: "top", icon: Home },
  { label: "Divisions", id: "divisions", icon: Building2 },
  { label: "Products", id: "products", icon: ShoppingCart },
  { label: "Industries", id: "industries", icon: Wrench },
  { label: "Ice", id: "ice", icon: Snowflake },
  { label: "About", id: "about", icon: Info },
  { label: "Gallery", id: "gallery", icon: ImageIcon },
  { label: "FAQ", id: "faq", icon: HelpCircle },
  { label: "Contact", id: "contact", icon: Mail },
];

const PRODUCTS = [
  { id: "p1", division: "PPE", name: "Safety Helmet & Hi-Vis Set", desc: "Hard hat, vest and gloves bundled for site crews.", icon: HardHat },
  { id: "p2", division: "Tools & Hardware", name: "Cordless Drill Kit", desc: "Power drill with bit set, supplied with case.", icon: Wrench },
  { id: "p3", division: "Stationery", name: "Office Starter Pack", desc: "Paper, pens, files and printing consumables.", icon: PenLine },
  { id: "p4", division: "Fabrication", name: "Custom Steel Gate", desc: "Welded and built to your own site measurements.", icon: Flame },
  { id: "p5", division: "Ice Manufacturing", name: "5kg Ice Block", desc: "Fresh-made ice block from the Murehwa depot.", icon: Snowflake },
  { id: "p6", division: "PPE", name: "Respirator & Dust Mask Pack", desc: "Respiratory protection for site and factory work.", icon: HardHat },
];

const INDUSTRIES = [
  { icon: Building2, title: "Construction & Site Work", desc: "PPE, tools, hardware and fabrication supplied direct to site." },
  { icon: PenLine, title: "Schools & Offices", desc: "Stationery, hardware and PPE in bulk or on standing order." },
  { icon: Snowflake, title: "Bars, Butcheries & Events", desc: "Ice blocks delivered fresh for hospitality and cold storage." },
  { icon: ShoppingBag, title: "Retailers & Resellers", desc: "Tools and hardware supplied wholesale for resale." },
  { icon: Home, title: "Households", desc: "Tools, hardware, stationery and ice for everyday needs." },
  { icon: Flame, title: "Fabrication & Maintenance", desc: "Custom steelwork and repairs, built or fitted to spec." },
];

const GALLERY_CATS = ["All", "Factory", "Production", "Packaging", "Deliveries", "Products"];
const GALLERY_ITEMS = [
  { id: "g1", label: "Canbri Facility", cat: "Factory", icon: Building2 },
  { id: "g2", label: "Ice Production Line", cat: "Production", icon: Snowflake },
  { id: "g3", label: "Ice Block Packaging", cat: "Packaging", icon: Package },
  { id: "g4", label: "Delivery Run", cat: "Deliveries", icon: Truck },
  { id: "g5", label: "PPE Stock", cat: "Products", icon: HardHat },
  { id: "g6", label: "Tools & Hardware Shelf", cat: "Products", icon: Wrench },
];

const FAQS = [
  { id: "f1", cat: "Ordering", q: "How do I request a quote?", a: "Send a WhatsApp message, call us, or fill in the contact form with what you need. We reply during business hours, every working day." },
  { id: "f2", cat: "Delivery", q: "Do you deliver to Murehwa?", a: "Yes. Canbri delivers across Harare and to our Murehwa ice depot area. Timing depends on the division and order size." },
  { id: "f3", cat: "Pricing", q: "Why don't you publish prices online?", a: "Pricing depends on quantity, delivery location and whether it's a one-off or standing order, so we quote by request rather than publish a fixed list — ice blocks are the exception, at $1 for 5kg." },
  { id: "f4", cat: "Ordering", q: "Can I set up a standing order?", a: "Yes — bulk and recurring orders are welcome across all five divisions, including ice blocks for events and cold-chain businesses." },
  { id: "f5", cat: "Fabrication", q: "Can Canbri fabricate to a custom design?", a: "Yes, our fabrication division builds gates, burglar bars and structural steel work to your own spec or drawing." },
  { id: "f6", cat: "PPE", q: "Do you supply PPE for a whole site crew?", a: "Yes — from helmets and hi-vis to gloves, boots and respirators, we can quote for a full crew or a single item." },
  { id: "f7", cat: "Ice", q: "How much does a 5kg ice block cost?", a: "Ice blocks from the Murehwa depot are $1 for 5kg. Call or WhatsApp Jackie to arrange delivery or collection." },
  { id: "f8", cat: "General", q: "Which areas does Canbri serve?", a: "We're headquartered in Harare with an ice depot in Murehwa, and we serve businesses and households across both areas." },
];

const FACTS = [
  { value: "5", label: "Divisions", sub: "Under one roof" },
  { value: "2", label: "Locations", sub: "Harare & Murehwa" },
  { value: "Quote-based", label: "Pricing", sub: "Accurate to your order" },
  { value: "Bulk welcome", label: "Orders", sub: "Standing orders too" },
];

const HERO_WORDS = ["hardware.", "PPE.", "stationery.", "fabrication.", "ice."];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function IceCubes() {
  const cubes = [
    { r: -6, s: 1, x: 0, y: 10 },
    { r: 4, s: 0.9, x: 60, y: -10 },
    { r: -3, s: 1.1, x: 120, y: 20 },
    { r: 8, s: 0.85, x: 20, y: 90 },
    { r: -8, s: 1, x: 90, y: 100 },
    { r: 5, s: 0.95, x: 150, y: 80 },
  ];
  return (
    <div className="relative w-full" style={{ height: 260 }}>
      {cubes.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-xl"
          style={{
            left: c.x,
            top: c.y,
            width: 96 * c.s,
            height: 96 * c.s,
            transform: `rotate(${c.r}deg)`,
            background: "linear-gradient(155deg, rgba(255,255,255,0.9), rgba(147,211,234,0.55))",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 12px 24px -12px rgba(18,33,61,0.35)",
          }}
        >
          <div
            className="absolute rounded-lg"
            style={{ top: 8, left: 8, width: "45%", height: "35%", background: "rgba(255,255,255,0.65)", filter: "blur(1px)" }}
          />
        </div>
      ))}
    </div>
  );
}

function Logo({ compact }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="flex flex-col items-center justify-center rounded-md"
        style={{ width: 38, height: 38, background: "var(--navy)", border: "1px solid rgba(255,255,255,0.15)" }}
      >
        <span className="font-display" style={{ color: "white", fontSize: 18, lineHeight: 1, fontWeight: 700 }}>C</span>
        <span style={{ width: 14, height: 3, background: "var(--red)", marginTop: 2 }} />
      </span>
      {!compact && (
        <span className="flex flex-col items-start leading-none">
          <span className="font-display" style={{ color: "white", fontSize: 20, letterSpacing: 1, fontWeight: 700 }}>CANBRI</span>
          <span className="font-mono" style={{ color: "var(--orange)", fontSize: 10, letterSpacing: 2 }}>PRIVATE LIMITED</span>
        </span>
      )}
    </span>
  );
}

export default function CanbriWebsite() {
  const [theme, setTheme] = useState("light");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [announcementOpen, setAnnouncementOpen] = useState(true);
  const [openDivision, setOpenDivision] = useState("ice");
  const [wordIndex, setWordIndex] = useState(0);

  const [productQuery, setProductQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [galleryFilter, setGalleryFilter] = useState("All");

  const [faqQuery, setFaqQuery] = useState("");
  const [faqCategory, setFaqCategory] = useState("All");
  const [openFaqId, setOpenFaqId] = useState("f1");

  const [form, setForm] = useState({ name: "", company: "", division: "PPE", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % HERO_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        let current = ids[0];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 140) current = id;
        }
        setActiveSection(current);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSubmitted(true);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
  };

  const addToCart = (product) => {
    setCart((c) => (c.find((i) => i.id === product.id) ? c : [...c, product]));
    setCartOpen(true);
  };
  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id));

  const continueToQuote = () => {
    const list = cart.map((i) => `- ${i.name} (${i.division})`).join("\n");
    setForm((f) => ({
      ...f,
      message: (f.message ? f.message + "\n" : "") + "Requesting a quote for:\n" + list,
    }));
    setCartOpen(false);
    scrollToId("contact");
  };

  const filteredProducts = PRODUCTS.filter((p) =>
    (p.name + " " + p.desc + " " + p.division).toLowerCase().includes(productQuery.toLowerCase())
  );

  const filteredGallery = GALLERY_ITEMS.filter((g) => galleryFilter === "All" || g.cat === galleryFilter);

  const faqCategories = ["All", ...Array.from(new Set(FAQS.map((f) => f.cat)))];
  const filteredFaqs = FAQS.filter(
    (f) =>
      (faqCategory === "All" || f.cat === faqCategory) &&
      (f.q + " " + f.a).toLowerCase().includes(faqQuery.toLowerCase())
  );

  const year = new Date().getFullYear();

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"} style={{ fontFamily: "'Inter', sans-serif", background: "var(--paper)", color: "var(--ink)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

        :root{
          --navy: #12213D;
          --navy-deep: #0A1729;
          --ice-1: #EAF7FC;
          --ice-2: #C8ECF7;
          --ice-3: #93D3EA;
          --orange: #F2A71B;
          --orange-deep: #C97F0A;
          --red: #E4402F;
        }
        .theme-light{
          --paper: #F6F7F9;
          --ink: #12213D;
          --card-bg: #FFFFFF;
          --line: rgba(18,33,61,0.12);
          --steel: #57657A;
          --surface: #12213D;
          --surface-deep: #0A1729;
        }
        .theme-dark{
          --paper: #0E1A2E;
          --ink: #E7EEF5;
          --card-bg: #142238;
          --line: rgba(255,255,255,0.12);
          --steel: #93A3B8;
          --surface: #0B1424;
          --surface-deep: #050B14;
        }

        .font-display{ font-family:'Oswald', sans-serif; }
        .font-mono{ font-family:'JetBrains Mono', monospace; }

        .hazard-stripe{
          background-image: repeating-linear-gradient(135deg, var(--orange) 0px, var(--orange) 26px, var(--navy) 26px, var(--navy) 52px);
        }
        .frost-card{
          background: linear-gradient(160deg, rgba(255,255,255,0.88), rgba(200,236,247,0.55));
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.7);
        }
        .ticker-wrap{ overflow:hidden; }
        .ticker-track{ display:flex; width:200%; animation: ticker 26s linear infinite; }
        @keyframes ticker{ from{ transform:translateX(0);} to{ transform:translateX(-50%);} }

        .hero-in{ animation: heroIn .7s ease both; }
        @keyframes heroIn{ from{ opacity:0; transform:translateY(14px);} to{ opacity:1; transform:translateY(0);} }

        .drawer-in{ animation: drawerIn .25s ease both; }
        @keyframes drawerIn{ from{ transform:translateX(24px); opacity:0;} to{ transform:translateX(0); opacity:1;} }

        @media (prefers-reduced-motion: reduce){
          .ticker-track{ animation:none; }
          .hero-in{ animation:none; }
          .drawer-in{ animation:none; }
        }

        .tag-card{ position: relative; transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
        .tag-card:hover{ transform: translateY(-2px); }
        .tag-hole{ position:absolute; top:14px; right:14px; width:8px; height:8px; border-radius:9999px; background: var(--paper); border: 1px solid var(--line); }

        input:focus, select:focus, textarea:focus, button:focus-visible{
          outline: 2px solid var(--orange);
          outline-offset: 2px;
        }
        input::placeholder, textarea::placeholder{ color: var(--steel); opacity: 0.8; }
      `}</style>

      {/* ---------- DESKTOP SIDEBAR ---------- */}
      <aside
        className={"hidden lg:flex fixed top-0 left-0 h-full flex-col z-40 transition-all duration-200 " + (sidebarCollapsed ? "w-20" : "w-60")}
        style={{ background: "var(--surface-deep)", borderRight: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className={"flex items-center py-6 " + (sidebarCollapsed ? "justify-center px-0" : "justify-between px-5")}>
          <button onClick={() => scrollToId("top")} className="text-left">
            <Logo compact={sidebarCollapsed} />
          </button>
          {!sidebarCollapsed && (
            <button
              onClick={() => setSidebarCollapsed(true)}
              aria-label="Collapse menu"
              className="flex items-center justify-center rounded-md flex-shrink-0"
              style={{ width: 28, height: 28, border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <ChevronLeft size={14} color="white" />
            </button>
          )}
        </div>
        {sidebarCollapsed && (
          <button
            onClick={() => setSidebarCollapsed(false)}
            aria-label="Expand menu"
            className="flex items-center justify-center mx-auto mb-2 rounded-md"
            style={{ width: 28, height: 28, border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <ChevronRight size={14} color="white" />
          </button>
        )}

        <nav className={"flex-1 overflow-y-auto flex flex-col gap-1 " + (sidebarCollapsed ? "px-2" : "px-3")}>
          {NAV_LINKS.map((l) => {
            const Icon = l.icon;
            const active = activeSection === l.id;
            return (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                title={l.label}
                className={"flex items-center rounded-md py-2.5 font-mono text-left " + (sidebarCollapsed ? "justify-center px-0" : "gap-3 px-3")}
                style={{
                  background: active ? "rgba(242,167,27,0.12)" : "transparent",
                  color: active ? "var(--orange)" : "rgba(255,255,255,0.65)",
                  fontSize: 12,
                  letterSpacing: 1,
                }}
              >
                <Icon size={16} /> {!sidebarCollapsed && l.label.toUpperCase()}
              </button>
            );
          })}
        </nav>

        <div className={"py-5 flex flex-col gap-2 " + (sidebarCollapsed ? "px-2" : "px-4")} style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className={"flex items-center gap-2 " + (sidebarCollapsed ? "flex-col" : "")}>
            <button
              onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
              aria-label="Toggle theme"
              title="Toggle light/dark mode"
              className="flex items-center justify-center rounded-md"
              style={{ width: sidebarCollapsed ? 40 : 40, height: 38, border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {theme === "light" ? <Moon size={16} color="white" /> : <Sun size={16} color="white" />}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className={"relative flex items-center justify-center rounded-md " + (sidebarCollapsed ? "" : "flex-1")}
              style={{ height: 38, width: sidebarCollapsed ? 40 : undefined, border: "1px solid rgba(255,255,255,0.15)" }}
              aria-label="Open quote cart"
              title="Quote cart"
            >
              <ShoppingCart size={16} color="white" />
              {cart.length > 0 && (
                <span
                  className="absolute rounded-full font-mono flex items-center justify-center"
                  style={{ top: -6, right: -6, width: 18, height: 18, background: "var(--orange)", color: "var(--navy-deep)", fontSize: 10, fontWeight: 700 }}
                >
                  {cart.length}
                </span>
              )}
            </button>
          </div>
          <a
            href="tel:+263773278269"
            title="Call +263 77 327 8269"
            className="flex items-center justify-center gap-2 rounded-md py-2.5 font-mono"
            style={{ background: "var(--orange)", color: "var(--navy-deep)", fontSize: 12, fontWeight: 600 }}
          >
            <Phone size={14} /> {!sidebarCollapsed && "CALL NOW"}
          </a>
          <a
            href="https://wa.me/263773278269"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp Canbri"
            className="flex items-center justify-center gap-2 rounded-md py-2.5 font-mono"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: 12 }}
          >
            <MessageCircle size={14} /> {!sidebarCollapsed && "WHATSAPP"}
          </a>
        </div>
      </aside>

      {/* ---------- MOBILE TOP BAR ---------- */}
      <div
        className="lg:hidden fixed top-0 left-0 w-full z-40 flex items-center justify-between px-5 py-3"
        style={{ background: "var(--surface-deep)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <button onClick={() => scrollToId("top")}><Logo compact /></button>
        <div className="flex items-center gap-4">
          <button onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))} aria-label="Toggle theme" style={{ color: "white" }}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setCartOpen(true)} className="relative" aria-label="Open quote cart" style={{ color: "white" }}>
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span
                className="absolute rounded-full font-mono flex items-center justify-center"
                style={{ top: -7, right: -8, width: 16, height: 16, background: "var(--orange)", color: "var(--navy-deep)", fontSize: 9, fontWeight: 700 }}
              >
                {cart.length}
              </span>
            )}
          </button>
          <button onClick={() => setNavOpen(true)} aria-label="Open menu" style={{ color: "white" }}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ---------- MOBILE NAV DRAWER ---------- */}
      {navOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col" style={{ background: "var(--surface-deep)" }}>
          <div className="flex items-center justify-between px-5 py-4">
            <Logo />
            <button onClick={() => setNavOpen(false)} aria-label="Close menu" style={{ color: "white" }}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 flex flex-col py-2">
            {NAV_LINKS.map((l) => {
              const Icon = l.icon;
              return (
                <button
                  key={l.id}
                  onClick={() => {
                    scrollToId(l.id);
                    setNavOpen(false);
                  }}
                  className="flex items-center gap-3 py-3 font-mono text-left"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, letterSpacing: 1, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <Icon size={18} /> {l.label.toUpperCase()}
                </button>
              );
            })}
          </nav>
          <div className="px-5 py-6 flex flex-col gap-3">
            <a href="tel:+263773278269" className="flex items-center justify-center gap-2 rounded-md py-3 font-mono" style={{ background: "var(--orange)", color: "var(--navy-deep)", fontSize: 13, fontWeight: 600 }}>
              <Phone size={14} /> CALL NOW
            </a>
            <a href="https://wa.me/263773278269" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-md py-3 font-mono" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white", fontSize: 13 }}>
              <MessageCircle size={14} /> WHATSAPP
            </a>
          </div>
        </div>
      )}

      {/* ---------- QUOTE CART DRAWER ---------- */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button aria-label="Close cart" onClick={() => setCartOpen(false)} className="absolute inset-0" style={{ background: "rgba(10,23,41,0.6)" }} />
          <div className="drawer-in relative h-full flex flex-col" style={{ width: "min(380px, 100%)", background: "var(--card-bg)" }}>
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid var(--line)" }}>
              <span className="font-display uppercase" style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)" }}>Quote Cart</span>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart"><X size={20} color="var(--ink)" /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cart.length === 0 ? (
                <p style={{ color: "var(--steel)", fontSize: 14 }}>
                  No items yet. Add products from the Products section to build a quote request.
                </p>
              ) : (
                <div className="flex flex-col gap-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-start justify-between gap-3 rounded-lg p-3" style={{ border: "1px solid var(--line)" }}>
                      <div>
                        <span className="font-mono block" style={{ fontSize: 10, color: "var(--orange-deep)", letterSpacing: 1 }}>{item.division.toUpperCase()}</span>
                        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{item.name}</span>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}>
                        <Trash2 size={16} color="var(--steel)" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="px-6 py-5" style={{ borderTop: "1px solid var(--line)" }}>
              <button
                onClick={continueToQuote}
                disabled={cart.length === 0}
                className="w-full flex items-center justify-center gap-2 rounded-md py-3 font-mono"
                style={{
                  background: cart.length === 0 ? "var(--line)" : "var(--orange)",
                  color: cart.length === 0 ? "var(--steel)" : "var(--navy-deep)",
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                CONTINUE TO QUOTE REQUEST <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- MAIN CONTENT ---------- */}
      <main className={"pt-16 lg:pt-0 transition-all duration-200 " + (sidebarCollapsed ? "lg:pl-20" : "lg:pl-60")}>
        {/* ANNOUNCEMENT BAR */}
        {announcementOpen && (
          <div className="flex items-center justify-between gap-3 px-6 py-2.5" style={{ background: "var(--surface)" }}>
            <span className="font-mono flex-1" style={{ color: "rgba(255,255,255,0.85)", fontSize: 11.5, letterSpacing: 0.5 }}>
              5KG ICE BLOCKS @ $1 — MUREHWA DEPOT.{" "}
              <button onClick={() => scrollToId("ice")} style={{ color: "var(--orange)", textDecoration: "underline" }}>
                SEE DETAILS
              </button>
            </span>
            <button onClick={() => setAnnouncementOpen(false)} aria-label="Dismiss announcement" style={{ color: "rgba(255,255,255,0.6)", flexShrink: 0 }}>
              <X size={14} />
            </button>
          </div>
        )}

        {/* ---------- HERO ---------- */}
        <section
          id="top"
          className="relative pt-16 pb-14 px-6"
          style={{ background: "radial-gradient(ellipse 60% 50% at 85% 0%, rgba(200,236,247,0.18), transparent 60%), var(--surface)" }}
        >
          <div className="max-w-7xl mx-auto hero-in">
            <p className="font-mono" style={{ color: "var(--orange)", fontSize: 13, letterSpacing: 3 }}>
              CANBRI PRIVATE LIMITED &mdash; HARARE &amp; MUREHWA
            </p>
            <p className="font-display uppercase mt-3" style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, letterSpacing: 1 }}>
              Premium supply for <span style={{ color: "var(--ice-3)", fontWeight: 600 }}>{HERO_WORDS[wordIndex]}</span>
            </p>
            <h1 className="font-display uppercase mt-4" style={{ color: "white", fontWeight: 700, lineHeight: 0.98, fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}>
              Geared up.
              <br />
              Stocked up.
              <br />
              <span style={{ color: "var(--ice-3)" }}>Iced down.</span>
            </h1>
            <p className="mt-6" style={{ color: "rgba(255,255,255,0.72)", fontSize: 18, maxWidth: 560, lineHeight: 1.6 }}>
              Five divisions, one supplier. Canbri fits out your site with PPE and
              tools, keeps your office stocked, fabricates what you can&rsquo;t buy
              off the shelf &mdash; and manufactures the ice that keeps your business
              cold.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">
              <button
                onClick={() => scrollToId("contact")}
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-mono"
                style={{ background: "var(--orange)", color: "var(--navy-deep)", fontSize: 13, fontWeight: 600, letterSpacing: 1 }}
              >
                REQUEST A QUOTE <ArrowRight size={16} />
              </button>
              <a href="tel:+263773278269" className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-mono" style={{ border: "1px solid rgba(255,255,255,0.3)", color: "white", fontSize: 13, letterSpacing: 1 }}>
                <Phone size={15} /> +263 77 327 8269
              </a>
              <span className="font-mono rounded-full px-4 py-2" style={{ border: "1px dashed rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.65)", fontSize: 11.5, letterSpacing: 1 }}>
                5 DIVISIONS &middot; 1 SUPPLIER
              </span>
            </div>
          </div>
        </section>

        {/* ---------- QUICK FACTS ---------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10" style={{ background: "var(--surface-deep)" }}>
          {FACTS.map((f, i) => (
            <div key={i}>
              <span className="font-display block" style={{ color: "white", fontSize: 26, fontWeight: 700 }}>{f.value}</span>
              <span className="font-mono block mt-1" style={{ color: "var(--orange)", fontSize: 11, letterSpacing: 1.5 }}>{f.label.toUpperCase()}</span>
              <span className="block mt-0.5" style={{ color: "rgba(255,255,255,0.5)", fontSize: 12.5 }}>{f.sub}</span>
            </div>
          ))}
        </div>

        {/* ---------- TICKER ---------- */}
        <div className="ticker-wrap py-3" style={{ background: "var(--surface-deep)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="ticker-track">
            {[0, 1].map((rep) => (
              <div key={rep} className="flex items-center" style={{ width: "50%" }}>
                {[...DIVISIONS, ...DIVISIONS].map((d, i) => (
                  <span key={rep + "-" + i} className="font-mono flex items-center" style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, letterSpacing: 2, whiteSpace: "nowrap", paddingRight: 28 }}>
                    {d.code} &middot; {d.title.toUpperCase()}
                    <span style={{ color: "var(--orange)", marginLeft: 28 }}>&#9670;</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- HAZARD DIVIDER ---------- */}
        <div className="hazard-stripe" style={{ height: 10 }} />

        {/* ---------- DIVISIONS ---------- */}
        <section id="divisions" className="px-6 py-24" style={{ background: "var(--paper)" }}>
          <div className="max-w-7xl mx-auto">
            <p className="font-mono" style={{ color: "var(--orange-deep)", fontSize: 13, letterSpacing: 3 }}>OUR DIVISIONS</p>
            <h2 className="font-display uppercase mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--ink)" }}>
              Five divisions. One manifest.
            </h2>
            <p style={{ color: "var(--steel)", maxWidth: 620, marginTop: 12, fontSize: 16, lineHeight: 1.6 }}>
              Every job on your site draws from one of five Canbri divisions. Tap a tag to see what&rsquo;s inside.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12 items-start">
              {DIVISIONS.map((d) => {
                const Icon = d.icon;
                const open = openDivision === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setOpenDivision(open ? null : d.id)}
                    className="tag-card text-left rounded-xl p-5"
                    style={{ border: `1px solid ${open ? "var(--orange)" : "var(--line)"}`, background: "var(--card-bg)", boxShadow: open ? "0 16px 30px -18px rgba(18,33,61,0.35)" : "none" }}
                  >
                    <span className="tag-hole" />
                    <span className="font-mono block" style={{ color: "var(--orange-deep)", fontSize: 11, letterSpacing: 2 }}>{d.code}</span>
                    <span className="flex items-center justify-center rounded-lg mt-3" style={{ width: 42, height: 42, background: "var(--navy)" }}>
                      <Icon size={20} color="var(--ice-3)" />
                    </span>
                    <h3 className="font-display uppercase mt-4" style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)" }}>{d.title}</h3>
                    <p style={{ color: "var(--steel)", fontSize: 13.5, marginTop: 6, lineHeight: 1.5 }}>{d.blurb}</p>

                    <div className="flex items-center gap-1 mt-4 font-mono" style={{ color: "var(--ink)", fontSize: 11 }}>
                      {open ? "HIDE DETAILS" : "VIEW DETAILS"}
                      <ChevronDown size={13} style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s ease" }} />
                    </div>

                    {open && (
                      <ul className="mt-4 flex flex-col gap-2" style={{ borderTop: "1px dashed var(--line)", paddingTop: 12 }}>
                        {d.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2" style={{ fontSize: 13, color: "var(--ink)" }}>
                            <span style={{ color: "var(--orange)", marginTop: 2 }}>&#9670;</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- PRODUCTS ---------- */}
        <section id="products" className="px-6 py-24" style={{ background: "var(--card-bg)" }}>
          <div className="max-w-7xl mx-auto">
            <p className="font-mono" style={{ color: "var(--orange-deep)", fontSize: 13, letterSpacing: 3 }}>SAMPLE CATALOGUE</p>
            <h2 className="font-display uppercase mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--ink)" }}>
              Build your quote request.
            </h2>
            <p style={{ color: "var(--steel)", maxWidth: 620, marginTop: 12, fontSize: 16, lineHeight: 1.6 }}>
              A few examples from each division. Add items to your quote cart and send the list straight to us.
            </p>

            <div className="flex items-center gap-3 mt-8 max-w-md rounded-md px-4 py-2.5" style={{ border: "1px solid var(--line)", background: "var(--paper)" }}>
              <Search size={16} color="var(--steel)" />
              <input
                value={productQuery}
                onChange={(e) => setProductQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none"
                style={{ fontSize: 14, color: "var(--ink)" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {filteredProducts.length === 0 && <p style={{ color: "var(--steel)" }}>No products match your search.</p>}
              {filteredProducts.map((p) => {
                const Icon = p.icon;
                const inCart = cart.some((i) => i.id === p.id);
                return (
                  <div key={p.id} className="rounded-xl p-5 flex flex-col" style={{ border: "1px solid var(--line)", background: "var(--paper)" }}>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center justify-center rounded-lg" style={{ width: 44, height: 44, background: "var(--navy)" }}>
                        <Icon size={20} color="var(--ice-3)" />
                      </span>
                      <span className="font-mono rounded-full px-3 py-1" style={{ fontSize: 10, background: "rgba(46,196,120,0.14)", color: "#2ec478", letterSpacing: 1 }}>AVAILABLE</span>
                    </div>
                    <span className="font-mono block mt-4" style={{ fontSize: 10.5, color: "var(--orange-deep)", letterSpacing: 1.5 }}>{p.division.toUpperCase()}</span>
                    <h3 className="font-display uppercase mt-1" style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>{p.name}</h3>
                    <p className="mt-2 flex-1" style={{ fontSize: 13.5, color: "var(--steel)", lineHeight: 1.5 }}>{p.desc}</p>
                    <button
                      onClick={() => (inCart ? setCartOpen(true) : addToCart(p))}
                      className="flex items-center justify-center gap-2 rounded-md py-2.5 mt-5 font-mono"
                      style={{ background: inCart ? "rgba(46,196,120,0.14)" : "var(--orange)", color: inCart ? "#2ec478" : "var(--navy-deep)", fontSize: 12, fontWeight: 600, letterSpacing: 1 }}
                    >
                      {inCart ? (<><CheckCircle2 size={14} /> ADDED &mdash; VIEW CART</>) : (<><Plus size={14} /> ADD TO QUOTE</>)}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- INDUSTRIES ---------- */}
        <section id="industries" className="px-6 py-24" style={{ background: "var(--paper)" }}>
          <div className="max-w-7xl mx-auto">
            <p className="font-mono" style={{ color: "var(--orange-deep)", fontSize: 13, letterSpacing: 3 }}>WHO WE SERVE</p>
            <h2 className="font-display uppercase mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--ink)" }}>
              Built for real industries.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {INDUSTRIES.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div key={i} className="rounded-xl p-5" style={{ border: "1px solid var(--line)", background: "var(--card-bg)" }}>
                    <span className="flex items-center justify-center rounded-lg" style={{ width: 40, height: 40, background: "var(--navy)" }}>
                      <Icon size={18} color="var(--ice-3)" />
                    </span>
                    <h3 className="font-display uppercase mt-4" style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{ind.title}</h3>
                    <p style={{ color: "var(--steel)", fontSize: 13.5, marginTop: 6, lineHeight: 1.5 }}>{ind.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- ICE FEATURE ---------- */}
        <section id="ice" className="px-6 py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--ice-1), var(--ice-3))" }}>
          <Snowflake size={220} color="white" style={{ position: "absolute", top: -40, right: -40, opacity: 0.25 }} />
          <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono" style={{ color: "var(--navy)", fontSize: 13, letterSpacing: 3, opacity: 0.7 }}>DIVISION 05 &mdash; ICE MANUFACTURING</p>
              <h2 className="font-display uppercase mt-3" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "var(--navy)" }}>Canbri Cool &amp; Cold</h2>
              <p style={{ color: "var(--navy)", opacity: 0.75, marginTop: 12, fontSize: 16, lineHeight: 1.6, maxWidth: 460 }}>
                Our ice manufacturing arm keeps Murehwa&rsquo;s drinks cold and perishables fresh &mdash; made fresh, sold by the block, and delivered on request.
              </p>

              <div className="frost-card rounded-xl px-6 py-5 inline-flex items-center gap-4 mt-7">
                <span className="font-display uppercase" style={{ fontSize: 15, color: "var(--navy)", fontWeight: 600 }}>5kg Ice Block</span>
                <span className="font-display" style={{ background: "var(--orange)", color: "var(--navy-deep)", padding: "6px 16px", borderRadius: 8, fontSize: 20, fontWeight: 700 }}>$1</span>
              </div>

              <div className="mt-7 flex flex-col gap-3" style={{ color: "var(--navy)" }}>
                <div className="flex items-start gap-3">
                  <MapPin size={18} style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 14.5, lineHeight: 1.5 }}>Shop 19, next to People&rsquo;s Wholesale, Brickforce Shopping Mall, Murehwa Centre</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-1">
                  <a href="tel:0788762522" className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono" style={{ background: "var(--navy)", color: "white", fontSize: 12.5 }}>
                    <Phone size={14} /> CALL JACKIE &mdash; 0788 762 522
                  </a>
                  <a href="https://wa.me/263773796058" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono" style={{ border: "1px solid var(--navy)", color: "var(--navy)", fontSize: 12.5 }}>
                    <MessageCircle size={14} /> WHATSAPP &mdash; 0773 796 058
                  </a>
                </div>
              </div>
            </div>
            <IceCubes />
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section id="about" className="px-6 py-24" style={{ background: "var(--card-bg)" }}>
          <div className="max-w-7xl mx-auto">
            <p className="font-mono" style={{ color: "var(--orange-deep)", fontSize: 13, letterSpacing: 3 }}>WHY CANBRI</p>
            <h2 className="font-display uppercase mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--ink)" }}>
              One call covers the whole job.
            </h2>
            <p style={{ color: "var(--steel)", marginTop: 14, fontSize: 16, lineHeight: 1.7, maxWidth: 640 }}>
              Canbri Private Limited was built for businesses that don&rsquo;t have time
              to chase five different suppliers. Whether you&rsquo;re kitting out a
              site crew, restocking an office, sourcing hardware for a maintenance
              run, commissioning a custom fabrication job, or just need the ice cold
              &mdash; one call to Canbri covers it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="rounded-xl p-6" style={{ border: "1px solid var(--line)", background: "var(--paper)" }}>
                <h3 className="font-display uppercase" style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>Our Mission</h3>
                <p style={{ color: "var(--steel)", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
                  To be the supplier Harare and Murehwa businesses can plan around
                  &mdash; accurate quotes, on-time delivery, and a dependable
                  catalogue across every division we trade in.
                </p>
              </div>
              <div className="rounded-xl p-6" style={{ border: "1px solid var(--line)", background: "var(--paper)" }}>
                <h3 className="font-display uppercase" style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>Our Vision</h3>
                <p style={{ color: "var(--steel)", fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
                  To grow into a trusted one-stop supplier for businesses and
                  households across Zimbabwe, adding divisions and service areas
                  where we can serve customers better.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              {[
                { t: "One supplier, five divisions", d: "PPE, stationery, tools & hardware, fabrication and ice under one account." },
                { t: "Bulk & standing orders welcome", d: "Recurring supply for offices, sites and event bars." },
                { t: "Harare HQ + Murehwa ice depot", d: "Head office in Harare, ice manufacturing based in Murehwa." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-5" style={{ border: "1px solid var(--line)" }}>
                  <h3 className="font-display uppercase" style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{item.t}</h3>
                  <p style={{ color: "var(--steel)", fontSize: 13.5, marginTop: 4 }}>{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- GALLERY ---------- */}
        <section id="gallery" className="px-6 py-24" style={{ background: "var(--paper)" }}>
          <div className="max-w-7xl mx-auto">
            <p className="font-mono" style={{ color: "var(--orange-deep)", fontSize: 13, letterSpacing: 3 }}>GALLERY</p>
            <h2 className="font-display uppercase mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--ink)" }}>Inside Canbri.</h2>
            <p style={{ color: "var(--steel)", maxWidth: 560, marginTop: 12, fontSize: 15, lineHeight: 1.6 }}>
              Placeholder slots, ready for real photos of the facility, production and deliveries.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {GALLERY_CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setGalleryFilter(c)}
                  className="font-mono rounded-full px-4 py-2"
                  style={{
                    fontSize: 11.5,
                    letterSpacing: 1,
                    background: galleryFilter === c ? "var(--navy)" : "var(--card-bg)",
                    color: galleryFilter === c ? "white" : "var(--steel)",
                    border: "1px solid var(--line)",
                  }}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
              {filteredGallery.map((g) => {
                const Icon = g.icon;
                return (
                  <div
                    key={g.id}
                    className="rounded-xl flex flex-col items-center justify-center gap-2 text-center"
                    style={{ aspectRatio: "1 / 1", background: "linear-gradient(160deg, var(--navy), var(--navy-deep))", border: "1px solid var(--line)" }}
                  >
                    <Icon size={26} color="var(--ice-3)" />
                    <span className="font-mono px-3" style={{ color: "white", fontSize: 12, fontWeight: 600 }}>{g.label}</span>
                    <span className="font-mono" style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>PHOTO COMING SOON</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="px-6 py-24" style={{ background: "var(--card-bg)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="font-mono" style={{ color: "var(--orange-deep)", fontSize: 13, letterSpacing: 3 }}>FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="font-display uppercase mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "var(--ink)" }}>
              Common questions, answered.
            </h2>

            <div className="flex items-center gap-3 mt-8 rounded-md px-4 py-2.5" style={{ border: "1px solid var(--line)", background: "var(--paper)" }}>
              <Search size={16} color="var(--steel)" />
              <input
                value={faqQuery}
                onChange={(e) => setFaqQuery(e.target.value)}
                placeholder="Search questions..."
                className="flex-1 bg-transparent outline-none"
                style={{ fontSize: 14, color: "var(--ink)" }}
              />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {faqCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFaqCategory(c)}
                  className="font-mono rounded-full px-3.5 py-1.5"
                  style={{
                    fontSize: 11,
                    letterSpacing: 0.5,
                    background: faqCategory === c ? "var(--navy)" : "var(--paper)",
                    color: faqCategory === c ? "white" : "var(--steel)",
                    border: "1px solid var(--line)",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-8">
              {filteredFaqs.length === 0 && <p style={{ color: "var(--steel)" }}>No questions match your search.</p>}
              {filteredFaqs.map((f) => {
                const open = openFaqId === f.id;
                return (
                  <div key={f.id} className="rounded-lg mb-3" style={{ border: "1px solid var(--line)" }}>
                    <button onClick={() => setOpenFaqId(open ? null : f.id)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                      <span className="flex items-center gap-3">
                        <span className="font-mono rounded-full px-2.5 py-1 flex-shrink-0" style={{ fontSize: 10, background: "rgba(242,167,27,0.14)", color: "var(--orange-deep)" }}>
                          {f.cat.toUpperCase()}
                        </span>
                        <span style={{ fontWeight: 600, fontSize: 14.5, color: "var(--ink)" }}>{f.q}</span>
                      </span>
                      <ChevronDown size={16} style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s ease", color: "var(--steel)", flexShrink: 0 }} />
                    </button>
                    {open && <p className="px-5 pb-4" style={{ fontSize: 13.5, color: "var(--steel)", lineHeight: 1.6 }}>{f.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- CLOSING CTA ---------- */}
        <section className="px-6 py-16" style={{ background: "var(--surface)" }}>
          <div className="max-w-5xl mx-auto rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: "var(--surface-deep)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div>
              <h3 className="font-display uppercase" style={{ color: "white", fontSize: 22, fontWeight: 700 }}>Ready to place an order or request a quote?</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginTop: 8, maxWidth: 460 }}>
                Tell us what you need &mdash; bulk orders, recurring supply, fabrication work or ice for an event. We respond on WhatsApp and by phone during business hours.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="https://wa.me/263773278269" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white", fontSize: 12.5 }}>
                <MessageCircle size={15} /> WHATSAPP US
              </a>
              <button onClick={() => scrollToId("contact")} className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono" style={{ background: "var(--orange)", color: "var(--navy-deep)", fontSize: 12.5, fontWeight: 600 }}>
                GO TO CONTACT <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="px-6 py-24" style={{ background: "var(--surface-deep)" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <p className="font-mono" style={{ color: "var(--orange)", fontSize: 13, letterSpacing: 3 }}>GET IN TOUCH</p>
              <h2 className="font-display uppercase mt-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, color: "white" }}>Talk to Canbri</h2>

              <div className="rounded-xl p-6 mt-8" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                <span className="font-mono" style={{ color: "var(--orange)", fontSize: 11, letterSpacing: 2 }}>HEAD OFFICE</span>
                <div className="flex items-start gap-3 mt-4">
                  <MapPin size={18} color="var(--ice-3)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14.5, lineHeight: 1.5 }}>7th Floor, ZB Chambers, Corner First Street &amp; G. Silundika, Harare</span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <Phone size={18} color="var(--ice-3)" />
                  <a href="tel:+263714278269" style={{ color: "rgba(255,255,255,0.85)", fontSize: 14.5 }}>+263 71 427 8269</a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <Phone size={18} color="var(--ice-3)" />
                  <a href="tel:+263773278269" style={{ color: "rgba(255,255,255,0.85)", fontSize: 14.5 }}>+263 77 327 8269</a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <Mail size={18} color="var(--ice-3)" />
                  <a href="mailto:Canbrifinance@gmail.com" style={{ color: "rgba(255,255,255,0.85)", fontSize: 14.5 }}>Canbrifinance@gmail.com</a>
                </div>
              </div>

              <div className="rounded-xl p-6 mt-5" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                <span className="font-mono" style={{ color: "var(--orange)", fontSize: 11, letterSpacing: 2 }}>ICE DEPOT &mdash; MUREHWA</span>
                <div className="flex items-start gap-3 mt-4">
                  <MapPin size={18} color="var(--ice-3)" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14.5, lineHeight: 1.5 }}>Shop 19, next to People&rsquo;s Wholesale, Brickforce Shopping Mall, Murehwa Centre &mdash; ask for Jackie</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-7" style={{ background: "white" }}>
              {submitted ? (
                <div className="flex flex-col items-center text-center py-10">
                  <CheckCircle2 size={40} color="var(--orange-deep)" />
                  <h3 className="font-display uppercase mt-4" style={{ fontSize: 18, fontWeight: 600 }}>Message noted</h3>
                  <p style={{ color: "var(--steel)", fontSize: 14, marginTop: 8, maxWidth: 320 }}>
                    We&rsquo;ll call or WhatsApp you back. For the fastest response
                    right now, call{" "}
                    <a href="tel:+263773278269" style={{ color: "var(--navy)", fontWeight: 600 }}>+263 77 327 8269</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <span className="font-mono" style={{ color: "var(--orange-deep)", fontSize: 11, letterSpacing: 2 }}>REQUEST A QUOTE</span>
                  <h3 className="font-display uppercase mt-2" style={{ fontSize: 20, fontWeight: 600 }}>Tell us what you need</h3>

                  <div className="flex flex-col gap-4 mt-6">
                    <div>
                      <label className="font-mono block mb-1" style={{ fontSize: 11, color: "var(--steel)" }}>NAME *</label>
                      <input required name="name" value={form.name} onChange={handleChange} className="w-full rounded-md px-3 py-2" style={{ border: "1px solid var(--line)", fontSize: 14 }} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-mono block mb-1" style={{ fontSize: 11, color: "var(--steel)" }}>COMPANY</label>
                      <input name="company" value={form.company} onChange={handleChange} className="w-full rounded-md px-3 py-2" style={{ border: "1px solid var(--line)", fontSize: 14 }} placeholder="Company (optional)" />
                    </div>
                    <div>
                      <label className="font-mono block mb-1" style={{ fontSize: 11, color: "var(--steel)" }}>DIVISION</label>
                      <select name="division" value={form.division} onChange={handleChange} className="w-full rounded-md px-3 py-2" style={{ border: "1px solid var(--line)", fontSize: 14 }}>
                        {DIVISIONS.map((d) => (<option key={d.id} value={d.title}>{d.code} &mdash; {d.title}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="font-mono block mb-1" style={{ fontSize: 11, color: "var(--steel)" }}>MESSAGE *</label>
                      <textarea required name="message" value={form.message} onChange={handleChange} rows={4} className="w-full rounded-md px-3 py-2" style={{ border: "1px solid var(--line)", fontSize: 14, resize: "vertical" }} placeholder="What do you need supplied?" />
                    </div>
                    <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-mono mt-2" style={{ background: "var(--orange)", color: "var(--navy-deep)", fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>
                      SEND MESSAGE <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ---------- FOOTER ---------- */}
        <footer className="px-6 py-14" style={{ background: "var(--surface-deep)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-12" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <span className="font-mono" style={{ color: "var(--orange)", fontSize: 11, letterSpacing: 2 }}>STAY UPDATED</span>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 4 }}>Get news about new products, seasonal offers and delivery updates.</p>
              </div>
              {newsletterSubmitted ? (
                <span className="flex items-center gap-2" style={{ color: "var(--ice-3)", fontSize: 14 }}><CheckCircle2 size={16} /> Subscribed &mdash; thank you.</span>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full md:w-auto">
                  <input required type="email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="Your email address" className="rounded-md px-4 py-2.5 flex-1 md:w-64" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "white", fontSize: 13 }} />
                  <button type="submit" className="rounded-md px-4 py-2.5 font-mono flex items-center gap-1" style={{ background: "var(--orange)", color: "var(--navy-deep)", fontSize: 12, fontWeight: 600 }}>
                    SUBSCRIBE <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <Logo />
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, marginTop: 14, lineHeight: 1.6, maxWidth: 280 }}>
                  Premium supplier of PPE, stationery, tools &amp; hardware, fabrication and ice manufacturing, based in Harare.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <a href="#" aria-label="Facebook" className="flex items-center justify-center rounded-md" style={{ width: 34, height: 34, border: "1px solid rgba(255,255,255,0.15)" }}>
                    <Facebook size={15} color="white" />
                  </a>
                  <a href="#" aria-label="Instagram" className="flex items-center justify-center rounded-md" style={{ width: 34, height: 34, border: "1px solid rgba(255,255,255,0.15)" }}>
                    <Instagram size={15} color="white" />
                  </a>
                </div>
              </div>

              <div>
                <span className="font-mono" style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: 2 }}>EXPLORE</span>
                <ul className="flex flex-col gap-2 mt-4">
                  {NAV_LINKS.filter((l) => l.id !== "top").map((l) => (
                    <li key={l.id}>
                      <button onClick={() => scrollToId(l.id)} className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
                        <ArrowUpRight size={13} color="var(--orange)" /> {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono" style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: 2 }}>CONTACT</span>
                <div className="flex flex-col gap-2 mt-4">
                  <a href="tel:+263773278269" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>+263 77 327 8269</a>
                  <a href="tel:+263714278269" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>+263 71 427 8269</a>
                  <a href="mailto:Canbrifinance@gmail.com" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Canbrifinance@gmail.com</a>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>7th Floor, ZB Chambers, Harare</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="font-mono" style={{ color: "rgba(255,255,255,0.35)", fontSize: 11.5 }}>&copy; {year} Canbri Private Limited. All rights reserved.</p>
              <p className="font-mono" style={{ color: "rgba(255,255,255,0.35)", fontSize: 11.5 }}>Cool &amp; Cold &mdash; reliable supply, every day.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
