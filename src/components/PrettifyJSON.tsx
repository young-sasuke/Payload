// import React from 'react';

// const PrettifyJSON = ({ jsonData }: { jsonData: any }) => {
//   // Convert the JSON to a pretty string
//   const formattedJson = JSON.stringify(jsonData, null, 2); // 2 spaces indentation

//   return (
//     <pre
//       style={{
//         whiteSpace: 'pre-wrap',
//         wordWrap: 'break-word',
//         background: '#f4f4f4',
//         padding: '10px',
//         borderRadius: '5px',
//       }}
//     >
//       {formattedJson}
//     </pre>
//   );
// };

// export default PrettifyJSON;

// import React from 'react';

// const PrettifyJSON = ({ cellData }: { cellData: any }) => {
//   if (!cellData) return <span style={{ color: '#888' }}>No Data</span>;

//   const formattedJson = JSON.stringify(cellData, null, 2); // Prettify with 2 spaces

//   return (
//     <pre
//       style={{
//         whiteSpace: 'pre-wrap',
//         wordWrap: 'break-word',
//         background: '#f4f4f4',
//         padding: '10px',
//         borderRadius: '5px',
//         fontSize: '12px',
//         maxHeight: '200px',
//         overflow: 'auto',
//       }}
//     >
//       {formattedJson}
//     </pre>
//   );
// };

// export default PrettifyJSON;


// import React from 'react';

// const PrettifyJSON = ({ cellData }: { cellData: any }) => {
//   if (!cellData) return <span style={{ color: '#888' }}>No Data</span>;

//   const formattedJson = JSON.stringify(cellData, null, 2); // Prettify with 2 spaces

//   return (
//     <pre
//       style={{
//         whiteSpace: 'pre-wrap',
//         wordWrap: 'break-word',
//         background: '#1e1e1e', // Dark background
//         color: '#ffffff',       // Light text
//         padding: '10px',
//         borderRadius: '5px',
//         fontSize: '12px',
//         maxHeight: '200px',
//         overflow: 'auto',
//       }}
//     >
//       {formattedJson}
//     </pre>
//   );
// };

// export default PrettifyJSON;

'use client';

import React, { useState } from 'react';

const PrettifyJSON = ({ cellData }: { cellData: any }) => {
  const [visibleImages, setVisibleImages] = useState<{ [key: string]: boolean }>({});

  if (!cellData) return <span style={{ color: '#888' }}>No Data</span>;

  const toggleImage = (url: string) => {
    setVisibleImages((prev) => ({
      ...prev,
      [url]: !prev[url],
    }));
  };

  const renderValue = (value: any, key?: string) => {
    if (Array.isArray(value) && key === 'imageUrls') {
      return (
        <div>
          {value.map((url: string, index: number) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4fc3f7', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  toggleImage(url);
                }}
              >
                {visibleImages[url] ? 'Hide Image' : `Show Image ${index + 1}`}
              </a>
              {visibleImages[url] && (
                <div style={{ marginTop: '5px' }}>
                  <img
                    src={url}
                    alt={`Image ${index + 1}`}
                    style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '4px' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <pre style={{ margin: 0 }}>
        {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
      </pre>
    );
  };

  return (
    <div
      style={{
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        background: '#1e1e1e',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        maxHeight: '300px',
        overflow: 'auto',
      }}
    >
      {Object.entries(cellData).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '8px' }}>
          <strong>{key}:</strong> {renderValue(value, key)}
        </div>
      ))}
    </div>
  );
};

export default PrettifyJSON;
