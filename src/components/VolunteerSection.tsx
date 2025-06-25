import React from 'react';
import Image from 'next/image';

const VolunteerSection = () => {
    return (
        <section className="w-full py-20 px-4 flex flex-col items-center bg-[#F9F6F1]">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#23272A] mb-2">Volunteer Now!</h2>
            <p className="font-sans text-lg mb-8 text-center max-w-xl text-[#23272A]">
                Lend a hand, build a bond — volunteer with us and strengthen your community.
            </p>
            <div className="relative w-full max-w-2xl h-96 flex items-center justify-center mb-8">
                <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Volunteer" fill className="object-contain" />
            </div>
            <button className="px-8 py-3 rounded-full bg-white text-[#23272A] font-semibold shadow flex items-center gap-2">Volunteer Now <span className="text-lg">→</span></button>
        </section>
    );
};

export default VolunteerSection; 