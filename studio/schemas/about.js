export default {
  name: 'about',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: "blockContent",
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
