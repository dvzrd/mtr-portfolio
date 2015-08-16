Views = new orion.collection('views', {
  singularName: 'view',
  pluralName: 'Views',
  title: 'Views',
  link: {
    title: 'Views'
  },
  tabular: {
    columns: [
      {
        data: 'order',
        title: 'Order'
      },
		  {
			  data: 'title',
			  title: 'Title'
		  },
      {
        data: 'path',
        title: 'path'
      }
    ]
  }
});

Views.attachSchema(new SimpleSchema({
  order: {
    type: Number,
    label: 'Order'
  },
  title: {
    type: String,
    label: 'Title'
  },
	path: {
	  type: String,
		label: 'Path'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
