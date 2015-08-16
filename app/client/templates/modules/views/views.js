Template.views.onRendered(function() {
	Meteor.subscribe('views');
});

Template.views.helpers({
  views: function () {
    return Views.find({}, {limit: 4, sort: {order: 1}});
  }
});
