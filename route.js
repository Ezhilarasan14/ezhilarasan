$(document).ready(function() {
	$("#info").on('click', function() {
		$("#div-placeholder").load("personal/personal.html");
	});
	$(".personal_info").on('click', function() {
		$("#div-placeholder").load("personal/personal.html");
	});
	$('#education').on('click', function() {
		$("#div-placeholder").load("personal/edu.html");
	});
	$('.personal_educ').on('click', function() {
		$("#div-placeholder").load("personal/edu.html");
	});

	$('#work').on('click', function() {
		$("#div-placeholder").load("personal/work.html");
	});
	$('.personal_work').on('click', function() {
		$("#div-placeholder").load("personal/work.html");
	});

	$('#hobby').on('click', function() {
		$("#div-placeholder").load("personal/strength.html");
	});
	$('.personal_hobby').on('click', function() {
		$("#div-placeholder").load("personal/strength.html");
	});

	$('.personal_activities').on('click', function() {
		$("#div-placeholder").load("personal/interst.html");
	});

	$('#skills').on('click', function() {
		$("#div-placeholder").load("personal/hobby.html");
	});
	$('.personal_skills').on('click', function() {
		$("#div-placeholder").load("personal/hobby.html");
	});

	$('.ui_ux').on('click', function() {
		$("#div-placeholder").load("tech/ui_ux.html");
	});

	$('.programming').on('click', function() {
		$("#div-placeholder").load("tech/programming.html");
	});

	$('.rdbms').on('click', function() {
		$("#div-placeholder").load("tech/rdbms.html");
	});

	$('.server').on('click', function() {
		$("#div-placeholder").load("tech/server.html");
	});

	$('.deployment').on('click', function() {
		$("#div-placeholder").load("tech/deployment.html");
	});

	$('.versioncontroller').on('click', function() {
		$("#div-placeholder").load("tech/versioncontrol.html");
	});

});
