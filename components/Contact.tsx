export default function Contact() {
    return (
      <section id="contact" className="px-[10%] py-20 bg-[#1a1a1a] text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/navin-dissanayake-95b762289"
            className="text-cyan-400 text-3xl p-4 bg-[#242424] rounded-full shadow-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
  
          {/* Facebook Messenger */}
          <a
            href="https://m.me/your-facebook-username" // Replace with your actual Messenger username
            className="text-cyan-400 text-3xl p-4 bg-[#242424] rounded-full shadow-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Messenger"
          >
            <i className="fab fa-facebook-messenger"></i>
          </a>
  
          {/* Phone */}
          <a
            href="tel:+94712960587" // Replace with your phone number
            className="text-cyan-400 text-3xl p-4 bg-[#242424] rounded-full shadow-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            aria-label="Phone"
          >
            <i className="fas fa-phone"></i>
          </a>
  
          {/* WhatsApp */}
          <a
            href="https://wa.me/94712960587"
            className="text-cyan-400 text-3xl p-4 bg-[#242424] rounded-full shadow-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
  
          {/* Telegram */}
          <a
            href="https://t.me/your-telegram-username" // Replace with your actual Telegram username
            className="text-cyan-400 text-3xl p-4 bg-[#242424] rounded-full shadow-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </section>
    );
  }
  