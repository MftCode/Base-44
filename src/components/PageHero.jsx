import { Link } from 'react-router-dom';
import { IconChevron } from './Icons.jsx';

export default function PageHero({ title, sub, crumbs = [], bg }) {
  return (
    <section className="page-hero">
      {bg && <div className="page-hero-bg" style={{ backgroundImage: `url(${bg})` }} />}
      <div className="container page-hero-inner">
        <nav className="breadcrumb" aria-label="مسیر صفحه">
          <Link to="/">خانه</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="sep"><IconChevron size={13} /></span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}
