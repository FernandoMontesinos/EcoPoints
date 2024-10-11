import React from 'react'
import { Bell, Map, QrCode, Award, User } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gradient-to-r from-green-600 to-blue-600">
        <h1 className="text-xl md:text-2xl font-bold text-white">EcoPoint</h1>
        <Bell className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        {/* Points Display */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-4 md:p-6 mb-4 md:mb-6 border border-green-400">
          <h2 className="text-base md:text-lg font-semibold text-green-400 mb-2">Tus Puntos EcoPoint</h2>
          <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">1,250</div>
          <p className="text-xs md:text-sm text-gray-300 mt-1">Equivalente a 2.5 kg de plástico reciclado</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
          <button className="bg-gradient-to-br from-green-500 to-blue-500 p-3 md:p-4 rounded-lg flex flex-col items-center justify-center hover:from-green-600 hover:to-blue-600 transition-all duration-300">
            <Map className="w-6 h-6 md:w-8 md:h-8 text-white mb-1 md:mb-2" />
            <span className="text-xs md:text-sm font-medium text-white">Encontrar Puntos</span>
          </button>
          <button className="bg-gradient-to-br from-blue-500 to-green-500 p-3 md:p-4 rounded-lg flex flex-col items-center justify-center hover:from-blue-600 hover:to-green-600 transition-all duration-300">
            <QrCode className="w-6 h-6 md:w-8 md:h-8 text-white mb-1 md:mb-2" />
            <span className="text-xs md:text-sm font-medium text-white">Escanear QR</span>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-4 md:p-6 mb-4 md:mb-6 border border-green-400">
          <h2 className="text-base md:text-lg font-semibold text-green-400 mb-3 md:mb-4">Actividad Reciente</h2>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm md:text-base text-white">Botella de plástico reciclada</p>
                <p className="text-xs md:text-sm text-gray-300">Hace 2 horas</p>
              </div>
              <span className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-semibold">+10 pts</span>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm md:text-base text-white">Lata de aluminio reciclada</p>
                <p className="text-xs md:text-sm text-gray-300">Ayer</p>
              </div>
              <span className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-semibold">+5 pts</span>
            </li>
          </ul>
        </div>

        {/* Local Rewards */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-4 md:p-6 border border-green-400">
          <h2 className="text-base md:text-lg font-semibold text-green-400 mb-3 md:mb-4">Recompensas Locales</h2>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm md:text-base text-white">Café gratis en EcoCafé</p>
                <p className="text-xs md:text-sm text-gray-300">100 puntos</p>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm hover:from-green-600 hover:to-blue-600 transition-all duration-300">Canjear</button>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium text-sm md:text-base text-white">Descuento en GreenMarket</p>
                <p className="text-xs md:text-sm text-gray-300">250 puntos</p>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm hover:from-green-600 hover:to-blue-600 transition-all duration-300">Canjear</button>
            </li>
          </ul>
        </div>
      </main>

      {/* Navigation */}
      <nav className="flex justify-around items-center p-3 md:p-4 bg-gradient-to-r from-gray-800 to-gray-700 border-t border-green-400">
        <button className="flex flex-col items-center">
          <Map className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
          <span className="text-xxs md:text-xs mt-1 text-gray-300">Mapa</span>
        </button>
        <button className="flex flex-col items-center">
          <Award className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
          <span className="text-xxs md:text-xs mt-1 text-gray-300">Recompensas</span>
        </button>
        <button className="flex flex-col items-center">
          <QrCode className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
          <span className="text-xxs md:text-xs mt-1 text-gray-300">Escanear</span>
        </button>
        <button className="flex flex-col items-center">
          <User className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
          <span className="text-xxs md:text-xs mt-1 text-gray-300">Perfil</span>
        </button>
      </nav>
    </div>
  )
}