const fs = require('fs');
var c = fs.readFileSync('1_admin.html', 'utf8');
// Fix initVoice to call startLoad
c = c.replace(
  'function initVoice() { isSystemReady = true; document.getElementById(\'voice-overlay\').style.display=\'none\'; window.speechSynthesis.speak(new SpeechSynthesisUtterance("系統啟動")); }',
  'function initVoice() { isSystemReady = true; document.getElementById(\'voice-overlay\').style.display=\'none\'; setTimeout(startLoad, 100); }'
);
fs.writeFileSync('1_admin.html', c);
console.log('done');