import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
   <>
   <div className="container py-5 my-5">
    <div className="row">
      <div className='col-md-6'>
        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
        <p className='lead mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Minima ut sint voluptates iste dolore architecto voluptatibus itaque 
          optio enim quidem autem soluta dolorem, mollitia natus dignissimos hic 
          perferendis eveniet error suscipit rerum maxime quod saepe! Vitae officia voluptas,
           libero quo beatae aspernatur aperiam officiis nisi labore quis explicabo nemo sunt!
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, cumque reiciendis consequuntur 
esse vel voluptatibus et rerum aspernatur laudantium quibusdam dolores molestias sint minima accusamus
 placeat aut quaerat similique perferendis quas, in, nemo unde hic. Recusandae, omnis minima, 
ipsam laboriosam eligendi quibusdam doloribus, consequatur libero corrupti quaerat quos? Minima, voluptates.
        </p>
        
        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
        
  
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <img src="/assets/images/home/it-team-working.gif" alt="about us" height="400px" width="600px"></img>
      </div>
    </div>
   </div>
   </>
  )
}

export default About;
