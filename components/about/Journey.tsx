import SplitSection from '@/components/shared/SplitSection';

export default function Journey() {
  const description = (
    <>
      <p className="mb-4">
        Hilltop Global Group has been at the forefront of education and internship placements, continuously evolving since our inception. We have accomplished countless milestones that have shaped our organization into a trusted partner for students seeking to advance their careers through practical experiences.
      </p>
      
      <p className="mb-4">
        From our early days facilitating study abroad programs to today's comprehensive education services, our commitment to empowering learners has remained a priority. We take pride in fostering connections with universities, partners, and corporate sponsors, ensuring students have access to valuable resources that enhance their academic journey.
      </p>
      
      <p>
        Our growth reflects our dedication to inclusive education and extending opportunities to diverse communities, making us a leader in the field.
      </p>
    </>
  );

  return (
    <SplitSection
      title="Our Journey"
      description={description}
      imageSrc="http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg"
      imageAlt="Hilltop Global Group Journey"
      imagePosition="right"
      darkMode={true}
    />
  );
}

