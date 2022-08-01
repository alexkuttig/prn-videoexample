module.exports = (componentName) => ({
  content: `// Generated with util/create-view.js
export type ${componentName}Props = {};
export type ${componentName}ViewProps = {};
`,
  extension: `.types.tsx`
});
