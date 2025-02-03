import meetupLandscape from '../imgs/meetup-landscape.png';
import eventsherenow from '../imgs/eventsherenow.png';
import yardland from '../imgs/yardland.png';
import chvenue from '../imgs/chvenue.png';
import { meetup, chvenue as chvenueTech, EventsHereNow, yardland as yardlandTech } from '../data/techItems'; // Import tech stacks

export const projectsData = [
    {
        image: chvenue,
        title: "CH Venue",
        description: "Landing page built to show my ability to go from a design to a real application.",
        techs: chvenueTech,
        codeLink: "https://github.com/ndyarborough/chvenue",
        liveLink: "https://ndyarborough.github.io/chvenue"
    },
    {
        image: meetupLandscape,
        title: "MeetUp",
        description: "Full-Stack social media application created to show my ability to combine frontend and backend.",
        techs: meetup,
        codeLink: "https://github.com/ndyarborough/Meetup_2.0",
        liveLink: "http://meetup-ndyarborough.s3-website.us-east-2.amazonaws.com/"
    },
    {
        image: yardland,
        title: "YardLand 🪴",
        description: "A small, but functional website for a landscaping business.",
        techs: yardlandTech,
        codeLink: "https://github.com/ndyarborough/yardland",
        liveLink: "https://ndyarborough.github.io/yardland"
    },
    {
        image: eventsherenow,
        title: "Events Here Now 🗓️",
        description: "Tied Google Maps and TicketMaster APIs together to create a powerful application.",
        techs: EventsHereNow,
        codeLink: "https://github.com/ndyarborough/Events-Here-Now",
        liveLink: "https://ndyarborough.github.io/Events-Here-Now/index.html"
    },
];