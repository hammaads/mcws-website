import React from 'react';
import Image from 'next/image';

const events = [
  { title: 'Eid ul Adha Prayer', date: '6', month: 'June', time: '7:30 am', location: 'Independence park canton', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', },
  { title: 'Friday Night Live | Journey through the seerah with SH. Hosam Helal', date: '6', month: 'June', time: '7:30 am', location: 'Independence park canton', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', },
  { title: 'Mens Volleyball match at the beach', date: '6', month: 'June', time: '7:30 am', location: 'Detroit Beach', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', },
  { title: 'Eid ul Adha Prayer', date: '6', month: 'June', time: '7:30 am', location: 'Independence park canton', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', },
];

const EventsCarousel = () => {
  return (
    <section className="w-full py-12 px-4 bg-[#1CC6B6] relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-bold mb-2 text-white">Upcoming Events</h2>
        <p className="text-white mb-6">Here is the list of all our upcoming events.</p>
        <button className="mb-8 px-6 py-2 rounded bg-white text-[#23272A] font-semibold shadow flex items-center gap-2">See Calendar <span className="text-lg">→</span></button>
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 shadow-md hidden md:flex items-center justify-center z-10 bg-white text-[#1CC6B6]">&#8592;</button>
          {/* Event Cards */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {events.map((event, idx) => (
              <div key={idx} className="min-w-[300px] max-w-xs rounded-2xl shadow-lg bg-[#EFFFFC] flex flex-col p-4 relative">
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3">
                  <Image src={event.img} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-1 flex flex-col items-center shadow text-[#23272A]">
                    <span className="font-bold text-lg leading-none">{event.date}</span>
                    <span className="text-xs leading-none">{event.month}</span>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold mb-1 text-[#23272A]">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-[#23272A] mb-1">
                  <span>⏰ {event.time}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                </div>
                <button className="absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-[#1CC6B6] flex items-center justify-center text-white shadow"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5-5 5 5" /></svg></button>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 shadow-md hidden md:flex items-center justify-center z-10 bg-white text-[#1CC6B6]">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel; 