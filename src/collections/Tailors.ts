
import type { CollectionConfig } from 'payload';
import StatusToggle from '../components/StatusToggle';
import PrettifyJSON from '../components/PrettifyJSON';  

export const Tailors: CollectionConfig = {
  slug: 'tailors',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
      access: {
        read: () => true,
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone_number',
      type: 'text',
    },
    {
      name: 'profile',
      type: 'json',
      admin: {
        components: {
          // Use PrettifyJSON to display the profile data prettified
          Cell: PrettifyJSON,
        },
      },
    },
    {
      name: 'boutique_items',
      type: 'json',
      admin: {
        components: {
          // Use PrettifyJSON to display boutique_items prettified
          Cell: PrettifyJSON,
        },
      },
    },
    {
      name: 'alterations',
      type: 'json',
      admin: {
        components: {
          // Use PrettifyJSON to display alterations prettified
          Cell: PrettifyJSON,
        },
      },
    },
    {
      name: 'tailorings',
      type: 'json',
      admin: {
        components: {
          // Use PrettifyJSON to display tailorings prettified
          Cell: PrettifyJSON,
        },
      },
    },
    {
      name: 'fcm_token',
      type: 'text',
      admin: {
        readOnly: true, // or false if you want to allow manual input
      },
    },    
    {
      name: 'status',
      type: 'text', // Change type to text
      required: true,
      defaultValue: 'unverified', // or whatever default value you want
      admin: {
        position: 'sidebar', // Good placement for status fields
        components: {
          // Assign your custom component to the Cell slot for the list view
          Cell: StatusToggle,
        },
      },
    },
    
  ],
};

export default Tailors;  