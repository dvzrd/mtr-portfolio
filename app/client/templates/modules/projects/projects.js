Template.projects.onCreated(function() {
	var self = this;
  self.autorun(function() {
    self.subscribe('projects');
  });
});

Template.projects.helpers({
  projects: function () {
    return Projects.find({}, {limit: 20, sort: {createdAt: -1}});
  }
});
