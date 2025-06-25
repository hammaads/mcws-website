import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full py-12 px-4 bg-[#23272A] text-white mt-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Logo and Address */}
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                        <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=80&h=80&facepad=2" alt="mcws logo" width={40} height={40} className="rounded-full" />
                        <span className="font-heading text-2xl font-bold text-[#1CC6B6]">mcws</span>
                    </div>
                    <div className="text-sm text-center md:text-left text-white/80">
                        40440 Palmer Rd, Canton, MI 48188<br />
                        (734) 467-7704<br />
                        info@mcws.org
                    </div>
                </div>
                {/* Quick Links */}
                <ul className="flex flex-col gap-2 text-sm mb-4 md:mb-0 text-white/80">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Education</li>
                    <li>Youth</li>
                    <li>Events</li>
                    <li>Contact</li>
                    <li className="font-semibold text-[#1CC6B6]">Donate</li>
                </ul>
                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[#23272A]">F</a>
                    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[#23272A]">T</a>
                    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[#23272A]">I</a>
                </div>
            </div>
            <div className="text-center text-xs mt-8 text-white/60">&copy; {new Date().getFullYear()} MCWS. All rights reserved.</div>
        </footer>
    );
};

export default Footer; 