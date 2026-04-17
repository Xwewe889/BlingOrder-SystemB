const fs = require('fs');
const c = fs.readFileSync('2_menu-edit.html', 'utf8');
const newText = `<input type="text" id="itemShortName" placeholder="後台簡稱（顯示給內場看）" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;margin-bottom:15px;font-size:14px;">

    <div class="addon-section">`;

const oldText = `    <div class="addon-section">`;

const result = c.replace(oldText, newText);
fs.writeFileSync('2_menu-edit.html', result);
console.log('done');