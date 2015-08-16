Template.projects.onRendered(function() {
	Meteor.subscribe('projects');
});

Template.projects.helpers({
  projects: function () {
    return Projects.find({}, {limit: 20, sort: {createdAt: -1}});
  }
});
