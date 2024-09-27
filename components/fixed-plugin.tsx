import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

export function FixedPlugin() {
  return (
    <a
      href="https://wa.me/2348160821473?text=Hello%20I%20would%20like%20to%20know%20more%20about%20our%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4"
    >
      <div
        className="
          flex items-center justify-center 
          bg-green-500 text-white font-bold 
          rounded-full p-3 pr-5 shadow-lg
          transition-transform transform hover:scale-110 hover:bg-green-600
          animate-bounce
        "
      >
        <FaWhatsapp className="w-5 h-5 mr-2 sm:w-6 sm:h-6" /> {/* WhatsApp Icon */}
        <span className="hidden sm:inline truncate">Chat with our team on WhatsApp</span>
      </div>
    </a>
  );
}