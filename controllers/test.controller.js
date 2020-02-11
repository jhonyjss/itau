const exec = require('exec-cmd');
const fs = require('fs');
const path = require("path");


exports.executeTest = async function (req, res, next) {

    try {
        // Escrever num FileSystem o script de teste utilizado

        fs.readFile(path.join(__dirname, '..', 'tests', 'browser.js'), 'utf8', function (err, data) {
            if (err) throw err;
            fs.writeFile(path.join(__dirname, '..', 'tests','filesystem','browser.txt'), data, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        });





       /*  fs.writeFile('../tests/filesystem/', lyrics, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            console.log('!');
        }); */


        return exec('yarn test-browser').then(res => {
            return exec('killall node');
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}