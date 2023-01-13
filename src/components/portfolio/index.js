import React, { useEffect } from 'react'
import About from '../about'
import Contact from '../contact'
import Explore from '../explore'
import Intro from '../intro'
import NavigationBar from '../navigation-bar'
import ProfilePic from '../profile-pic'
import WelcomeMessage from '../welcome-message'
import './index.css'

function Portfolio() {

  const user = {
    'greeting': 'Greeting-message',
    'nameIntro': `Name-intro`,
    'fieldOfInterest': {
      'fieldOfInterest1': `Field-of-interest line1`,
      'fieldOfInterest2': `Field-of-interest`,
    },
    'currentWorkPlace': {
      'currentWorkPlace1': `Workplace line1`,
      'currentWorkPlace2': `Workplace-name`
    },
    'quote': `Personal quote`,
    'projects': [
      {
        'title': `Project-name`,
        'desc': `Description`,
        'link': `L-I-N-K`,
      },
      {
        'title': `Project-name`,
        'desc': `Description`,
        'link': `L-I-N-K`,
      }
    ],
    'about': [
      `About para1`,
      `About para2`,
      `About paraN`
    ],
    'resume': `L-I-N-K`,
    'contacts': {
      'contactDesc': `Contact description`,
      'facebook': `L-I-N-K`,
      'linkedin': `L-I-N-K`,
      'github': `L-I-N-K`,
      'email': `L-I-N-K`
    }
  }
  // Add your personal links in place of L-I-N-K

  useEffect(() => {
    var maxx = window.screen.width;
    var maxy = window.screen.height;
    maxy = maxy
    var halfx = maxx / 2;
    var halfy = maxy / 2;
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = maxx;
    canvas.height = maxy;
    var context = canvas.getContext("2d");
    var dotCount = 500;
    var dots = [];
    // create dots
    for (var i = 0; i < dotCount; i++) {
      dots.push(new dot());
    }

    // dots animation
    function render() {
      context.fillStyle = "#160F1B";
      context.fillRect(0, 0, maxx, maxy);
      for (var i = 0; i < dotCount; i++) {
        dots[i].draw();
        dots[i].move();
      }
      requestAnimationFrame(render);
    }

    // dots class
    // @constructor
    function dot() {
      
      this.rad_x = 2 * Math.random() * halfx + 1;
      this.rad_y = 1.2 * Math.random() * halfy + 1;
      this.alpha = Math.random() * 360 + 1;
      this.speed = Math.random() * 100 < 50 ? 1 : -1;
      this.speed *= 0.1;
      this.size = Math.random() * 5 + 1;
      this.color = Math.floor(Math.random() * 256);
      
    }

    // drawing dot
    dot.prototype.draw = function() {
      
      // calc polar coord to decart
      var dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);
      var dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);
      // set color
      context.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")";
      // draw dot
      context.fillRect(dx, dy, this.size, this.size);
      
    };

    // calc new position in polar coord
    dot.prototype.move = function() {
      
      this.alpha += this.speed;
      // change color
      if (Math.random() * 100 < 50) {
        this.color += 1;
      } else {
        this.color -= 1;
      }
      
    };

    // start animation
    render();
  },[])
  
  return (
    <>
      <div className='homeBackground'>
        <NavigationBar />
        <ProfilePic />
        <WelcomeMessage 
        greeting={user['greeting']}
        nameIntro={user['nameIntro']}
        />
      </div>
      <Intro 
      fieldOfInterest={user['fieldOfInterest']}
      currentWorkPlace={user['currentWorkPlace']}
      quote={user['quote']}
      />
      <Explore 
      projects={user['projects']}
      />
      <About 
      about={user['about']}
      resume={user['resume']}
      />
      <Contact 
      contacts={user['contacts']}
      />
  </>
  )
}

export default Portfolio