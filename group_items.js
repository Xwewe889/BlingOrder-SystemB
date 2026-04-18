const fs = require('fs');
var c = fs.readFileSync('1_admin.html', 'utf8');

// Group items by category for #1
c = c.replace(
    'const itemsHtml = sortedItems.map(i => {',
    '// Group items by category #1\nconst groupedItems = {};sortedItems.forEach(i=>{const k=i.category||"一般";if(!groupedItems[k])groupedItems[k]=[];groupedItems[k].push(i)});\nconst itemsHtml = Object.entries(groupedItems).map(([cat,items])=>"<span class=\"cat-tag\">"+cat+"</span>"+items.map(i=>i.shortName||i.name+"<span class=\"item-count\">x"+(i.count||1)+"</span>").join(",")).join("<br>");'
);

fs.writeFileSync('1_admin.html', c);
console.log('done');