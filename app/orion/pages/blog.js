orion.pages.addTemplate({
  layout: 'layout',
  template: 'blog',
  name: 'Blog View',
  description: 'Blog View'
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
