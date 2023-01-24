import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume"> Resume details: Oraan Levi</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
    
                <p>
                Download my <a href="https://docs.google.com/document/d/1wiKbCLby6CyoE2ZA52EMelN347OwOivB7_QPNs6kkVU/edit#heading=h.5rf9wr4r3no2" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2> My front end experience</h2>
                <p>HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>My back end experience</h2>
                <p>
                Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;