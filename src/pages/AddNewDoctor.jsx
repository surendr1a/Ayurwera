import React from "react";

const AddNewDoctor = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-3/4 h-5/6 p-8 rounded border-slate-600 hover:shadow-sm hover:shadow-black shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Add New Doctor</h2>
        <form>
          {/* Basic Details */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Full Name" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="email" placeholder="Email Address" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Specialization" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="number" placeholder="Experience (Years)" required />
          </div>

          {/* Government IDs */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Aadhaar Number" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="PAN Number" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Passport Number (Optional)" />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Driving License Number (Optional)" />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Phone Number" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Alternate Phone Number (Optional)" />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Emergency Contact Name" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Emergency Contact Number" required />
          </div>

          {/* Address */}
          <div className="mb-4">
            <textarea
              className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black w-full"
              rows="3"
              placeholder="Full Address"
              required
            ></textarea>
          </div>

          {/* Qualifications */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Highest Qualification" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Medical School/University" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Graduation Year" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Post-Graduation (Optional)" />
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Certification Name" />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Issued By" />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Year of Certification" />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Certification ID (Optional)" />
          </div>

          {/* Uploads */}
          <div className="mb-4">
            <label className="block mb-2 text-blue-700 font-semibold">Upload Doctor's Photo</label>
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black w-full" type="file" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-blue-700 font-semibold">Upload Relevant Documents</label>
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black w-full" type="file" multiple />
          </div>

          {/* Work Details */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Current Hospital/Clinic" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Position/Role" required />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Previous Hospital/Clinic (Optional)" />
            <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Years of Experience in Current Role" required />
          </div>

          {/* Availability */}
          <div className="mb-4">
            <label className="block mb-2 text-blue-700 font-semibold">Available Timings</label>
            <div className="grid grid-cols-3 gap-4">
              <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="time" placeholder="Start Time" required />
              <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="time" placeholder="End Time" required />
              <input className="border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black" type="text" placeholder="Days Available (e.g., Mon-Fri)" required />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="bg-red-500 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-red-600 mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewDoctor;
