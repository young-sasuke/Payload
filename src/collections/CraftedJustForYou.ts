import { CollectionConfig } from 'payload';

export const CraftedJustForYou: CollectionConfig = {
  slug: 'crafted-just-for-you',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
        name: 'image',
        type: 'relationship',
        relationTo: 'media',
        required: true,
        admin: {
          components: {
            Cell: 'src/components/CustomImageCell',
          },
        },
      }
      
  ],
};

export default CraftedJustForYou;
