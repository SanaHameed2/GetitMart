export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: string
  badge?: string
  rating: number
  reviewCount: number
  inStock: boolean
  features?: string[]
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    description:
      'Experience crystal-clear audio with our premium wireless headphones. Featuring 40-hour battery life, active noise cancellation, and premium drivers that deliver deep bass and crisp highs. Perfect for work, travel, and everyday listening.',
    shortDescription: 'Premium ANC headphones with 40hr battery life.',
    price: 249,
    category: 'Electronics',
    badge: 'Best Seller',
    rating: 4.8,
    reviewCount: 2341,
    inStock: true,
    features: ['Active Noise Cancellation', '40-Hour Battery', 'Bluetooth 5.0', 'Foldable Design'],
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    description:
      'Track your health and fitness goals with this advanced smartwatch. Monitor your heart rate, sleep patterns, and over 100 workout modes. Water-resistant up to 50 meters with a stunning AMOLED display.',
    shortDescription: 'Advanced fitness tracker with health monitoring.',
    price: 199,
    category: 'Electronics',
    badge: 'New',
    rating: 4.6,
    reviewCount: 1872,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS Tracking', '50m Water Resistance', 'AMOLED Display'],
  },
  {
    id: 3,
    name: 'Minimalist Leather Backpack',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    description:
      'Crafted from full-grain vegetable-tanned leather, this backpack ages beautifully and only gets better with time. Features laptop compartment up to 15", multiple organizer pockets, and solid brass hardware.',
    shortDescription: 'Full-grain leather backpack for professionals.',
    price: 189,
    category: 'Accessories',
    rating: 4.9,
    reviewCount: 543,
    inStock: true,
    features: ['Full-Grain Leather', '15" Laptop Compartment', 'Brass Hardware', 'Water Resistant'],
  },
  {
    id: 4,
    name: 'Ultralight Running Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    description:
      'Engineered for speed and comfort, these running shoes feature a responsive foam midsole and breathable knit upper. Weighing just 220g, they feel like running on air while providing excellent support.',
    shortDescription: 'Lightweight performance running shoes.',
    price: 139,
    category: 'Sports',
    badge: 'Sale',
    rating: 4.7,
    reviewCount: 3201,
    inStock: true,
    features: ['Responsive Foam', 'Knit Upper', '220g Ultra Light', 'Grip Outsole'],
  },
  {
    id: 5,
    name: 'Portable Espresso Maker',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    description:
      'Brew barista-quality espresso anywhere with this compact manual espresso maker. No electricity required — just hot water and your favorite ground coffee. Perfect for camping, travel, or the office.',
    shortDescription: 'Make café-quality espresso anywhere.',
    price: 89,
    category: 'Home & Kitchen',
    rating: 4.5,
    reviewCount: 987,
    inStock: true,
    features: ['No Electricity Needed', 'BPA-Free Materials', 'Easy Cleaning', 'Compact Design'],
  },
  {
    id: 6,
    name: 'Merino Wool Crewneck Sweater',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80',
    description:
      'Made from 100% fine merino wool, this classic crewneck sweater is naturally temperature-regulating, odor-resistant, and incredibly soft. Available in a range of timeless colors.',
    shortDescription: '100% merino wool, naturally temperature regulating.',
    price: 129,
    category: 'Clothing',
    rating: 4.8,
    reviewCount: 762,
    inStock: true,
    features: ['100% Merino Wool', 'Temperature Regulating', 'Odor Resistant', 'Machine Washable'],
  },
  {
    id: 7,
    name: 'Ceramic Pour-Over Coffee Set',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80',
    description:
      'A beautifully crafted ceramic pour-over set that elevates your morning ritual. Hand-thrown by artisans, this set includes the dripper, server, and matching mug. Each piece is unique.',
    shortDescription: 'Handcrafted ceramic pour-over set.',
    price: 79,
    category: 'Home & Kitchen',
    badge: 'Handmade',
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    features: ['Hand-Thrown Ceramic', 'Includes Dripper & Server', 'Dishwasher Safe', 'Food Grade Glaze'],
  },
  {
    id: 8,
    name: 'Mechanical Keyboard',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    description:
      'A premium tenkeyless mechanical keyboard with per-key RGB backlighting, programmable macros, and your choice of switch type. Built with a solid aluminum frame that will last for decades.',
    shortDescription: 'TKL mechanical keyboard with RGB and aluminum frame.',
    price: 169,
    category: 'Electronics',
    rating: 4.7,
    reviewCount: 1654,
    inStock: true,
    features: ['Per-Key RGB', 'Aluminum Frame', 'Programmable Macros', 'USB-C Detachable Cable'],
  },
  {
    id: 9,
    name: 'Yoga Mat Pro',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80',
    description:
      'Designed for serious practitioners, this 6mm natural rubber mat provides superior grip, cushioning, and alignment guides. Non-toxic, eco-friendly, and comes with a carrying strap.',
    shortDescription: 'Professional natural rubber yoga mat.',
    price: 95,
    category: 'Sports',
    rating: 4.6,
    reviewCount: 2109,
    inStock: true,
    features: ['Natural Rubber', '6mm Cushioning', 'Alignment Guides', 'Eco-Friendly'],
  },
  {
    id: 10,
    name: 'Linen Button-Down Shirt',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    description:
      'This relaxed-fit linen shirt is perfect for warm weather. Made from 100% European linen, it gets softer with every wash and develops a beautiful lived-in look over time.',
    shortDescription: '100% European linen, relaxed fit.',
    price: 85,
    category: 'Clothing',
    rating: 4.4,
    reviewCount: 893,
    inStock: true,
    features: ['100% European Linen', 'Relaxed Fit', 'Coconut Shell Buttons', 'Breathable'],
  },
  {
    id: 11,
    name: 'Wireless Charging Pad',
    image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf5e20?w=600&q=80',
    description:
      'A sleek 15W wireless charging pad compatible with all Qi-enabled devices. Charges up to 3x faster than standard wireless chargers with smart temperature control and foreign object detection.',
    shortDescription: '15W fast wireless charging for all Qi devices.',
    price: 49,
    category: 'Electronics',
    badge: 'Sale',
    rating: 4.3,
    reviewCount: 3421,
    inStock: true,
    features: ['15W Fast Charge', 'Qi Compatible', 'Temperature Control', 'LED Indicator'],
  },
  {
    id: 12,
    name: 'Cast Iron Skillet',
    image: 'https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?w=600&q=80',
    description:
      'A pre-seasoned 12-inch cast iron skillet that only improves with use. Retains heat exceptionally well for perfect searing, baking, and frying. Oven-safe up to 500°F.',
    shortDescription: 'Pre-seasoned 12" cast iron skillet.',
    price: 59,
    category: 'Home & Kitchen',
    rating: 4.8,
    reviewCount: 5621,
    inStock: true,
    features: ['Pre-Seasoned', 'Oven Safe to 500°F', 'Works on All Stovetops', 'Lifetime Warranty'],
  },
]

export const categories = ['All', 'Electronics', 'Clothing', 'Accessories', 'Sports', 'Home & Kitchen']

export default products
