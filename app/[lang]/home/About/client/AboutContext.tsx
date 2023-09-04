'use client';

// Components==============
import { useStorage } from 'hooks/useStorage';
import React, { createContext, useMemo, useState } from 'react';
// =========================
type AboutContextContextType = {
  selectedText: number;
  setSelectedText: React.Dispatch<React.SetStateAction<number>>;
  selectedImage: number;
  setSelectedImage: React.Dispatch<React.SetStateAction<number>>;
  hasOpenedTooltip?: boolean;
  setHasOpenedTooltip: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AboutContext = createContext({} as AboutContextContextType);

export default function AboutContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedText, setSelectedText] = useState(2);
  const [selectedImage, setSelectedImage] = useState(0);
  const [hasOpenedTooltip, setHasOpenedTooltip] = useStorage(
    'has-opened-tooltip',
    false
  );

  const values = useMemo(
    () => ({
      selectedText,
      setSelectedText,
      selectedImage,
      setSelectedImage,
      hasOpenedTooltip,
      setHasOpenedTooltip,
    }),
    [selectedText, selectedImage, hasOpenedTooltip]
  );

  return (
    <AboutContext.Provider value={values}>{children}</AboutContext.Provider>
  );
}
