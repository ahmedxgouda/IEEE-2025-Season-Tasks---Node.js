const { createInterface } = require('node:readline');
const { readFile } = require('node:fs');

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the file name: ', (filename) => {
    readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        const lines = data.split('\n');
        let found = false;
        readline.question('Enter the query string: ', (query) => {
            lines.forEach((line) => {
                if (line.includes(query)) {
                    console.log(line);
                    found = true;
                }
            });
            if (!found) {
                // A more funny sentence :)
                console.log("Don't waste my resources. You must pay for this!");
            }
            readline.close();
        });
    });
});
