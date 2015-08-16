Icons = new orion.collection('icons', {
  singularName: 'icon',
  pluralName: 'Icons',
  title: 'Social Media',
  link: {
    title: 'Social Media'
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
        data: 'url',
        title: 'URL'
      },
			{
			  data: 'icon',
				title: 'Icon'
			}
    ]
  }
});

Icons.attachSchema(new SimpleSchema({
  order: {
    type: Number,
    label: 'Order'
  },
  title: {
    type: String,
    label: 'Title'
  },
	url: {
	  type: String,
		label: 'URL'
  },
	icon: {
	  type: String,
		label: 'Icon'
	},
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
