import { useEffect } from 'react';

// Sets document.title and meta description per page for Persian SEO.
export default function Seo({ title, description }) {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} | پارس بزرگمهر` : 'پارس بزرگمهر | تجهیزات بالابری صنعتی';
    let meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content');
    if (description) {
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
    return () => {
      document.title = prev;
      if (meta && prevDesc) meta.setAttribute('content', prevDesc);
    };
  }, [title, description]);
  return null;
}
