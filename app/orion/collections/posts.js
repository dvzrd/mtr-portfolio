Posts = new orion.collection('posts', {
    singularName: 'post',
    pluralName: 'posts',
    title: 'Posts',
    link: {
        title: 'Posts'
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

Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    thumb: {
        type: String,
        label: 'Thumbnail'
    },
    description: {
        type: String,
        label: 'Description'
    },
    content: orion.attribute('froala', {
        label: 'Content'
    }),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));
