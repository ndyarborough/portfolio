import meetup1 from '../imgs/meetup1.png';
import meetup2 from '../imgs/meetup2.png';
import meetup3 from '../imgs/meetup3.jpg';
import eventsherenow from '../imgs/eventsherenow.png';
import yardland from '../imgs/yardland.png';
import chvenue from '../imgs/chvenue.png';
import crbc from '../imgs/crbc.png';

import { meetup, chvenue as chvenueTech, EventsHereNow, yardland as yardlandTech, CRBC } from '../data/techItems'; // Import tech stacks

export const projectsData = [
    {
        images: [meetup3, meetup1, meetup2],
        title: "MeetUp",
        description: "Full-Stack social media application designed for mobile platforms.",
        techs: meetup,
        codeLink: "https://github.com/ndyarborough/Meetup_2.0"
    },
    {
        images: [chvenue],
        title: "CH Venue",
        description: "Landing page built to show my ability to go from a design to a real application.",
        techs: chvenueTech,
        codeLink: "https://github.com/ndyarborough/chvenue",
        liveLink: "https://ndyarborough.github.io/chvenue"
    },
    
    {
        images: [crbc],
        title: "CRBC",
        description: "An informational site for a local church.",
        techs: CRBC,
        codeLink: "https://github.com/ndyarborough/crbc",
        liveLink: "https://ndyarborough.github.io/crbc"
    },
    
    {
        images: [yardland],
        title: "YardLand 🪴",
        description: "A small, but functional website for a landscaping business.",
        techs: yardlandTech,
        codeLink: "https://github.com/ndyarborough/yardland",
        liveLink: "https://ndyarborough.github.io/yardland"
    },
    {
        images: [eventsherenow],
        title: "Events Here Now 🗓️",
        description: "Tied Google Maps and TicketMaster APIs together to create a powerful application.",
        techs: EventsHereNow,
        codeLink: "https://github.com/ndyarborough/Events-Here-Now",
        liveLink: "https://ndyarborough.github.io/Events-Here-Now/index.html"
    },
   
];