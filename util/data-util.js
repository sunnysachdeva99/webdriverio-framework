const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');

class Util {

    getArrayObjectFromCSV(csvfile) {

        var data = fs.readFileSync(csvfile);

        // each line from csv file
        var lines = data.toString().split("\n");

        // container of all the lines from csv file as object
        var result = [];

        // headers from csv file
        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {

            // container of object from each row (header and value)
            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            // storing the object of each row in a array container
            result.push(obj);
        }

        // return the array object container
        return result; //JavaScript Array Object
    }



    getJsonObjectFromCSV(csvfile) {
        var data = fs.readFileSync(csvfile);

        // each line from csv file
        var lines = data.toString().split("\n");

        // container of all the lines from csv file as object
        var result = [];

        // headers from csv file
        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {

            // container of object from each row (header and value)
            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            // storing the object of each row in a array container
            result.push(obj);
        }

        // return array of JSON object container
        return JSON.stringify(result); // Array Of JSON Object
    }


    readCSVFile(inputCsvFile) {
        fs.createReadStream(inputCsvFile)
            .pipe(csv())
            .on('data', (data) => {
                // console.log(data);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });
    }

    writeCSVFile(csvFileName, path) {

        const csvWriter = createCsvWriter({
            path: path + csvFileName,
            header: [
                { id: 'name', title: 'Name' },
                { id: 'surname', title: 'Surname' },
                { id: 'age', title: 'Age' },
                { id: 'gender', title: 'Gender' },
            ]
        });

        const data = [
            {
                name: 'John',
                surname: 'Snow',
                age: 26,
                gender: 'M'
            }, {
                name: 'Clair',
                surname: 'White',
                age: 33,
                gender: 'F',
            }, {
                name: 'Fancy',
                surname: 'Brown',
                age: 78,
                gender: 'F'
            }
        ];

        csvWriter
            .writeRecords(data)
            .then(() => console.log('The CSV file was written successfully'));

    }
}


// var util = new Util();
// var arrayObj = util.getArrayObjectFromCSV('./test-data/input.csv');
// var jsonObj = util.getJsonObjectFromCSV('./test-data/input.csv');
// util.readCSVFile('./test-data/input.csv')
// util.writeCSVFile('output.csv', './test-data/')

// console.log("Result 1 ==> ", arrayObj);
// console.log("Result 2 ==> ", jsonObj);

module.exports = new Util();