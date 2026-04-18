const fs = require('fs');
var c = fs.readFileSync('1_admin.html', 'utf8');
// Remove voice check - start directly
c = c.replace(
  'if(!window.speechSynthesis)',
  'if(false)'
);
fs.writeFileSync('1_admin.html', c);
console.log('done');