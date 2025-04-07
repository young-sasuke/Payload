import React, { JSX } from 'react';
import config from '@payload-config';
import Image from 'next/image';
import {
  getPayload,
  type DefaultServerCellComponentProps,
} from 'payload';

const CustomImageCell = async (
  props: DefaultServerCellComponentProps
): Promise<JSX.Element | null> => {
  const payload = await getPayload({ config });
  const { cellData } = props;

  if (!cellData) return null;

  try {
    const media = await payload.findByID({
      collection: 'media',
      id: cellData,
    });

    if (!media?.url) return null;

    return (
      <div style={{ width: '80px', height: '80px' }}>
        <Image
          src={media.url}
          alt={media.alt || 'Media Preview'}
          width={80}
          height={80}
          style={{ objectFit: 'cover', borderRadius: '4px' }}
        />
      </div>
    );
  } catch (error) {
    console.error('Error fetching media for preview:', error);
    return null;
  }
};

export default CustomImageCell;
