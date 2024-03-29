import React from 'react';
import '../AboutUs/AboutUs.scss'

function AboutUs() {
    return (
        <div className='about-us__body' id='about-us'>
            <div className='about-us__text'>
                <p className='about-us__title'>What is Jotun Labs?</p>
                <div className='about-us__subtitle'>
                    <p >
                        Jotun Labs was born out of our conviction that
                        decentralization is and should be the future.
                        Our goal is to break down that wall that separates the two realities,
                        we come to create decentralized alternatives to your favorite applications. </p> <br></br>

                    <p>
                        The core team consists of three developers and one artist.
                        Our CTO is a computer engineer with experience in several
                        web2 start-ups and is currently a computer science professor.
                    </p> <br></br>

                    <p>
                        We decided that our first development will be a  <mark className='aboutus__yellow'>all-in-one Social Network.</mark> Fully decentralized,
                        without servers where our data is stored, analyzed and exploited.
                        We will use the Solana Blockchain, due to its low transaction cost, speed and unparalleled scalability.
                    </p> <br></br>

                    <p>
                        We will provide you with all the functionalities of a conventional social network. In addition, users will be able
                        to have their own <mark className='aboutus__yellow'>gallery of NFTs</mark>, updated <mark className='aboutus__yellow'>NFTs and cryptocurrency data, Web3 job search engine</mark>...
                    </p> 
                </div>


            </div>
        </div>

    );
}

export default AboutUs;

