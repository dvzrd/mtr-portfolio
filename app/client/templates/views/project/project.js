Template.project.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var projectId = FlowRouter.getParam('projectId');
    self.subscribe('project', projectId);
  });

  $('.ui.sticky').sticky();
});

Template.project.helpers({
  project: function() {
    var projectId = FlowRouter.getParam('projectId');
    var project = Projects.findOne({_id: projectId}) || {};
    return project;
  }
});
