"use client";

import React, { useState, useCallback } from 'react';
import { useDocumentInfo } from '@payloadcms/ui/providers/DocumentInfo'; // Correct hook import
import { DefaultCellComponentProps } from 'payload';

const StatusToggle: React.FC<DefaultCellComponentProps> = ({ cellData, rowData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const api = '/api'

  const currentStatus = cellData as 'verified' | 'unverified';
  const documentId = rowData.id;

  const toggleStatus = useCallback(async () => {
    if (!documentId) {
      console.error('Missing collectionSlug or documentId', documentId)
      return;
    }

    setIsLoading(true);
    const newStatus = currentStatus === 'verified' ? 'unverified' : 'verified';

    try {
      const res = await fetch(`${api}/tailors/${documentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.errors?.[0]?.message || `Failed to update status (${res.status})`);
      }
      window.location.reload();

    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setIsLoading(false);
    }
  }, [documentId, currentStatus, api]);

  const isVerified = currentStatus === 'verified';

  return (
    <button
      type="button" // Good practice for buttons not submitting forms
      onClick={toggleStatus}
      disabled={isLoading} // Disable button while loading
      style={{
        padding: '5px 10px',
        borderRadius: '20px',
        border: 'none',
        backgroundColor: isVerified ? 'rgb(52, 211, 153)' : 'rgb(248, 113, 113)', // Example Tailwind green/red-400
        color: 'white',
        cursor: isLoading ? 'wait' : 'pointer',
        fontSize: '0.8rem',
        minWidth: '90px', // Ensure consistent width
        textAlign: 'center',
        opacity: isLoading ? 0.7 : 1,
      }}
    >
      {isLoading ? 'Updating...' : (isVerified ? '✓ Verified' : '✗ Unverified')}
    </button>
  );
};

export default StatusToggle;