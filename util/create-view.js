const fs = require('fs');
const templates = require('./templates/view');

const viewName = process.argv[2];

if (!viewName) {
  console.error('Please supply a valid view name');
  process.exit(1);
}

console.log('Creating View Templates with name: ' + viewName);

const viewDirectory = `./src/views/${viewName.toLowerCase()}`;

if (fs.existsSync(viewDirectory)) {
  console.error(`View ${viewName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(viewDirectory);

const generatedTemplates = templates.map(template => template(viewName));

generatedTemplates.forEach(template => {
  const name = template.isIndex ? 'index' : viewName;
  fs.writeFileSync(
    `${viewDirectory}/${name}${template.extension}`,
    template.content,
  );
});

console.log('Successfully created view under: ' + viewDirectory);
