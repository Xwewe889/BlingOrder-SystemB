const fs = require('fs');
var c = fs.readFileSync('1_admin.html', 'utf8');
// Remove overlay completely
c = c.replace(
  '<div id="voice-overlay"><button class="start-btn" onclick="initVoice()">啟動系統</button></div>',
  ''
);
fs.writeFileSync('1_admin.html', c);
console.log('done');