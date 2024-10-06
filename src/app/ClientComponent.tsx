'use client';

import { useEffect } from 'react';
import i18n from '../i18n';

const ClientComponent = () => {
  useEffect(() => {
    i18n.init();
  }, []);

  return null;
};

export default ClientComponent;
