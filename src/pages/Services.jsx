import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import ConsultationForm from '../components/ConsultationForm.jsx';
import {
  IconSearch, IconConsult, IconWrench, IconList, IconLayers, IconHandshake, IconArrow,
} from '../components/Icons.jsx';

const BG = 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Haltern_am_See%2C_Sythen%2C_Werkzeughalle_der_Quarzwerke_--_2015_--_4997-5001.jpg';

const services = [
  { icon: IconSearch, t: 'راهنمایی برای انتخاب تجهیزات', d: 'کمک به انتخاب تجهیزات بالابری متناسب با کاربرد، ظرفیت بار و شرایط محیطی مشتری.' },
  { icon: IconConsult, t: 'مشاوره اولیه', d: 'مشاوره اولیه متناسب با کاربرد مشتری برای آشنایی با گزینه‌های مناسب.' },
  { icon: IconWrench, t: 'شناسایی قطعات یدکی', d: 'راهنمایی برای شناسایی قطعات یدکی موردنیاز تجهیزات بالابری.' },
  { icon: IconList, t: 'پاسخ به درخواست‌های فنی و تجاری', d: 'پاسخ‌گویی به درخواست‌های فنی و تجاری مشتریان درباره تجهیزات.' },
  { icon: IconLayers, t: 'پیگیری درخواست تأمین', d: 'پیگیری درخواست‌های تأمین تجهیزات بالابری متناسب با نیاز مشتری.' },
  { icon: IconHandshake, t: 'ارتباط مستقیم با شرکت', d: 'امکان ارتباط مستقیم با شرکت برای پیگیری درخواست‌ها و دریافت پاسخ.' },
];

const faqs = [
  { q: 'انتخاب تجهیزات بر چه اساسی انجام می‌شود؟', a: 'انتخاب نهایی تجهیزات باید با توجه به ظرفیت بار، شرایط محیطی، نوع کاربری و مشخصات فنی موردنیاز انجام شود. کارشناسان ما برای راهنمایی در این زمینه در دسترس هستند.' },
  { q: 'آیا نصب، تعمیر یا بازرسی تخصصی ارائه می‌شود؟', a: 'خدمات شرکت بر مشاوره و راهنمایی انتخاب تجهیزات و شناسایی قطعات یدکی متمرکز است. درباره خدمات نصب، تعمیرات تخصصی یا بازرسی ایمنی، برای اطمینان از امکان‌پذیری با شرکت تماس بگیرید.' },
  { q: 'برای استعلام تجهیزات چه باید کرد؟', a: 'می‌توانید از طریق فرم درخواست مشاوره در همین صفحه، نیاز خود را ثبت کنید تا کارشناسان برای بررسی و پاسخ با شما ارتباط بگیرند.' },
  { q: 'مدت زمان پاسخ‌گویی چقدر است؟', a: 'درخواست شما پس از ثبت بررسی می‌شود و در زمان مناسب با شما ارتباط برقرار خواهد شد. زمان دقیق پاسخ به شرایط بستگی دارد و تضمین‌شده نیست.' },
];

export default function Services() {
  return (
    <>
      <Seo title="خدمات" description="خدمات پارس بزرگمهر: مشاوره انتخاب تجهیزات بالابری، مشاوره اولیه، شناسایی قطعات یدکی و پاسخ به درخواست‌های فنی و تجاری." />
      <PageHero
        title="خدمات پارس بزرگمهر"
        sub="رویکرد ما مشاوره، راهنمایی و پیگیری درخواست‌های تأمین تجهیزات بالابری متناسب با نیاز مشتری است."
        crumbs={[{ label: 'خدمات' }]}
        bg={BG}
      />

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">خدمات شرکت</span>
            <h2 className="section-title">مشاوره و راهنمایی انتخاب تجهیزات</h2>
            <p className="section-sub">خدمات پارس بزرگمهر بر نیاز واقعی مشتری و انتخاب تجهیزات متناسب با کاربرد متمرکز است.</p>
          </div>
          <div className="grid grid-3">
            {services.map((s) => {
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

      <section className="section-sm section-gray">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">مراحل ارتباط</span>
            <h2 className="section-title">چگونه با ما در ارتباط باشید</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="n">۱</div><h3>ثبت درخواست</h3><p>نیاز خود را از طریق فرم مشاوره ثبت کنید.</p></div>
            <div className="step"><div className="n">۲</div><h3>بررسی نیاز</h3><p>کارشناسان ما درخواست و شرایط شما را بررسی می‌کنند.</p></div>
            <div className="step"><div className="n">۳</div><h3>ارتباط با شما</h3><p>برای ارائه گزینه‌های مناسب با شما ارتباط برقرار می‌شود.</p></div>
            <div className="step"><div className="n">۴</div><h3>پیگیری</h3><p>درخواست شما تا مرحه نهایی پیگیری می‌شود.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">پرسش‌های متداول</span>
            <h2 className="section-title">سوال‌های رایج</h2>
          </div>
          <div className="grid grid-2">
            {faqs.map((f) => (
              <div className="info-item" key={f.q} style={{ alignItems: 'flex-start', flexDirection: 'column', gap: 8 }}>
                <div className="val" style={{ fontSize: '1rem' }}>{f.q}</div>
                <p style={{ color: 'var(--gray)', fontSize: '0.92rem', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">درخواست مشاوره</span>
              <h2 className="section-title" style={{ marginBottom: 12 }}>درخواست مشاوره و استعلام تجهیزات</h2>
              <p className="section-sub" style={{ margin: 0 }}>برای بررسی نیاز خود فرم را تکمیل کنید. کارشناسان ما برای پیگیری با شما ارتباط برقرار خواهند کرد.</p>
              <div style={{ marginTop: 22 }}>
                <Link to="/contact" className="btn btn-dark">تماس با شرکت <IconArrow size={18} /></Link>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
