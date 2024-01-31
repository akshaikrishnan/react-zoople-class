import React from 'react'

export default function Form() {
  return (
    <>
    <div className="container mt-5">
    <div className="card shadow-lg">
      <div className="card-header text-center bg-primary text-white">
        <h3>Contact Us</h3>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows={3 as number} placeholder="Tell us what's on your mind"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
    </>
    
  )
}
