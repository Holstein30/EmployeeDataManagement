$(document).ready(function() {});

var config = {
    apiKey: "AIzaSyB3k7ZIHXQ4lzQ9O8nBblnhzi8F89pZFeg",
    authDomain: "employeedatamanagement-f3798.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-f3798.firebaseio.com",
    projectId: "employeedatamanagement-f3798",
    storageBucket: "employeedatamanagement-f3798.appspot.com",
    messagingSenderId: "1023077914774"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#add-employee-btn").on("click", function(event) {

	event.preventDefault();

	var name = $("#employee-name-input").val().trim();
	var role = $("#role-input").val().trim();
	var date = $("#start-input").val().trim();
	var rate = $("#rate-input").val().trim();
	var monthsNeg = moment(date, "DD/MM/YY").diff(moment(), "months");
	var months = Math.abs(monthsNeg);
	var billed = rate * months;

	database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
        months: months,
        billed: billed
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    console.log(name);
    console.log(role);
    console.log(date);
    console.log(rate);

    $("#employee-name-input").val("");
    $("#role-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");

});

database.ref().on("child_added", function (snapshot) {

	console.log(snapshot.val());

	$("#tbody").append("<tr>");
	$("#tbody").append("<td>" + snapshot.val().name + "</td>");
	$("#tbody").append("<td>" + snapshot.val().role + "</td>");
	$("#tbody").append("<td>" + snapshot.val().date + "</td>");
	$("#tbody").append("<td>" + snapshot.val().months + "</td>");
	$("#tbody").append("<td>" + snapshot.val().rate + "</td>");
	$("#tbody").append("<td>" + snapshot.val().billed + "</td>");

});