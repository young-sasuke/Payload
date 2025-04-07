import { CollectionConfig } from 'payload';

export const FeatureTailors: CollectionConfig = {
  slug: 'feature-tailors',
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
        type: 'upload',
        relationTo: 'media',
        required: true,
        
      }
      
  ],
};

export default FeatureTailors;
