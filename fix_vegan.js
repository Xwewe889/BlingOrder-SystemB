const fs = require('fs');
var c = fs.readFileSync('index.html', 'utf8');

// Add groupVegan
c = c.replace(
  'const groupTemp = ["冰", "去冰", "熱"]; const groupSugar = ["無糖", "加糖"];',
  'const groupTemp = ["冰", "去冰", "熱"]; const groupSugar = ["無糖", "加糖"]; const groupVegan = ["五辛素", "蛋奶素"];'
);

// Update setOpt to handle vegan group
c = c.replace(
  'let targetGroup = groupTemp.includes(val) ? groupTemp : (groupSugar.includes(val) ? groupSugar : []);',
  'let targetGroup = groupTemp.includes(val) ? groupTemp : (groupSugar.includes(val) ? groupSugar : (groupVegan.includes(val) ? groupVegan : []));'
);

fs.writeFileSync('index.html', c);
console.log('done');