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
