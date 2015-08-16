Template.icons.onRendered(function() {
	Meteor.subscribe('icons');
});

Template.icons.helpers({
  icons: function () {
    return Icons.find({}, {limit: 6, sort: {order: 1}});
  }
});
