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

import React from 'react';

const PrettifyJSON = ({ cellData }: { cellData: any }) => {
  if (!cellData) return <span style={{ color: '#888' }}>No Data</span>;

  const formattedJson = JSON.stringify(cellData, null, 2); // Prettify with 2 spaces

  return (
    <pre
      style={{
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        background: '#f4f4f4',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        maxHeight: '200px',
        overflow: 'auto',
      }}
    >
      {formattedJson}
    </pre>
  );
};

export default PrettifyJSON;
