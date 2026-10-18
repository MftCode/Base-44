import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import { industries } from '../data/industries.js';
import { products } from '../data/products.js';
import { IconArrow, IconConsult } from '../components/Icons.jsx';

const BG = 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Modern_warehouse_with_pallet_rack_storage_system.jpg';

export default function Industries() {
  return (
    <>
      <Seo title="کاربردها در صنایع" description="کاربرد تجهیزات بالابری در صنایع تولیدی، کارگاه‌ها، انبارها، تعمیرگاه‌ها، پروژه‌های ساختمانی و صنایع جابه‌جایی بار." />
      <PageHero
        title="کاربردها در صنایع"
        sub="کاربرد تجهیزات بالابری در محیط‌های کاری مختلف؛ از کارخانه‌ها و انبارها تا پروژه‌های ساختمانی."
        crumbs={[{ label: 'کاربردها در صنایع' }]}
        bg={BG}
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {industries.map((ind) => (
              <div key={ind.slug} className="ind-card" style={{ aspectRatio: '16 / 10' }}>
                <img src={ind.image} alt={ind.name} loading="lazy" />
                <div className="ov">
                  <div className="bar" />
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                  <p style={{ marginTop: 8, fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)' }}>{ind.equipment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm section-cream">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">دسته‌های مرتبط</span>
            <h2 className="section-title">تجهیزات متناسب با هر صنعت</h2>
            <p className="section-sub">برای بررسی تجهیزات مناسب کاربرد خود، دسته‌های محصولات را مشاهده کنید.</p>
          </div>
          <div className="grid grid-3">
            {products.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="pcard">
                <div className="pcard-img"><img src={p.image} alt={p.name} loading="lazy" /></div>
                <div className="pcard-body">
                  <h3>{p.name}</h3>
                  <p>{p.short}</p>
                  <span className="pcard-link">مشاهده <span className="arr"><IconArrow size={16} /></span></span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <Link to="/contact" className="btn btn-primary"><IconConsult size={18} /> درخواست مشاوره</Link>
          </div>
        </div>
      </section>
    </>
  );
}
