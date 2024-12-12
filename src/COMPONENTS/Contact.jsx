import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    privacyChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact</h2>
      <p className="text-center text-gray-500 mb-6">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone number</label>
          <div className="flex items-center">
            <select
              name="phone"
              className="w-1/3 p-2 border border-gray-300 rounded-md mr-2"
              value={formData.phone}
              onChange={handleChange}
            >
              <option value="IN">IN</option>
              <option value="US">US</option>
              {/* Add more countries as needed */}
            </select>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-2/3 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="privacyPolicy"
            name="privacyChecked"
            checked={formData.privacyChecked}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label htmlFor="privacyPolicy" className="text-gray-600">
            By selecting this, you agree to our <a href="#" className="text-blue-500">privacy policy</a>.
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-purple-700">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
