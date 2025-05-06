# Next.js Project for v0 Deployment

This project is ready for deployment on [v0](https://v0.dev/) or any standard Next.js hosting platform.

## Key Notes
- Only `next.config.js` is used. Any deprecated or unrecognized options (like `swcMinify`) have been removed.
- TypeScript and ESLint errors are ignored during build for smoother deployment (see `next.config.js`).
- All dependencies are up-to-date for Next.js 15.

## Deployment Instructions
1. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
2. **Build the project:**
   ```sh
   pnpm build
   # or
   npm run build
   # or
   yarn build
   ```
3. **Start the production server:**
   ```sh
   pnpm start
   # or
   npm start
   # or
   yarn start
   ```

## For v0 Deployment
- Upload this project as a zip or connect your repo.
- v0 will use the `build` and `start` scripts from `package.json`.

---

If you encounter any issues, ensure you are not using any deprecated Next.js config options and that only one config file exists (`next.config.js`). 