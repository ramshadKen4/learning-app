import React from 'react'
import ProfileCard from '../utility/ProfileCard'

function Testimonials() {
  const testimonials = [
    {
      name: "Abhilash",
      image: "profile.svg",
      bg: "#CDD5D5",
      content: "I have completed Python training from people click. This is the best place to learn python from basic to advanced level. They will provide live projects also. Now I got job in Node Technologies. Thank you People Click."
    },
    {
      name: "Vivek Uniyal",
      image: "profile.svg",
      bg: "#F4F3CD",
      content: "I got opportunity in 2 companies and got placed in Node Technologies. Great place to develop your coding skills. Trainers are always there for your help. HR provides interview opportunities with many companies."
    },
    {
      name: "Niket",
      image: "profile.svg",
      bg: "#EBC2AF",
      content: "I have done Python training from this institute. I got job after the training. One can join the class for Python, behavior & response of the trainer was good as expected. You will be getting assignments and notes virtually, overall good experience.Now I got job in Optibiz. Thank you People Click."
    },
    {
      name: "Vinay TM",
      image: "profile.svg",
      bg: "#D1DAC0",
      content: "People click is the best institute for Python. They covered all the topics with practical and theoretical class. After the training I have attended interview in Indexcel Pvt Ltd. I recommended people click for those who are looking a career in cloud."
    }
  ];

  return (
    <div>
      <h3 className='heading'>What people say about us</h3>
      <div className='testimonial'>
        {testimonials.map((testimonial, index) => (
          <ProfileCard
            key={index}
            name={testimonial.name}
            profilePic={testimonial.image}
            bg={testimonial.bg}
          >
            <blockquote >{testimonial.content}</blockquote>
          </ProfileCard>
        ))}
      </div>
    </div>
  )
}

export default Testimonials