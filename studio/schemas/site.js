export default {
    name: 'site',
    title: 'Site Config',
    type: 'document',
    fields: [
      {
        name: 'bgGraphic',
        title: 'Background Graphic',
        type: 'image'
      },
      {
        name: 'bgColour',
        title: 'Background Colour',
        type: 'string'
      },
      {
        name: 'privacy',
        title: 'Privacy',
        type: 'blockContent'
      },
      {
        name: 'imprint',
        title: 'Imprint',
        type: 'blockContent'
      }
    ]
}
  