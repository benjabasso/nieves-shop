export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="bg-gray-50 rounded-t-xl p-6 flex items-center justify-center h-48">
            <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain"
            />
            </div>
    
            <div className="p-4 flex flex-col flex-1">
            <p className="text-xs text-indigo-500 font-semibold uppercase tracking-wide mb-1">
                {product.category}
            </p>
    
            <h3 className="text-sm font-medium text-gray-800 leading-snug mb-2 line-clamp-2 flex-1">
                {product.title}
            </h3>
    
            <div className="flex items-center gap-1 mb-3 text-yellow-400 text-xs">
                {"★".repeat(Math.round(product.rating.rate))}
                {"☆".repeat(5 - Math.round(product.rating.rate))}
                <span className="text-gray-400 ml-1">({product.rating.count})</span>
            </div>
    
            <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
                </span>
                <button
                onClick={() => onAddToCart(product)}
                className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg hover:bg-indigo-600 transition-colors font-medium"
                >
                + Añadir
                </button>
            </div>
            </div>
        </div>
    );
}