Template.projects.onRendered(function() {
	Meteor.subscribe('projects');

	$('.special.cards .image').dimmer({
		on: 'hover'
	});
});

Template.projects.helpers({
  projects: function () {
    return Projects.find({}, {limit: 20, sort: {createdAt: -1}});
  }
});
