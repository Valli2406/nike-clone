import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import LocomotiveScroll from 'locomotive-scroll';
import Griditem from '../HomePage/Griditem';
import imagesLoaded from 'imagesloaded';
import { useNavigate } from 'react-router-dom';
const preloadImages = (selector) => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
}


const clamp = (value, min, max) => {
  return value <= min ? min : value >= max ? max : value;
}





function Home() {

  const navigate = useNavigate();

  const photos = [
    {
      url: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "block 1"

    },
    {
      url: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: " block 2"
    },
    {
      url: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "block 3"
    },
    {
      url: "https://images.pexels.com/photos/60735/pexels-photo-60735.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: " block 4"
    },
    {
      url: "https://images.pexels.com/photos/3611797/pexels-photo-3611797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: " block 5"
    },
    {
      url: "https://images.pexels.com/photos/11157452/pexels-photo-11157452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "block 6"
    },
    {
      url: "https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "block 7"
    },
    {
      url: "https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: " block 8"
    },
    {
      url: "https://images.pexels.com/photos/1858407/pexels-photo-1858407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: " block 9"
    },
    {
      url: "https://images.pexels.com/photos/966058/pexels-photo-966058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "block 10"
    },
    {
      url: "https://images.pexels.com/photos/1554099/pexels-photo-1554099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: " block 11"
    },
    {
      url: "https://images.pexels.com/photos/1570867/pexels-photo-1570867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: " block 12"
    },
    {
      url: "https://images.pexels.com/photos/3025984/pexels-photo-3025984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "block 13"
    },
    {
      url: "https://images.pexels.com/photos/15336565/pexels-photo-15336565/free-photo-of-nike-dunk-high-retro-shoes-and-nike-socks-with-a-city-street-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "block 14"
    },
    {
      url: "https://images.pexels.com/photos/2231435/pexels-photo-2231435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "block 15"
    }
  ];
  const Ref = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const middleColumnRef = useRef(null);

  const scroll = useRef({
    cache: 0,
    current: 0,
  });

  useEffect(() => {
    const scrollElement = new LocomotiveScroll({
      el: Ref.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true
    })
    scrollElement.on("scroll", (obj) => {
      scroll.current.current = obj.scroll.y;
      const distance = scroll.current.current - scroll.current.cache;
      scroll.current.cache = scroll.current.current;

      if (leftColumnRef.current) {
        leftColumnRef.current.style.transform = `skewY(${clamp(distance, -20, 20)}deg)`;
      }
      if (middleColumnRef.current) {
        middleColumnRef.current.style.transform = `skewY(${clamp(-distance, -20, 20)}deg)`;
      }
      if (rightColumnRef.current) {
        rightColumnRef.current.style.transform = `skewY(${clamp(distance, -20, 20)}deg)`;
      }
    })
    Promise.all(
      [preloadImages(".grid-item-media")]).then(() => {
        scrollElement.update();
      });
  }, [])


  const leftChunk = [...photos].splice(0, 5);
  const middleChunk = [...photos].splice(5, 5);
  const rightChunk = [...photos].splice(10, 5);




  useEffect(() => {
    // Add home page specific styles
    document.body.classList.add('home-page-body');
    document.documentElement.classList.add('home-page-html');

    // Clean up styles when the component is unmounted
    return () => {
        document.body.classList.remove('home-page-body');
        document.documentElement.classList.remove('home-page-html');
    };
}, []);







  return (

    <div className='main-container ' id="main-container" ref={Ref}
      data-scroll-container
    >

      <div className='grid-wrap'>
        <div className='left-column' ref={leftColumnRef}>
          {
            leftChunk.map(({ url }, index) => (
              <Griditem key={url} url={url} />
            ))
          }
        </div>
        <div className='middle-column' data-scroll data-scroll-speed ="-5" >
          <div  ref={middleColumnRef}>
          {
            middleChunk.map(({ url }, index) => (
              <Griditem key={url} url={url} />
            ))
          }
          </div>
        </div>
        <div className='right-column' ref={rightColumnRef}>
          {
            rightChunk.map(({ url }, index) => (
              <Griditem key={url} url={url} />
            ))
          }
        </div>
      </div>
      <button className="Homebtn" onClick={() => navigate('products')}>Go Here</button>
    </div>
  )
}

export default Home