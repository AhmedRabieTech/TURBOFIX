const services = [
  {
    id: 1,
    name: "Oil Change",
    nameAr: "تغيير الزيت",
    description: "Full synthetic oil change with premium filter and multi-point inspection in our elite workshop.",
    descriptionAr: "تغيير زيت تخليقي كامل مع فلتر عالي الجودة وفحص شامل في ورشتنا المتخصصة.",
    price: 60,
    category: "Routine",
    categoryAr: "دوري",
    image: "https://images.pexels.com/photos/4489704/pexels-photo-4489704.jpeg?w=800"
  },
  {
    id: 2,
    name: "Car Inspection",
    nameAr: "فحص السيارة",
    description: "Detailed 150-point inspection using modern diagnostic tools and advanced technology.",
    descriptionAr: "فحص تفصيلي يشمل 150 نقطة باستخدام أحدث أدوات التشخيص والتكنولوجيا المتقدمة.",
    price: 150,
    category: "Diagnostic",
    categoryAr: "تشخيص",
    image: process.env.PUBLIC_URL + "/assets/images/inspection.png"
  },
  {
    id: 3,
    name: "General Maintenance",
    nameAr: "صيانة عامة",
    description: "Complete vehicle maintenance, including fluid checks, tune-ups, and belt inspections.",
    descriptionAr: "صيانة كاملة للمركبة تشمل فحص السوائل، ضبط المحرك، وفحص الأحزمة والسيور.",
    price: 250,
    category: "General",
    categoryAr: "عام",
    image: process.env.PUBLIC_URL + "/assets/images/maintenance.png"
  },
  {
    id: 4,
    name: "Tire Service",
    nameAr: "خدمة الإطارات",
    description: "Tire balancing, rotation, and high-performance replacement for maximum road safety.",
    descriptionAr: "موازنة الإطارات، تدويرها، واستبدالها بإطارات عالية الأداء لضمان أقصى درجات الأمان.",
    price: 80,
    category: "Tires",
    categoryAr: "إطارات",
    image: "https://images.pexels.com/photos/190539/pexels-photo-190539.jpeg?w=800"
  },
  {
    id: 5,
    name: "Battery Service",
    nameAr: "خدمة البطارية",
    description: "Professional battery testing and high-end replacement to ensure reliable starts every time.",
    descriptionAr: "اختبار احترافي للبطارية واستبدالها بأنواع فاخرة لضمان تشغيل موثوق في كل مرة.",
    price: 120,
    category: "Electrical",
    categoryAr: "كهربائي",
    image: "https://images.pexels.com/photos/4489745/pexels-photo-4489745.jpeg?w=800"
  },
  {
    id: 6,
    name: "Car Wash",
    nameAr: "غسيل سيارات",
    description: "Premium exterior and interior detailing using high-quality products to restore your car's showroom shine.",
    descriptionAr: "تنظيف خارجي وداخلي متميز باستخدام منتجات عالية الجودة لاستعادة بريق عرض السيارة.",
    price: 45,
    category: "Detailing",
    categoryAr: "تلميع",
    image: "https://images.pexels.com/photos/6872583/pexels-photo-6872583.jpeg?w=800"
  },
  {
    id: 7,
    name: "Glass Replacement",
    nameAr: "تبديل الزجاج",
    description: "Professional windshield and auto glass repair or replacement ensuring maximum safety and visibility.",
    descriptionAr: "إصلاح أو استبدال الزجاج الأمامي والجانبي باحترافية لضمان أقصى درجات الأمان والرؤية.",
    price: 350,
    category: "Maintenance",
    categoryAr: "صيانة",
    image: process.env.PUBLIC_URL + "/assets/images/glass-replacement.jpg"
  },
  {
    id: 8,
    name: "AC Service",
    nameAr: "خدمة المكيف",
    description: "Complete cleaning, disinfection, and recharging of the AC system for an ice-cold cabin experience.",
    descriptionAr: "تنظيف كامل، تعقيم، وإعادة شحن نظام التكييف لتجربة قيادة منعشة.",
    price: 180,
    category: "Specialized",
    categoryAr: "متخصص",
    image: process.env.PUBLIC_URL + "/assets/images/services/ac-service.jpg"
  },
  {
    id: 9,
    name: "Car Diagnostics",
    nameAr: "تشخيص الأعطال",
    description: "Advanced computerized scanning and expert assessment to pinpoint any mechanical or electrical issues.",
    descriptionAr: "فحص متقدم بالكمبيوتر وتقييم خبير لتحديد أي مشاكل ميكانيكية أو كهربائية بدقة.",
    price: 120,
    category: "Diagnostic",
    categoryAr: "تشخيص",
    image: process.env.PUBLIC_URL + "/assets/images/services/car-diagnostics.jpg"
  }
];

export default services;
