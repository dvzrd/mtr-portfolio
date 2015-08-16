Icons = new orion.collection('icons', {
  singularName: 'icon',
  pluralName: 'Icons',
  title: 'Social Media',
  link: {
    title: 'Icons'
  },
  tabular: {
    columns: [
		  {
			  data: 'social',
			  title: 'Social Media'
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
  social: {
    type: String,
    label: 'Social Media'
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
