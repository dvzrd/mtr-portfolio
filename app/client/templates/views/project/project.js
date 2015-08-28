Template.project.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var projectId = FlowRouter.getParam('projectId');
        self.subscribe('project', projectId);
        self.subscribe('projects');
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
    'click .ui.prev.button': function(e) {
        var projectId = FlowRouter.getParam('projectId'),
            projects = Projects.find().fetch();

        for(var i = 0; i < projects.length; ++i) {
            //console.log(projects[i]._id);
            if (projects[i]._id === projectId) {
                console.log(projects[i]._id);
                console.log(projects.indexOf(projects[i]));
            } else {
                e.preventDefault();
            }
        }

        //FlowRouter.path('/work/' + (prevProject));
    },
    'click .ui.next.button': function() {
        FlowRouter.path('/work/:id', {_id: this.id + 1});
    }
});
