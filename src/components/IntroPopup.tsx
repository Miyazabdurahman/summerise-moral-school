import { useEffect, useState } from "react";

export default function IntroPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl 
      max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-center">

        <div 
        className="text-sm sm:text-base leading-relaxed space-y-4 
        text-gray-800 dark:text-gray-200"
        style={{ fontFamily: "Anek Malayalam, sans-serif" }}
        >

          <p>മാതാപിതാക്കൾ ആശങ്കയിലാണ്...</p>
          <p>വിദ്യാർഥികൾ ഡിപ്രഷനിലാണ്</p>
          <p>അദ്ധ്യാപകർ നിസ്സഹായരാണ്...</p>
          <p>സമൂഹം വെറും നോക്കുകുത്തിയായി മാറിയിരിക്കുന്നു</p>
          <p>ധാർമികത അതിന്റെ ഇരുട്ടിലേക്ക് മറഞ്ഞിരിക്കുന്നു</p>

          <p>
            പ്രശ്നങ്ങൾ കൂടുന്നു കൊലപാതകങ്ങൾ കൂടുന്നു കുടുംബ ജീവിതം തകരുന്നു
          </p>

          <p>
            സമൂഹം അധപതനത്തിലേക്ക് കൂപ്പുകുത്തി കൊണ്ടിരിക്കുന്നു
          </p>

          <p>
            നമ്മുടെ യുവാക്കളെ ലഹരി വിഴുങ്ങിയിരിക്കുന്നു
          </p>

          <p>YOLO സത്യമാണോ</p>

          <p>
            സത്യം എന്താണെന്നും അസത്യം എന്താണെന്നും നാം തിരിച്ചറിയേണ്ട
          </p>

          <p>നമുക്ക് മറ്റൊരു ജീവിതം ഇല്ലേ</p>

          <p className="font-semibold text-lg">
            ഇതിൽ നിന്നും ഒരു മാറ്റം നിങ്ങൾ ആഗ്രഹിക്കുന്നില്ലേ
          </p>

          <p className="font-bold text-purple-600 dark:text-purple-400 text-lg">
            അതിനുള്ള സൊല്യൂഷൻ ഇവിടെയുണ്ട്
          </p>

          <p className="font-bold text-lg">
            THIS IS COMING SOON IN TIRURANGADI 🔥
          </p>

        </div>

        <button
          onClick={() => setShow(false)}
          className="mt-8 px-8 py-3 bg-gradient-to-r 
          from-purple-600 to-blue-600 text-white 
          rounded-full font-semibold hover:scale-105 transition"
        >
          Continue
        </button>

      </div>

    </div>
  );
}