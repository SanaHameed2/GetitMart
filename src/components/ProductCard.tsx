import { Link } from '@tanstack/react-router'
import { Star, ShoppingCart } from 'lucide-react'
import type { Product } from '@/data/products'
import { useCart } from '@/context/CartContext'

const BADGE_COLORS: Record<string, string> = {
  'Best Seller': 'bg-amber-100 text-amber-800',
  New: 'bg-green-100 text-green-800',
  Sale: 'bg-red-100 text-red-800',
  Handmade: 'bg-purple-100 text-purple-800',
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={12}
            className={star <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
          />
        ))}
      </div>
      <span className="text-xs text-gray-500">
        {rating.toFixed(1)} ({count.toLocaleString()})
      </span>
    </div>
  )
}

export function ProductCard({ product }: { product: Product }) {
  const { dispatch } = useCart()

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* Image */}
      <Link to="/products/$productId" params={{ productId: product.id.toString() }} className="block relative overflow-hidden">
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${BADGE_COLORS[product.badge] ?? 'bg-gray-100 text-gray-800'}`}>
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">Out of Stock</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-indigo-600 font-medium mb-1">{product.category}</p>
        <Link to="/products/$productId" params={{ productId: product.id.toString() }}>
          <h3 className="font-semibold text-gray-900 leading-snug hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => dispatch({ type: 'ADD_ITEM', product })}
            disabled={!product.inStock}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
