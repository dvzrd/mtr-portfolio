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
                data: 'description',
                title: 'Description'
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
    description: orion.attribute('froala', {
        label: 'Description'
    })
    album: {
        type: [Object],
        minCount: 1,
        maxCount: 50
    },
    'album.$.title': {
        type: String,
        label: 'Image Title'
    },
    'album.$.image': {
        type: String,
        label: 'Image Path'
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));
