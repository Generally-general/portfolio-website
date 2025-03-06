import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageStatus(null);

    try {
      await emailjs.send(
        "service_gcc3oqw", // Replace with your EmailJS Service ID
        "template_a8pv5mn", // Replace with your EmailJS Template ID
        formData,
        "sXmoWK-QfVjTuqHK-" // Replace with your EmailJS Public Key
      );

      setMessageStatus({ type: "success", text: "✅ Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setMessageStatus({ type: "error", text: "❌ Failed to send message. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold">Get In Touch</h2>
      <p className="text-gray-400 mt-2">I'd love to hear from you!</p>

      {/* Button to Show/Hide Form */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="mt-6 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition"
      >
        {isFormVisible ? "Hide Form" : "Contact Me"}
      </button>

      {/* Contact Form (Visible Only When Button is Clicked) */}
      {isFormVisible && (
        <div className="mt-6 max-w-lg mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Success/Error Message */}
          {messageStatus && (
            <p className={`mt-4 text-sm ${messageStatus.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {messageStatus.text}
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default Contact;
// // In the above code, we created a functional component called Contact. We used the useState hook to manage the form data, form visibility, loading state, and message status. We also imported the emailjs library to send emails using EmailJS.