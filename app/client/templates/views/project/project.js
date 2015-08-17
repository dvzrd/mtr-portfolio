Template.project.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var projectId = FlowRouter.getParam('projectId');
    self.subscribe('project', projectId);
  });
});
