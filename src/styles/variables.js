import { css } from 'styled-components';

// const variables = css`
//   :root {
//     --dark-navy: #020c1b;
//     --navy: #0a192f;
//     --light-navy: #112240;
//     --lightest-navy: #233554;
//     --navy-shadow: rgba(2, 12, 27, 0.7);
//     --dark-slate: #495670;
//     --slate: #8892b0;
//     --light-slate: #a8b2d1;
//     --lightest-slate: #ccd6f6;
//     --white: #e6f1ff;
//     --green: #64ffda;
//     --green-tint: rgba(100, 255, 218, 0.1);
//     --pink: #f57dff;
//     --blue: #57cbff;

//     --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
//       sans-serif;
//     --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

//     --fz-xxs: 12px;
//     --fz-xs: 13px;
//     --fz-sm: 14px;
//     --fz-md: 16px;
//     --fz-lg: 18px;
//     --fz-xl: 20px;
//     --fz-xxl: 22px;
//     --fz-heading: 32px;

//     --border-radius: 4px;
//     --nav-height: 100px;
//     --nav-scroll-height: 70px;

//     --tab-height: 42px;
//     --tab-width: 120px;

//     --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
//     --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

//     --hamburger-width: 30px;

//     --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
//     --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
//     --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
//     --ham-after-active: bottom 0.1s ease-out,
//       transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
//   }
// `;


// dark-navy: loading bg
// navy: background
// light-navy: hover 'Where i've worked, projects boxes, Other Noteworthy Projects boxes, 
// lightest-navy: lines of "About me", "Where I've Worked", "Some things I've built"
// navy-shadow: all box shadows, top menu, pics, things i've built boxes, Other Noteworthy Projects boxes
// dark-slate: scroll bar
// slate: Right under the name all the contentc - except box, "About me" - All the words, "Where I've Worked" - All the content words - except the date/heading/bullet points, "Other Notworthy Projects" - tech in the bottom of the box, "Get In Touch" - Content - except the button
// light-slate: Date in Where'i've worked, icons and line to the left, mail and line to the right, "Some things I've Built" - Content and Tech below the box, "Other Noteworthy Projects" - Description and Link arrow, Bottom: "Designed and Built by Brittany Chiang"
// lightest-slate: Name, Top Right Headings - except button , "About me" - Heading, "Where I've Worked" - Heading/Job Title, "Some things I've Built" - Heading/title/git icon and link, "Other Noteworthy Projects" - Heading and titles, "Get In Touch" - Heading, Selected items
// white: DONT KNOW
// green: Hover, Buttons, Noteworthy - folder icon and 'view the archive', Image shading, links, numbers for sections, "Hi my name is" , Hover action glows up to red - mail, logo top left, icons in the left, text hover in the top right, "Where I've worked" bullet points, 'Featured Project' in Some Things I've built, '0.4 What’s Next?' 
// green-tint:DONT KNOW
// pink: DONT KNOW
// blue:

const variables = css`
  :root {
    --dark-navy: #101012;
    --navy: #101012;
    --light-navy: #1C1C1F;
    --lightest-navy: #2C313C;
    --navy-shadow: rgba(16,16,18,0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #FF0033;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;


export default variables;
