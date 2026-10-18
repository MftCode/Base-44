import PageHero from '../components/PageHero.jsx';
import ConsultationForm from '../components/ConsultationForm.jsx';
import { company } from '../data/site.js';
import { IconPhone, IconFax, IconMail, IconMap, IconClock, IconGlobe } from '../components/Icons.jsx';

const BG = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Overhead_crane_VLJ_repository.jpg';

const info = [
  { icon: IconPhone, label: 'تلفن', value: company.phone, ltr: true, href: `tel:${company.phone.replace(/[^0-9+]/g, '')}` },
  { icon: IconFax, label: 'فکس', value: company.fax, ltr: true },
  { icon: IconMail, label: 'ایمیل', value: company.email, ltr: true, href: `mailto:${company.email}` },
  { icon: IconGlobe, label: 'وب‌سایت', value: company.website, ltr: true, href: `https://${company.website}` },
  { icon: IconClock, label: 'ساعت کاری', value: company.hours },
  { icon: IconMap, label: 'نشانی', value: company.address },
];

export default function Contact() {
  return (
    <>
      <PageHero
        title="تماس با ما"
        sub="برای دریافت مشاوره و استعلام تجهیزات، از راه‌های زیر با پارس بزرگمهر در ارتباط باشید."
        crumbs={[{ label: 'تماس با ما' }]}
        bg={BG}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">اطلاعات تماس</span>
              <h2 className="section-title" style={{ marginBottom: 20 }}>راه‌های ارتباطی</h2>
              <div className="info-list">
                {info.map((it) => {
                  const Ico = it.icon;
                  return (
                    <div className="info-item" key={it.label}>
                      <div className="info-ico"><Ico size={20} /></div>
                      <div>
                        <div className="lbl">{it.label}</div>
                        {it.href ? (
                          <a className={`val ${it.ltr ? 'ltr' : ''}`} dir={it.ltr ? 'ltr' : 'rtl'} href={it.href}>{it.value}</a>
                        ) : (
                          <div className={`val ${it.ltr ? 'ltr' : ''}`} dir={it.ltr ? 'ltr' : 'rtl'} style={it.label === 'نشانی' ? { fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.7 } : {}}>{it.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map placeholder: exact coordinates not confirmed, text address shown */}
              <div className="note-box" style={{ marginTop: 22 }}>
                <strong>نشانی:</strong> {company.address}
                <div style={{ marginTop: 6, fontSize: '0.86rem', color: 'var(--gray)' }}>
                  نقشه تعاملی به‌محض تأیید موقعیت دقیق افزوده خواهد شد.
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">فرم درخواست</span>
              <h2 className="section-title" style={{ marginBottom: 8 }}>درخواست مشاوره و استعلام تجهیزات</h2>
              <p className="section-sub" style={{ marginBottom: 18 }}>فیلدهای اجباری با ستاره مشخص شده‌اند.</p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
