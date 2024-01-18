import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { items } from './CartData';

export default function Cart() {
  const [open, setOpen] = useState(true)
  const totalAmount=items.reduce((amount, item)=>item.price*item.quantity +amount,0)
  const totalItems=items.reduce((total, item)=>item.quantity + total,0)

  const handleQuantity = (e,item) => {
   console.log({...item, quantity: +e.target.value});
  };
 const handleDelete=(id) =>{
  console.log(id);
 }
  return (
   <>
      <div className="mx-auto max-w-7xl bg-white mt-5 mb-10 px-4 sm:px-6 lg:px-8 pb-4">
        <h2 className='text-3xl pt-4'>Cart</h2>
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href={item.href}>{item.title}</a>
                  </h3>
                  <p className="ml-4"> ${item.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <div className="text-gray-500">
                <label htmlFor="quantity" className="inline mr-5 text-sm font-medium leading-6 text-gray-900">
                Qty
              </label> 
                <select onChange={(e) => handleQuantity(e,item)} value={item.quantity}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>


                </select>
                </div>

                <div className="flex">
                  <button onClick={(e) => handleDelete(e,item.id)}
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between  my-2text-base font-medium text-gray-900">
    <p>Subtotal</p>
    <p>$ {totalAmount}</p>
  </div>
  <div className="flex justify-between  my-2text-base font-medium text-gray-900">
    <p>Total Items in Cart</p>
    <p>{totalItems} items</p>
  </div>
  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
  <div className="mt-6">
    <Link to=""
      href="#"
      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    >
      Checkout
    </Link>
  </div>
  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
    <p>
      or
      <Link to="/">
      <button
        type="button"
        className="font-medium text-indigo-600 hover:text-indigo-500"
        onClick={() => setOpen(false)}
      >
        Continue Shopping
        <span aria-hidden="true"> &rarr;</span>
      </button>
      </Link>
    </p>
  </div>
</div>
</div>
</>
)
}
