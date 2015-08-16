orion.pages.addTemplate({
  layout: 'layout',
  template: 'blog',
  name: 'Blog View',
  description: 'Blog View'
}, {
  content: orion.attribute('froala', {
    label: 'Content'
  })
});
