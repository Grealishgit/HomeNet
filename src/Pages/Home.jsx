import React, { useEffect, useRef, useState } from 'react';
import { FiLogOut, FiMoon, FiSun, FiTv } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { PiCoins } from 'react-icons/pi';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosInformationCircleOutline, IoIosMenu, IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle, FaUser, FaWifi } from 'react-icons/fa';
import { BsDisplay } from 'react-icons/bs';
import { BiCheckDouble } from 'react-icons/bi';

const Home = () => {

    const [sideBar, setSideBar] = useState('');
    const [open, setOpen] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false)
    const [page, setPage] = useState('packages');
    const [activeTab, setActiveTab] = useState("checked");
    const ref = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false), setOpenSidebar(false), setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="flex h-screen bg-[#f7f9fb]">
            {/* Sidebar */}
            <div className={`flex flex-col p-4 ${sideBar ? 'w-80 ' : 'w-22 flex-0'} md:block hidden transition-all duration-300`}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className={`text-xl font-bold transition-opacity duration-300 ${sideBar ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                        Home net
                    </h2>
                    {sideBar ? (
                        <IoIosArrowBack onClick={() => setSideBar(false)} className="h-5 w-5 cursor-pointer text-gray-400" />
                    ) : (
                        <IoIosArrowForward onClick={() => setSideBar(true)} className="h-5 w-5 cursor-pointer text-gray-400" />
                    )}
                </div>

                <nav className="space-y-4 bg-[#f7f9fb] p-2 rounded-lg">
                    <button onClick={() => setPage('packages')} className={`${page === "packages" ? 'bg-[#ccdbe2]' : 'bg-white'}  w-full flex items-center gap-2 cursor-pointer text-left px-4 py-2 hover:bg-gray-200  rounded-lg text-gray-800 font-medium`}>
                        <FiTv className='w-8 h-5 text-lg' />
                        {sideBar && <span>Packages</span>}
                    </button>

                    <p className="w-full text-left px-4 py-2 text-gray-700 rounded">
                        {sideBar && 'Finance'}
                    </p>

                    <button onClick={() => setPage('payments')} className={`w-full ${page === "payments" ? 'bg-[#ccdbe2]' : 'bg-white'}  flex items-center gap-2 cursor-pointer text-left px-4 py-2 hover:bg-gray-200 rounded text-gray-700`}>
                        <PiCoins />
                        {sideBar && <span className='font-medium'>Payments</span>}
                    </button>
                </nav>
            </div>

            {openSidebar && (

                <nav
                    ref={ref}
                    className="fixed md:hidden block top-0 z-50 left-0 h-full w-64 bg-[#f7f9fb] p-4 space-y-4 rounded-lg shadow-lg">
                    <h2 className='text-xl font-bold transition-opacity duration-300 opacity-100   w-full overflow-hidden'>
                        Home net
                    </h2>
                    <button
                        onClick={() => { setPage('packages'); setOpenSidebar(false); }}
                        className={`${page === "packages" ? 'bg-[#ccdbe2]' : 'bg-white'} w-full flex items-center gap-2 cursor-pointer text-left px-4 py-2 hover:bg-gray-200 rounded-lg text-gray-800 font-medium`}
                    >
                        <FiTv className="w-8 h-5 text-lg" />
                        <span>Packages</span>
                    </button>

                    <p className="w-full text-left px-4 py-2 text-gray-700 rounded">
                        Finance
                    </p>

                    <button
                        onClick={() => { setPage('payments'); setOpenSidebar(false) }}
                        className={`w-full ${page === "payments" ? 'bg-[#ccdbe2]' : 'bg-white'} flex items-center gap-2 cursor-pointer text-left px-4 py-2 hover:bg-gray-200 rounded text-gray-700`}
                    >
                        <PiCoins />
                        <span className="font-medium">Payments</span>
                    </button>
                </nav>
            )
            }


            {/* Main Content */}
            {
                page === "packages"
                &&
                <div className="w-full md:mx-0 mx-4  mt-4 bg-white overflow-y-auto border border-gray-300 rounded-2xl p-6 mr-4 md:mr-4">

                    <div className="relative w-full">
                        <div className="absolute top-2 bottom-0  md:right-2 right-0 gap-2 flex items-center">
                            <IoIosMenu onClick={() => setOpenSidebar(true)} className='text-gray-300 md:hidden block w-8 h-8 ' />

                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    placeholder="search"
                                        className="border border-gray-200 py-2 pl-10 md:w-[280px] w-[210px] rounded-lg"
                                />
                                <CiSearch className="absolute left-3 text-gray-400" />
                            </div>

                            <IoSettingsOutline
                                className="h-8 w-8 text-gray-400 cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                    ref={ref}
                            />

                            <div
                                className={`absolute right-0 top-4 mt-2 w-56 origin-top-right rounded-lg shadow-lg bg-white border border-gray-300 z-50 p-4 space-y-4
                                transform transition-all duration-300 ease-in-out
                                     ${open ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95 pointer-events-none'}`}
                            >
                                <div className="flex items-center gap-2 text-gray-700 font-medium">
                                    <FaRegUserCircle />
                                        <p className="font-normal">Colloclesh</p>
                                </div>

                                <div className="flex justify-between items-center text-gray-400 rounded-md p-2">
                                    <FiSun className="cursor-pointer" />
                                    <FiMoon className="cursor-pointer" />
                                    <BsDisplay className="cursor-pointer" />
                                </div>

                                <button className="flex items-center gap-2 cursor-pointer text-gray-400">
                                    <FiLogOut />
                                    Sign out
                                </button>
                            </div>



                        </div>
                    </div>


                    <div className="md:flex block justify-between items-center mt-12">
                        <h3 className="text-xl font-medium">Good afternoon, Hunter42 🌞</h3>

                        <div className='relative'>
                            <button className="flex  gap-x-2 bg-[#316781] text-white px-4 py-2 mt-3 cursor-pointer rounded-lg shadow hover:bg-[#316781]">
                                <FaWifi />
                                Click to access internet
                            </button>
                        </div>

                    </div>

                    <div className="flex md:flex-row flex-col gap-4 w-full mt-6 justify-center">
                        <div className="bg-[#ccdbe2] p-4 rounded shadow-md shadow-gray-300 w-full ">
                            <p className="text-sm text-gray-500">Current Package</p>
                            <p className="text-2xl font-bold">0MBPS</p>
                        </div>
                        <div className="bg-[#ccdbe2] p-4 rounded shadow-md shadow-gray-300 w-full ">
                            <p className="text-sm text-gray-500">Expiry date</p>
                            <p className="text-2xl font-bold">31.12.2021 23:59:59</p>
                        </div>
                    </div>

                    <div className=' text-center'>
                        <p className="mt-4 text-sm font-bold">
                            Customer care: <a href="tel:0794052875" className="text-[#2d657e] underline">0794052875</a>
                        </p>
                    </div>

                    {/* Packages */}
                    <div className="flex items-center justify-center">
                        <div className={`grid ${sideBar ? 'grid-cols-1' : 'md:grid-cols-2 grid-cols-1'} gap-2 mt-6 `}>
                            {[
                                { title: "Bambika 3Mbps", price: "Ksh 10", duration: "Valid for 2 Hours" },
                                { title: "Jibambe combo", price: "Ksh 17", duration: "Valid for 12 Hours" },
                                { title: "Jibambe flex", price: "Ksh 27", duration: "Valid for 1 Day" },
                                { title: "Bambika weekly ", price: "Ksh 190", duration: "Valid for 7 Days" },
                            ].map((pkg, i) => (
                                <div key={i} className="bg-white p-4 md:w-[300px] w-[200px]  border-gray-300 flex flex-col items-center justify-center rounded shadow border">
                                    <h4 className="font-semibold text-center">{pkg.title} @ {pkg.price}</h4>
                                    <p className="text-sm text-gray-500 mb-2 text-center">{pkg.duration}</p>
                                    <input
                                        type="number"
                                        value="0742636835"

                                        className="w-full border focus:outline-2 focus:ring-1 focus:outline-[#2d657e] border-gray-300 px-2 py-1 mb-3 rounded text-center"
                                    />
                                    <div className='relative'>
                                        <button className="w-full bg-[#316781] flex gap-2 mr-6  items-center justify-center text-white md:py-2 py-4 rounded hover:bg-[#2a4f5f]">
                                            <FaWifi className='ml-5' />
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="md:grid-cols-1 grid-cols-1  space-y-3 mt-6 justify-center items-center">
                            {[
                                { title: "Bambika monthly", price: "Ksh 720", duration: "Valid for 1 Day" },
                                { title: "bambika special (laptop+phone) ", price: "Ksh 800", duration: "Valid for 1 Month" },
                            ].map((pkg, i) => (
                                <div key={i} className="bg-white p-4 md:w-[300px] w-[230px] border-gray-300 flex flex-col items-center justify-center rounded shadow border">
                                    <h4 className="font-semibold text-center">{pkg.title} @ {pkg.price}</h4>
                                    <p className="text-sm text-gray-500 mb-2 text-center">{pkg.duration}</p>
                                    <input
                                        type="number"
                                        value="0742636835"

                                        className="w-full border focus:outline-2 focus:ring-1 focus:outline-[#2d657e] border-gray-300 px-2 py-1 mb-3 rounded text-center"
                                    />
                                    <div className='relative'>
                                        <button className="w-full bg-[#316781] flex gap-2 mr-6  items-center justify-center text-white md:py-2 py-4 rounded hover:bg-[#2a4f5f]">
                                            <FaWifi className='ml-3' />
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className={`grid ${sideBar ? 'grid-cols-1' : 'md:grid-cols-2 grid-cols-1'} gap-2 mt-6 place-items-center`}>
                            {[

                                { title: "Bambika 2 days 5mbps", price: "Ksh 55", duration: "Valid for 2 Days" },
                                { title: "Jibambe half flex", price: "Ksh 13", duration: "Valid for 4 Hours" },
                                { title: "2 devices daily", price: "Ksh 46", duration: "Valid for 1 Day" },
                                { title: "8 cousins devices", price: "Ksh 15", duration: "Valid 30   Minutes" },
                            ].map((pkg, i) => (
                                <div key={i} className="bg-white p-4 md:w-[300px] w-[230px] border-gray-300 flex flex-col items-center justify-center rounded shadow border">
                                    <h4 className="font-semibold text-center">{pkg.title} @ {pkg.price}</h4>
                                    <p className="text-sm text-gray-500 mb-2 text-center">{pkg.duration}</p>
                                    <input
                                        type="number"
                                        value="0742636835"

                                        className="w-full border focus:outline-2 focus:ring-1 focus:outline-[#2d657e] border-gray-300 px-2 py-1 mb-3 rounded text-center"
                                    />
                                    <div className='relative'>
                                        <button className="w-full bg-[#316781] flex gap-2 mr-6  items-center justify-center text-white md:py-2 py-4 rounded hover:bg-[#2a4f5f]">
                                            <FaWifi className='ml-4' />
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >

                </div>
            }

            {
                page === "payments" &&
                <div className="w-full md:mx-0 mx-4 mt-4 bg-white h-auto overflow-y-auto border border-gray-300 rounded-2xl p-6 mr-4 md:mr-4">
                    <div className="relative w-full">
                        <div className="absolute top-2 bottom-0  md:right-2 right-0 gap-2 flex items-center">
                            <IoIosMenu onClick={() => setOpenSidebar(true)} className='text-gray-300 md:hidden block w-8 h-8 ' />
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    placeholder="search"
                                        className="border border-gray-200 py-2 pl-10 md:w-[280px] w-[210px] rounded-lg"
                                />
                                <CiSearch className="absolute left-3 text-gray-400" />
                            </div>

                            <IoSettingsOutline
                                className="h-8 w-8 text-gray-400 cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                    ref={ref}
                            />

                            <div
                                className={`absolute right-0 top-4 mt-2 w-56 origin-top-right rounded-lg shadow-lg bg-white border border-gray-300 z-50 p-4 space-y-4
                                transform transition-all duration-300 ease-in-out
                                     ${open ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95 pointer-events-none'}`}
                            >
                                <div className="flex items-center gap-2 text-gray-700 font-medium">
                                    <FaRegUserCircle />
                                    <p className="font-normal">Hunter42</p>
                                </div>

                                <div className="flex justify-between items-center text-gray-400 rounded-md p-2">
                                    <FiSun className="cursor-pointer" />
                                    <FiMoon className="cursor-pointer" />
                                    <BsDisplay className="cursor-pointer" />
                                </div>

                                <button className="flex items-center gap-2 cursor-pointer text-gray-400">
                                    <FiLogOut />
                                    Sign out
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='flex mt-12 justify-start items-center'>
                        <p className='font-semibold  text-2xl'>Payments</p>
                        <IoIosInformationCircleOutline className='h-6 w-7' />
                    </div>

                        <div className='mt-10  flex flex-row gap-4'>
                        <p onClick={() => setActiveTab('checked')}
                            className={`flex items-center ${activeTab === "checked" ? 'border-b-4 border-[#2d657e] text-[#2d657e] ' : 'text-gray-400 '} gap-2 font-semibold cursor-pointer`}>
                            <BiCheckDouble className='w-8 h-8' />Checked payments</p>
                        <p onClick={() => setActiveTab('unchecked')}
                            className={`flex items-center ${activeTab === "unchecked" ? 'border-b-4 border-[#2d657e] text-[#2d657e] ' : 'text-gray-400 '} gap-2 font-semibold cursor-pointer`}>
                            <IoMdClose className='w-8 h-8 font-light' />Unchecked payments</p>
                    </div>
                    <hr className='border-1 border-gray-200 w-full' />

                    <div className="w-full  mt-8 bg-white h-screen overflow-y-auto border border-gray-300 rounded-2xl ">

                        <div className=" flex justify-end items-center p-3">
                            <CiSearch className="relative left-8 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search"
                                    className="border border-gray-300 rounded-2xl focus:outline-2 focus:ring-1 focus:outline-[#2d657e] py-1.5 pl-10 md:w-[280px] w-[210px]"
                            />
                        </div>


                        <div className="border-t border-gray-300 w-full mt-6">

                            {activeTab === "checked" ? (
                                <div className="flex items-center justify-center flex-col h-screen">
                                    <IoMdClose className='rounded-full w-10 h-10 text-gray-400 bg-gray-100' />
                                    <p className='font-semibold mt-4'>No payments</p>
                                        <p className='text-gray-400 text-lg text-center' >Buy packages to view your payments here</p>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center flex-col h-screen">
                                    <IoMdClose className='rounded-full w-10 h-10 text-gray-400 bg-gray-100' />
                                    <p className='font-semibold mt-4'>No payments</p>
                                            <p className='text-gray-400 text-lg text-center' >Buy packages to view your payments here</p>
                                </div>
                            )}
                        </div>

                    </div>

                </div>

            }

        </div >
    );
};

export default Home;
