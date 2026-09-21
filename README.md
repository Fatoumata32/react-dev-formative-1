Dev Insights Mini Blog

Dev Insights is a small internal blog for sharing quick web development tips,
insights, and updates. It is built with React, TypeScript, and Vite.

## Run the project

Make sure Node.js is installed, then run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

Other useful commands:

```bash
npm run build
npm run lint
npm run preview
```

## Project structure

```text
src/
  components/
    Header.tsx
    Post.tsx
    PostList.tsx
  App.tsx
  App.css
  index.css
  types.ts
```

The project uses TypeScript rather than JavaScript. `PostData` in `src/types.ts`
defines the shape of every post, and component props use that type so that
incorrect post data can be found during the build.

## Component choices

The application uses functional components because the page is made from small,
focused pieces of UI and does not need class lifecycle methods. `App` composes
the `Header` and `PostList` components. `PostList` owns the sample post data
and maps each post to a reusable `Post` component. Each post has a unique `id`
used as its React `key`.

## Styling

The project uses external CSS files. `index.css` contains the global colors,
typography, and reset styles, while `App.css` contains the blog layout and
component styles. There is also conditional styling in `Post.tsx`: posts by
Maya Chen receive the `team-highlight` class and a coral top border.

## Optimization and next steps

The next development milestone will add `React.memo` to the reusable `Post`
component and a small `withLogger` higher-order component that logs mounting
and unmounting. These will be added as separate commits so the development
history shows the project growing incrementally.

## Reflection

The most useful part of this project so far has been breaking a page into
small components and giving the data a clear TypeScript shape. This made the
relationship between the post list and each individual post easier to follow,
and it also made the markup more reusable.

One challenge was replacing the default Vite screen while keeping the layout
responsive. I handled this by separating global styles from app styles and
using a simple responsive grid that becomes one column on smaller screens. I
would like to explore connecting the posts to an API and adding a real new-post
form next.

## External packages

- React
- React DOM
- Vite
- TypeScript
- ESLint

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
