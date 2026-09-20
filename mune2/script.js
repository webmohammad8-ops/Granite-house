/**
 * ===================================================================
 * الجعبري وشريكه للرخام والجرانيت
 * Digital Stone Showroom & Catalog Script
 * Vanilla JavaScript (No external frameworks / No backend required)
 * ===================================================================
 */

// ==========================================
// 1. CONFIGURATION (سهل التعديل من قِبل المالك)
// ==========================================
const WHATSAPP_NUMBER = "970XXXXXXXXX"; // ضع رقم الواتساب هنا بصيغته الدولية دون + أو أصفار (مثال: 970599000000)
const PHONE_NUMBER = "+970XXXXXXXXX";  // رقم الاتصال المباشر
const LOCATION_MAPS_URL = "https://maps.google.com"; // رابط خرائط جوجل للمعرض أو المصنع

// Helper: إنشاء رابط واتساب مباشر مع رسالة عربية مشفرة بشكل سليم
function createWhatsAppUrl(customMessage) {
  const text = encodeURIComponent(customMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// ==========================================
// 2. MATERIAL DATA (كتالوج الخامات الرئيسي)
// إضافة، تعديل أو حذف أي خامة يتم من هذه المصفوفة فقط
// ==========================================
const materials = [
  {
    id: 1,
    name: "رخام كلكتا إيطالي",
    category: "marble",
    categoryLabel: "رخام",
    image: "assets/images/marble-1.jpg",
    finish: "تشطيب: لامع عالي الانعكاس",
    description: "رخام إيطالي طبيعي بتدرجات بيضاء نقية وعروق رمادية متناغمة تعطي فخامة استثنائية للصالات والواجهات الداخلية."
  },
  {
    id: 2,
    name: "رخام كلكتا جولد",
    category: "marble",
    categoryLabel: "رخام",
    image: "assets/images/marble-2.jpg",
    finish: "تشطيب: لامع / هوند مطفي",
    description: "أرقى أنواع الرخام الأبيض الممزوج بعروق ذهبية دافئة تمنح الفراغات المعمارية رونقاً ملكياً فريداً."
  },
  {
    id: 3,
    name: "رخام ماركينا أسود",
    category: "marble",
    categoryLabel: "رخام",
    image: "assets/images/marble-3.jpg",
    finish: "تشطيب: مجلي لامع",
    description: "رخام أسود داكن كربوني تتخلله خطوط كلسية بيضاء حادة، خيار مثالي للمغاسل وتكسيات الجدران والمصاعد."
  },
  {
    id: 4,
    name: "رخام امبرادور بني",
    category: "marble",
    categoryLabel: "رخام",
    image: "assets/images/marble-4.jpg",
    finish: "تشطيب: لامع مصفى",
    description: "رخام طبيعي بلون الشوكولاتة الدافئة وعروق عنكبوتية فاتحة، مثالي للأرضيات والألواح الديكورية المضيئة."
  },
  {
    id: 5,
    name: "جرانيت جالاكسي أسود",
    category: "granite",
    categoryLabel: "جرانيت",
    image: "assets/images/granite-1.jpg",
    finish: "تشطيب: مجلي فائق اللمعان",
    description: "جرانيت طبيعي أسود داكن بنجوم بلورية مشعة باللون الذهبي والفضي، شديد الصلابة ومقاوم تام للحرارة والخدش."
  },
  {
    id: 6,
    name: "جرانيت نيو حلايب رمادي",
    category: "granite",
    categoryLabel: "جرانيت",
    image: "assets/images/granite-2.jpg",
    finish: "تشطيب: مجلي / خشن مانع للانزلاق",
    description: "جرانيت صلب بحبيبات متجانسة من الرمادي والأبيض، عملي للغاية ومثالي لمطابخ الخدمة والدرج والمداخل الرئيسية."
  },
  {
    id: 7,
    name: "جرانيت أحمر أسواني",
    category: "granite",
    categoryLabel: "جرانيت",
    image: "assets/images/granite-3.jpg",
    finish: "تشطيب: مجلي مصقول",
    description: "جرانيت طبيعي بدرجات الأحمر الإمبراطوري مع صلابة جبلية فائقة لتحمل الاستخدام الشاق والواجهات الخارجية."
  },
  {
    id: 8,
    name: "كوارتز بيور وايت",
    category: "quartz",
    categoryLabel: "كوارتز",
    image: "assets/images/quartz-1.jpg",
    finish: "تشطيب: أملس غير مسامي",
    description: "سطح كوارتز هندسي أبيض ناصع بمقاومة تامة للبقع والزيوت والأحماض، الخيار الأول لمطابخ المودرن الفاخرة."
  },
  {
    id: 9,
    name: "كوارتز كلكتا فينتو",
    category: "quartz",
    categoryLabel: "كوارتز",
    image: "assets/images/quartz-2.jpg",
    finish: "تشطيب: ناعم مخملي",
    description: "تصميم مذهل يحاكي الرخام الطبيعي مع متانة الكوارتز الهندسية الفائقة لجزيرة المطبخ والأسطح الحيوية."
  },
  {
    id: 10,
    name: "كوارتز رمادي خرساني",
    category: "quartz",
    categoryLabel: "كوارتز",
    image: "assets/images/quartz-3.jpg",
    finish: "تشطيب: مطفي / مات",
    description: "ملمس ناعم بدرجة خرسانية مودرن تضفي لمسة عصرية هندسية متميزة للمطابخ والمساحات التجارية الراقية."
  }
];

// ==========================================
// 3. STAIRCASE CATALOG DATA (كتالوج الدرج)
// ==========================================
const staircases = [
  {
    id: "stairs-straight",
    name: "درج مستقيم",
    image: "assets/images/stairs-1.jpg",
    description: "تنفيذ هندسي للدرج المستقيم بجميع الأطوال مع قص ليزر دقيق وتشطيب حواف شطف وتفريغ مانع للانزلاق."
  },
  {
    id: "stairs-l",
    name: "درج L",
    image: "assets/images/stairs-2.jpg",
    description: "تصميم درج زاوية حرف L مع بسطة استراحة متناسقة واستمرارية طبيعية لعروق الرخام بين الدرجات."
  },
  {
    id: "stairs-u",
    name: "درج U",
    image: "assets/images/stairs-3.jpg",
    description: "درج مزدوج ودوراني حرف U مدروس بدقة في القائم والنائم لتوفير أقصى درجات الراحة والفخامة."
  },
  {
    id: "stairs-modern",
    name: "درج مودرن",
    image: "assets/images/stairs-4.jpg",
    description: "درج مودرن معلق (Cantilever) بتفصيل رخامي هندسي مدمج بإنارة مخفية LED عصرية تحت كل درجة."
  },
  {
    id: "stairs-classic",
    name: "درج كلاسيك",
    image: "assets/images/stairs-5.jpg",
    description: "درج كلاسيكي فخم بحواف بروفايل مقوسة وتشطيب صقيل يعكس طابع القصور والمباني الفاخرة."
  }
];

// ==========================================
// 4. PROJECTS GALLERY DATA (معرض الأعمال)
// ==========================================
const projects = [
  {
    id: 1,
    title: "جزيرة وسط مطبخ كوارتز كلكتا",
    category: "kitchens",
    categoryLabel: "مطابخ",
    image: "assets/images/project-1.jpg",
    description: "تنفيذ وتفصيل سطح مطبخ مع جزيرة شلال (Waterfall) من خامة الكوارتز المقاوم للحرارة والزيوت."
  },
  {
    id: 2,
    title: "درج فيلا داخلي رخام طبيعي",
    category: "stairs",
    categoryLabel: "درج",
    image: "assets/images/project-2.jpg",
    description: "تنفيذ درج داخلي كامل لفيلا خاصة بقص ليزر متناهي الدقة وتشطيب حواف إيطالي مع درابزين فاخر."
  },
  {
    id: 3,
    title: "واجهة معمارية حجر وجرانيت",
    category: "facades",
    categoryLabel: "واجهات",
    image: "assets/images/project-3.jpg",
    description: "تكسية واجهة تجارية باستخدام ألواح الجرانيت المعالج لمقاومة كافة الظروف الجوية مع ضمان المتانة."
  },
  {
    id: 4,
    title: "حمام ماستر تكسيات رخام ماركينا",
    category: "bathrooms",
    categoryLabel: "حمامات",
    image: "assets/images/project-4.jpg",
    description: "تصميم وتنفيذ مغاسل وتكسيات جدارية متكاملة من الرخام الأسود الطبيعي بمطابقة مثالية للعروق."
  },
  {
    id: 5,
    title: "أسطح كاونترات استقبال وقاعات",
    category: "surfaces",
    categoryLabel: "أسطح",
    image: "assets/images/project-5.jpg",
    description: "طاولات وكاونترات استقبال من الرخام الأبيض الإيطالي بتفاصيل ناعمة ولمعان دائم."
  },
  {
    id: 6,
    title: "مطبخ جرانيت أسود عصري",
    category: "kitchens",
    categoryLabel: "مطابخ",
    image: "assets/images/project-6.jpg",
    description: "أسطح عمل مطبخ عصري من الجرانيت الأسود الملكي بمقاومة استثنائية للاستخدام اليومي الشاق."
  }
];

// ==========================================
// 5. APPLICATION STATE
// ==========================================
let currentCategory = "all";
let currentProductIndex = 0;
let filteredMaterials = [...materials];

let currentProjectCategory = "all";
let currentLightboxIndex = 0;
let filteredProjects = [...projects];

// ==========================================
// 6. DOM ELEMENTS
// ==========================================
const elements = {
  // Navigation & Drawer
  header: document.getElementById("siteHeader"),
  menuToggle: document.getElementById("menuToggle"),
  mobileDrawer: document.getElementById("mobileDrawer"),
  drawerClose: document.getElementById("drawerClose"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  drawerLinks: document.querySelectorAll(".drawer-link"),
  navLinks: document.querySelectorAll(".nav-link"),
  
  // WhatsApp Global Buttons
  headerWaBtn: document.getElementById("headerWhatsappBtn"),
  drawerWaBtn: document.getElementById("drawerWhatsappBtn"),
  floatingWaBtn: document.getElementById("floatingWhatsappBtn"),
  contactWaBtn: document.getElementById("contactWhatsappBtn"),
  contactCallBtn: document.getElementById("contactCallBtn"),
  contactLocationBtn: document.getElementById("contactLocationBtn"),

  // Catalog Section
  catalogFilterBtns: document.querySelectorAll("#catalogFilterScroll .filter-btn"),
  materialsGrid: document.getElementById("materialsGrid"),

  // Staircase Section
  stairsGrid: document.getElementById("stairsGrid"),

  // Projects Section
  projectsFilterBtns: document.querySelectorAll("#projectsFilterScroll .filter-btn"),
  projectsGrid: document.getElementById("projectsGrid"),

  // Product Modal
  productModal: document.getElementById("productModal"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  modalClose: document.getElementById("modalClose"),
  modalDismissBtn: document.getElementById("modalDismissBtn"),
  modalImg: document.getElementById("modalMaterialImg"),
  modalTitle: document.getElementById("modalMaterialName"),
  modalCatBadge: document.getElementById("modalCategoryBadge"),
  modalFinishBadge: document.getElementById("modalFinishBadge"),
  modalDesc: document.getElementById("modalMaterialDesc"),
  modalWaBtn: document.getElementById("modalWhatsappBtn"),
  modalPrevBtn: document.getElementById("modalPrevBtn"),
  modalNextBtn: document.getElementById("modalNextBtn"),
  modalCounter: document.getElementById("modalCounter"),

  // Lightbox
  lightboxModal: document.getElementById("lightboxModal"),
  lightboxBackdrop: document.getElementById("lightboxBackdrop"),
  lightboxClose: document.getElementById("lightboxClose"),
  lightboxImg: document.getElementById("lightboxImg"),
  lightboxTitle: document.getElementById("lightboxTitle"),
  lightboxDesc: document.getElementById("lightboxDesc"),
  lightboxWaBtn: document.getElementById("lightboxWaBtn"),
  lightboxPrevBtn: document.getElementById("lightboxPrevBtn"),
  lightboxNextBtn: document.getElementById("lightboxNextBtn")
};

// ==========================================
// 7. RENDERING FUNCTIONS
// ==========================================

// Renders the Materials Catalog Cards
function renderMaterialsCatalog() {
  if (!elements.materialsGrid) return;

  filteredMaterials = currentCategory === "all" 
    ? materials 
    : materials.filter(m => m.category === currentCategory);

  elements.materialsGrid.innerHTML = "";

  if (filteredMaterials.length === 0) {
    elements.materialsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--color-muted);">
        <p>لا توجد خامات متوفرة في هذا القسم حالياً.</p>
      </div>
    `;
    return;
  }

  filteredMaterials.forEach((mat, index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("data-material-id", mat.id);

    const waText = `مرحبًا، أريد الاستفسار عن خامة: ${mat.name}`;
    const waUrl = createWhatsAppUrl(waText);

    card.innerHTML = `
      <div class="card-image-wrap" role="button" tabindex="0" aria-label="عرض تفاصيل خامة ${mat.name}">
        <img src="${mat.image}" alt="${mat.name} - خامة رخام وجرانيت الجعبري وشريكه" class="card-img" loading="lazy">
        <span class="card-badge">${mat.categoryLabel}</span>
        <div class="card-overlay-hint">
          <span>تكبير واستعراض الخامة</span>
        </div>
      </div>
      <div class="card-body">
        <span class="card-finish-tag">${mat.finish}</span>
        <h3 class="card-title" role="button" tabindex="0">${mat.name}</h3>
        <p class="card-desc">${mat.description}</p>
        <div class="card-footer">
          <a href="${waUrl}" class="btn-card-wa" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.12 8.12 0 01-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.69 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.47-.31z"/>
            </svg>
            <span>استفسر عن الخامة</span>
          </a>
        </div>
      </div>
    `;

    // Click on image or title opens the product modal viewer
    const imgWrap = card.querySelector(".card-image-wrap");
    const cardTitle = card.querySelector(".card-title");
    
    const openModalHandler = () => {
      openProductModalByIndex(index);
    };

    imgWrap.addEventListener("click", openModalHandler);
    cardTitle.addEventListener("click", openModalHandler);
    
    // Keyboard accessibility
    imgWrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModalHandler();
      }
    });

    elements.materialsGrid.appendChild(card);
  });
}

// Renders the Staircase Section Cards
function renderStaircaseSection() {
  if (!elements.stairsGrid) return;

  elements.stairsGrid.innerHTML = "";

  staircases.forEach(item => {
    const card = document.createElement("article");
    card.className = "stairs-card";

    const waMsg = `مرحبًا، أريد الاستفسار عن تنفيذ ${item.name}.`;
    const waUrl = createWhatsAppUrl(waMsg);

    card.innerHTML = `
      <div class="stairs-img-wrap">
        <img src="${item.image}" alt="${item.name} - تنفيذ درج مصنع الجعبري وشريكه" class="stairs-img" loading="lazy">
      </div>
      <div class="stairs-body">
        <h3 class="stairs-title">${item.name}</h3>
        <p class="stairs-desc">${item.description}</p>
        <div class="card-footer">
          <a href="${waUrl}" class="btn-card-wa" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.12 8.12 0 01-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.69 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.47-.31z"/>
            </svg>
            <span>استفسر عن هذا التصميم</span>
          </a>
        </div>
      </div>
    `;

    elements.stairsGrid.appendChild(card);
  });
}

// Renders the Projects Gallery
function renderProjectsGallery() {
  if (!elements.projectsGrid) return;

  filteredProjects = currentProjectCategory === "all"
    ? projects
    : projects.filter(p => p.category === currentProjectCategory);

  elements.projectsGrid.innerHTML = "";

  filteredProjects.forEach((proj, idx) => {
    const item = document.createElement("div");
    item.className = "project-item";
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-label", `عرض صورة المشروع: ${proj.title}`);

    item.innerHTML = `
      <img src="${proj.image}" alt="${proj.title} - أعمال الجعبري وشريكه" loading="lazy">
      <div class="project-overlay">
        <span class="project-category-tag">${proj.categoryLabel}</span>
        <h4 class="project-title">${proj.title}</h4>
      </div>
    `;

    item.addEventListener("click", () => {
      openLightboxByIndex(idx);
    });

    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightboxByIndex(idx);
      }
    });

    elements.projectsGrid.appendChild(item);
  });
}

// ==========================================
// 8. PRODUCT MODAL VIEWER
// ==========================================
function openProductModalByIndex(index) {
  if (!filteredMaterials[index]) return;

  currentProductIndex = index;
  const mat = filteredMaterials[currentProductIndex];

  elements.modalImg.src = mat.image;
  elements.modalImg.alt = `${mat.name} - خامة رخام وجرانيت طبيعي`;
  elements.modalTitle.textContent = mat.name;
  elements.modalCatBadge.textContent = mat.categoryLabel;
  elements.modalFinishBadge.textContent = mat.finish;
  elements.modalDesc.textContent = mat.description;

  // Update WhatsApp query
  const waMsg = `مرحبًا، أريد الاستفسار عن خامة: ${mat.name}`;
  elements.modalWaBtn.href = createWhatsAppUrl(waMsg);

  // Update counter
  elements.modalCounter.textContent = `${currentProductIndex + 1} / ${filteredMaterials.length}`;

  elements.productModal.classList.add("open");
  elements.productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  elements.productModal.classList.remove("open");
  elements.productModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showPrevProduct() {
  if (filteredMaterials.length <= 1) return;
  currentProductIndex = (currentProductIndex - 1 + filteredMaterials.length) % filteredMaterials.length;
  openProductModalByIndex(currentProductIndex);
}

function showNextProduct() {
  if (filteredMaterials.length <= 1) return;
  currentProductIndex = (currentProductIndex + 1) % filteredMaterials.length;
  openProductModalByIndex(currentProductIndex);
}

// ==========================================
// 9. LIGHTBOX VIEWER
// ==========================================
function openLightboxByIndex(index) {
  if (!filteredProjects[index]) return;

  currentLightboxIndex = index;
  const proj = filteredProjects[currentLightboxIndex];

  elements.lightboxImg.src = proj.image;
  elements.lightboxImg.alt = proj.title;
  elements.lightboxTitle.textContent = proj.title;
  elements.lightboxDesc.textContent = proj.description;

  const waMsg = `مرحبًا، أريد الاستفسار عن تنفيذ مشروع: ${proj.title}`;
  elements.lightboxWaBtn.href = createWhatsAppUrl(waMsg);

  elements.lightboxModal.classList.add("open");
  elements.lightboxModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  elements.lightboxModal.classList.remove("open");
  elements.lightboxModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showPrevLightbox() {
  if (filteredProjects.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredProjects.length) % filteredProjects.length;
  openLightboxByIndex(currentLightboxIndex);
}

function showNextLightbox() {
  if (filteredProjects.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredProjects.length;
  openLightboxByIndex(currentLightboxIndex);
}

// ==========================================
// 10. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
  // Mobile Drawer Toggle
  if (elements.menuToggle && elements.mobileDrawer) {
    elements.menuToggle.addEventListener("click", () => {
      const isOpen = elements.mobileDrawer.classList.contains("open");
      if (isOpen) {
        elements.mobileDrawer.classList.remove("open");
        elements.menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      } else {
        elements.mobileDrawer.classList.add("open");
        elements.menuToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }
    });

    if (elements.drawerClose) {
      elements.drawerClose.addEventListener("click", () => {
        elements.mobileDrawer.classList.remove("open");
        elements.menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    }

    if (elements.drawerBackdrop) {
      elements.drawerBackdrop.addEventListener("click", () => {
        elements.mobileDrawer.classList.remove("open");
        elements.menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    }

    elements.drawerLinks.forEach(link => {
      link.addEventListener("click", () => {
        elements.mobileDrawer.classList.remove("open");
        elements.menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Catalog Category Filters
  elements.catalogFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.catalogFilterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentCategory = btn.getAttribute("data-category");
      renderMaterialsCatalog();
    });
  });

  // Projects Category Filters
  elements.projectsFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.projectsFilterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentProjectCategory = btn.getAttribute("data-project-cat");
      renderProjectsGallery();
    });
  });

  // Modal Events
  if (elements.modalClose) elements.modalClose.addEventListener("click", closeProductModal);
  if (elements.modalDismissBtn) elements.modalDismissBtn.addEventListener("click", closeProductModal);
  if (elements.modalBackdrop) elements.modalBackdrop.addEventListener("click", closeProductModal);
  if (elements.modalPrevBtn) elements.modalPrevBtn.addEventListener("click", showPrevProduct);
  if (elements.modalNextBtn) elements.modalNextBtn.addEventListener("click", showNextProduct);

  // Lightbox Events
  if (elements.lightboxClose) elements.lightboxClose.addEventListener("click", closeLightbox);
  if (elements.lightboxBackdrop) elements.lightboxBackdrop.addEventListener("click", closeLightbox);
  if (elements.lightboxPrevBtn) elements.lightboxPrevBtn.addEventListener("click", showPrevLightbox);
  if (elements.lightboxNextBtn) elements.lightboxNextBtn.addEventListener("click", showNextLightbox);

  // Keyboard Shortcuts (Esc closes, Arrows navigate)
  document.addEventListener("keydown", (e) => {
    if (elements.productModal.classList.contains("open")) {
      if (e.key === "Escape") closeProductModal();
      // RTL: Right Arrow -> Next, Left Arrow -> Prev
      if (e.key === "ArrowLeft") showNextProduct();
      if (e.key === "ArrowRight") showPrevProduct();
    } else if (elements.lightboxModal.classList.contains("open")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showNextLightbox();
      if (e.key === "ArrowRight") showPrevLightbox();
    } else if (elements.mobileDrawer.classList.contains("open")) {
      if (e.key === "Escape") {
        elements.mobileDrawer.classList.remove("open");
        document.body.style.overflow = "";
      }
    }
  });

  // Setup General WhatsApp links
  const generalWaMsg = "مرحبًا، أود الاستفسار عن خامات وأعمال الرخام والجرانيت لديكم.";
  const generalWaUrl = createWhatsAppUrl(generalWaMsg);

  if (elements.headerWaBtn) elements.headerWaBtn.href = generalWaUrl;
  if (elements.drawerWaBtn) elements.drawerWaBtn.href = generalWaUrl;
  if (elements.floatingWaBtn) elements.floatingWaBtn.href = generalWaUrl;
  if (elements.contactWaBtn) elements.contactWaBtn.href = generalWaUrl;
  if (elements.contactCallBtn) elements.contactCallBtn.href = `tel:${PHONE_NUMBER}`;
  if (elements.contactLocationBtn) elements.contactLocationBtn.href = LOCATION_MAPS_URL;

  // Navigation Active State on Scroll (IntersectionObserver)
  const sections = document.querySelectorAll("section[id]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          elements.navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(sec => observer.observe(sec));
  }
}

// ==========================================
// 11. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderMaterialsCatalog();
  renderStaircaseSection();
  renderProjectsGallery();
  setupEventListeners();
  console.log("الجعبري وشريكه - الكتالوج الرقمي جاهز ويعمل بنجاح.");
});
