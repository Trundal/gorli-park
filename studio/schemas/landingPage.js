export default {
    name: 'landingPage',
    title: 'LandingPage',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      }
    ], 
  
    preview: {
      select: {
        title: 'title',
        media: 'mainImage'
      }
    }
}
  