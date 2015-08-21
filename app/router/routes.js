FlowRouter.route('/', {
  name: 'root',
  action: function() {
    BlazeLayout.render('layout', {
      content: 'root'
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

FlowRouter.route('/:projectId', {
  name: 'project',
  action: function(params) {
    BlazeLayout.render('layout', {
      content: 'project'
    });
  }
});

FlowRouter.route('/blog/:postId', {
  name: 'post',
  action: function() {
    BlazeLayout.render('layout', {
      content: 'post'
    });
  }
});