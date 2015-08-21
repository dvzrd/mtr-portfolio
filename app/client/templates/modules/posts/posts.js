Template.posts.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('posts');
    });
});

Template.posts.helpers({
    posts: function () {
        return Posts.find({}, {limit: 10, sort: {createdAt: -1}});
    }
});
