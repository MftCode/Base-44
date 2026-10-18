import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { company } from '../data/site.js';
import { products } from '../data/products.js';
import { industries } from '../data/industries.js';
import ProductCard from '../components/ProductCard.jsx';
import {
  IconShield, IconGear, IconHandshake, IconConsult, IconArrow, IconCheck, IconLayers, IconWrench, IconList, IconSearch,
} from '../components/Icons.jsx';

const HERO_IMG = 'https://upload.wikimedia.org/wikipedia/commons/c/ce/15t_Under-running_Overhead_Crane_in_Plane_Maintenance_--_ORITCRANES.jpg';

const why = [
  { icon: IconShield, title: '۳۵ سال تجربه', text: 'سابقه فعالیت در حوزه تجهیزات صنعتی و بالابر از سال ۱۳۷۰.' },
  { icon: IconGear, title: 'تخصص در حوزه بالابر', text: 'تمرکز تخصصی بر تجهیزات بالابری و جابه‌جایی بار صنعتی.' },
  { icon: IconHandshake, title: 'ارتباط مستقیم', text: 'امکان ارتباط مستقیم با شرکت برای دریافت مشاوره و پیگیری درخواست.' },
  { icon: IconConsult, title: 'مشاوره انتخاب تجهیزات', text: 'راهنمایی برای انتخاب تجهیزات متناسب با کاربرد و شرایط کاری.' },
];

const steps = [
  { n: '۱', title: 'انتخاب دسته محصول', text: 'دسته تجهیز موردنیاز خود را از میان شش دسته اصلی انتخاب کنید.' },
  { n: '۲', title: 'ارسال درخواست', text: 'اطلاعات اولیه و شرح نیاز خود را از طریق فرم درخواست مشاوره ارسال کنید.' },
  { n: '۳', title: 'بررسی نیاز', text: 'کارشناسان ما نیاز و شرایط کاری شما را بررسی می‌کنند.' },
  { n: '۴', title: 'ارتباط با شرکت', text: 'برای پیگیری درخواست و ارائه گزینه‌های مناسب با شما ارتباط برقرار می‌شود.' },
];

export default function Home() {
  return (
    <>
      <Seo title="تجهیزات بالابری صنعتی" description="پارس بزرگمهر، تأمین‌کننده تجهیزات بالابری صنعتی: جرثقیل پنوماتیک، برقی، دستی، بالابر، پولیفت و لوازم یدکی. ۳۵ سال تجربه در حوزه بالابر." />
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="container hero-inner">
          <div className="reveal">
            <span className="hero-badge"><IconShield size={15} /> {company.experienceYears} سال تجربه در حوزه بالابر</span>
            <h1>تجهیزات بالابری صنعتی،<br /> متناسب با نیاز <span className="hl">کسب‌وکار</span> شما</h1>
            <p className="hero-lead">
              پارس بزرگمهر با ۳۵ سال تجربه، در حوزه تجهیزات بالابری و تأمین راهکارهای موردنیاز صنایع
              فعالیت می‌کند. برای انتخاب تجهیزات متناسب با کاربرد و شرایط کاری خود، با کارشناسان ما
              در ارتباط باشید.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">مشاهده محصولات <IconArrow size={18} /></Link>
              <Link to="/contact" className="btn btn-ghost-light">درخواست مشاوره</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="num">۶</div><div className="lbl">دسته محصول اصلی</div></div>
              <div className="hero-stat"><div className="num">۱۳۶۸</div><div className="lbl">آغاز فعالیت</div></div>
              <div className="hero-stat"><div className="num">۱۳۸۲</div><div className="lbl">تأسیس شرکت بازرگانی</div></div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <img src={HERO_IMG} alt="جرثقیل بالابری صنعتی در محیط کارخانه" />
            <span className="tag">تجهیزات بالابری صنعتی</span>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">دسته‌های محصولات</span>
            <h2 className="section-title">شش دسته اصلی تجهیزات بالابری</h2>
            <p className="section-sub">دسته‌بندی تجهیزات پارس بزرگمهر شامل جرثقیل‌ها، بالابر، پولیفت و لوازم یدکی است.</p>
          </div>
          <div className="grid grid-3">
            {products.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">چرا پارس بزرگمهر؟</span>
            <h2 className="section-title">تخصص و تجربه در تأمین تجهیزات بالابری</h2>
            <p className="section-sub">رویکرد ما انتخاب تجهیزات متناسب با نیاز واقعی مشتری و ارتباط مستقیم است.</p>
          </div>
          <div className="features">
            {why.map((f) => {
              const Ico = f.icon;
              return (
                <div className="feature" key={f.title}>
                  <div className="feature-ico"><Ico size={30} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">کاربردها در صنایع</span>
            <h2 className="section-title">کاربرد تجهیزات بالابری در محیط‌های کاری</h2>
            <p className="section-sub">حوزه‌هایی که تجهیزات بالابری در آن‌ها کاربرد دارند.</p>
          </div>
          <div className="grid grid-3">
            {industries.map((ind) => (
              <Link to="/industries" key={ind.slug} className="ind-card">
                <img src={ind.image} alt={ind.name} loading="lazy" />
                <div className="ov">
                  <div className="bar" />
                  <h3>{ind.name}</h3>
                  <p>{ind.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">خدمات شرکت</span>
            <h2 className="section-title">مشاوره و تأمین تجهیزات بالابری</h2>
            <p className="section-sub">خدمات پارس بزرگمهر بر مشاوره و راهنمایی انتخاب تجهیزات متمرکز است.</p>
          </div>
          <div className="grid grid-3">
            {[
              { icon: IconSearch, t: 'راهنمایی انتخاب تجهیزات', d: 'کمک به انتخاب تجهیزات بالابری متناسب با کاربرد و شرایط کاری مشتری.' },
              { icon: IconConsult, t: 'مشاوره اولیه', d: 'مشاوره اولیه برای بررسی نیاز و آشنایی با گزینه‌های مناسب.' },
              { icon: IconWrench, t: 'شناسایی قطعات یدکی', d: 'راهنمایی برای شناسایی قطعات یدکی موردنیاز تجهیزات بالابری.' },
              { icon: IconList, t: 'پاسخ به درخواست‌های فنی', d: 'پاسخ‌گویی به درخواست‌های فنی و تجاری مشتریان.' },
              { icon: IconLayers, t: 'تأمین تجهیزات', d: 'پیگیری درخواست‌های تأمین تجهیزات بالابری متناسب با نیاز مشتری.' },
              { icon: IconHandshake, t: 'ارتباط مستقیم', d: 'امکان ارتباط مستقیم با شرکت برای پیگیری درخواست‌ها.' },
            ].map((s) => {
              const Ico = s.icon;
              return (
                <div className="feature" key={s.t} style={{ textAlign: 'right' }}>
                  <div className="feature-ico" style={{ margin: '0 0 14px' }}><Ico size={26} /></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">فرآیند دریافت مشاوره</span>
            <h2 className="section-title">از درخواست تا ارتباط با شرکت</h2>
            <p className="section-sub">پس از ارسال فرم، روند پیگیری درخواست شما چگونه پیش می‌رود.</p>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-band">
            <h2>برای انتخاب تجهیزات مناسب، با ما مشورت کنید</h2>
            <p>نیاز خود را با ما در میان بگذارید تا برای بررسی گزینه‌های مناسب با شما ارتباط بگیریم.</p>
            <div className="actions">
              <Link to="/contact" className="btn btn-dark">درخواست مشاوره</Link>
              <a className="btn btn-ghost-light" href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} dir="ltr">تماس با شرکت</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">اطلاعات تماس</span>
            <h2 className="section-title">با پارس بزرگمهر در ارتباط باشید</h2>
          </div>
          <div className="info-list" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
            <div className="info-item"><div className="info-ico"><IconCheck size={20} /></div><div><div className="lbl">تلفن</div><a className="val ltr" dir="ltr" href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}>{company.phone}</a></div></div>
            <div className="info-item"><div className="info-ico"><IconCheck size={20} /></div><div><div className="lbl">ساعت کاری</div><div className="val">{company.hours}</div></div></div>
            <div className="info-item"><div className="info-ico"><IconCheck size={20} /></div><div><div className="lbl">نشانی</div><div className="val" style={{ fontWeight: 600, fontSize: '0.92rem' }}>{company.address}</div></div></div>
            <div className="info-item"><div className="info-ico"><IconCheck size={20} /></div><div><div className="lbl">ایمیل</div><a className="val ltr" dir="ltr" href={`mailto:${company.email}`}>{company.email}</a></div></div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 26 }}>
            <Link to="/contact" className="btn btn-primary">صفحه تماس با ما <IconArrow size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
