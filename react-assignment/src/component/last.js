import React, { Component } from 'react';

class Last extends React.Component{
    render(){
        return(
            
    <section className="sec_below">
    <div className="brand">   
            <img src="src/images/logo.png"/>
            <nav class="nav_bar">
                <a href="HOME">HOME</a>
                <a href="SERVICES">SERVICE</a>
                <a href="PORTFOLIO">PORTFOLIO</a>
                <a href="ABOUT">ABOUT</a>
                <a href="CLIENTS">CLIENTS</a>
                <a href="PRICE">PRICE</a>
                <a href="CONTACT">CONTACT</a>
                
            </nav>
        </div>
    <div className="title">
            <h1>What We Do?</h1>
            <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
            <hr/>
        </div>
        
        <section className="last_sec">
            <div>
                    <figure>
                            <img src="src/images/Service1.png" alt="The Pulpit Rock" width="304" height="228"/>
                            <figcaption>MORDERN DESIGN</figcaption>
                            <p>We Create Modern And Clean Theme For Your Business Company.</p>
                          </figure>
                          
            </div>

           
            <div>
                    <figure>
                            <img src="src/images/Service2.png" alt="The Pulpit Rock" width="304" height="228"/>
                            <figcaption>POWERFULL THEME</figcaption>
                            <p>We Create Modern And Powerful Theme With Lots Animation And Features</p>
                          </figure>
                          
            </div>
            <div>
                    <figure>
                            <img src="src/images/Service3.png" alt="The Pulpit Rock" width="304" height="228"/>
                            <figcaption>CLEAN CODE</figcaption>
                            <p>We Create Modern And Powerful Html5 And CSS3 Code Easy For Read And Customize.</p>
                          </figure>
                          
            </div>
        </section>
</section>
        )
    }
}

export default Last;