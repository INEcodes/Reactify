import React, { useState } from 'react';

const FormList = () => {
  const [formList, setFormList] = useState([{ name: '', email: '' }]);

  const handleChange = (index, event) => {
    const updatedList = [...formList];
    updatedList[index][event.target.name] = event.target.value;
    setFormList(updatedList);
  };

  const handleAdd = () => {
    setFormList([...formList, { name: '', email: '' }]);
  };

  const handleRemove = (index) => {
    const updatedList = [...formList];
    updatedList.splice(index, 1);
    setFormList(updatedList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formList);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Dynamic Form List</h2>
      <form onSubmit={handleSubmit}>
        {formList.map((form, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 mb-4 border p-4 rounded-lg bg-gray-50"
          >
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={(e) => handleChange(index, e)}
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange(index, e)}
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleAdd}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Add More
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormList;
