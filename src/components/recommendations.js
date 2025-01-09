import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--navy);
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid var(--light-navy);
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer; /* Makes it clear the box is clickable */

  &:hover {
    background-color: var(--lightest-navy);
  }
`;

const Title = styled.h1`
  font-size: 22px;
  color: var(--lightest-slate);
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  color: var(--green);
  margin-bottom: 5px;
`;

const Relationship = styled.h3`
  font-size: 16px;
  color: var(--light-slate);
  font-weight: normal;
  margin-top: 5px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: var(--light-slate);
  margin-top: 10px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')}; /* Show/Hide the description */
`;

const Recommendations = () => {
  const data = useStaticQuery(graphql`
    query {
      recommendations: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/recommendations/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              relationship
            }
            html
          }
        }
      }
    }
  `);

  const recommendations = data.recommendations.edges.filter(({ node }) => node);

  // State to manage dropdown visibility
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <StyledContainer id="recommendations"> {/* Added id attribute */}
      <h2 className="numbered-heading">Recommendations</h2> {/* Added section name */}
      {recommendations.map(({ node }, i) => {
        const { title, subtitle, relationship } = node.frontmatter;
        const html = node.html;

        return (
          <ContentBox key={i} onClick={() => toggleDescription(i)}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {relationship && <Relationship>{relationship}</Relationship>} {/* Display relationship */}
            <Description
              isVisible={visibleIndex === i}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </ContentBox>
        );
      })}
    </StyledContainer>
  );
};

export default Recommendations;
