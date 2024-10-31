"use client";

import { useEffect, useState } from "react";
import i18n from "../i18n";

const ClientComponent = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      await i18n.init();
      await i18n.changeLanguage("en"); 
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
