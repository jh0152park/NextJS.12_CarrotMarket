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

-   database platform mean is they are give us some database
-   serverless mean is we don't need to manage the server not a dose not exist server

And make sure create a new account to use.

Go to [planetsclae](https://planetscale.com/)

### How to install planetscale cli?

Check it out the planetscale cli [github](https://github.com/planetscale/cli)

In my case, using mac os, so just run below command to install

-   run `brew install planetscale/tap/pscale`

### How to create a new database?

1. check can see below comment after run `pscale`
    - `pscale is a CLI library for communicating with PlanetScale's API.`
2. run `pscale auth` for login to planetscale
3. run `pscale region list` to check SLUG name for create a dababase
    ```
     NAME (15)                                          SLUG                          ENABLED
    -------------------------------------------------- ----------------------------- ---------
      AWS us-east-1 (N. Virginia)                        us-east                       Yes
      AWS us-west-2 (Oregon)                             us-west                       Yes
      AWS eu-west-1 (Dublin)                             eu-west                       Yes
      AWS ap-south-1 (Mumbai)                            ap-south                      Yes
      AWS ap-southeast-1 (Singapore)                     ap-southeast                  Yes
      AWS ap-northeast-1 (Tokyo)                         ap-northeast                  Yes
      AWS eu-central-1 (Frankfurt)                       eu-central                    Yes
      AWS ap-southeast-2 (Sydney)                        aws-ap-southeast-2            Yes
      AWS sa-east-1 (Sao Paulo)                          aws-sa-east-1                 Yes
      GCP us-central1 (Council Bluffs, Iowa)             gcp-us-central1               Yes
      AWS eu-west-2 (London)                             aws-eu-west-2                 Yes
      GCP us-east4 (Ashburn, Virginia)                   gcp-us-east4                  Yes
      GCP northamerica-northeast1 (Montréal, Québec)     gcp-northamerica-northeast1   Yes
      GCP asia-northeast3 (Seoul, South Korea)           gcp-asia-northeast3           Yes
      AWS us-east-2 (Ohio)                               aws-us-east-2                 Yes
    ```
4. run `pscale database create [name of database] --region gcp-asia-northeast3`

    - if occurred a error as `Error: You must add a credit card to your account before creating a database.` juat add credit card at homepage

    ```
    Database carrot-market was successfully created.

    View this database in the browser: https://app.planetscale.com/jh0152park/carrot-market
    ```

5. run `pscale connect [name of database]` to connect and don't close the terminal

    ```
    Secure connection to database carrot-market and branch main is established!.

    Local address to connect your application: 127.0.0.1:3306 (press ctrl-c to quit)
    ```

6. copy the url to DTATBASE_URL of prisma at .env file as `DATABASE_URL="mysql://127.0.0.1:3306/carrot-market"`

7. add relationmode into `datasource db` at schema.prisma file as below for protect abnormal work. Because `planetscale` dose not checked that data is exist or dose not exsit when using foreign keys.

    ```
    generator client {
      provider = "prisma-client-js"
    }

    datasource db {
      provider     = "mysql"
      url          = env("DATABASE_URL")
      relationMode = "prisma"
    }
    ```

8. run `npx prisma db push` for push our db models to db at planetscale

    ```
    🚀  Your database is now in sync with your Prisma schema. Done in 430ms

    Running generate... (Use --skip-generate to skip the generators)

    added 1 package, and audited 370 packages in 3s

    129 packages are looking for funding
      run `npm fund` for details

    found 0 vulnerabilities

    ✔ Generated Prisma Client (v5.9.1) to ./node_modules/@prisma/client in 43ms
    ```

    schema.prisma파일에 새로운 모델을 만들게 되면 해당 명령어 다시한번 입력해주면 됨

    근데 중요한건 pscale connect [db-name] 명령어가 실행되는 상태에서 해야 정상동작 함

9. check our schema at the planetscale

# ✨ Prisma Client

1. run `npm i @prisma/client`
2. create a new client file for `prisma client` like `client.ts`

    ```
    // client.ts
    import {PrismaClient} from "@prisma/client"

    export default new PrismaClient();
    ```

3. we can use our models like a object with PrismaClient like as below
    ```
    client.user.create({
        data: {
            email: "",
            name: ""
          }
        })
    ```

# API Routes

We can not control and manage our DB directly at frontend side.

So we need server side to control and manage our DB, So created a new folder `api` under `pages` folder

# ✨ Twilo
