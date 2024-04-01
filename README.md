# Stack Overflow tags

This is a project of Stack Overflow tags table.

The stack used to create this project:

- 🏎 [Vite](https://vitejs.dev/) — High-performance bundling system

- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces

- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking

- [ESLint](https://eslint.org/) for code linting

- [Prettier](https://prettier.io) for code formatting

- [Husky](https://typicode.github.io/husky/) for hooks on pre commit

## Functionality

- Tags table

- Table sorting

- Table page size changing

- Table pagination

### How to run project

- `npm install` - Install all dependencies

- `npm run dev` - Run project locally

- `npm run storybook` - Run storybook locally

- `npm run test` - Run all tests

### NPM peer dependency issue

If you have a peer dependency conflict issue while resolving: `@testing-library/react-hooks@8.0.1` you need to:

1.  Remove `node_modules`
2.  Run: `npm config set legacy-peer-deps true`
3.  Run: `npm i`

Or just directly:
Run `npm install --legacy-peer-deps`
