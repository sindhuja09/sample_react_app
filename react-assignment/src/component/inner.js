import React, { Component } from 'react';

class Section extends React.Component{
    render(){
        return(
            <section className="sec">
        <div class="sec_inner">
                <h2>EASY MANAGEMENT</h2>
                <h4>EASY TO USE</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <button type="submit">Download</button>
        </div>
        <div className="mob">
                <img src="src/images/Slider02.png" width="280" height="280"/>
        </div>
    </section>
        )
    }
}
export default Section;