Projects = new orion.collection('projects', {
  singularName: 'project',
  pluralName: 'Projects',
  title: 'Projects',
  link: {
    title: 'Projects'
  },
  tabular: {
    columns: [
		  {
			  data: 'title',
			  title: 'Title'
		  },
      {
        data: 'thumb',
        title: 'Thumbnail'
      },
      orion.attributeColumn('createdAt', 'createdAt', 'Date')
    ]
  }
});

Projects.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
	thumb: {
	  type: String,
		label: 'Thumbnail'
  },
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
