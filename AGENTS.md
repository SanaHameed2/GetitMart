# AGENTS.md

Reference for AI agents and developers working on this codebase.

## Project Overview

GetItMart is an ecommerce storefront built with TanStack Start (SSR React framework) and deployed on Netlify. It features a product catalog, cart, search/filter, and Stripe checkout.

## Directory Structure

```
src/
├── components/
│   ├── BuyButton.tsx          # Direct Stripe checkout button (single-product buy now)
│   ├── CartDrawer.tsx         # Slide-in cart sidebar (global, rendered in root layout)
│   ├── Footer.tsx             # Site footer with nav links and social icons
│   ├── Header.tsx             # Sticky header with logo, nav, and cart icon badge
│   └── ProductCard.tsx        # Reusable card for the product grid (image, rating, add-to-cart)
├── context/
│   └── CartContext.tsx        # React Context + useReducer cart state (CartProvider, useCart)
├── data/
│   └── products.ts            # Product catalog array + categories array + Product interface
├── lib/
│   └── stripe.ts              # Server functions: getStripeEnabled, createCheckoutSession
├── routes/
│   ├── __root.tsx             # Root layout: CartProvider, Header, CartDrawer, Footer, Outlet
│   ├── index.tsx              # Home page: hero, trust badges, search/filter, product grid, newsletter
│   ├── products/
│   │   └── $productId.tsx     # Product detail: image, features, add-to-cart, related products
│   └── checkout/
│       ├── success.tsx        # Post-payment success page
│       └── cancel.tsx         # Cancelled checkout page
├── router.tsx                 # TanStack Router instantiation
└── styles.css                 # Tailwind import + global resets
```

## Key Patterns

### Cart State

Cart state lives in `src/context/CartContext.tsx` using React Context + `useReducer`. The `CartProvider` wraps the entire app in `__root.tsx`. Use the `useCart()` hook anywhere to access `state`, `dispatch`, `totalItems`, `totalPrice`.

Actions: `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QUANTITY`, `CLEAR_CART`, `TOGGLE_CART`, `OPEN_CART`, `CLOSE_CART`.

### Server Functions (Stripe)

`src/lib/stripe.ts` uses TanStack Start's `createServerFn` to run server-side code. These functions are called from client components but execute on the server:
- `getStripeEnabled()` — checks if `STRIPE_SECRET_KEY` is set
- `createCheckoutSession({ data: productId })` — creates a Stripe session and returns the redirect URL

### File-Based Routing

Routes map to files under `src/routes/`:
- `index.tsx` → `/`
- `products/$productId.tsx` → `/products/:id`
- `checkout/success.tsx` → `/checkout/success`
- `api.*.ts` files → API endpoints

### Product Data

`src/data/products.ts` exports:
- `products` (default) — array of `Product` objects
- `categories` — `string[]` of category names including `'All'`

The `Product` interface includes: `id`, `name`, `image`, `description`, `shortDescription`, `price`, `category`, `badge?`, `rating`, `reviewCount`, `inStock`, `features?`.

## Conventions

- **Components**: PascalCase files and exports
- **Hooks/utils**: camelCase
- **Path alias**: `@/` maps to `src/` (configured in `tsconfig.json`)
- **Styling**: Tailwind CSS 4 utility classes; no CSS modules
- **Types**: Strict TypeScript; use `type` imports for type-only imports
- **No comments** unless behavior is non-obvious
- **State**: React Context + useReducer for cart (no Zustand dependency)

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `STRIPE_SECRET_KEY` | No | Enables Stripe checkout |
| `SITE_URL` | No | Stripe redirect base URL (defaults to `http://localhost:3000`) |

## Non-Obvious Decisions

- The `CartDrawer` is rendered in the root layout so it persists across all route navigations.
- Cart is intentionally in-memory (React Context) — it does not persist across page reloads. For persistence, add localStorage serialization in `CartContext.tsx`.
- Stripe `unit_amount` is `price * 100` because Stripe expects amounts in cents; product prices are stored in dollars.
- Product images use Unsplash URLs with `?w=600&q=80` query params for optimized loading.
