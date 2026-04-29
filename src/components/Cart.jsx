export default function Cart({ cart, isOpen, onClose, onRemove, onChangeQty }) {
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-20"
                    onClick={onClose}
                />
            )}
    
            {/* Panel */}
            <div
            className={`fixed top-0 right-0 h-full w-80 bg-white z-30 shadow-2xl flex flex-col transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            >

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Tu carrito</h2>
                <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                ✕
                </button>
            </div>
    
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
                {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                    <p className="text-sm">Tu carrito está vacío</p>
                </div>
                ) : (
                <ul className="space-y-4">
                    {cart.map((item) => (
                    <li key={item.id} className="flex gap-3 items-start">
                        <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-contain bg-gray-50 rounded-lg p-1 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-700 font-medium line-clamp-2 leading-snug">
                            {item.title}
                        </p>
                        <p className="text-sm font-bold text-indigo-600 mt-1">
                            ${(item.price * item.qty).toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <button
                            onClick={() => onChangeQty(item.id, -1)}
                            className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded text-sm font-bold transition-colors"
                            >
                            −
                            </button>
                            <span className="text-sm font-medium w-4 text-center">
                            {item.qty}
                            </span>
                            <button
                            onClick={() => onChangeQty(item.id, 1)}
                            className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded text-sm font-bold transition-colors"
                            >
                            +
                            </button>
                            <button
                            onClick={() => onRemove(item.id)}
                            className="ml-auto text-xs text-red-400 hover:text-red-600 transition-colors"
                            >
                            Eliminar
                            </button>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                )}
            </div>
    
            {/* Footer */}
            {cart.length > 0 && (
                <div className="border-t border-gray-200 px-5 py-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Total</span>
                    <span className="text-xl font-bold text-gray-900">
                    ${total.toFixed(2)}
                    </span>
                </div>
                <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-indigo-600 transition-colors">
                    Finalizar compra →
                </button>
                </div>
            )}
            </div>
        </>
        );
}