//import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //  color: "black",
    //backgroundColor: "white"
    // })
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle}
                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            <strong>Saving:Hawaii</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion Saving Hawaii.</strong>
                            Not so very long ago, Hawaii was a remote island, populated solely by endemic flora and
                            fauna–and its native inhabitants. Now, however, it is known throughout the world as
                            a must-visit tourist destination, while Americans have moved to the islands in their masses,
                            buying up beachfront properties.

                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                            style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                            aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Save Earth : Save life</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's according Save Earth :Save life.</strong>
                            The earth, among eight planets, is a planet situated in the solar system. It is only one planet where life existence is possible. It has suitable temperature, gases, environment for life existence. There are human beings, animals, plants, water bodies, land, mountains, soil, etc. on the earth. Our earth is the only planet for
                            survival of living things. So, it becomes more important and necessary for saving our Earth.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"
                            style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree"
                            aria-expanded="false" aria-controls="collapseThree">
                            <strong> Technology:world </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion to technology</strong>
                            Technology affects people all over the world. Advances in technology
                            have made our countries safer and our lives easier, they have also negatively
                            affected our lives. Technology have brought us online banking, smart cars, smart TVs,
                            lightning fast computers, and the virtual reality.
                            hackers, identity theft,

                            within the <code>accordion-techonology</code>,
                            Also there include cyber warfarecyber stalking, and a host of other bad things.

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}