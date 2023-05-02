import React from 'react'
import {useState} from 'react'
import Information from './Information'
import './Dropdown.css'
const Dropdown = () => {
    let obj = {
        heading1: "About Us",
        content1: "A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are.A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are.A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are.A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are.",
        note1:"Note :Here should be the text related to selected dropdown option",
        heading2: "Our Services",
        content2: "We do serve various kinds of writing that blogs and business use as a marketing strategy to grow your business. You can trust our creative to increase your website, social media, brands, increase sales from affiliate marketing and grow your email list as a way to nurture leads into products and services.We would also be glad to collaborate with you to develop campaigns or events that will help generate awareness and meet the needs of your clients as well as reach a much wider audience.We do serve various kinds of writing that blogs and business use as a marketing strategy to grow your business. You can trust our creative to increase your website, social media, brands, increase sales from affiliate marketing and grow your email list as a way to nurture leads into products and services.We would also be glad to collaborate with you to develop campaigns or events that will help generate awareness and meet the needs of your clients as well as reach a much wider audience",
        heading3: "Contact Us",
        content3: "A Contact Us page is essential to building a brand’s website as it allows visitors to contact you easily without leaving their browser.They also give you the opportunity to capture leads and improve customer service.Generally, visitors can also leave feedback or ask questions through these channels. You’ll receive valuable information about your customers’ preferences and expectations if done correctly.A Contact Us page is essential to building a brand’s website as it allows visitors to contact you easily without leaving their browser.They also give you the opportunity to capture leads and improve customer service.Generally, visitors can also leave feedback or ask questions through these channels. You’ll receive valuable information about your customers’ preferences and expectations if done correctly.A Contact Us page is essential to building a brand’s website as it allows visitors to contact you easily without leaving their browser.They also give you the opportunity to capture leads and improve customer service.Generally, visitors can also leave feedback or ask questions through these channels. You’ll receive valuable information about your customers’ preferences and expectations if done correctly.",
        heading4: "Know Our Company",
        content4: "A Contact Us page is essential to building a brand’s website as it allows visitors to contact you easily without leaving their browser.They also give you the opportunity to capture leads and improve customer service.Generally, visitors can also leave feedback or ask questions through these channels. You’ll receive valuable information about your customers’ preferences and expectations if done correctly.A Contact Us page is essential to building a brand’s website as it allows visitors to contact you easily without leaving their browser.They also give you the opportunity to capture leads and improve customer service.Generally, visitors can also leave feedback or ask questions through these channels. You’ll receive valuable information about your customers’ preferences and expectations if done correctly.A Contact Us page is essential to building a brand’s website as it allows visitors to contact you easily without leaving their browser.They also give you the opportunity to capture leads and improve customer service.Generally, visitors can also leave feedback or ask questions through these channels. You’ll receive valuable information about your customers’ preferences and expectations if done correctly."
      }
      const [value, setValue] = useState("");
      const about = (e) => {
        setValue(e.target.value);
      }
  return (
    <>
    <div className="dropdown">
      <select value={value} onChange={about}>
      <option>Dropdown</option>
        <option value="know our compony">know our compony</option>
        <option value="about">About us</option>
        <option value="services">Our Services</option>
        <option value="contact">Contact Us</option>
      </select>
      </div>
      {
        (value === 'about') && <Information heading1={obj.heading1} content1={obj.content1} note1={obj.note1}/>
      }
      {
        (value === 'services') && <Information heading2={obj.heading2} content2={obj.content2} note1={obj.note1}/>
      }
      {
        (value === 'contact') && <Information heading3={obj.heading3} content3={obj.content3} note1={obj.note1}/>
      }
      {
        (value === 'know our compony') && <Information heading4={obj.heading4} content4={obj.content4} note1={obj.note1}/>
      }
    </>
    )
}

export default Dropdown