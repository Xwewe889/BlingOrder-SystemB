const fs = require('fs');
var c = fs.readFileSync('1_admin.html', 'utf8');
// Add freeOrder function
var freeOrderFunc = `
    function freeOrder(id) {
        if(!confirm('確定要招待此訂單嗎？')) return;
        db.ref('orders_v2/' + id).update({ 
            payStatus: "免單", 
            isFreeOrder: true,
            totalAmount: 0
        });
    }
`;
// Add button after ship button
c = c.replace(
    '<button class="btn-base btn-ship"',
    '<button class="btn-base" style="background:#9b87f5;color:white;box-shadow:0 4px 0 #7c6bc9;margin-top:5px;" onclick="freeOrder(' + "'${id}'" + ')">🎁 招待</button>\n                                    <button class="btn-base btn-ship"'
);
// Add function before </script>
c = c.replace('</script>', freeOrderFunc + '\n</script>');
fs.writeFileSync('1_admin.html', c);
console.log('done');