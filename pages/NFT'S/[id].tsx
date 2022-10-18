import React from 'react'
import { ConnectWallet, useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";

function NFTDropsPage() {

    // authentication 
    const connectWithMetamask = useMetamask()
    const address = useAddress()
    const disconnect = useDisconnect()
    // ----

    console.log(address)

    return (
        <div className='fle h-screen flex-col lg:grid lg:grid-cols-10'>
            {/* left side of my screen */}
            <div className='bg-gradient-to-br from-cyan-100 to-pink-100 lg:col-span-4'>
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>

                    {/* center div in left screen */}

                    <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-1.5 rounded-lg'>
                        <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://links.papareact.com/8sg" alt="" />
                    </div>
                    <div className='text-center p-5 space-y-3'>
                        <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-rose-600'>
                            SMART Cat's
                        </h1>
                        <h2 className='text-xl text-gray-500'>
                            A collection of cats that code and make uou smile
                        </h2>
                    </div>
                </div>
            </div>


            {/* right screen side */}
            <div className='bg-gradient-to-br from-blue-100 to-rose-100 flex flex-1 flex-col p-12 lg:col-span-6'>
                {/* header */}

                <header className='flex items-center justify-between'>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80 text-gray-500'>
                        The {' '}
                        <span className='font-bold underline decoration-yellow-600/50 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-rose-600'> SMART Cat's</span>
                        {' '} NFT Market Place
                    </h1>

                    <button onClick={() =>( address ? disconnect() : connectWithMetamask())} className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3'> {address ? 'Sign Out': 'Sign In'} </button>
                </header>

                <hr className='my-2 border ' />

                { address && (
                    <p className='text-center text-sm text-green-500' >You are currently logged in with { address.substring(0, 6)}....{ address.substring(address.length -4)}</p>
                ) }

                {/* main body  */}
                <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
                    <img className="w-80 object-cover pb-10 lg:h-40" src="https://links.papareact.com/bdy" alt="" />
                    <h1 className='text-2xl font-bold lg:text-3xl lg:font-bold text-gray-500'> The SMART Cat's Gaming Club | Smart NFT DROP</h1>
                    <p className='pt-2 text-xl text-green-500'>100 / 1500 NFT's Claimed</p>
                </div>


                {/* mint button */}
                <button className=' rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold h-16 mt-10 lg:px-5 lg:py-3'> Mint NFT (0.05ETH) </button>


            </div>
        </div>

    )
}

export default NFTDropsPage