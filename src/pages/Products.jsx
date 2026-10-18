import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';
import { IconArrow, IconConsult } from '../components/Icons.jsx';

const BG = 'https://upload.wikimedia.org/wikipedia/commons/4/46/Double_Girder_Overhead_Crane_Indoors_--_ORITCRANES.jpg';

export default function Products() {
  return (
    <>
      <Seo title="محصولات" description="کاتالوگ شش‌دسته‌ای تجهیزات بالابری پارس بزرگمهر: جرثقیل پنوماتیک، برقی، دستی، بالابر، پولیفت و لوازم یدکی." />
      <PageHero
        title="محصولات پارس بزرگمهر"
        sub="دسته‌بندی تجهیزات بالابری شامل جرثقیل‌های پنوماتیک، برقی و دستی، بالابر، پولیفت و لوازم یدکی."
        crumbs={[{ label: 'محصولات' }]}
        bg={BG}
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {products.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
          <div className="empty-products" style={{ marginTop: 36 }}>
            <h3>اطلاعات مدل‌ها و مشخصات فنی</h3>
            <p>برای اطلاع از مدل‌ها، ظرفیت‌ها و مشخصات موجود، با شرکت تماس بگیرید.</p>
            <Link to="/contact" className="btn btn-primary">تماس با شرکت <IconArrow size={18} /></Link>
          </div>
        </div>
      </section>
      <section className="section-sm section-cream">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: 14 }}>برای انتخاب تجهیزات مناسب مشورت بگیرید</h2>
          <p className="section-sub" style={{ margin: '0 auto 24px' }}>کارشناسان ما برای بررسی نیاز شما و معرفی گزینه‌های مناسب در دسترس هستند.</p>
          <Link to="/contact" className="btn btn-primary"><IconConsult size={18} /> درخواست مشاوره</Link>
        </div>
      </section>
    </>
  );
}
