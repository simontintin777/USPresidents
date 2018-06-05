// convert data in excel to json file
convertExcel = require('excel-as-json').processFile;

convertExcel('Presidents.xlsx', 'Presidents.json', {omitEmtpyFields: true});