FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('layout', {
            content: 'redirect'
        });
    }
};