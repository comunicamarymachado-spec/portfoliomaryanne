import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5581991188728&text&type=phone_number&app_absent=0";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-copper text-ocean shadow-lg shadow-black/30 transition-transform duration-300 ease-out hover:scale-110 focus-visible:scale-110"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
