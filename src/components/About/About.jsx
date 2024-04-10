import { Link } from 'react-router-dom';
import Avatar from '../../assets/avatar.jpg';

import './About.css';



const About = () => {
    return (
        <div className='about-container'>
            <div className='left-div'>
                <img width={400} src={Avatar} alt="profile" />
            </div>
            <div className='right-div'>
                <p>Crafting an engaging and concise about introduction for your portfolio can significantly impact how you're perceived professionally. Here's a template to get you started, tailored to showcase your unique blend of skills, experiences, and personal flair.</p>
                <Link to='/'>Connect</Link>
            </div>
        </div>
    )
}

export default About