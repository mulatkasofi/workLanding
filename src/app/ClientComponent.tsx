"use client";

import { useEffect, useState } from "react";
import i18n from "../i18n";

const ClientComponent = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  console.log(isInitialized);
  

  useEffect(() => {
    const initializeI18n = async () => {
      await i18n.init();
      if (!i18n.language) {
        await i18n.changeLanguage("en");
      }
      setIsInitialized(true); 
    };

    initializeI18n();
  }, []);

  if (!isInitialized) {
    return <div>Loading translations...</div>;
  }

  return null; 
};

export default ClientComponent;
