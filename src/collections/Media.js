const Media = {
    slug: 'media',
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                with: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'tablet',
                with: 1024,
                height: undefined,
                position: 'centre',
            }
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
};

export default Media;