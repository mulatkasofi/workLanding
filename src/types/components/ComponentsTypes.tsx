import React from 'react';

export interface ReviewsProps {
  title: string;
  text: string;
  rotation: string;
}

export interface SiteTypesProps {
  title: string;
  type: string[];
  text: string;
  price: string;
  days: string;
}

export interface FAQProps {
  title: string;
  question: string | React.JSX.Element;
  number: string;
}
export interface ButtonProps {
  onClick?: () => void;
  text: string;
}

export interface ContactButtonProps {
  onClick: () => void;
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface PrinciplesCardProps {
  text: string;
  rotation: string;
}

export interface ToggleSwitchProps {
  isChecked: boolean;
  onSwitchChange: (_newState: boolean) => void;
}

export interface WorkStepsProps {
  title: string;
  text: string;
  type: string;
  number: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
