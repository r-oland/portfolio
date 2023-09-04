'use client';

// Components==============
import React, { createContext, useMemo, useState } from 'react';
// =========================

type StatusType = 'initial' | 'sending' | 'send' | 'error';

type ContactContextContextType = {
  status: StatusType;
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const ContactContext = createContext({} as ContactContextContextType);

export default function ContactContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<StatusType>('initial');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const value = useMemo(
    () => ({
      status,

      setStatus,
      email,
      setEmail,
      message,
      setMessage,
    }),
    [status, email, message]
  );
  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}
