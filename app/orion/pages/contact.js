orion.pages.addTemplate({
  layout: 'layout',
  template: 'contact',
  name: 'Contact View',
  description: 'Contact View'
}, {
  title: {
    type: String,
    label: 'Title'
  },
  url: {
    type: String,
    label: 'URL'
  },
  content: orion.attribute('froala', {
    label: 'Content'
  })
});
