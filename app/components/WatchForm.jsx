import { addWatch } from "../server-actions/addWatch";

export default function WatchForm() {
  return (
    <form action={addWatch} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4">
      <div className="flex flex-col">
        <label htmlFor="brand" className="text-sm font-medium text-gray-700 mb-1">
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="model" className="text-sm font-medium text-gray-700 mb-1">
          Model
        </label>
        <input
          type="text"
          name="model"
          id="model"
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="referenceNumber" className="text-sm font-medium text-gray-700 mb-1">
          Reference Number
        </label>
        <input
          type="text"
          name="referenceNumber"
          id="referenceNumber"
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Add Watch
      </button>
    </form>
  );
}