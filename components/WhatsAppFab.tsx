import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl("Namaste. I would like to enquire about a ritual.")}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-tulsi-green px-4 py-3 text-sm font-medium text-sacred-cream shadow-lg shadow-setu-indigo/20 transition-colors hover:bg-setu-indigo"
      aria-label="Write to us on WhatsApp"
    >
      <MessageCircle size={18} strokeWidth={1.5} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
