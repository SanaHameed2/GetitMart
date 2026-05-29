# GetItMart — Ecommerce Storefront

An ecommerce storefront built with **TanStack Start** and deployed on cloudflare. It demonstrates a product catalog with basic shopping cart functionality and Stripe checkout integration.

## Features

- **Product catalog** — 12 products across 5 categories (Electronics, Clothing, Accessories, Sports, Home & Kitchen)
- **Search & filter** — Search by name/description, category filters, and sorting (price, rating, reviews)
- **Shopping cart** — Slide-in cart with quantity updates, item removal, and total calculation
- **Product detail pages** — Product descriptions, feature list, ratings, and related products section
- **Stripe checkout** — Checkout flow with success and cancel pages
- **Responsive design** — Mobile-first layout across devices
- **Hero section** with featured product highlight
- **Newsletter signup** section
- **Basic trust indicators** (shipping, checkout, returns, quality)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| State | React Context + useReducer (cart) |
| Payments | Stripe Checkout |
| Deployment | cloudflare |

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm

### Install dependencies

```bash
npm install
