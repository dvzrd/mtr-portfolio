Template['quotes'].helpers({
  'quotes': function() {
    var randomQuote = _.flatten(_.sample(App.Collections.Quotes.find().fetch(), 1));
    return randomQuote;
  }
});
