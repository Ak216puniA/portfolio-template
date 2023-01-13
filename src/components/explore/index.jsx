import React from 'react'
import './index.css'

function Explore(props) {

  const { projects } = props

  const myProjects = projects.length>0 ?
  projects.map((project,index) => {
    if(index%2===0){
      return (
        <>
        <div className='projectNumberDiv'>{`0${index+1}.`}</div>
        <div className='projectDiv'>
          <div className='projectImageDiv'>
            <img
            src={require(`../../assets/project${index+1}.webp`)}
            alt="Image"
            className='projectImage'
            >
            </img>
          </div>
          <div className='projectMiddlePaddingDiv'></div>
          <div className='projectDescDiv'>
            <div className='projectTextDiv'>
              <div className='projectTitle'>{project['title']}</div>
              <div className='projectDesc'>{project['desc']}</div>
            </div>
            <div className='projectLink'>
              <a href={project['link']} className='viewMoreLink' target="_blank">View more</a>
            </div>
          </div>
        </div>
        </>
      )
    }else{
      return (
        <>
        <div className='projectNumberDiv'>{`0${index+1}.`}</div>
        <div className='projectDiv'>
          <div className='projectDescDiv'>
            <div className='projectTextDiv'>
              <div className='projectTitle'>{project['title']}</div>
              <div className='projectDesc'>{project['desc']}</div>
            </div>
            <div className='projectLink'>
              <a href={project['link']} className='viewMoreLink' target="_blank">View more</a>
            </div>
          </div>
          <div className='projectMiddlePaddingDiv'></div>
          <div className='projectImageDiv'>
            <img
            src={require(`../../assets/project${index+1}.webp`)}
            alt="Image"
            className='projectImage'
            >
            </img>
          </div>
        </div>
        </>
      )
    }
  }) :
  <></>

  return (
    <>
      <div className='sectionHeadingDiv' id='explore'>
        Explore
      </div>
      <hr className='sectionHeadingHrTag'/>
      <div className='exploreProjectsDiv'>
        {myProjects}
      </div>
    </>
  )
}

export default Explore