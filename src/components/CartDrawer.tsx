import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderPlaced(true);
      clearCart();
      setTimeout(() => {
        setOrderPlaced(false);
        setIsCartOpen(false);
      }, 3000);
    }, 2000);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-dark-900 border-l border-white/5 z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-400" />
            <h2 className="text-lg font-bold text-white">Cart ({totalItems})</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {orderPlaced ? (
            <div className="flex flex-col items-center justify-center h-full p-8 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Order Placed!</h3>
              <p className="text-dark-300 text-sm text-center">
                Thank you for your order. You'll receive a confirmation email shortly.
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8">
              <div className="w-16 h-16 rounded-full bg-dark-800 flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-dark-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Your cart is empty</h3>
              <p className="text-dark-400 text-sm">Browse the store to add items.</p>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {items.map((item) => {
                const key = `${item.product.id}-${item.size || ''}-${item.color || ''}`;
                return (
                  <div key={key} className="bg-dark-800/60 border border-white/5 rounded-xl p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg bg-dark-700 flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-6 h-6 text-dark-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate">{item.product.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          {item.size && (
                            <span className="text-xs text-dark-400 bg-dark-700 px-2 py-0.5 rounded">
                              {item.size}
                            </span>
                          )}
                          {item.color && (
                            <span className="text-xs text-dark-400 bg-dark-700 px-2 py-0.5 rounded">
                              {item.color}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)}
                              className="w-7 h-7 rounded-md bg-dark-700 hover:bg-dark-600 flex items-center justify-center text-dark-300 hover:text-white transition-all"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium text-white w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)}
                              className="w-7 h-7 rounded-md bg-dark-700 hover:bg-dark-600 flex items-center justify-center text-dark-300 hover:text-white transition-all"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-brand-400">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.product.id, item.size, item.color)}
                              className="p-1.5 rounded-md text-dark-500 hover:text-red-400 hover:bg-red-400/10 transition-all"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && !orderPlaced && (
          <div className="border-t border-white/5 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-dark-300">Subtotal</span>
              <span className="text-lg font-bold text-white">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {checkingOut ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Checkout
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <button
              onClick={clearCart}
              className="w-full py-2.5 text-dark-400 hover:text-red-400 text-sm font-medium transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
