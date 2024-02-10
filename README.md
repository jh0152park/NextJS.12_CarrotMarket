# NextJS.12_CarrotMarket

<div>
  <img width="300" height="300" src="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMTRfMjIw/MDAxNjM0MTM5NDUyMTMw.LQliGvqqaeaScoAJQOYq3WhxapwGyjZjsfPSBMAuiYEg.WRu1NpNPXpJyMesthhuzSfogPnMFihMCGj9917c_PXog.JPEG.empl/IMG_7576.jpg?type=w800" />
</div>

# ✨ Setup

1. run `npx create-next-app@latest --typescript` and delete `home.module.css` and `document.tsx`
2. run `npm install -D tailwindcss postcss autoprefixer`
3. run `npx tailwindcss init -p` (If already exist the `tailwind.config.ts`, then skip)
4. and put the specific path into `tailwind.config.ts` like `"./pages/**/*.{js,ts,jsx,tsx,mdx}"`
    - however probably everything already done when we created with `npx create-next-app@latest --typescript` command
5. fixed `../styles/globals.css` file as below

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

# ✨ Tailwind

### What is Tailwind?

Tailwind is a utility-first CSS framework(not a library) packed with classes. And utility mean is tailwind hass a lot of classes names. Litrally tailwind is huge, fat, massive css class name bundle

### Tiny tip🍯

Basically the style of tailwind is a applies from `small size to large size(mobile to pc screen)`

So, would be better make design for mobile version at the beginning and to pc version

And obviously the style of `sm` is gonna be affect to whole size if dose not use different size like `md` or `lg`, the point is there is no end condition. And size are `sm md lg xl 2xl 3xl etc...`

### Just In Time Compiler

Before tailwind version 3.0 tailwind was literally bunch of a lot of css

So, everything gonna be removed except used when build and deployment at before 3.0 version, and it was called `purging`

But now we can make a stack of many modifires like `black:sm:hover` due to JIT(Just In Time Compiler)

JIT is watching our code and creating the class name what we used🔥

Also we had to put the specific style when wanna dont use tailwind style like `fontSize: 1200px`, however by JIT we can use like it `className="text-[1200px]"`, `className="text-[#fff]"`, `className="bg-[url()]"`

# ✨ What is Prisma?

Prisma is `Node.js` and `TypeScript` ORM(Object Relational Mapping), basically doing like a translator.

Literally a bridge that helps you use a database using only TypeScript without SQL statements.

And have to explain to prisma how looks like our database into `schema.prisam` file.

### Prisma setup

1. Install VSCode prisam extension and name is `Prisam` made by prisma
2. run `npm i prisma -D`
3. run `npx prisma init` then generated prisam folder and .env file
    ```
    Next steps:
    1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
    2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
    3. Run prisma db pull to turn your database schema into a Prisma schema.
    4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
    ```
    - 3-1. chaanged the `datasource provider` from `schema.prisma` to what i gonna use as below. In my case is `mysql`
        ```
        datasource db {
          provider = "mysql"
          url      = env("DATABASE_URL")
        }
        ```
4. create a model to using at database into `schema.prisma` file as below
    ```
    model User {
      id Int @id @default(autoincrement())
    }
    ```

# ✨ What is PlanetScale?

PlanetScale is serverless database platfrom compatible with mysql.

- database platform mean is they are give us some database
- serverless mean is we don't need to manage the server not a dose not exist server

And make sure create a new account to use.

Go to [planetsclae](https://planetscale.com/)