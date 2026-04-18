const fs = require('fs');
var c = fs.readFileSync('index.html', 'utf8');
c = c.replace(
  'items.push({ name: drinkDisplay, price: 0, category: "飲品", count: 1, shortName: drinkShortName });',
  'items.push({ name: drinkDisplay + "[附]", price: 0, category: "飲品", count: 1, shortName: drinkShortName, linkedTo: name });'
);
fs.writeFileSync('index.html', c);
console.log('done');