Template.posts.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('posts');
    });
});

Template.posts.helpers({
    posts: function () {
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});