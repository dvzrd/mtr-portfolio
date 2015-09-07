Template.project.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var projectId = FlowRouter.getParam('projectId');
        self.subscribe('projects');
        self.subscribe('project', projectId, {onReady: function() {
            var project = Projects.findOne(projectId);
            SEO.set({
                title: 'Damir.Gallery | ' + project.title,
                description: project.description,
                meta: {
                    'property="og:image"': project.thumb,
                    'name="twitter:image"': project.thumb
                }
            });
        }});
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
            if (projects[i]._id === projectId) {
                var current = projects[i],
                    index = projects.indexOf(current);

                index--;

                if (index === -1) {
                    e.preventDefault();
                } else {
                    var prevProjectId = projects[index]._id;
                    FlowRouter.go('/work/' + prevProjectId);
                }
            } else {
                e.preventDefault();
            }
        }
    },
    'click .ui.next.button': function(e) {
        var projectId = FlowRouter.getParam('projectId'),
            projects = Projects.find().fetch();

        for(var i = 0; i < projects.length; ++i) {
            if (projects[i]._id === projectId) {
                var current = projects[i],
                    index = projects.indexOf(current);

                index++;


                if (index === projects.length) {
                    e.preventDefault();
                } else {
                    var nextProjectId = projects[index]._id;
                    FlowRouter.go('/work/' + nextProjectId);
                }
            } else {
                e.preventDefault();
            }
        }
    }
});
