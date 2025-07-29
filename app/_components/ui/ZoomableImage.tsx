'use client'

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

type FullscreenZoomImageProps = ImageProps & {
  thumbnailClassName?: string;
  zoomScale?: number;
};

export default function FullscreenZoomImage({
  thumbnailClassName = '',
  zoomScale = 1,
  ...imageProps
}: FullscreenZoomImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Blokada scrollowania podczas powiększenia
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isZoomed]);

  const toggleZoom = () => setIsZoomed(!isZoomed);
  const closeZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(false);
  };

  return (
    <>
      {/* Miniaturka */}
      <Image
        {...imageProps}
        onClick={toggleZoom}
        className={`cursor-zoom-in ${thumbnailClassName}`}
        alt={imageProps.alt || 'Click to zoom'}
      />

      {/* Powiększenie pełnoekranowe */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeZoom}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              {...imageProps}
              fill
              className="object-contain"
              style={{
                transform: `scale(${zoomScale})`,
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              alt={`Zoomed ${imageProps.alt || 'image'}`}
              quality={100}
              priority
            />
          </div>

          {/* Przycisk zamknięcia */}
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/75 transition-all"
            aria-label="Close zoom"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}