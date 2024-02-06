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
