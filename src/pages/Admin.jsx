import { useEffect, useState } from 'react';
import Seo from '../components/Seo.jsx';
import PageHero from '../components/PageHero.jsx';
import { IconShield } from '../components/Icons.jsx';

const STATUSES = [
  { key: 'new', label: 'جدید', cls: 'st-new' },
  { key: 'contacted', label: 'در حال پیگیری', cls: 'st-contacted' },
  { key: 'done', label: 'انجام‌شده', cls: 'st-done' },
  { key: 'archived', label: 'بایگانی', cls: 'st-archived' },
];

const fmtDate = (iso) => {
  try {
    return new Date(iso).toLocaleString('fa-IR', { dateStyle: 'short', timeStyle: 'short' });
  } catch {
    return iso;
  }
};

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('pb_admin') === '1');
  const [pw, setPw] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const headers = (extra = {}) => ({
    'Content-Type': 'application/json',
    'x-admin-password': sessionStorage.getItem('pb_admin_pw') || '',
    ...extra,
  });

  const load = async () => {
    setLoading(true);
    setMsg('');
    try {
      const res = await fetch('/api/consultations', { headers: headers() });
      const data = await res.json();
      if (res.ok) setList(data.requests || []);
      else setMsg(data.error || 'خطا در دریافت درخواست‌ها.');
    } catch {
      setMsg('ارتباط با سرور برقرار نشد.');
    }
    setLoading(false);
  };

  useEffect(() => { if (authed) load(); }, [authed]);

  const login = async (e) => {
    e.preventDefault();
    setLoginErr('');
    try {
      const res = await fetch('/api/consultations', { headers: { 'x-admin-password': pw } });
      if (res.ok) {
        sessionStorage.setItem('pb_admin', '1');
        sessionStorage.setItem('pb_admin_pw', pw);
        setAuthed(true);
      } else {
        setLoginErr('رمز عبور نادرست است.');
      }
    } catch {
      setLoginErr('ارتباط با سرور برقرار نشد.');
    }
  };

  const logout = () => {
    sessionStorage.removeItem('pb_admin');
    sessionStorage.removeItem('pb_admin_pw');
    setAuthed(false);
    setList([]);
  };

  const changeStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/consultations/${id}`, {
        method: 'PATCH',
        headers: headers(),
        body: JSON.stringify({ status }),
      });
      if (res.ok) load();
    } catch { setMsg('خطا در به‌روزرسانی وضعیت.'); }
  };

  const remove = async (id) => {
    if (!confirm('این درخواست حذف شود؟')) return;
    try {
      const res = await fetch(`/api/consultations/${id}`, { method: 'DELETE', headers: headers() });
      if (res.ok) load();
    } catch { setMsg('خطا در حذف درخواست.'); }
  };

  if (!authed) {
    return (
      <>
        <PageHero title="پنل مدیریت" sub="مشاهده درخواست‌های مشاوره" crumbs={[{ label: 'مدیریت' }]} />
        <section className="section">
          <div className="container" style={{ maxWidth: 460 }}>
            <form className="admin-card" onSubmit={login}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div className="feature-ico" style={{ margin: 0 }}><IconShield size={24} /></div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>ورود به پنل مدیریت</h2>
              </div>
              {loginErr && <div className="form-msg bad" style={{ marginBottom: 14 }}>{loginErr}</div>}
              <div className="field">
                <label htmlFor="ad-pw">رمز عبور</label>
                <input id="ad-pw" className="ltr" type="password" dir="ltr" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" />
              </div>
              <button className="btn btn-primary btn-block" type="submit">ورود</button>
              <p style={{ marginTop: 14, fontSize: '0.84rem', color: 'var(--gray)' }}>
                این صفحه فقط برای مدیریت سایت قابل استفاده است. رمز عبور را از طریق داشبورد تنظیم کنید.
              </p>
            </form>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo title="مدیریت درخواست‌ها" description="پنل مدیریت درخواست‌های مشاوره پارس بزرگمهر." />
      <PageHero title="پنل مدیریت" sub="مشاهده و مدیریت درخواست‌های مشاوره" crumbs={[{ label: 'مدیریت' }]} />
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem' }}>درخواست‌های مشاوره ({list.length})</h2>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-outline" onClick={load} disabled={loading}>{loading ? 'در حال بارگذاری...' : 'به‌روزرسانی'}</button>
              <button className="btn btn-dark" onClick={logout}>خروج</button>
            </div>
          </div>
          {msg && <div className="form-msg bad" style={{ marginBottom: 16 }}>{msg}</div>}
          {!loading && list.length === 0 && !msg && (
            <div className="empty-products"><h3>هنوز درخواستی ثبت نشده است</h3><p>درخواست‌های مشاوره پس از ارسال فرم در اینجا نمایش داده می‌شوند.</p></div>
          )}
          {list.map((r) => {
            const st = STATUSES.find((s) => s.key === r.status) || STATUSES[0];
            return (
              <div className="req-item" key={r.id}>
                <div className="top">
                  <div>
                    <span className="name">{r.fullName}</span> {r.company && <span style={{ color: 'var(--gray)', fontSize: '0.88rem' }}>— {r.company}</span>}
                  </div>
                  <span className={`status-pill ${st.cls}`}>{st.label}</span>
                </div>
                <div className="meta">
                  <span className="ltr" dir="ltr">{r.phone}</span>
                  {r.email && <> · <span className="ltr" dir="ltr">{r.email}</span></>}
                  {r.category && <> · {r.category}</>}
                  · {fmtDate(r.createdAt)}
                </div>
                <div className="desc">{r.description}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                  {STATUSES.map((s) => (
                    <button key={s.key} className="btn" style={{ padding: '7px 14px', minHeight: 0, fontSize: '0.82rem', background: r.status === s.key ? 'var(--brand)' : 'var(--gray-light)', color: r.status === s.key ? '#fff' : 'var(--gray-dark)' }} onClick={() => changeStatus(r.id, s.key)}>
                      {s.label}
                    </button>
                  ))}
                  <button className="btn" style={{ padding: '7px 14px', minHeight: 0, fontSize: '0.82rem', background: '#fdecea', color: '#b03a2e', marginRight: 'auto' }} onClick={() => remove(r.id)}>حذف</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
