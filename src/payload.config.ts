// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Customers } from './collections/Customers'
import { Media } from './collections/Media'
import { Tailors } from './collections/Tailors'
import { Homepage } from './collections/Homepage'
import { Boutique } from './collections/Boutique';
import { CraftedJustForYou } from './collections/CraftedJustForYou';
import { FeatureTailors } from './collections/FeatureTailors';


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Customers.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Customers, Media, Tailors, Homepage, CraftedJustForYou, FeatureTailors, Boutique],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
