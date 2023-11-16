const aboutUsPoints = [
  {
    heading: "Mission Statement",
    content:
      "As a soon-to-be 501(c)(3) nonprofit organization, our mission is to create a world where individuals with disabilities can effortlessly find a home that caters to their needs. We understand the unique challenges faced in finding suitable assisted living options and are dedicated to simplifying this process.",
  },
  {
    heading: "Vision",
    content:
      "We envision a future where accessibility and support are not just options, but guarantees for every individual with disabilities seeking an assisted living home. Our goal is to be the leading online platform that bridges this crucial gap, ensuring comfortable, safe, and nurturing environments for all our clients.",
  },
  {
    heading: "Values",
    content:
      "Our core values are empathy, reliability, and innovation. We believe in understanding the deep needs of our clients, providing dependable solutions, and continuously improving our platform with advanced technology and feedback.",
  },
  {
    heading: "Our Approach",
    content:
      "Our approach is client-centered and technology-driven. We offer a user-friendly online platform where individuals can easily browse and find assisted living homes that match their specific needs. We work closely with reputable home providers to ensure a diverse range of high-quality options.",
  },
  {
    heading: "Impact",
    content:
      "By connecting individuals with disabilities to the right assisted living homes, we aim to enhance their quality of life. Our service is more than just a platform; it's a community where respect, care, and support are paramount.",
  },
  {
    heading: "Join Us",
    content:
      "If you share our vision of a more accessible world for individuals with disabilities, we invite you to join us. Whether you're seeking an assisted living home, own a home, or wish to support our cause, your involvement is crucial to our success. Together, we can make a difference.",
  },
];

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto py-10 font-poppins">
      <div className="p-10">
        <h2 className="text-5xl font-extrabold font-bebas-neue underline">
          About Us
        </h2>
        <div className="mt-[70px] divide-y divide-slate-200/80">
          {aboutUsPoints.map((aboutPoint, index) => (
            <div key={index} className="space-y-2 py-10">
              <h3 className="text-2xl underline font-extrabold">
                {aboutPoint.heading}
              </h3>
              <p className="text-base">{aboutPoint.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
