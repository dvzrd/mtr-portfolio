FlowRouter.route('/', {
  name: 'root',
  action: function() {
    BlazeLayout.render('layout', {
      content: 'root'
    });
  }
});

FlowRouter.route('/:projectId', {
  name: 'project',
  action: function(params) {
    console.log("This is my project:", params.projectId);
    BlazeLayout.render('layout', {
      content: 'project'
    });
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action: function() {
    BlazeLayout.render('layout', {
      content: 'about'
    });
  }
});

FlowRouter.route('/blog', {
  name: 'blog',
  action: function() {
    BlazeLayout.render('layout', {
      content: 'blog'
    });
  }
});

FlowRouter.route('/contact', {
  name: 'contact',
  action: function() {
    BlazeLayout.render('layout', {
      content: 'contact'
    });
  }
});
