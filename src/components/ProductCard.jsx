import { Link } from 'react-router-dom';
import { IconArrow } from './Icons.jsx';

export default function ProductCard({ product, index }) {
  return (
    <Link to={`/products/${product.slug}`} className="pcard" aria-label={product.name}>
      <div className="pcard-img">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="pcard-num">{index + 1}</span>
      </div>
      <div className="pcard-body">
        <h3>{product.name}</h3>
        <p>{product.short}</p>
        <span className="pcard-link">مشاهده محصولات <span className="arr"><IconArrow size={16} /></span></span>
      </div>
    </Link>
  );
}
