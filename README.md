# NextJS Tattoo Studio App

Welcome to the NextJS Tattoo Studio App, bootstrapped using `create-next-app`. This template supports TypeScript and uses the App Router for improved routing and layouts.


## Getting Started

Hit the run button to start the development server.

You can start editing the home page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## API Routes

API routes can be accessed on `/api/hello`. This endpoint can be edited in `app/api/hello/route.ts`.

The `app/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes instead of React pages. For more information, see [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) in the Next.js documentation.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

To make your next App run smoothly in production make sure to deploy your project with [Repl Deployments](https://docs.replit.com/hosting/deployments/about-deployments)!

You can also produce a production build by running `npm run build` and [changing the run command](https://docs.replit.com/programming-ide/configuring-repl#run) to `npm run start`.

## Directory Structure:

my-app/
├── app/
│   ├── api/
│   │   └── hello/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   ├── booking/
│   │   └── page.tsx
│   ├── custom-design/
│   │   └── page.tsx
│   ├── rewards/
│   │   └── page.tsx
│   ├── price-calculator/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   └── checkout/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── booking/
│   │   └── BookingForm.tsx
│   ├── custom-design/
│   │   └── DesignUploader.tsx
│   ├── rewards/
│   │   └── PointsDisplay.tsx
│   ├── price-calculator/
│   │   └── Calculator.tsx
│   ├── cart/
│   │   └── CartItem.tsx
│   └── checkout/
│       └── PaymentForm.tsx
└── lib/
    └── navigation.ts

## Directory Structure Information:

my-app/
├── app/ # Main application pages
│ ├── api/ # API routes
│ ├── layout.tsx # Root layout component
│ ├── page.tsx # Home page
│ ├── booking/ # Booking page
│ ├── custom-design/ # Custom design page
│ ├── rewards/ # Rewards page
│ ├── price-calculator/ # Price calculator page
│ ├── cart/ # Shopping cart page
│ └── checkout/ # Checkout page
├── components/ # Reusable React components
│ ├── layout/ # Layout components (Navbar, Footer)
│ ├── ui/ # UI components (Button, Card)
│ ├── booking/ # Booking-related components
│ ├── custom-design/ # Custom design components
│ ├── rewards/ # Rewards-related components
│ ├── price-calculator/ # Price calculator components
│ ├── cart/ # Shopping cart components
│ └── checkout/ # Checkout components
└── lib/ # Utility functions and helpers
      └── navigation.ts # Navigation logic


