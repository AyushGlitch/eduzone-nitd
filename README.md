# Eduzone-NIT Delhi Setup and Production

## Setup Instructions

To set up the project locally, follow these steps:

1. **Install Docker**: Install Docker on your machine if you haven't already.
2. **Install Docker Compose**: Install Docker Compose, which will be used to manage the PostgreSQL database container.
3. **Start the Database**: Run the command `docker-compose up` to start the PostgreSQL database container.
4. **Set up Prisma**: Run the command `npm run db:setup` to set up the Prisma ORM and seed the database with initial data.
5. **Start the Development Server**: Run the command `npm run dev` to start the Next.js development server.

## Production Setup

For production or static site generation, follow these steps:

1. **Modify Next.config.mjs**: In the `next.config.mjs` file, comment out the development configuration and uncomment the production configuration.
2. **Build the Static Site**: Run the command `npm run build` to build the static HTML pages for all possible dynamic routes (currently 195 pages).
3. **Host the Static Site**: After the build process completes, an `out` folder will be created containing the static website content. You can zip the files in this folder and upload them to any server or hosting platform of your choice.

## Static Site Generation and App Router

Eduzone NIT-Delhi utilizes Next.js's App Router and Static Site Generation (SSG) for dynamic routes. The `generateStaticParams` function is used to generate static parameters for dynamic routes, allowing for efficient pre-rendering of these pages during the build process.

By leveraging SSG, we can deliver a fast and performant experience to users, as the static HTML pages are served directly without the need for server-side processing for each request. This approach is particularly beneficial for our use case, where the content is the same for all users, and there is no requirement for personalized data or logins.
