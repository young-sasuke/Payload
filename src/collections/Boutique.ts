// import { CollectionConfig } from 'payload';

// export const Boutique: CollectionConfig = {
//   slug: 'boutique',
//   admin: {
//     useAsTitle: 'title',
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//     },
//     {
//         name: 'image',
//         type: 'upload',
//         relationTo: 'media',
//         required: true,
        
//       }      
//   ],
// };

// export default Boutique;

import type { CollectionConfig } from 'payload';
import CustomImageCell from '../components/CustomImageCell'; // 👈 Add this

export const Boutique: CollectionConfig = {
  slug: 'boutique',
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
      admin: {
        components: {
          Cell: CustomImageCell, // 👈 Enable thumbnail in admin list view
        },
      },
    },
  ],
};

export default Boutique;
