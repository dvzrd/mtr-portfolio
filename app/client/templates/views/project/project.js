Template.project.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var projectId = FlowRouter.getParam('projectId');
        self.subscribe('project', projectId);
        //self.subscribe('projectPrev', projectId);
        //self.subscribe('projectNext', projectId);
    });

    $('.ui.sticky').sticky();
});

Template.project.helpers({
    project: function () {
        var projectId = FlowRouter.getParam('projectId');
        var project = Projects.findOne({_id: projectId}) || {};
        return project;
    }
});

Template.project.events({
    'click .ui.prev.button': function() {
        var projectId = FlowRouter.getParam('projectId');
        FlowRouter.path('/work/' + (this.id + 1));
        console.log(FlowRouter.path('/work/' + (projectId)));
    },
    'click .ui.next.button': function() {
        FlowRouter.path('/work/:id', {_id: this.id + 1});
    }
});
