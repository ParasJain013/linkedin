import React from 'react'
import NewsElement from './newsElement'
import "./news.css"

function News() {
    const newsArray = [
        {
            key: 1,
            heading: "Elon Musk Buys Twitter",
            description: "Elon Musk Completes $44 Billion Deal to Own Twitter. The world's richest man closed his blockbuster purchase of the social media service",
            newsLink: "https://www.nytimes.com/2022/10/27/technology/elon-musk-twitter-deal-complete.html"
        },
        {
            key: 2,
            heading: "Twitter.com Starts Switching Over to X.com",
            description: "Elon Musk recently rebranded Twitter as X and replaced its legacy blue bird logo with the single letter “X”.",
            newsLink: "https://www.gadgets360.com/social-networking/news/twitter-x-ios-domain-url-shift-elon-musk-report-4292630"
        },
        {
            key: 3,
            heading: "For JavaScript Developers, More Choices Mean Hard Choices",
            description: "A wave of new programming tools promises to make developers' lives easier. But the turbulence makes it hard to stay current.",
            newsLink: "https://www.wired.com/story/javascript-developers-more-choices-mean-hard-choices/"
        },
        {
            key: 4,
            heading: "React JS Emerges A Clear Favorite Among World Leaders In Web Development",
            description: "In a dramatic shift in the tech industry, React JS has emerged as the clear favorite among world leaders in web development. With millions of dollars in annual revenue, React JS is now the choice of the biggest names in business and technology.",
            newsLink: "https://www.techbusinessnews.com.au/news/react-js-emerges-a-clear-favorite-among-world-leaders-in-web-development/"
        }
    ]
    return (
        <div className='News'>
            <h2>#TechNews</h2>
            {newsArray.map((obj) => {
                { console.log("first"); }
                return (
                    <NewsElement key={obj.id} heading={obj.heading} description={obj.description.slice(0, 100) + '...'} newsLink={obj.newsLink} />)
            })}
        </div>
    )
}

export default News