# Dev Insights Mini Blog

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
  hoc/
    withLogger.tsx
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

The project uses external CSS files and inline styles. `index.css` contains the
global colors, typography, and reset styles, while `App.css` contains the blog
layout and component styles. `Post.tsx` also uses a typed React `style` prop to
color each author. There is conditional styling too: posts by Maya Chen receive
the `team-highlight` class and a coral top border.

## Optimization and higher-order component

The reusable `Post` component is wrapped with `React.memo`. This lets React
reuse an existing post card when its `post` prop has not changed, avoiding an
unnecessary render.

The `withLogger` higher-order component in `src/hoc/withLogger.tsx` wraps the
header and uses `useEffect` to log when the wrapped component mounts and
unmounts. The HOC is typed with `ComponentType` and generic props.

## Reflection

The most useful part of this project was breaking a page into small components
and giving the data a clear TypeScript shape. This made the relationship between
the post list and each individual post easier to follow, and it also made the
markup more reusable.

One challenge was replacing the default Vite screen while keeping the layout
responsive. I handled this by separating global styles from app styles and
using a responsive grid that becomes one column on smaller screens. I would
like to explore connecting the posts to an API and adding a real new-post form
next.

## External packages

- React
- React DOM
- Vite
- TypeScript
- ESLint
