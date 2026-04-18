const fs = require('fs');
var c = fs.readFileSync('1_admin.html', 'utf8');
// Hide overlay by default
c = c.replace(
  'style="display: flex;"',
  'style="display: none;"'
);
// Also add auto-start
c = c.replace('<script>', '<script>initVoice();</script><script>');
fs.writeFileSync('1_admin.html', c);
console.log('done');