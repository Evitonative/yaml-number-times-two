const yaml = require('js-yaml');
const fs = require('fs');

// SET FILE PATH
let filePath = 'file.yml';
if(!filePath) return;

let doc;
try {
    doc = yaml.load(fs.readFileSync(filePath));
} catch (e) {
    console.error(e);
    return;
}

const result = yaml.dump(goThrough(doc));
console.log(result);

function goThrough(obj) {
    for (const [key, value] of Object.entries(obj)) {
        // Recursion for objects
        if (typeof value === 'object') {
            obj[key] = goThrough(value);
            continue;
        }

        // Multiply numbers by 2
        if (typeof value === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
}