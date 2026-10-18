import { Link } from 'react-router-dom';
import { company, nav } from '../data/site.js';
import { products } from '../data/products.js';
import { IconPhone, IconFax, IconMail, IconMap, IconClock, IconGlobe } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <img src={company.logo} alt="لوگوی پارس بزرگمهر" className="brand-logo" />
            <p>
              پارس بزرگمهر، فعال در حوزه تأمین تجهیزات بالابری صنعتی. با ۳۵ سال تجربه در
              حوزه بالابر، در کنار کسب‌وکارهایی قرار می‌گیریم که به دنبال انتخاب تجهیزات
              متناسب با کاربرد و شرایط کاری خود هستند.
            </p>
          </div>

          <div>
            <h4>صفحات</h4>
            <ul className="footer-links">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>دسته‌های محصولات</h4>
            <ul className="footer-links">
              {products.map((p) => (
                <li key={p.slug}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>تماس</h4>
            <ul className="footer-contact">
              <li><IconPhone size={16} /> <span className="ltr" dir="ltr">{company.phone}</span></li>
              <li><IconFax size={16} /> <span className="ltr" dir="ltr">فکس: {company.fax}</span></li>
              <li><IconMail size={16} /> <a className="ltr" dir="ltr" href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><IconGlobe size={16} /> <a className="ltr" dir="ltr" href={`https://${company.website}`}>{company.website}</a></li>
              <li><IconMap size={16} /> {company.address}</li>
              <li><IconClock size={16} /> {company.hours}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">تمامی حقوق این وب‌سایت متعلق به شرکت پارس بزرگمهر است.</div>
      </div>
    </footer>
  );
}
