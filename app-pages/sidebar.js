/* eslint-disable no-undef */
$(function() {
	$('.buttonMenu').click(function() {
		const containerSidebar = $('#container-sidebar');
		const buttonIcon = $('.buttonMenu i');

		if (containerSidebar.hasClass('sidebar')) {
			containerSidebar.removeClass('sidebar').addClass('sidebar-hidden');
		} else {
			containerSidebar.removeClass('sidebar-hidden').addClass('sidebar');
		}

		buttonIcon.toggleClass('fa-times');
	});
});