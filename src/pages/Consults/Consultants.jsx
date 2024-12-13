import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const DoctorsList = () => {
 
  return [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15 years',
      rating: 4.9,
      reviews: 420,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      experience: '12 years',
      rating: 4.8,
      reviews: 380,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Dr. Emily Williams',
      specialty: 'Pediatrician',
      experience: '10 years',
      rating: 4.9,
      reviews: 350,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      experience: '18 years',
      rating: 4.7,
      reviews: 290,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
    },
  ];
};

const TopDoctors = () => {
  const navigate = useNavigate();

  const doctors = DoctorsList();


  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Top Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                <p className="text-gray-500 text-sm mb-2">{doctor.experience} experience</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{doctor.reviews} reviews</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-10 font-sans '>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
          onClick={()=> navigate('/doctors')}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
