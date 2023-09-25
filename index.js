// Diego Plata - 101354581
// Lab 3 - Full Stack Dev
var http = require("http");
//TODO - Use Employee Module here
const EmployeeModule = require("./Employee.js"); 
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise
// Done

//Define Server Port
const port = process.env.PORT || 8081;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write("<h1>Welcome to Lab Exercise 03</h1>");
            res.end();
        }
       
        else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            const employeeData = EmployeeModule.getAllEmployees(); 
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employeeData));
        }

        else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            const sortedNames = EmployeeModule.getSortedEmployeeNames();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(sortedNames));
        }

        else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            const totalSalary = EmployeeModule.getTotalSalary();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ "total_salary": totalSalary }));
        }
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);

})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});