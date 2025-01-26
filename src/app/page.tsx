'use client'

import { useState } from 'react';
import "./globals.css";


const vitamins = [
  "Vitamin A",
  "Vitamin B12",
  "Vitamin C",
  "Vitamin D",
  "Vitamin E",
  "Folic Acid",
  "Biotin",
  "Niacin",
];

const supplements = [
  "Protein",
  "Creatine",
  "BCAAs",
  "Omega-3",
  "Zinc",
  "Magnesium",
  "Probiotics",
  "Collagen",
];

const flavors = [
  "Vanilla",
  "Mango",
  "Chocolate",
  "Coconut",
  "Strawberry",
  "Banana",
  "Peach",
  "Pineapple",
];

export default function StackedNutrition() {
  const [step, setStep] = useState(0);
  const [selectedVitamins, setSelectedVitamins] = useState<string[]>([]);
  const [selectedSupplements, setSelectedSupplements] = useState<string[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  const handleButtonClick = (
    item: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    selected: string[]
  ) => {
    setSelected(
      selected.includes(item)
        ? selected.filter((i) => i !== item)
        : [...selected, item]
    );
  };

  const handleNextStep = () => setStep(step + 1);

  const handleSubmit = () => {
    console.log({ selectedVitamins, selectedSupplements, selectedFlavors, email });
    alert("Thanks for your interest! We'll reach out soon.");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen font-sans px-4" style={{ fontFamily: 'BlinkMacSystemFont, -apple-system, sans-serif' }}>
      <div className="max-w-lg text-center">
        {step === 0 && (
          <div>
            <h1 className="text-4xl font-bold mb-4">Stacked</h1>
            <p className="text-lg mb-8">Optimize your nutritional stack with a custom all-in-one beverage</p>
            <button
              onClick={handleNextStep}
              className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        )}

        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Choose Your Vitamins</h1>
            <div className="grid grid-cols-2 gap-4">
              {vitamins.map((vitamin) => (
                <button
                  key={vitamin}
                  onClick={() => handleButtonClick(vitamin, setSelectedVitamins, selectedVitamins)}
                  className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
                    selectedVitamins.includes(vitamin)
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gray-500 hover:bg-gray-600'
                  }`}
                >
                  {vitamin}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextStep}
              className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Choose Your Supplements</h1>
            <div className="grid grid-cols-2 gap-4">
              {supplements.map((supplement) => (
                <button
                  key={supplement}
                  onClick={() => handleButtonClick(supplement, setSelectedSupplements, selectedSupplements)}
                  className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
                    selectedSupplements.includes(supplement)
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gray-500 hover:bg-gray-600'
                  }`}
                >
                  {supplement}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextStep}
              className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Choose Your Flavors (Up to 2)</h1>
            <div className="grid grid-cols-2 gap-4">
              {flavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => handleButtonClick(flavor, setSelectedFlavors, selectedFlavors)}
                  disabled={
                    selectedFlavors.length >= 2 && !selectedFlavors.includes(flavor)
                  }
                  className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
                    selectedFlavors.includes(flavor)
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gray-500 hover:bg-gray-600'
                  } ${
                    selectedFlavors.length >= 2 && !selectedFlavors.includes(flavor)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextStep}
              className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Enter Your Email</h1>
            <p className="mb-4">The product isn't ready yet, but we'd love to keep you updated!</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500"
            />
            <button
              onClick={handleNextStep}
              className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        )}

        {step === 5 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Summary of Your Selections</h1>
            <div className="text-left">
              <p className="mb-2"><strong>Vitamins:</strong> {selectedVitamins.join(', ') || 'None selected'}</p>
              <p className="mb-2"><strong>Supplements:</strong> {selectedSupplements.join(', ') || 'None selected'}</p>
              <p className="mb-2"><strong>Flavors:</strong> {selectedFlavors.join(', ') || 'None selected'}</p>
              <p><strong>Email:</strong> {email || 'Not provided'}</p>
            </div>
            <button
              onClick={() => alert('Thanks for reviewing your selections!')}
              className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700"
            >
              Finish
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
