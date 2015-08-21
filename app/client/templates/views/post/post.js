Template.post.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var postId = FlowRouter.getParam('postId');
        self.subscribe('post', postId);
    });
});

Template.post.helpers({
    post: function () {
        var postId = FlowRouter.getParam('postId');
        var post = Posts.findOne({_id: postId}) || {};
        return post;
    }
});
