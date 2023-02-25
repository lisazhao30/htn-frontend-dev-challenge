import React from 'react';
import "../App.css";

const EventsCard = (props) => {
    const { eventName, eventDescription, speakerPicture, speakerName, startTime, endTime, url, eventType, relatedEvents } = props;
    const { relatedEventLinks, relatedEventNames } = relatedEvents;


    const eventStart = new Date(startTime).toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
    })

    const eventEnd = new Date(endTime).toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
    })

    return (
        <div className="EventsCardWrapper">
            <div className="card bg-base-100 shadow-xl">
                {(speakerPicture) ? <figure><img src={speakerPicture} alt={speakerName} /></figure> : null }
                <div className="card-body">
                    <h2 className="card-title">
                    {eventName}
                    <div className="badge badge-secondary">{eventType}</div>
                    </h2>
                    <p class="font-bold">Date: {eventStart} - {eventEnd}</p>
                    {(speakerName) ? <h3>Speaker: {speakerName}</h3> : null}
                    <p>{eventDescription}</p>
                    <a href= {url}>
                        <button className="btn">Register for the event</button>
                    </a>
                    <div className="card-actions justify-end">
                        <p>Check out these related events!</p>
                        {relatedEventLinks.map((relatedEventInfo, idx) => (
                            <div className="badge badge-outline">
                                <a href= {relatedEventInfo}>{relatedEventNames[idx]}</a>
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsCard