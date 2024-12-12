import React from 'react';
import { Video, Pill, TestTube, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Video className="h-8 w-8 text-blue-600" />,
    title: 'Video Consultation',
    description: 'Connect with doctors online instantly for expert medical advice',
  },
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    title: 'Book Appointments',
    description: 'Schedule in-person visits with top doctors in your area',
  },
  {
    icon: <Pill className="h-8 w-8 text-blue-600" />,
    title: 'Order Medicines',
    description: 'Get medicines delivered to your doorstep with attractive discounts',
  },
  {
    icon: <TestTube className="h-8 w-8 text-blue-600" />,
    title: 'Lab Tests',
    description: 'Book lab tests online and get samples collected from home',
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
