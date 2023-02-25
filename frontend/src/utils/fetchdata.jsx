import axios from 'axios';
import { useEffect, useState } from 'react';

export const FetchEvents = () => {
  const [events, setEvent] = useState([]);

    const getData = async () => {
        try {
            const eventsData = await axios.get('https://api.hackthenorth.com/v3/events');
            setEvent(eventsData.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { 
        getData(); 
    }, []);

    if (events){
        //sort the events from earliest to latest
        const sortedEvents = events.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
        return sortedEvents 
    }

    return null;
}