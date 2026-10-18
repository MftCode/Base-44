import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import { productBySlug } from '../data/products.js';
import { products } from '../data/products.js';
import NotFound from './NotFound.jsx';
import { IconArrow, IconConsult, IconCheck } from '../components/Icons.jsx';

export default function ProductCategory() {
  const { slug } = useParams();
  const product = productBySlug(slug);
  if (!product) return <NotFound />;
  const others = products.filter((p) => p.slug !== slug);

  return (
    <>
      <Seo title={product.name} description={`${product.name} — ${product.short}`} />
      <PageHero
        title={product.name}
        sub={product.short}
        crumbs={[{ label: 'محصولات', to: '/products' }, { label: product.name }]}
      />
      <section className="section">
        <div className="container">
          <div className="cat-detail">
            <div className="cat-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <span className="eyebrow">دسته محصول</span>
              <h1>{product.name}</h1>
              <p className="lead">{product.lead}</p>

              <div className="cat-block">
                <h3>موارد کاربرد عمومی</h3>
                <ul>
                  {product.applications.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>

              <div className="cat-block">
                <h3>ملاحظات انتخاب تجهیزات</h3>
                <ul>
                  {product.considerations.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>

              <div className="note-box">
                انتخاب نهایی تجهیزات باید با توجه به ظرفیت بار، شرایط محیطی، نوع کاربری و مشخصات فنی موردنیاز انجام شود. برای اطلاع از مدل‌ها و مشخصات موجود، با شرکت تماس بگیرید.
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary"><IconConsult size={18} /> درخواست مشاوره</Link>
                <Link to="/products" className="btn btn-outline">بازگشت به محصولات <IconArrow size={18} /></Link>
              </div>
            </div>
          </div>

          {/* Empty product list placeholder (structure ready for real products) */}
          <div className="empty-products" style={{ marginTop: 48 }}>
            <h3>فهرست مدل‌ها و مشخصات فنی</h3>
            <p>در حال حاضر فهرست مدل‌های این دسته در سایت درج نشده است. برای اطلاع از مدل‌ها، ظرفیت‌ها و موجودی، با شرکت تماس بگیرید.</p>
            <Link to="/contact" className="btn btn-primary"><IconCheck size={18} /> تماس با شرکت</Link>
          </div>

          {/* Other categories */}
          <div style={{ marginTop: 56 }}>
            <div className="section-head">
              <span className="eyebrow">سایر دسته‌ها</span>
              <h2 className="section-title">دسته‌های دیگر محصولات</h2>
            </div>
            <div className="grid grid-3">
              {others.map((p, i) => (
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
          </div>
        </div>
      </section>
    </>
  );
}
