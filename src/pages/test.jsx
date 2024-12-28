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
      <label className="block text-blue-600 mt-4 mb-2">Capture Government IDs (Camera)</label>
      <button
        type="button"
        className="bg-gray-400 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-gray-500"
      >
        Capture Photos
      </button>
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
      <label className="block text-blue-600 mt-4 mb-2">Capture Supporting Documents (Camera)</label>
      <button
        type="button"
        className="bg-gray-400 text-white py-2 px-4 rounded border-slate-600 hover:shadow-sm hover:shadow-black hover:bg-gray-500"
      >
        Capture Photos
      </button>
    </div>
  </div>
)}