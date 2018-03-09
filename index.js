var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors/safe');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log(colors.blue('Dane przed zapisem'));
    console.log(data);
    
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie', function(err) {
        if(err) {
            throw err;
        }
        console.log(colors.blue('Zapisano!'));
        
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log(colors.blue('Dane po zapisie'));
            console.log(data);
        });
    });
});

fs.readdir('./', function(err, files) {
    if(err) {
        throw err;
    }
    files.forEach(function(file) {
        console.log(file);
        
        fs.writeFile('./storage.txt', files, function(err) {
            if(err) {
                throw err;
            }
            fs.readFile('./storage.txt', function (err, data) {
                if(err) {
                    throw err;
                }
            console.log(data.toString());
            });
        });
    });
});


