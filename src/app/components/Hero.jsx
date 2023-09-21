import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="area">
        <div className="header">
            <h1 className="headding">Stay Focused on <br/> <span className="color-text">Mission 2024</span></h1>
            <p className="para-b">Web Developer with 8 years of experience in designing and developing user
                interfaces,testing, debugging, and training staff within eCommerce technologies. </p>
            <Link className="button" href="/" target="_blank" rel="noopener noreferrer">Explore Now</Link>
        </div>
        <div className="header">
            <Image src="/images/person/sohag-img.png" alt="" width={200} height={200}/>
        </div>
    </section>
    {/* <!---header section--> */}

    <section className="container">
        <div>
            <h2 className="title">My Mission in <span className="color-text">2024</span></h2>
        </div>
        <div className="about area">
            <div id="Mission" className="aboutbox">
                <Image src="/images/illustrators/illustrator-1.png" alt="" width={200} height={200}/>
                <h2>Mission</h2>
                <p className="para-b">Search engine optimization, well-organized content, user-friendly site, effective
                    calls to action. </p>
            </div>

            <div id="Vission" className="aboutbox">
                <Image src="/images/illustrators/illustrator-1.png" alt="" width={200} height={200}/>
                <h2>Vission</h2>
                <p className="para-w">Our Vision is to expand our web designing and software development business around the
                    world </p>
            </div>

            <div id="Goals" className="aboutbox">
                 <Image src="/images/illustrators/illustrator-1.png" alt="" width={200} height={200}/>
                <h2>Goals</h2>
                <p className="para-w">Providing quality content on your website, regularly adding new information,
                    establishing trust, </p>
            </div>

        </div>
    </section>
    {/* <!---about section--> */}

    <section className="container area">
        <div className="featurebox-1 feature-images">
           <Image src="/images/pictures/project.png" alt="" width={200} height={200}/>
        </div>
        <div className="featurebox-2">
            <h2 className="section-title">Develop <br/>
                Without Limits</h2>
            <p className="para-b">By ensuring the goals you set are aligned with the five SMART criteria (Specific,
                Measurable, Attainable, Relevant, and Time-Bound), you’re provided a guiding light to follow. Better
                still, you are able to focus your energies in a concerted way and have a solid basis upon which to make
                all your marketing decisions.</p>
            <Link className="button" href="/" target="_blank" rel="noopener noreferrer">Read the Documentation</Link>
        </div>
    </section>
    {/* <!--feature section--> */}


    <section className="container area">
        <div className="Communitybox-1">
            <h2 className="section-title">Know our <br/>
                Global Community</h2>
            <p className="para-b">Communities are usually built on shared struggles of individuals learning in a particular
                region, and the goals of each community differ per the individuals collective needs.</p>
            <a className="button" href="http://" target="_blank" rel="noopener noreferrer">Read the Documentation</a>
        </div>

        <div className="Communitybox-2 Community-images">
         <Image src="/images/illustrators/illustrator-1.png" alt="" width={200} height={200}/>
        </div>
    </section>
    {/* <!---community section--> */}

                {/* <section className="contact-section">
                    <h2>contact us to help</h2>
                    <p className="para-w contact-para">So what can you do?</p>
                    <div className="area contact-section">
                        <div className="contactbox">
                            <address>
                                Visit us at:<br/>
                                <soahghasan className="com"></soahghasan><br/>
                                mohammadpur,<br/>
                                dhaka. <br/> <br/>
                                Written by <br/><a href="mailsohaghasan@gmail.com">Shoaib Hasan Sohag</a>

                            </address>
                        </div>


                        <form id="contactbox" className="contactbox">
                            <label for="name">First Name</label>
                            <input type="text" id="fname" name="tname" placeholder="Your name.."/> <br>

                            <label for="country">Country</label>
                            <select id="country" name="country">
                                <option value="bangladesh">bangladesh</option>
                                <option value="india">india</option>
                                <option value="USA">USA</option>
                            </select>
                            <br>

                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
                            <br/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </section> */}
    {/* <!--contact section--> */}

    <footer className="footer-section">
        <h2>Mission <span className="color-text">2022</span></h2>
        <p className="para-w">@ Designed and Developed by Shoaib Hasan Sohag</p>
    </footer>
    {/* <!--footer section--> */}
     <br/>
    </div>
  )
}

export default Hero
