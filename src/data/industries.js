const W = 'https://upload.wikimedia.org/wikipedia/commons';

export const industries = [
  {
    slug: 'manufacturing',
    name: 'صنایع تولیدی و کارخانه‌ها',
    image: `${W}/4/46/Double_Girder_Overhead_Crane_Indoors_--_ORITCRANES.jpg`,
    desc: 'جابه‌جایی مواد اولیه، قطعات نیمه‌ساخته و محصولات نهایی در خطوط تولید و سالن‌های صنعتی.',
    equipment: 'جرثقیل‌های برقی و پل‌دار، بالابرها و پولیفت‌ها برای خطوط تولید.',
  },
  {
    slug: 'workshops',
    name: 'کارگاه‌های صنعتی',
    image: `${W}/3/3f/Haltern_am_See%2C_Sythen%2C_Werkzeughalle_der_Quarzwerke_--_2015_--_4997-5001.jpg`,
    desc: 'مونتاژ، تعمیر و جابه‌جایی بار در فضاهای کارگاهی با ابعاد محدود.',
    equipment: 'جرثقیل‌های دستی، پولیفت و تجهیزات کشش بار متناسب با فضای کارگاه.',
  },
  {
    slug: 'warehouses',
    name: 'انبارها و مراکز لجستیک',
    image: `${W}/a/a2/Modern_warehouse_with_pallet_rack_storage_system.jpg`,
    desc: 'جابه‌جایی و چینش کالا، بارگیری و تخلیه در انبارها و مراکز توزیع.',
    equipment: 'بالابرها، جرثقیل‌های برقی و تجهیزات جابه‌جایی بار برای انبار.',
  },
  {
    slug: 'maintenance',
    name: 'تعمیرگاه‌ها و واحدهای تعمیر و نگهداری',
    image: `${W}/9/99/Overhead_crane_VLJ_repository.jpg`,
    desc: 'بلندکردن و جابه‌جایی قطعات و تجهیزات سنگین برای تعمیر و بازرسی.',
    equipment: 'جرثقیل‌های پل‌دار، پولیفت و لوازم یدکی برای تداوم بهره‌برداری.',
  },
  {
    slug: 'construction',
    name: 'پروژه‌های ساختمانی و نصب تجهیزات',
    image: `${W}/6/6e/00_0061_Turmkr%C3%A4ne_mit_Ausleger.jpg`,
    desc: 'نصب سازه‌ها، جابه‌جایی مصالح و تجهیزات در پروژه‌های ساختمانی و صنعتی.',
    equipment: 'بالابرها و تجهیزات بالابری برای نصب و جابه‌جایی در ارتفاع.',
  },
  {
    slug: 'material-handling',
    name: 'صنایع نیازمند جابه‌جایی بار',
    image: `${W}/7/77/Container_loading_with_forklift_at_warehouse_in_Thailand.jpg`,
    desc: 'بارگیری، تخلیه و جابه‌جایی بار در صنایع مختلف نیازمند جابه‌جایی مداوم.',
    equipment: 'طیف تجهیزات بالابری متناسب با نوع و حجم بار و شرایط محیطی.',
  },
];

export const industryBySlug = (slug) => industries.find((i) => i.slug === slug);
