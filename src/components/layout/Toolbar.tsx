import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Toolbar = () => {
  return (
    <div className="bg-toolbar text-toolbar-foreground text-sm">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-6">
            <a 
              href="tel:+254757090042" 
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+254 757 090 042</span>
            </a>
            <a 
              href="mailto:info@itnest.org" 
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>info@itnest.org</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
