
import type { CollectionConfig } from 'payload';
import { compressImage } from '../Hooks/compressImage'; // Make sure this file exists

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false, // Optional, as per earlier discussion
    },
  ],
  upload: true,
  hooks: {
    beforeChange: [compressImage],
  },
};

export default Media;
