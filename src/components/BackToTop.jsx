import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowUp, IconPhone, IconConsult } from './Icons.jsx';
import { company } from '../data/site.js';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <button className={`to-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="بازگشت به بالا">
        <IconArrowUp size={22} />
      </button>
      <div className="mobile-actions">
        <a className="btn btn-dark" href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} dir="ltr">
          <IconPhone size={18} /> {company.phone}
        </a>
        <Link className="btn btn-primary" to="/contact"><IconConsult size={18} /> درخواست مشاوره</Link>
      </div>
    </>
  );
}
