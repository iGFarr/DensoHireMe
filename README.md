# DensoHireMe.com

This project is a simple React + TypeScript portfolio web application designed to showcase your
skills and experience for engineering roles at DENSO. It includes sections for an introduction,
skills, projects, and contact information. The site is built using [Vite](https://vitejs.dev/) for
fast development and easy deployment.

## Getting Started

1. **Install dependencies**

   Navigate into the project directory and install the dependencies:

   ```bash
   npm install
   ```

2. **Run the development server**

   Start the development server with hot module replacement:

   ```bash
   npm run dev
   ```

   This will launch the app at `http://localhost:5173` (or another available port) where you can
   see your changes live as you develop.

3. **Build for production**

   To generate an optimized production build, run:

   ```bash
   npm run build
   ```

   The compiled files will be output to the `dist` folder.

## Customizing

- Edit `src/components/Home.tsx` to update your personal introduction.
- Update the lists in `src/components/Skills.tsx` and `src/components/Projects.tsx` to reflect
  your actual skills and projects.
- Modify `src/components/Contact.tsx` with your preferred contact details.
- Adjust the styles in `src/index.css` or create additional CSS modules to refine the look and
  feel.

## Deploying

Once you’ve built the project using `npm run build`, you can deploy the contents of the `dist`
directory to GitHub Pages, Netlify, Vercel, or any static hosting service. For GitHub Pages, you
can enable GitHub Actions to automatically build and publish the site when you push changes to
your repository.

## License

This project is provided as‑is without any warranty. Feel free to modify and adapt it for your
personal use.