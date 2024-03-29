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
        <div className="max-w-96 h-96 mx-auto mt-16 rounded-lg backdrop-blur-[30px] bg-[#2C318A]">
         
          <div className="hello shadow-md rounded px-5 py-7">
            <h2 className="text-4xl font-semibold text-center mb-9 text-white uppercase gap-12">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
               
                <input placeholder='Name' type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
           
                <input placeholder='Email' type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
          
                <input placeholder='Subject' type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <textarea placeholder='Message' name="message" value={formData.message} onChange={handleChange} className="w-full border rounded px-3 py-2"></textarea>
              </div>
              <button type="button" className="font-bold shadow-lg shadow-blue-500/50 bg-white px-7 py-2 rounded-full mt-3 flex justify-center items-center w-full text-slate-400">Send</button>
            </form>
          </div>
        </div>
      );
  
}

export default ContactMe