import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

import { Button } from './button'
import { ROUTES } from '../const/routes'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { useCart } from '../context/cart-context'

export function Header() {
  const navigate = useNavigate()
  const { cart, removeItem } = useCart()
  return (
    <header className="bg-white">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link to={ROUTES.HOME} className="text-xl font-semibold">
          Models
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cart.length !== 0 && (
                <span className="absolute bottom-0 right-2 flex items-center justify-center w-5 h-5 -mt-1 -mr-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                  {cart.length}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            {cart.length === 0 ? (
              <div className="flex items-center justify-center h-32">Your cart is empty</div>
            ) : (
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item._id} className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <span>{item.price}₴</span>
                    </div>
                    <Button onClick={() => removeItem(item._id)} variant="outline">
                      Remove
                    </Button>
                  </div>
                ))}
                <Button className="w-full" onClick={() => navigate(ROUTES.CHECKOUT)}>
                  Checkout
                </Button>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}
