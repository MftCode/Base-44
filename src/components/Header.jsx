import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { company, nav } from '../data/site.js';
import { products } from '../data/products.js';
import { IconPhone, IconClock, IconChevron, IconArrow } from './Icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <span><IconPhone size={14} /> <span className="ltr" dir="ltr">{company.phone}</span></span>
            <span><IconClock size={14} /> {company.hours}</span>
          </div>
          <Link to="/contact">تماس با ما</Link>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label={company.name}>
            <img src={company.logo} alt="لوگوی پارس بزرگمهر" className="brand-logo" />
          </Link>

          <nav className="nav" aria-label="منوی اصلی">
            {nav.map((item) => item.drop ? (
              <div className="has-drop" key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => `nav-link drop-toggle${isActive ? ' active' : ''}`}>
                  {item.label} <IconChevron size={15} />
                </NavLink>
                <div className="drop-menu">
                  {products.map((p) => (
                    <Link key={p.slug} to={`/products/${p.slug}`} className="drop-item">
                      <span className="dot" /> {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-cta">
            <Link to="/contact" className="btn btn-primary">درخواست مشاوره</Link>
          </div>

          <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="منو" aria-expanded={open}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`scrim ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mm-head">
          <img src={company.logo} alt="لوگو" className="brand-logo" />
          <button className="mm-close" onClick={() => setOpen(false)} aria-label="بستن منو">✕</button>
        </div>
        <nav>
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `mm-link${isActive ? ' active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
          <div className="mm-sub-label">دسته‌های محصولات</div>
          {products.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="mm-sub-link">{p.name}</Link>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary btn-block mm-cta">درخواست مشاوره <IconArrow size={18} /></Link>
      </aside>
    </>
  );
}
