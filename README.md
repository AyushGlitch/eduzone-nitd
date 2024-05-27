### You can visit the live site at: https://eduzonenitd.freewebhostmost.com/

# Eduzone-NIT Delhi

Welcome to Eduzone NIT-Delhi! I'm Ayush Aryan Singh (221210026), a student of Computer Science and Engineering from the batch of 2026, and I'm excited to introduce you to this platform.

## Our Mission

At Eduzone NIT-Delhi, our mission is clear: to make essential study materials easily accessible to students like you. Being a student myself, I understand the struggles of finding the right resources, especially during the stressful exam periods. That's why I created this platform—to provide a centralized hub where you can access past year question papers, textbooks, and other relevant materials tailored to the courses and branches offered at the National Institute of Technology, Delhi.

## Technology Stack

To bring Eduzone NIT-Delhi to life, I've relied on a range of technologies:

- **Next.js**: Leveraging Next.js for seamless navigation and user experience through server-side rendering.
- **Prisma**: Prisma provides a robust ORM for efficient data management.
- **PostgreSQL**: Ensures data reliability and scalability.
- **Tailwind CSS**: Facilitates crafting sleek and responsive user interfaces, enhancing the overall browsing experience.
- **Google Drive**: Used to store the study materials, ensuring easy access and quick downloads.
- **ShadcnUI**: Used for simple and clean UI components like Cards & Buttons.
- **Prettier and ESLint**: Used for code formatting and linting, ensuring clean and consistent code.
- **Docker**: Used to containerize the PostgreSQL database.

## Why Static Site Generation?

I chose to implement Static Site Generation (SSG) for Eduzone NIT-Delhi to ensure consistent accessibility and reliability. Since all users have access to the same pages with the same data, and there's no need for personalized data such as logins, SSG was the optimal choice. By pre-rendering static HTML files for each page, I minimize server load and optimize performance, particularly during peak periods such as exam seasons.

Hosting on free servers from platforms like GoogieHost and FreeWebHostMost enables me to maintain our services without incurring costs. SSG allows for efficient caching and serving of pre-built pages, reducing the need for server-side processing for every request.

## Open Source Initiative

Eduzone NIT-Delhi is a personal project that I'm passionate about. That's why the codebase is open-sourced on GitHub, allowing for transparency, collaboration, and community-driven development. I invite my fellow college mates from NIT Delhi to contribute to this project, as together, we can continuously enhance and refine our platform to meet the evolving needs of the student community.

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

## Contributing

We welcome contributions from the NIT Delhi student community! If you'd like to contribute to Eduzone NIT-Delhi, please feel free to submit issues or pull requests on our GitHub repository. Together, we can make this platform even better for all students.
