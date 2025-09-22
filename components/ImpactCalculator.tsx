'use client'

import { useState } from 'react'
import { Calculator, Droplet, DollarSign, Users, Leaf } from 'lucide-react'

const ImpactCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100000)
  
  const calculateImpact = (amount: number) => {
    const waterPointsFunded = Math.floor(amount / 50000)
    const peopleServed = waterPointsFunded * 5000
    const litersPerYear = peopleServed * 20 * 365
    const dieselSaved = waterPointsFunded * 45000
    const co2Reduced = waterPointsFunded * 100
    const jobsCreated = waterPointsFunded * 10
    
    return {
      waterPointsFunded,
      peopleServed,
      litersPerYear,
      dieselSaved,
      co2Reduced,
      jobsCreated,
    }
  }
  
  const impact = calculateImpact(investmentAmount)
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-solar/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
        <Calculator className="h-8 w-8 mr-3 text-primary" />
        Impact Calculator
      </h3>
      
      <div className="mb-8">
        <label className="block text-lg font-semibold mb-4">
          Investment Amount: ${investmentAmount.toLocaleString()}
        </label>
        <input
          type="range"
          min="50000"
          max="1000000"
          step="10000"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>$50,000</span>
          <span>$1,000,000</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 text-center">
          <Droplet className="h-8 w-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {impact.waterPointsFunded}
          </div>
          <p className="text-sm text-gray-600">Water Points Funded</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 text-center">
          <Users className="h-8 w-8 text-solar mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {impact.peopleServed.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600">People Served</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 text-center">
          <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            ${impact.dieselSaved.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600">Annual Diesel Savings</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 text-center">
          <Droplet className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {(impact.litersPerYear / 1000000).toFixed(1)}M
          </div>
          <p className="text-sm text-gray-600">Liters/Year</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 text-center">
          <Leaf className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {impact.co2Reduced}
          </div>
          <p className="text-sm text-gray-600">Tons CO2 Reduced</p>
        </div>
        
        <div className="bg-white rounded-lg p-4 text-center">
          <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {impact.jobsCreated}
          </div>
          <p className="text-sm text-gray-600">Jobs Created</p>
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #0066CC;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #0066CC;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
}

export default ImpactCalculator