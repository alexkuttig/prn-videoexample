module.exports = (componentName) => ({
  content: `// Generated with util/create-view.js
import React from 'react';
import {View} from 'react-native';

import { ${componentName}ViewProps } from './${componentName}.types';
import { styles } from './${componentName}.styles';

const ${componentName}View: React.FC<${componentName}ViewProps> = (props) => (
    <View>New View</View>
);

export default ${componentName}View;
`,
  extension: `.view.tsx`
});
