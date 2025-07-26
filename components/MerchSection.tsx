
import React from 'react';
import { PRODUCTS_DATA } from '../constants';
import type { Product } from '../types';
import { ShoppingCartIcon } from './icons';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group border border-gray-700 transition-all duration-300 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20">
      <div className="overflow-hidden h-64">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-lg mb-4">{product.price}</p>
        <button className="w-full flex items-center justify-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors duration-300 transform group-hover:scale-105">
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

const MerchSection: React.FC = () => {
  return (
    <section id="tienda" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Nuestra Tienda
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_DATA.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
