const axios = require('axios');
const readline = require('node:readline');
const fs = require('node:fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a GitHub username: ', (username) => {
    console.log(`Searching for ${username}...`);
    axios.get(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
       let content = response.data.map(repo => repo.name).join('\n');
       fs.writeFile(`${username}.txt`, content, (error) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log('File created successfully!');
       });
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        rl.close();
    });
});