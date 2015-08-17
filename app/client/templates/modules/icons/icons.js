Template.icons.onCreated(function() {
	var self = this;
  self.autorun(function() {
    self.subscribe('icons');
  });
});

Template.icons.helpers({
  icons: function () {
    return Icons.find({}, {limit: 6, sort: {order: 1}});
  }
});
