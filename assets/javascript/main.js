 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyCiyNPG1CrVmP4iLqWdke2RF5ywdnE26-A",
     authDomain: "employee-data-mgmt-98d83.firebaseapp.com",
     databaseURL: "https://employee-data-mgmt-98d83.firebaseio.com",
     // projectId: "employee-data-mgmt-98d83",
     storageBucket: "employee-data-mgmt-98d83.appspot.com",
     // messagingSenderId: "526505890722"
 };

 firebase.initializeApp(config);

 // Variables to set type
 var employee = "";
 var role = "";
 var startDate = 0;
 var monthlyPay = 0;

 // Variable to reference firebase db
 var database = firebase.database();

 // Click event to handle submit on app
 $('#addEmployeeBtn').click(function() {

     // PRevent form from running on own
     event.preventDefault();

     // Get input values
     employee = $('#emAdd').val().trim();
     role = $('#emRole').val().trim();
     startDate = $('#emStart').val().trim();
     monthlyPay = $('#emPay').val().trim();

     // Push values to html      
     $('#nameData').append(employee + "<br>");
     $('#roleData').append(role + "<br>");
     $('#startData').append(startDate + "<br>");
     $('#payData').append(monthlyPay + "<br>");

     // Pushing data to firebase database
     database.ref().push({
         name: employee,
         role: role,
         startDate: startDate,
         monthlyPay: monthlyPay,
         // dateAdded: database.Servervalue.TIMESTAMP
     });

     // Firebase watcher, checking for added childs
     database.ref().on("child-added", function(snapshot) {
         // console.log(snapshot.val().employee);
     });


 }, function(errorObject) {
     console.log("Errors handled: " + errorObject.code);
 });
