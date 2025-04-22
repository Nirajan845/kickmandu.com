import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phone, setPhone] = useState("");

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setIsLoginOpen(true);
    } else {
      alert("Proceeding to checkout!");
    }
  };

  const handleLogin = () => {
    if (phone.match(/^98\d{8}$/)) {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    } else {
      alert("Please enter a valid Nepali phone number");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">🛒 Your Cart</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Example Cart Items */}
        {[1, 2].map((item) => (
          <div
            key={item}
            className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src="/sneaker.jpg"
              alt="Sneaker"
              className="h-40 w-full object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">Sneaker {item}</h3>
            <p className="text-gray-600">Price: Rs. 5000</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={handleCheckout} className="px-6 py-2 text-lg">
          {isLoggedIn ? "Proceed to Checkout" : "Login to Checkout"}
        </Button>
      </div>

      {/* Login Modal */}
      <Dialog open={isLoginOpen} onClose={() => setIsLoginOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-sm space-y-4">
            <Dialog.Title className="text-xl font-semibold text-center">
              📱 Enter Phone to Login
            </Dialog.Title>
            <input
              type="tel"
              placeholder="98XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
