# SvelteKit For Beginners

Learn full stack web development with SvelteKit.

## Project Setup

🧑‍🤝‍🧑 Clone the project

```sh
git clone https://github.com/gustavocadev/sveltekit-prisma-example
```

📦️ Install dependencies

```sh
npm i
```

## Database

✏️ Rename `.env.example` to `.env`

```
DATABASE_URL="mysql://root:@localhost:3306/playground"
```

🔨 Create the database from the Prisma schema

```sh
npx prisma db push
```

🌱 Seed the database

```sh
npx prisma db seed
```

🔎 Inspect your database with Prisma Studio

```
npx prisma studio
```

## Development

🦄 Start the project and open http://localhost:5173/

```sh
npm run dev
```

## Production

🔨 Build and preview

```sh
npm run build && npm run preview
```