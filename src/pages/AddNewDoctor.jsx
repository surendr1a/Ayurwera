import React, { useState } from "react";
import CameraCapture from "../sections/CameraCapture";

const AddNewDoctor = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [showCamera, setShowCamera] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isPhotoSaved, setIsPhotoSaved] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleCapture = (photo) => {
    setCapturedPhoto(photo);
    setShowCamera(false);
    setIsPhotoSaved(false); // Reset photo status
  };

  const handleDone = () => {
    if (capturedPhoto) {
      setIsPhotoSaved(true); // Photo is now finalized
      alert("Photo saved successfully!");
    } else {
      alert("Please capture a photo before saving.");
    }
  };

  const stepStyles =
    "border p-2 rounded border-slate-600 hover:shadow-sm hover:shadow-black";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <button
        onClick={onClose}
        className="absolute top-24 right-72  bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400"
      >
        &times;
      </button>
      <div className="bg-white w-2/3 h-4/5 p-6 rounded border-slate-600 hover:shadow-sm hover:shadow-black shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Add New Doctor</h2>
        <form>
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-4">
                Step 1: Personal Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  className={stepStyles}
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  className={stepStyles}
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  className={stepStyles}
                  type="date"
                  placeholder="Date of Birth"
                  required
                />
                <select className={stepStyles} required>
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  className={stepStyles}
                  type="text"
                  placeholder="Nationality"
                  required
                />
                <input
                  className={stepStyles}
                  type="text"
                  placeholder="Marital Status"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-blue-600 mb-2">
                  Upload Profile Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className={`${stepStyles} w-full`}
                  required
                />
                <div>
                  <label className="block text-blue-600 mt-4 mb-2">
                    Take Real-Time Photo (Camera)
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowCamera(true)}
                    className="bg-gray-400 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-gray-500"
                  >
                    Capture Photo
                  </button>
                  {showCamera && (
                    <CameraCapture
                      onCapture={handleCapture}
                      onClose={() => setShowCamera(false)}
                    />
                  )}
                  {capturedPhoto && (
                    <div className="mt-4">
                      <img
                        src={capturedPhoto}
                        alt="Captured"
                        className="w-full rounded mb-4"
                      />
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => setShowCamera(true)}
                          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                        >
                          Retake Photo
                        </button>
                        <button
                          type="button"
                          onClick={handleDone}
                          className={`${isPhotoSaved
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-500 hover:bg-green-600"
                            } text-white px-4 py-2 rounded`}
                          disabled={isPhotoSaved}
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-4">Step 2: Identification Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input className={stepStyles} type="text" placeholder="Aadhaar Number" required />
                <input className={stepStyles} type="text" placeholder="PAN Number" required />
                <input className={stepStyles} type="text" placeholder="Voter ID" />
                <input className={stepStyles} type="text" placeholder="Driving License Number" />
                <input className={stepStyles} type="text" placeholder="Passport Number" />
              </div>
              <div className="mt-4">
                <label className="block text-blue-600 mb-2">Upload Government ID Photos</label>
                <input
                  type="file"
                  accept="image/*"
                  className={`${stepStyles} w-full`}
                  multiple
                  required
                />
                {/* <label className="block text-blue-600 mt-4 mb-2">Capture Government IDs (Camera)</label>
                <button
                  type="button"
                  className="bg-gray-400 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-gray-500"
                >
                  Capture Photos
                </button> */}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-4">Step 3: Address & Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <input className={stepStyles} type="text" placeholder="Phone Number" required />
                <input className={stepStyles} type="text" placeholder="Emergency Contact Number" required />
                <input className={stepStyles} type="text" placeholder="Residential Address" required />
                <input className={stepStyles} type="text" placeholder="City" required />
                <input className={stepStyles} type="text" placeholder="State" required />
                <input className={stepStyles} type="text" placeholder="Pin Code" required />
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-4">Step 4: Professional Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input className={stepStyles} type="text" placeholder="Highest Qualification" required />
                <input className={stepStyles} type="text" placeholder="Specialization" required />
                <input className={stepStyles} type="text" placeholder="Medical License Number" required />
                <input className={stepStyles} type="text" placeholder="Years of Experience" required />
              </div>
              <div className="mt-4">
                <label className="block text-blue-600 mb-2">Upload Supporting Documents</label>
                <input
                  type="file"
                  accept="image/*"
                  className={`${stepStyles} w-full`}
                  multiple
                />
                {/* <label className="block text-blue-600 mt-4 mb-2">Capture Supporting Documents (Camera)</label>
                <button
                  type="button"
                  className="bg-gray-400 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-gray-500"
                >
                  Capture Photos
                </button> */}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-400 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-gray-500"
              >
                Previous
              </button>
            )}
            {step < 4 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-blue-600"
              >
                Next
              </button>
            )}
            {step === 4 && (
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-green-600"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewDoctor;
