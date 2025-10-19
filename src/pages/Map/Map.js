import React from 'react';

const Map = () => {
  return (
    <div>
      <iframe 
        src="http://localhost:3001"
        style={{ 
          width: '100%', 
          height: '100vh', 
          border: 'none' 
        }}
        title="КосмоИнформ-центр ГУАП"
      />
    </div>
  );
};

export default Map;