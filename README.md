# NextJS.12_CarrotMarket

<div>
  <img width="300" height="300" src="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMTRfMjIw/MDAxNjM0MTM5NDUyMTMw.LQliGvqqaeaScoAJQOYq3WhxapwGyjZjsfPSBMAuiYEg.WRu1NpNPXpJyMesthhuzSfogPnMFihMCGj9917c_PXog.JPEG.empl/IMG_7576.jpg?type=w800" />
</div>

# ✨ Setup

1. run `npx create-next-app@latest --typescript` and delete `home.module.css` and `document.tsx`
2. run `npm install -D tailwindcss postcss autoprefixer`
3. run `npx tailwindcss init -p` (If already exist the `tailwind.config.ts`, then skip)
4. and put the specific path into `tailwind.config.ts` like `"./pages/**/*.{js,ts,jsx,tsx,mdx}"`
    - however everything already done when we created with `npx create-next-app@latest --typescript` command
5. fixed `../styles/globals.css` file as below
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
