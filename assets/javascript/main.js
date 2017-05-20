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

 // Click event to update html
 $('#addEmployeeBtn').click(function() {

     // PRevent form from running on own
     event.preventDefault();

     // Get input values
     var employee = $('#emAdd').val().trim();
     var role = $('#emRole').val().trim();
     var startDate = $('#emStart').val().trim();
     var monthlyPay = $('#emPay').val().trim();

     $('#nameData').append(employee + "<br>");
     $('#roleData').append(role + "<br>");
     $('#startData').append(startDate + "<br>");
     $('#payData').append(monthlyPay + "<br>");

     console.log(employee);
     console.log(role);
     console.log(startDate);
     console.log(monthlyPay);

 });
