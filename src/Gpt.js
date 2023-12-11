import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

const LeftSection = styled.div`
  flex: 100%;
  display: flex;
  padding: 20px;
  
  @media (min-width: 600px) {
    flex: 60%;
  }

  @media (min-width: 768px) {
    flex: 60%;
  }

  @media (min-width: 992px) {
    flex: 50%;
  }
`;

const Section = styled.div`
  flex: 1;
  padding: 0 10px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const TextContent = styled.div`
  margin-top: 10px;
`;

const RightSection = styled.div`
  flex: 100%;
  display: flex;
  padding: 20px;
  
  @media (min-width: 768px) {
    flex: 40%;
  }

  @media (min-width: 992px) {
    flex: 50%;
  }
`;

const TestimonialSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TestimonialCard = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
  cursor: grab;
`;

const App = () => {
  return (
    <Container>
      <LeftSection>
        <Section>
          <Box>
            <Image src="your_image_url" alt="Image 1" />
            <TextContent>
              <h2>Your Heading</h2>
              <p>Your paragraph text goes here.</p>
            </TextContent>
          </Box>
        </Section>
        <Section>
          <Box>
            <Image src="your_image_url" alt="Image 2" />
            <TextContent>
              <h2>Your Heading</h2>
              <p>Your paragraph text goes here.</p>
            </TextContent>
          </Box>
        </Section>
        <Section>
          <Box>
            <Image src="your_image_url" alt="Image 3" />
            <TextContent>
              <h2>Your Heading</h2>
              <p>Your paragraph text goes here.</p>
            </TextContent>
          </Box>
        </Section>
      </LeftSection>
      <RightSection>
        <form>
          {/* Your form elements go here */}
        </form>
        {/* Add more content on the right side as needed */}
      </RightSection>
      <TestimonialSection>
        <TestimonialCard>
          <Image src="your_image_url" alt="Testimonial 1" />
        </TestimonialCard>
        <TestimonialCard>
          <Image src="your_image_url" alt="Testimonial 2" />
        </TestimonialCard>
        <TestimonialCard>
          <Image src="your_image_url" alt="Testimonial 3" />
        </TestimonialCard>
        {/* Add more testimonial cards as needed */}
      </TestimonialSection>
    </Container>
  );
};

export default App;
