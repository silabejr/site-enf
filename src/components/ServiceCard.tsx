import React from 'react';
import { Stethoscope } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-5 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Stethoscope className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mb-3 md:mb-4" />
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;