import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { IconArrow } from '../components/Icons.jsx';

export default function NotFound() {
  return (
    <>
    <Seo title="صفحه یافت نشد" description="صفحه موردنظر یافت نشد." />
    <section className="section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--brand)' }}>۴۰۴</div>
        <h1 className="section-title" style={{ marginBottom: 12 }}>صفحه موردنظر یافت نشد</h1>
        <p className="section-sub" style={{ margin: '0 auto 24px' }}>آدرس واردشده صحیح نیست یا صفحه منتقل شده است.</p>
        <Link to="/" className="btn btn-primary">بازگشت به خانه <IconArrow size={18} /></Link>
      </div>
    </section>
    </>
  );
}
