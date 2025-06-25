import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="w-full flex flex-col items-center pt-12 pb-16 px-4 text-center bg-[#F9F6F1]">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[#23272A]">Assalamualaikum!</h1>
            <p className="font-sans text-lg md:text-xl mb-6 max-w-2xl mx-auto text-[#23272A]">
                Welcome to MCWS! Be the first to know about community events, special programs, and masjid news. Subscribe to our mailing list and never miss an update.
            </p>
            <div className="w-full max-w-2xl h-72 md:h-96 rounded-lg flex items-center justify-center mx-auto overflow-hidden mb-4 relative">
                <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="MCWS Hero Collage" fill style={{ objectFit: 'cover' }} />
            </div>
        </section>
    );
};

export default HeroSection; 