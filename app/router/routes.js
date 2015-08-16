FlowRouter.route('/', {
  name: 'root',
  action: function() {
    BlazeLayout.render('layout', {
      content: 'root'
    });
  }
});
