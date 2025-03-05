import React from 'react';

interface ContactButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  primary?: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({ href, text, icon, primary }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors w-full sm:w-auto ${
        primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      {icon}
      {text}
    </a>
  );
};

export default ContactButton;