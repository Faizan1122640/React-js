import React, { useEffect } from 'react';

const LightboxModal = ({ isOpen, imageSrc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="custom-lightbox-overlay" onClick={onClose}>
      <div className="custom-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="custom-lightbox-close" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} className="custom-lightbox-img" alt="Enlarged screenshot" />
      </div>
    </div>
  );
};

export default LightboxModal;
