import React, { useEffect, useState } from 'react';
import EventCard from '../EventCard.js/EventCard';

const CharityEvents = () => {
    const [events, setEvents] = useState([]);

   useEffect(()=>{
    fetch("events.json")
    .then(res=>res.json())
    .then(data => setEvents(data));
   },[]);

   console.log(events);
    return (
        <div className='px-0 lg:px-24 lg:pb-[100px]'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-10 gap-x-5'>
                {
                    events.map(event=><EventCard event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default CharityEvents;