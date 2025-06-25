'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const servicesMenu = [
    { label: 'IQRA and MAC Library' },
    { label: 'Prayer Services' },
    { label: 'Matrimonial Services' },
    { label: 'Family Counseling' },
    { label: 'Marriage Counseling' },
    { label: 'Elder Care' },
    { label: 'Funeral', submenu: true },
    { label: 'Newsletter' },
    { label: 'Embrace Islam' },
    { label: 'New to Canton' },
    { label: 'Outreach', submenu: true },
];

const navLinks = [
    { label: 'About' },
    { label: 'Services', dropdown: true },
    { label: 'Education' },
    { label: 'Youth' },
    { label: 'Events' },
    { label: 'Contact' },
    { label: 'Team' },
    { label: 'Calendar' },
    { label: 'Newsletter' },
];

const Navbar = () => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <nav className="w-full bg-white border-b border-gray-100">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-4 pb-2">
                {/* Row 1: Logo/subtitle left, prayer times right */}
                <div className="flex items-center justify-between">
                    {/* Logo and subtitle as a single image */}
                    <div className="flex items-center">
                        <Image src="/logo.png" alt="MCWS logo and subtitle" width={260} height={70} priority className="h-[70px] w-auto" />
                    </div>
                    {/* Prayer Times */}
                    <div className="hidden md:flex flex-col items-end">
                        <div className="flex gap-8 text-xs text-[#23272A] font-sans mb-1">
                            <span className="w-12 text-center">&nbsp;</span>
                            <span className="w-12 text-center">FAJR</span>
                            <span className="w-12 text-center">DZUHUR</span>
                            <span className="w-12 text-center">ASHAR</span>
                            <span className="w-12 text-center">MAGHRIB</span>
                            <span className="w-12 text-center">ISYA</span>
                        </div>
                        <div className="flex gap-8 text-xs text-[#23272A] font-sans">
                            <span className="w-12 text-right pr-2">Begins</span>
                            <span className="w-12 text-center">04:35</span>
                            <span className="w-12 text-center">11:50</span>
                            <span className="w-12 text-center bg-[#FFF7E0] rounded">15:35</span>
                            <span className="w-12 text-center">18:21</span>
                            <span className="w-12 text-center">19:01</span>
                        </div>
                        <div className="flex gap-8 text-xs text-[#23272A] font-sans">
                            <span className="w-12 text-right pr-2">Jama&apos;mah</span>
                            <span className="w-12 text-center">04:35</span>
                            <span className="w-12 text-center">11:50</span>
                            <span className="w-12 text-center bg-[#FFF7E0] rounded">15:35</span>
                            <span className="w-12 text-center">18:21</span>
                            <span className="w-12 text-center">19:01</span>
                        </div>
                    </div>
                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1CC6B6] ml-auto"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <svg width="28" height="28" fill="none" stroke="#1CC6B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="8" x2="24" y2="8" />
                            <line x1="4" y1="16" x2="24" y2="16" />
                        </svg>
                    </button>
                </div>
                {/* Row 2: Navigation links centered */}
                <div className="hidden md:flex justify-center mt-2">
                    <ul className="flex gap-7 items-center font-sans text-base text-[#23272A]">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <li key={link.label} className="relative group">
                                    <span
                                        className="hover:text-[#1CC6B6] cursor-pointer font-semibold text-[#1CC6B6]"
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        Services
                                    </span>
                                    {/* Dropdown */}
                                    <div
                                        className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg py-4 px-4 z-50 border border-gray-100 transition-all duration-150 ${servicesOpen ? 'block' : 'hidden'}`}
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        <ul className="flex flex-col gap-2">
                                            {servicesMenu.map((item) => (
                                                <li
                                                    key={item.label}
                                                    className="flex items-center justify-between px-2 py-1 rounded hover:bg-gray-50 cursor-pointer text-[16px] text-[#23272A] font-sans"
                                                >
                                                    <span>{item.label}</span>
                                                    {item.submenu && (
                                                        <svg width="16" height="16" fill="none" stroke="#23272A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M6 4l4 4-4 4" /></svg>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ) : (
                                <li key={link.label} className="hover:text-[#1CC6B6] cursor-pointer whitespace-nowrap">
                                    {link.label}
                                </li>
                            )
                        )}
                    </ul>
                </div>
                {/* Mobile nav and prayer times */}
                {mobileOpen && (
                    <div className="md:hidden w-full mt-2 animate-fade-in">
                        <ul className="flex flex-col gap-2 font-sans text-base text-[#23272A] bg-white rounded-xl shadow-lg p-4">
                            {navLinks.map((link) =>
                                link.dropdown ? (
                                    <li key={link.label} className="relative">
                                        <span
                                            className="hover:text-[#1CC6B6] cursor-pointer font-semibold text-[#1CC6B6] flex items-center"
                                            onClick={() => setServicesOpen((v) => !v)}
                                        >
                                            Services
                                            <svg width="16" height="16" fill="none" stroke="#23272A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M6 4l4 4-4 4" /></svg>
                                        </span>
                                        {/* Dropdown */}
                                        {servicesOpen && (
                                            <div className="mt-2 w-full bg-white rounded-xl shadow-lg py-2 px-2 z-50 border border-gray-100">
                                                <ul className="flex flex-col gap-2">
                                                    {servicesMenu.map((item) => (
                                                        <li
                                                            key={item.label}
                                                            className="flex items-center justify-between px-2 py-1 rounded hover:bg-gray-50 cursor-pointer text-[16px] text-[#23272A] font-sans"
                                                        >
                                                            <span>{item.label}</span>
                                                            {item.submenu && (
                                                                <svg width="16" height="16" fill="none" stroke="#23272A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M6 4l4 4-4 4" /></svg>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ) : (
                                    <li key={link.label} className="hover:text-[#1CC6B6] cursor-pointer">
                                        {link.label}
                                    </li>
                                )
                            )}
                        </ul>
                        {/* Prayer Times for mobile */}
                        <div className="flex flex-col mt-4">
                            <div className="flex gap-4 text-xs text-[#23272A] font-sans mb-1">
                                <span className="w-12 text-center">&nbsp;</span>
                                <span className="w-12 text-center">FAJR</span>
                                <span className="w-12 text-center">DZUHUR</span>
                                <span className="w-12 text-center">ASHAR</span>
                                <span className="w-12 text-center">MAGHRIB</span>
                                <span className="w-12 text-center">ISYA</span>
                            </div>
                            <div className="flex gap-4 text-xs text-[#23272A] font-sans">
                                <span className="w-12 text-right pr-2">Begins</span>
                                <span className="w-12 text-center">04:35</span>
                                <span className="w-12 text-center">11:50</span>
                                <span className="w-12 text-center bg-[#FFF7E0] rounded">15:35</span>
                                <span className="w-12 text-center">18:21</span>
                                <span className="w-12 text-center">19:01</span>
                            </div>
                            <div className="flex gap-4 text-xs text-[#23272A] font-sans">
                                <span className="w-12 text-right pr-2">Jama&apos;mah</span>
                                <span className="w-12 text-center">04:35</span>
                                <span className="w-12 text-center">11:50</span>
                                <span className="w-12 text-center bg-[#FFF7E0] rounded">15:35</span>
                                <span className="w-12 text-center">18:21</span>
                                <span className="w-12 text-center">19:01</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 