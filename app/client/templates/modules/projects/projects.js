Template.projects.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('projects');
    });
});

Template.projects.helpers({
    projects: function () {
        return Projects.find({}, {sort: {createdAt: -1}});
    }
});
