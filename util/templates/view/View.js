module.exports = (componentName) => ({
  content: `// Generated with util/create-view.js
import React from 'react';

import { ${componentName}Props } from './${componentName}.types';
import ${componentName}View from './${componentName}.view';

const ${componentName}: React.FC<${componentName}Props> = (props) => (
    <${componentName}View />
);

export default ${componentName};
`,
  isIndex: true,
  extension: `.tsx`
});
