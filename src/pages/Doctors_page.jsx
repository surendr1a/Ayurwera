import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const DoctorsList = () => {
  return [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', experience: '15 years', rating: 4.9, reviews: 420, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Michael Chen', specialty: 'Dermatologist', experience: '12 years', rating: 4.8, reviews: 380, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Emily Williams', specialty: 'Pediatrician', experience: '10 years', rating: 4.9, reviews: 350, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. James Wilson', specialty: 'Orthopedic', experience: '18 years', rating: 4.7, reviews: 290, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Lisa Brown', specialty: 'ENT Specialist', experience: '8 years', rating: 4.6, reviews: 220, image: 'https://images.unsplash.com/photo-1580281658627-2be9bc3d0652?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Robert Davis', specialty: 'Neurologist', experience: '20 years', rating: 4.8, reviews: 410, image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Jennifer White', specialty: 'Oncologist', experience: '14 years', rating: 4.7, reviews: 300, image: 'https://images.unsplash.com/photo-1504704911898-a95dba261763?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Daniel Green', specialty: 'Psychiatrist', experience: '9 years', rating: 4.6, reviews: 200, image: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Maria Lee', specialty: 'Gynecologist', experience: '13 years', rating: 4.9, reviews: 500, image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. John Smith', specialty: 'Pulmonologist', experience: '11 years', rating: 4.7, reviews: 320, image: 'https://images.unsplash.com/photo-1504712598893-24159a89200e?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Natalie Scott', specialty: 'Radiologist', experience: '10 years', rating: 4.5, reviews: 190, image: 'https://images.unsplash.com/photo-1576086213369-97a306d3655a?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Andrew Taylor', specialty: 'Dentist', experience: '7 years', rating: 4.8, reviews: 210, image: 'https://images.unsplash.com/photo-1580281658741-c8a17f6c9fbf?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Kevin Carter', specialty: 'Gastroenterologist', experience: '16 years', rating: 4.9, reviews: 400, image: 'https://images.unsplash.com/photo-1506819799634-22957e74f7c7?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Sophia Thomas', specialty: 'Urologist', experience: '12 years', rating: 4.6, reviews: 220, image: 'https://images.unsplash.com/photo-1508956226859-72c9182d7c26?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Brian King', specialty: 'Nephrologist', experience: '14 years', rating: 4.8, reviews: 330, image: 'https://images.unsplash.com/photo-1503457574466-0e1f3aeea016?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Olivia Brown', specialty: 'Allergist', experience: '6 years', rating: 4.5, reviews: 160, image: 'https://images.unsplash.com/photo-1549585464-804cfa6a9a1b?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Charles Clark', specialty: 'Endocrinologist', experience: '17 years', rating: 4.9, reviews: 420, image: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Laura Hill', specialty: 'Hematologist', experience: '11 years', rating: 4.6, reviews: 250, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Steven Adams', specialty: 'Surgeon', experience: '19 years', rating: 4.8, reviews: 450, image: 'https://images.unsplash.com/photo-1503454564730-0e5c8c6b167c?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Rachel Martin', specialty: 'Ophthalmologist', experience: '8 years', rating: 4.7, reviews: 210, image: 'https://images.unsplash.com/photo-1504812907681-44fa582b9a52?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Paul Garcia', specialty: 'Physiotherapist', experience: '10 years', rating: 4.7, reviews: 240, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Amanda Taylor', specialty: 'Anesthesiologist', experience: '9 years', rating: 4.5, reviews: 180, image: 'https://images.unsplash.com/photo-1504712598893-24159a89200e?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Thomas Walker', specialty: 'Rheumatologist', experience: '18 years', rating: 4.8, reviews: 310, image: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Anna Lewis', specialty: 'Pathologist', experience: '7 years', rating: 4.5, reviews: 200, image: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Christopher Hall', specialty: 'Infectious Disease Specialist', experience: '14 years', rating: 4.9, reviews: 490, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Julia Turner', specialty: 'Occupational Therapist', experience: '5 years', rating: 4.4, reviews: 150, image: 'https://images.unsplash.com/photo-1549585464-804cfa6a9a1b?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. David Moore', specialty: 'Critical Care Specialist', experience: '20 years', rating: 4.8, reviews: 510, image: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&q=80&w=300&h=300' },
    { name: 'Dr. Karen Hernandez', specialty: 'Sports Medicine', experience: '11 years', rating: 4.7, reviews: 280, image: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&q=80&w=300&h=300' },
  ];
};

const TopDoctors = () => {
  const navigate = useNavigate();

  const doctors = DoctorsList();


  return (
    <div className="py-16 mt-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Top Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border-gray-300 border-2 hover:shadow-md hover:shadow-gray-400">
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
       
      </div>
    </div>
  );
};

export default TopDoctors;
