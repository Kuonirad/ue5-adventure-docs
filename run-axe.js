const fs = require('fs');
const { JSDOM } = require('jsdom');

// 1. Set up JSDOM
const html = fs.readFileSync('index.html', 'utf-8');
const dom = new JSDOM(html);

// 2. Set the globals
global.window = dom.window;
global.document = dom.window.document;

// 3. Require axe-core AFTER globals are set
const axe = require('axe-core');

// 4. Run the audit
axe.run(document, {
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa']
  }
}).then(results => {
  if (results.violations.length === 0) {
    console.log('No accessibility violations found!');
  } else {
    console.log('Accessibility violations found:');
    results.violations.forEach(violation => {
      console.log(`
- Violation: ${violation.id} (${violation.impact})
  Description: ${violation.description}
  Help: ${violation.helpUrl}
  Nodes:`);
      violation.nodes.forEach(node => {
        console.log(`  - ${node.html}`);
      });
    });
  }
  // Clean up the globals
  delete global.window;
  delete global.document;
}).catch(err => {
  console.error('Error running axe:', err);
  // Clean up the globals
  delete global.window;
  delete global.document;
});
