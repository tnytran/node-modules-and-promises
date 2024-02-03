//Require the collegeData module:
const collegeData = require('./modules/collegeData');

//Invoke the "initialize" function from collegeData.js:
collegeData.initialize()
    .then(function(dataCollection) {
        //console.log(`Successfully imported data:`);

        //Invoke the "getAllStudents" function from collegeData.js:
        collegeData.getAllStudents(dataCollection)
            .then(function(students) {
                console.log(`Successfully retrieved ${students.length} students`);
            })
            .catch(function(error) {
                console.error(`Error retrieving students: ${error}`);
            });

        //Invoke the "getCourses" function from collegeData.js:
        collegeData.getCourses(dataCollection)
            .then(function(courses) {
                console.log(`Successfully retrieved ${courses.length} courses`);
            })
            .catch(function(error) {
                console.error(`Error retrieving courses: ${error}`);
            });

        //Invoke the "getTAs" function from collegeData.js:
        collegeData.getTAs(dataCollection)
            .then(function(tas) {
                console.log(`Successfully retrieved ${tas.length} TAs`);
            })
            .catch(function(error) {
                console.error(`Error retrieving TAs: ${error}`);
            });

    })

    //Handle error message when invoke failed:
    .catch(function(error) {
        console.error(`Failed to import data ${error}`);
    });
