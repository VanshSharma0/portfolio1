import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"
import mock7 from "../img/mock7.png"
import mock8 from "../img/mock8.png"
import mock9 from "../img/mock9.png"
import mock10 from "../img/mock10.png"
import mock11 from "../img/mock11.png"
import mock12 from "../img/mock12.png"
import mock15 from "../img/mock15.png"
import mock16 from "../img/mock16.png"
import mock17 from "../img/mock17.png"
import mock18 from "../img/mock18.png"
import mock20 from "../img/mock20.png"
/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = ["rgb(0,255,144)", "rgb(166,104,255)"];
// Black and White
// export let colors = ["rgb(0, 0, 0)", "rgb(255, 255, 255)"];

// // Gold and White
// export let colors = ["rgb(255, 215, 0)", "rgb(255, 255, 255)"];

// // Teal and White
// export let colors = ["rgb(0, 128, 128)", "rgb(255, 255, 255)"];

// // Gold and Black
// export let colors = ["rgb(255, 215, 0)", "rgb(0, 0, 0)"];

// // Teal and Black
// export let colors = ["rgb(0, 128, 128)", "rgb(0, 0, 0)"];

// // Silver and White
// export let colors = ["rgb(192, 192, 192)", "rgb(255, 255, 255)"];

// // Gray and White
// export let colors = ["rgb(128, 128, 128)", "rgb(255, 255, 255)"];

// // Rose and White
// export let colors = ["rgb(255, 255, 255)", "rgb(255, 102, 184)"];

// // Navy Blue and White
// export let colors = ["rgb(0, 0, 128)", "rgb(255, 255, 255)"];

// // Olive and White
// export let colors = ["rgb(128, 128, 0)", "rgb(255, 255, 255)"];

// // Orange and White
// export let colors = ["rgb(255, 165, 0)", "rgb(255, 255, 255)"];

// // Purple and Black
// export let colors = ["rgb(128, 0, 128)", "rgb(0, 0, 0)"];

// // Cyan and Black
// export let colors = ["rgb(0, 255, 255)", "rgb(0, 0, 0)"]; 

// // Lime Green and White
// export let colors = ["rgb(50, 205, 50)", "rgb(255, 255, 255)"];

// // Magenta and Black
// export let colors = ["rgb(255, 0, 255)", "rgb(0, 0, 0)"];

// // Coral and White
// export let colors = ["rgb(255, 127, 80)", "rgb(255, 255, 255)"];

// // Turquoise and Black
// export let colors = ["rgb(64, 224, 208)", "rgb(0, 0, 0)"];

// // Crimson and White
// export let colors = ["rgb(220, 20, 60)", "rgb(255, 255, 255)"]; 

// // Forest Green and White
// export let colors = ["rgb(34, 139, 34)", "rgb(255, 255, 255)"];

// // Pink and Black
export let colors = ["rgb(255, 105, 180)", "rgb(150, 50, 50)"];

// // Royal Blue and White
// export let colors = ["rgb(65, 105, 225)", "rgb(255, 255, 255)"];

// // Bronze and White
// export let colors = ["rgb(205, 127, 50)", "rgb(255, 255, 255)"];

// // Indigo and Black
// export let colors = ["rgb(75, 0, 130)", "rgb(0, 0, 0)"];

// // Light Blue and White
// export let colors = ["rgb(173, 216, 230)", "rgb(255, 255, 255)"];

// // Mint Green and Black
// export let colors = ["rgb(152, 255, 152)", "rgb(0, 0, 0)"];




/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Vansh",
    lastName: "Sharma",
    initials: "vs.", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
 // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by Chai'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Web Developer"
        },
        {
            emoji: "📧",
            text: "sharmavansh8900@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/vanishedddddddd/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/VanshSharma0",
            icon: 'fa fa-github',
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/vansh-sharma0/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Vansh. I am a FullStack Developer actively seeking web development opportunities. With expertise in JavaScript, React, Express, Node js, Mongo DB, Java, SQL. I’m Eager to contribute to both team and individual projects.",
    skills:
        {
            proficientWith: ['Java', 'C', 'JavaScript', 'React', 'SQL', "Node js", "Express js", "TypeScript"],
            exposedTo: ['Linux', 'MySQL', 'Git', 'Mongo DB', 'Data Structures & Algorithms', 'Figma', 'Photoshop']
        }
    ,
    hobbies: [
        {
            label: 'Chess',
            emoji: '🐴'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Indus Valley Mukhteshwar",
            live: "https://www.indusvalleymukteshwar.com",
            image: mock20,
            source: "https://github.com/VanshSharma0/Indus"
        },
        {
            title: "Atlas Of Code (Developing)",
            live: "https://www.atlasofcode.site/",
            image: mock18
        },
        {
            title: "Jewellery Store",
            live: "https://murtijewellers.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock15
        },
        {
            title: "2048 Game",
            live: "https://2048-with-react.vercel.app/",
            image: mock17
        },
        {
            title: "Nav Solutions",
            live: "https://navsolutions.vercel.app/",
            source: "https://github.com/VanshSharma0/Ray-Solutions",
            image: mock16
        },
        {
            title: "Admin Dashboard",
            live: "https://admin-dash-syncfusion.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock10
        },
        {
            title: "Blog Application",
            live: "https://megablogapp.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/VanshSharma0/BlogApplication", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock8
        },
        {
            title: "FastBills - Invoice Generator",
            live: "https://fastbills.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/VanshSharma0/Fastbills", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock11
        },
        {
            title: "Ai Image Generator",
            live: "https://image-generator-with-ai.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/VanshSharma0/Ai-image-generator", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock12
        },
        {
            title: "Bollywood",
            live: "https://bollymood.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/VanshSharma0/Bollymood", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Expense Tracker",
            live: "https://expense-tracker-gamma-lyart.vercel.app/",
            source: "https://github.com/VanshSharma0/ExpenseTracker",
            image: mock9
        },
        {
            title: "Portfolio",
            live: "https://portfolio-sepia-kappa.vercel.app/",
            source: "https://github.com/VanshSharma0/portfolio1",
            image: mock4
        },
        {
            title: "Weather App",
            live: "https://weather-app-mu-sandy.vercel.app/",
            source: "https://github.com/VanshSharma0/Weather-app",
            image: mock5
        },
        {
            title: "Movie Search App",
            live: "https://movie-search-sigma-three.vercel.app/",
            source: "https://github.com/VanshSharma0/Movie-Search",
            image: mock7
        },
        {
            title: "Task Management",
            live: "https://task-management-eight-weld.vercel.app/",
            source: "https://github.com/VanshSharma0/Task-management",
            image: mock6
        }
    ]
}