import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

const LetsWork = () => {
  const navigate = useNavigate();
  const startConversation = () => {
    navigate("/contact");
  }
  return (
    <motion.div className="py-20 px-6 bg-linear-to-r from-indigo-600 to-purple-600"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 ">Let's Work Together!</h2>
        <p className="text-center mb-8 text-xl text-indigo-100">I'm excited to collaborate on your next project. Reach out to discuss how we can create something amazing together.</p>
      </div>
      <div className="flex justify-center">
        <button onClick={startConversation} className="bg-white text-indigo-600 px-8 py-4 rounded-full font-medium max-md:px-6 max-md:py-2">Start A Conversation</button>
      </div>

    </motion.div>
  )
}

export default LetsWork