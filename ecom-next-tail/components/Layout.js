import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Store } from '@/utils/Store';
import { useContext, useState, useEffect } from 'react';

export default function Layout({ title, children }) {

    const { state, dispatch} = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setcartItemsCount] = useState(0);

    useEffect(() => {
      setcartItemsCount(cart.cartItems.reduce((a,c) => a + c.quantity, 0))
    }, [cart.cartItems]);


  return (
    <>
      <Head>
        <title>{title ? title + ' | Amazona' : 'Amazona'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex min-h-screen flex-col justify-between'>
        <header>
            <nav className='flex h-12 justify-between shadow-md items-center px-4'>
                <Link href={'/'}>
                    <div className='text-lg font-bold'>amazona</div>
                </Link>
                <div className='flex h-12 justify-between items-center px-4'>
                    <Link href={'/cart'}>
                        <p className='p-2'>Cart
                        {cartItemsCount > 0 && 
                        (<span className='ml=1 rounded-full bg-red-600 px-2 py1 text-xs font-bold text-white'>
                            {cartItemsCount}
                        </span>)}
                        </p>
                    </Link>
                    <Link href={'/login'}>
                        <p className='p-2'>Login</p>
                    </Link>
                </div>
            </nav>
        </header>

        <main className='container m-auto mt-4 px-4'>{children}</main>

        <footer className='flex justify-center items-center h-10 shadow-inner'>Copyrigth 2023 Pablo Carro</footer>
      </div>

    </>
  )
}