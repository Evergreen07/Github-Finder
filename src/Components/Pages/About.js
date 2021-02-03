import React from 'react'

function About() {
    return (
        <div>
            <h1 style={{margin:'10px 0px'}}> App Info </h1>
            <h3>This is an application to search and find Github users & also display their info.</h3>
            <p>Version : 2021.1.1 </p>
            <br/>
            <p>There are days when we need some details about particular GitHub users. It can be some of our friends, team-mates, colleagues or some awesome developers. But on searching it looks a bit messy to find & go through their bio, details & recent contributions.</p>
            <p>What if we provide you can awesome User interface just to give you a hassle free experience ? Yes, thats all about this application.</p>
            <br/>
            <p> On the landing page of the application you will find a list of some random user handles, just to give you the feel of the app. 
            <br/>    
            Now there is a "search" bar where you can enter a keyword associated with the user you are looking for. Based on that the app will filter out a list of 30 user handles which matches with the keyword in their UserID, bio or other details.
            <br/>
            You can select your desired user & click on "Read more" to get a well-organised overview of their profile containing their Bio along with their profile picture, personal details, GitHub stats & list of 6 recent repositories they are currently working on. You can further explore even more by visiting their websites, repos or their original github profile. 
            </p>
            <br/>
            <p>Hope you enjoy using the application. Have a good day !!!</p>
            <br/>
            <h3> Evergreen </h3>
        </div>
    )
}

export default About
