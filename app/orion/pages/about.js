orion.pages.addTemplate({
  layout: 'layout',
  template: 'about',
  name: 'About View',
  description: 'About View'
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
