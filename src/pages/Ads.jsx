import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Ads = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedPixel = queryParams.get('pixel');
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const steps = ['Şirket Bilgisi', 'Reklam', 'Ödeme'];

  return (
 <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-16 p-6">
      {/* Adım Göstergesi */}
      <div className="flex space-x-6 mb-6">
        {steps.map((label, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 transition-all duration-300 ${
              step === index + 1 ? 'text-indigo-600 font-bold' : 'text-gray-400'
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${step === index + 1 ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>

      {/* Kart */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        {/* Satın alınan pixel bilgisi */}
        {selectedPixel && (
          <div className="text-xs text-pink-600 text-right mb-2">
            Satın alınacak piksel: <strong>#{selectedPixel}</strong>
          </div>
        )}

        {/* Geçişli içerik */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* AŞAMA 1 */}
            {step === 1 && (
              <>
                <h2 className="text-xl font-bold text-gray-700">1. Şirket Bilgisi</h2>
                <input type="text" placeholder="Şirket Adı" className="w-full px-3 py-2 border rounded-lg text-sm" />
                <input type="url" placeholder="https://sirketiniz.com" className="w-full px-3 py-2 border rounded-lg text-sm" />
                <div className="text-right">
                  <button onClick={nextStep} className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 text-sm rounded-lg shadow transition-all">
                    Devam Et
                  </button>
                </div>
              </>
            )}

            {/* AŞAMA 2 */}
            {step === 2 && (
              <>
                <h2 className="text-xl font-bold text-gray-700">2. Reklam Bilgileri</h2>
                <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer">
                  <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500">Görsel yüklemek için tıklayın</p>
                  <input type="file" className="hidden" />
                </label>
                <textarea rows="3" placeholder="Reklam açıklaması" className="w-full px-3 py-2 border rounded-lg text-sm" />
                <div className="flex justify-between">
                  <button onClick={prevStep} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">Geri</button>
                  <button onClick={nextStep} className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 text-sm rounded-lg shadow">Devam Et</button>
                </div>
              </>
            )}

            {/* AŞAMA 3 */}
            {step === 3 && (
              <>
                <h2 className="text-xl font-bold text-gray-700">3. Ödeme Bilgileri</h2>
               
                <input type="text" placeholder="Kart Üzerindeki İsim" className="w-full px-3 py-2 border rounded-lg text-sm" />
                <input type="text" placeholder="Kart Numarası" maxLength="19" className="w-full px-3 py-2 border rounded-lg text-sm" />
                <div className="flex gap-3">
                  <input type="text" placeholder="MM/YY" maxLength="5" className="w-full px-3 py-2 border rounded-lg text-sm" />
                  <input type="password" placeholder="CVV" maxLength="4" className="w-full px-3 py-2 border rounded-lg text-sm" />
                </div>
                <div className="bg-green-50 text-green-800 text-xs rounded-md p-3 border border-green-200">
                  <strong>Not:</strong> Her ay 1 TL otomatik olarak çekilecektir. İptal etmediğiniz sürece devam eder.
                </div>
                <div className="flex justify-between">
                  <button onClick={prevStep} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300">Geri</button>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm shadow">Ödeme Yap</button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Ads;
