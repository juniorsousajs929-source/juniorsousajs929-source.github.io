const fs = require('fs');
const text = fs.readFileSync('assets/index-EKBqwSm3.js', 'utf8');
const urls = text.match(/https?:\/\/[^\s"'<>}\]]+/g);
if (urls) {
    console.log([...new Set(urls)].join('\n'));
} else {
    console.log('No URLs found');
}
