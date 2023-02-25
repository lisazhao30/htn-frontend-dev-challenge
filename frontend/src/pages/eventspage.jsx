import React from 'react';

import { FetchEvents } from '../utils/fetchdata';
import EventsCard from '../components/eventscard';

const EventsPage = (props) => {
    const {isLoggedIn} = props;
    const eventsResponse = FetchEvents();

    let events;

    const RenderEvents = () => {
        //if user is logged in then return all the events, else only return the public events
        if (isLoggedIn){
            events = eventsResponse;
            return events;
        }
        else {
            events = eventsResponse.filter(({permission}) => permission === "public");
            return events;
        }
    }

    //find the related events names and links
    const RelatedEvents = (ids) => {
        let relatedEventLinks = [];
        let relatedEventNames = [];

        ids.forEach((idValue) => {
            const relatedEvent = events.filter(({id}) => id === idValue);
            if (isLoggedIn) {
                relatedEvent.forEach((event) => {
                    relatedEventLinks.push(event.private_url);
                    relatedEventNames.push(event.name);
                })
            }
            else {
                relatedEvent.forEach((event) => {
                    relatedEventLinks.push(event.public_url);
                    relatedEventNames.push(event.name);
                })
            }
        })

        return { relatedEventLinks: relatedEventLinks, relatedEventNames: relatedEventNames };
    }

    return (
        <div className="Wrapper">
            {RenderEvents().map((event) => {
                const { id, name: eventName2, event_type, start_time, end_time, description, public_url, private_url, related_events } = event;
                let profile_pic = null;
                let speaker_name = null;

                //this is hardcoded to only look at first value of speakers
                if (event.speakers.length > 0 && event.speakers[0].profile_pic !== null) {
                    profile_pic = event.speakers[0].profile_pic
                }
                if (event.speakers.length > 0 && event.speakers[0].name !== null){
                    speaker_name = event.speakers[0].name
                }

                return (
                    <EventsCard 
                        eventId={id}
                        eventDate={start_time}
                        eventName={eventName2}
                        eventType={event_type}
                        startTime={start_time}
                        endTime={end_time}
                        eventDescription={description}
                        url={isLoggedIn ? private_url : public_url}
                        speakerName={speaker_name !== null ? speaker_name : null}
                        speakerPicture={profile_pic !== null ? profile_pic : null}
                        relatedEvents={RelatedEvents(related_events)}
                    />
                )
            })}
        </div>
    )
}

export default EventsPage