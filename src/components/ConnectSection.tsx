import React from 'react';
import Image from 'next/image';

const ConnectSection = () => {
    return (
        <section className="w-full py-16 px-4 bg-[#F9F6F1]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <div className="uppercase tracking-widest text-sm text-[#8B8B8B] mb-2">Stay Connected with MCWS</div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#23272A] mb-2">Connect. Follow. Belong.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Athan App */}
                    <div className="rounded-2xl bg-white shadow p-6 flex flex-col md:flex-row items-center gap-4">
                        <div className="flex-1 flex flex-col items-start justify-center">
                            <div className="font-bold text-lg text-[#23272A] mb-1">Athan. Iqamah.<br />And much more.</div>
                            <div className="text-[#23272A] text-sm mb-2">Athan+ — built for your masjid life.<br />Access prayer and iqamah times, browse events, and stay connected with your masjid — anytime, anywhere.<br />Available on <a href="#" className="underline text-[#1CC6B6]">iOS</a> and <a href="#" className="underline text-[#1CC6B6]">Android</a>.</div>
                        </div>
                        <div className="flex-shrink-0 w-32 h-32 relative">
                            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="Athan app" fill className="object-contain rounded-xl" />
                        </div>
                    </div>
                    {/* Mailing List */}
                    <div className="rounded-2xl bg-[#F6E9D7] shadow p-6 flex flex-col justify-between">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-20 h-20 relative rounded-xl overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80" alt="Mailing List" fill className="object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-lg text-[#23272A] mb-1">Mailing List</div>
                                <div className="text-[#23272A] text-sm">Be the first to know about community events, special programs, and masjid news.<br />Subscribe to our mailing list and never miss an update</div>
                            </div>
                        </div>
                        <button className="mt-2 px-6 py-2 rounded bg-white text-[#23272A] font-semibold shadow flex items-center gap-2 self-end">Subscribe Here <span className="text-lg">→</span></button>
                    </div>
                    {/* WhatsApp Announcements */}
                    <div className="rounded-2xl bg-[#1CC6B6] shadow p-6 flex flex-col md:flex-row items-center gap-4">
                        <div className="flex-shrink-0 w-24 h-24 relative">
                            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="WhatsApp QR" fill className="object-contain rounded-xl" />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-center">
                            <div className="font-bold text-lg text-white mb-1">WhatsApp Announcements</div>
                            <div className="text-white text-sm">Stay informed with instant updates!<br />Join our WhatsApp group to receive timely announcements, reminders, and event alerts — right on your phone.<br /><span className="text-xs">*Scan the QR code using the WhatsApp camera to join this community</span></div>
                        </div>
                    </div>
                    {/* MCWS Youth */}
                    <div className="rounded-2xl bg-white shadow p-6 flex flex-col md:flex-row items-center gap-4">
                        <div className="flex-shrink-0 w-24 h-24 relative">
                            <Image src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80" alt="MCWS Youth" fill className="object-cover rounded-xl" />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-center">
                            <div className="font-bold text-lg text-[#23272A] mb-1">MCWS Youth</div>
                            <div className="text-[#23272A] text-sm">Follow <a href="#" className="underline text-[#1CC6B6]">@mcwsyouth</a> for snapshots of youth events, inspiring moments, and real-time stories from our vibrant community. Don&apos;t miss out on what&apos;s happening!</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection; 