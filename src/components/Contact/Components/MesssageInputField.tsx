import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const MessageInputField = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (status !== "" && status !== "Sending...") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [status]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  
        form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("Message sent successfully!");
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label htmlFor="name" className="flex flex-col">
          <span className="text-sm font-bold mb-2 dark:text-white">Name</span>
          <input
            type="text"
            id="name"
            name="name" // Ensure this matches your EmailJS template variable {{name}}
            placeholder="Your name"
            required
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 text-sm transition-colors"
          />
        </label>

        <label htmlFor="email" className="flex flex-col">
          <span className="text-sm font-bold mb-2 dark:text-white">Email</span>
          <input
            type="email"
            id="email"
            name="email" // Matches {{email}}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 text-sm transition-colors"
          />
        </label>

        <label htmlFor="subject" className="flex flex-col">
          <span className="text-sm font-bold mb-2 dark:text-white">Subject</span>
          <input
            type="text"
            id="subject"
            name="subject" 
            placeholder="What's this about?"
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 text-sm transition-colors"
          />
        </label>

        <label htmlFor="message" className="flex flex-col">
          <span className="text-sm font-bold mb-2 dark:text-white">Message</span>
          <textarea
            id="message"
            name="message" 
            placeholder="Your message (max 500 characters)"
            maxLength={500}
            rows={5}
            required
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 resize-none text-sm transition-colors max-h-48"
          />
        </label>

        <button
          type="submit"
          className="w-full px-8 py-4 max-md:px-6 max-md:py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full font-semibold whitespace-nowrap cursor-pointer shadow-lg mt-5 hover:scale-105 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors text-md"
        >
          Send Message
        </button>

        {/* Status Feedback */}
        {status && (
          <p className="mt-4 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default MessageInputField;