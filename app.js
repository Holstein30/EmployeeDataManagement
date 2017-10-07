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

$("#search-btn").on("click", function(event) {

	event.preventDefault();

	var name = $(NAME).val().trim();
	var role = $(ROLE).val().trim();
	var date = $(DATE).val().trim();
	var rate = $(NAME).val().trim();

	dataRef.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    console.log(name);
    console.log(role);
    console.log(date);
    console.log(rate);

	$(HTML).append(name);
	$(HTML).append(role);
	$(HTML).append(date);
	$(HTML).append(rate);

});