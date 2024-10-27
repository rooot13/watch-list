'use client'

import { useState } from "react";
import { updateWatch } from "../server-actions/updateWatch";

export default function EditWatch({ watch }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: watch.brand,
    model: watch.model,
    referenceNumber: watch.reference_number,
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})



  return (
    <div>
      {/* Edit Button */}
      <button 
        onClick={() => setShowModal(true)} 
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 rounded-md transition duration-200"
      >
        Edit
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="relative bg-white p-6 rounded-lg shadow-2xl w-full max-w-lg">
            {/* Close Button */}
            <span className="close text-gray text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>


            {/* Modal Title */}
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Edit Watch
            </h2>

            {/* Edit Form */}
            <form action={updateWatch} onSubmit={() => setShowModal(false)} className="space-y-4">
              <input 
                type="hidden" 
                name="id" 
                value={watch.id} 
              />
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                  Brand
                </label>
                <input 
                  type="text" 
                  id="brand"
                  name="brand" 
                  value={formData.brand} 
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                />
              </div>
              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                  Model
                </label>
                <input 
                  type="text" 
                  id="model"
                  name="model" 
                  value={formData.model} 
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                  
                />
              </div>
              <div>
                <label htmlFor="referenceNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Reference Number
                </label>
                <input 
                  type="text" 
                  id="referenceNumber"
                  name="referenceNumber" 
                  value={formData.referenceNumber} 
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                  
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Update Watch
                        </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}