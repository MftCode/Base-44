import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import { company } from '../data/site.js';
import { IconArrow, IconConsult, IconShield, IconGear, IconHandshake, IconLayers } from '../components/Icons.jsx';

const BG = 'https://upload.wikimedia.org/wikipedia/commons/7/79/Duisburg%2C_Landschaftspark_Duisburg-Nord%2C_Hochofenstra%C3%9Fe_--_2025_--_7448-50.jpg';

const approach = [
  { icon: IconShield, t: 'توجه به نیاز واقعی مشتری', d: 'شناخت نیاز و شرایط کاری مشتری پیش از پیشنهاد تجهیزات.' },
  { icon: IconGear, t: 'انتخاب تجهیزات متناسب با کاربرد', d: 'تطبیق تجهیزات با کاربرد، ظرفیت بار و شرایط محیطی.' },
  { icon: IconHandshake, t: 'ارتباط مستقیم و پاسخ‌گویی', d: 'ارتباط مستقیم با شرکت برای دریافت پاسخ و پیگیری درخواست.' },
  { icon: IconLayers, t: 'اهمیت مشخصات فنی', d: 'توجه به مشخصات فنی در انتخاب تجهیزات بالابری.' },
];

export default function About() {
  return (
    <>
      <PageHero
        title="درباره پارس بزرگمهر"
        sub="تجربه در مسیر تأمین تجهیزات بالابری صنعتی."
        crumbs={[{ label: 'درباره ما' }]}
        bg={BG}
      />

      <section className="section">
        <div className="container">
          <div className="cat-detail">
            <div className="cat-img">
              <img src={BG} alt="محیط صنعتی" />
            </div>
            <div>
              <span className="eyebrow">معرفی شرکت</span>
              <h1>پارس بزرگمهر؛ تجربه در مسیر تأمین تجهیزات بالابری</h1>
              <p className="lead">
                پارس بزرگمهر از سال ۱۳۶۸ فعالیت خود را آغاز کرد و از سال ۱۳۷۰ به‌صورت تخصصی وارد حوزه
                تجهیزات بالابری شد. در سال ۱۳۸۲ شرکت بازرگانی تأسیس شد و فعالیت تأمین تجهیزات بالابری
                گسترش یافت. امروز با ۳۵ سال تجربه، در کنار صنایعی قرار می‌گیریم که به دنبال انتخاب
                تجهیزات متناسب با کاربرد خود هستند.
              </p>
              <div className="hero-stats" style={{ marginTop: 26 }}>
                <div className="hero-stat" style={{ color: 'var(--charcoal)' }}>
                  <div className="num">{company.experienceYears}</div>
                  <div className="lbl" style={{ color: 'var(--gray)' }}>سال تجربه</div>
                </div>
                <div className="hero-stat" style={{ color: 'var(--charcoal)' }}>
                  <div className="num">۱۳۷۰</div>
                  <div className="lbl" style={{ color: 'var(--gray)' }}>ورود به حوزه بالابر</div>
                </div>
                <div className="hero-stat" style={{ color: 'var(--charcoal)' }}>
                  <div className="num">۱۳۸۲</div>
                  <div className="lbl" style={{ color: 'var(--gray)' }}>تأسیس شرکت بازرگانی</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">تاریخچه شرکت</span>
            <h2 className="section-title">مسیر فعالیت پارس بزرگمهر</h2>
          </div>
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            <div className="timeline">
              {company.timeline.map((t) => (
                <div className="tl-item" key={t.year}>
                  <div className="tl-year">{t.year}</div>
                  <div className="tl-text">{t.text}</div>
                  <div className="tl-sub">{t.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">رویکرد شرکت</span>
            <h2 className="section-title">آنچه در ارتباط با مشتری مهم می‌دانیم</h2>
            <p className="section-sub">رویکرد ما برای معرفی شرکت؛ نه گواهینامه یا دستاورد رسمی، بلکه نحوه ارتباط با مشتری است.</p>
          </div>
          <div className="features">
            {approach.map((a) => {
              const Ico = a.icon;
              return (
                <div className="feature" key={a.t}>
                  <div className="feature-ico"><Ico size={28} /></div>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band">
            <h2>برای آشنایی بیشتر با محصولات و دریافت مشاوره با ما تماس بگیرید</h2>
            <div className="actions">
              <Link to="/contact" className="btn btn-dark"><IconConsult size={18} /> درخواست مشاوره</Link>
              <Link to="/products" className="btn btn-ghost-light">مشاهده محصولات <IconArrow size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
