import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material"

const Footer = () => {
  return (
    <div className="w-[full] h-80 flex flex-col gap-10  text-white p-16 bg-red-900">
      <div className="flex justify-between">
      <ul>
        <li>Academix Business</li>
        <li>Teach on Academix</li>
        <li>Get the App</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <li>Careers</li>
        <li>Blog</li>
        <li>Help & Support</li>
        <li>Affiliate</li>
        <li>Investors</li>
        
      </ul>
      <ul>
        <li>Terms</li>
        <li>Private Policy</li>
        <li>Cookie Settings</li>
        <li>Sitemap</li>
        <li>Accessibility Statement</li>
        
      </ul>
      <ul className="flex gap-3 items-center">
        <li><Facebook/></li>
        <li><LinkedIn/></li>
        <li><Twitter/></li>
        <li><Instagram/></li>
        <li><YouTube/></li>
       
      </ul>
</div>
      <div className="text-center"><p>© 2024 Academix Inc. All rights reserved.</p></div>
      
    </div>
  )
}

export default Footer