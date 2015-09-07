FlowRouter.route('/', {
    name: 'root',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'root'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/work/:projectId', {
    name: 'project',
    action: function (params) {
        BlazeLayout.render('layout', {
            content: 'project'
        });
        GAnalytics.pageview();
        GAnalytics.event('work','project view');
    }
});

FlowRouter.route('/about', {
    name: 'about',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'about'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/blog', {
    name: 'blog',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'blog'
        });
        GAnalytics.pageview();
    }
});

FlowRouter.route('/blog/:postId', {
    name: 'post',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'post'
        });
        GAnalytics.pageview();
        GAnalytics.event('blog','post view');
    }
});

FlowRouter.route('/contact', {
    name: 'contact',
    action: function () {
        BlazeLayout.render('layout', {
            content: 'contact'
        });
        GAnalytics.pageview();
    }
});