// Tapşırıq 4: Bir düyməyə klikləyərək bir mətn panelini açıb bağlayan bir komponent yaradın. 

import React, { useState } from 'react';

const TextPanelToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePanel}>
        {isOpen ? 'Mətn Panelini Bağla' : 'Mətn Panelini Aç'}
      </button>
      {isOpen && (
        <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
          <p>Başqa mətn əlavə edə bilərsiniz</p>
        </div>
      )}
    </div>
  );
};

export default TextPanelToggle;
