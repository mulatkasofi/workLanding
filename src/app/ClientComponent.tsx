import { useEffect } from "react";
import i18n from "../i18n";

const ClientComponent = () => {
  useEffect(() => {
    const initializeI18n = async () => {
      await i18n.init();
      if (!i18n.language) {
        await i18n.changeLanguage("ru"); 
      }
    };

    initializeI18n();
  }, []);

  return null;
};

export default ClientComponent;
