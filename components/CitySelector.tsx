import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";

const cities = [
  "Ulhasnagar",
  "Ambernath",
  "Kalyan East",
  "Mumbra",
  "Airoli"
];

type StoreInfo = {
  shopName: string;
  address: React.ReactNode;
  phone?: string;
};

const storeData: Record<string, StoreInfo> = {
  Ulhasnagar: {
    shopName: "Aerix",
    address: (
      <>
        Shop No 545, Main Road, O.T Section,<br />
        OPP Geeta Medical,<br />
        Ulhasnagar, Maharashtra 421004
      </>
    ),
    phone: "+91 7770000597",
  },
  Ambernath: {
    shopName: "OM SAI AERIX",
    address: (
      <>
        Shop No. 7, Gauri Shankar Complex, Shiv Mandir Road,<br />
        Near IndusInd Bank, Ambernath East,<br />
        Maharashtra 421501
      </>
    ),
    phone: "+91 7559199923",
  },
  "Kalyan East": {
    shopName: "Rj Enterprises",
    address: (
      <>
        SANJIT KUMAR JHA, 1696, TOLANI BHAVAN,<br />
        MAHAVEER HOSPITAL RD, Kalyan East,<br />
        Maharashtra 421004
      </>
    ),
    phone: "+91 9373407231",
  },
  Mumbra: {
    shopName: "AKSHIT ENTERPRISES",
    address: (
      <>
        A-14 ELITE RESIDENCY, MAULANA AZAD RD,<br />
        NEAR CENTRAL HEIGHTS, Mittal Ground,<br />
        Mumbra, Maharashtra 400612
      </>
    ),
    phone: "+91 9930429595",
  },
};

const CitySelector = () => {
  const { toast } = useToast();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStoreStatus = () => {
      const now = new Date();
      // Calculate IST time (UTC + 5:30)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istOffset = 5.5 * 60 * 60 * 1000;
      const istDate = new Date(utc + istOffset);
      const currentHour = istDate.getHours();

      // Store is open from 11:00 AM (11) to 11:00 PM (23)
      setIsOpen(currentHour >= 11 && currentHour < 23);
    };

    checkStoreStatus();
    // Update status every minute
    const interval = setInterval(checkStoreStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleCityClick = (city: string) => {
    if (storeData[city]) {
      setSelectedCity(city);
      setShowAddressModal(true);
      return;
    }

    toast({
      title: "Coming Soon! 🎉",
      description: `We're excited to announce that our AERIX ENERGY store in ${city} will be opening soon! Stay tuned for updates on our launch date and exclusive opening offers.`,
    });
  };

  const activeStore = selectedCity ? storeData[selectedCity] : null;

  return (
    <section className="">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Come on over. Meet us
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-2">
            Select City <span className="gradient-text">AERIX ENERGY</span> Stores.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {cities.map((city, index) => (
            <motion.button
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCityClick(city)}
              className="glass p-6 rounded-xl hover:bg-primary/10 hover:border-primary transition-all group text-center"
            >
              <MapPin className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-medium">{city}</span>
            </motion.button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          More about AERIX ENERGY Stores
        </motion.p>

        <Dialog open={showAddressModal} onOpenChange={setShowAddressModal}>
          <DialogContent className="sm:max-w-md border-primary/20 bg-background/95 backdrop-blur-xl">
            {activeStore && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="text-primary w-5 h-5" />
                    </div>
                    <span>{selectedCity} Store</span>
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    Experience the future of riding at our {selectedCity} center
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-secondary/5 p-6 hover:bg-secondary/10 transition-colors">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-2 rounded-lg bg-primary/5 shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Shop Name: {activeStore.shopName}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {activeStore.address}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {activeStore.phone && (
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{activeStore.phone}</span>
                        </div>
                      )}
                      <div className={`flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 ${!activeStore.phone ? 'col-span-2' : ''}`}>
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">11:00 AM - 11:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
                      <span>{isOpen ? "Open Now" : "Closed"}</span>
                    </div>
                    <span>Mon - Sun</span>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
export default CitySelector;
