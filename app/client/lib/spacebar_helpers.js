Template.registerHelper('formatDate', function(date) {
    return moment(date).fromNow();
});