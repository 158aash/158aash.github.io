import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Incident Response', 'Network Security', 'Product Security', 'Security Operations', 'Threat Intelligence', 'Vulnerability Detection', 'Zero Trust','Endpoint Security' ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Hello World! I’m Aashvi Nagendra, a Master’s student in Cybersecurity at the {' '}<a href="https://www.umd.edu">University of Maryland</a>. I’m just as excited about reinforcing digital defenses as I am about pulling them apart to see what’s inside. With {' '}<a href=''>3+ years</a> of experience in configuring Network and Security infrastructures, working in a SOC setup and fine-tuning threat detection systems, my work has given me the chance to explore a range of exciting projects, from implementing Zero-Trust architectures to deploying advanced IDS/IPS and Web Application Firewalls (WAFs), giving me hands-on experience with all sides of security. 
            </p>
            <p> 
            I have been certified with the GIAC Certified Incident Handler{' '}<a href='https://www.giac.org/certifications/certified-incident-handler-gcih/'>(GCIH) </a> and Certified Ethical Hacker {' '}<a href='https://drive.google.com/file/d/1zFnRmw-6moOKfQ-cp6J-ReKFQnA5IHYL/view?usp=sharing'>(CEH)</a> certification, where I learned to think like an attacker with ands-on experience in incident response and threat detection. 
            </p>
            <p>
              I’ve had the privilege of working at{' '}
              <a href="https://www.aryaka.com/">Aryaka Networks  </a>, {' '}
              <a href="https://www.alcon.com/"> Alcon</a>, {' '}
              <a href="https://hexaware.com/">Hexaware Technologies</a>, and at the{' '}
              <a href="https://www.umd.edu/">University of Maryland.</a> With this expertise, my goal goes beyond just fixing what’s broken, it's about building systems that can withstand threats we haven’t even seen yet.
            </p>
           
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.PNG"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
