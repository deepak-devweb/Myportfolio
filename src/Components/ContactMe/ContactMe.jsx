import React,{useState} from 'react'

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log(formData);
      };
    
      return (
        <div className="max-w-96 h-96 mx-auto mt-10">
          <div className="hello shadow-md rounded px-5 py-7">
            <h2 className="text-4xl font-semibold text-center  text-white ">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block">Subject:</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block">Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border rounded px-3 py-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </div>
      );
  
}

export default ContactMe