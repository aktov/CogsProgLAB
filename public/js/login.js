'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function saveProfile() {
	$('.project a').click(addCred);
	//$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addCred(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var name = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var pword = projectID.substr('project'.length);

	console.log("Username: " + name + "Password: " + pword);
}
