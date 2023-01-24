import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Card build-out using props
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p>
              <a href={props.github}><img src='https://i.postimg.cc/QBznJqK7/image.png' width='60cm' border='0' alt='image'/></a>
              <a href={props.deploy}><img src='https://i.postimg.cc/bdW09HHx/107-1073759-link-svg-missing-transparent-link-icon-png-png.png' width="60cm" border='0' alt='link'/></a>
              </p>
              <p id="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;