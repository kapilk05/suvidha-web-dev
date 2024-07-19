export default function Body() {
  return (
    <>
      <div className="bg-fixed bg-cover bg-bottom w-full h-full bg-[url('/images/poorchildren-modified.jpg')]">
        <div className="bg-white py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <h4 className="text-5xl py-4 font-bold">
              One Step From Us Makes the Country Educated
            </h4>
            <p className="px-8 py-4 text-lg leading-relaxed">
              Our mission is to break the cycle of poverty, illiteracy, and low
              expectations through service and education. We mobilize U.S.
              students to transform our communities through service and change
              the world by building schools in developing countries.
            </p>
            <p className="px-8 py-4 text-lg leading-relaxed">
              Service is at the heart of everything we do. From America’s
              underserved urban neighborhoods to the world’s economically
              poorest rural villages, we empower people to take on the most
              pressing issues in their communities through direct action. It’s
              not about what we do for the students and families we serve with,
              but what they do for their communities, our world, and themselves.
            </p>
            <button className="bg-red-500 px-8 py-4 mt-6 rounded-full text-lg font-bold text-white hover:bg-red-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="text-white py-32 px-8 bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold py-2">Services</h1>
            <h2 className="font-bold text-2xl py-2">
              Free Education For Children Who Cannot Afford Premium Courses
            </h2>
            <p className="text-lg leading-relaxed py-4">
              We provide free coding courses for children who can't afford the
              high prices of education. Support us in our journey to make
              education accessible for all. Arti, a 16-year-old from
              Uttarakhand, won a school-level essay competition in her state
              with the support of our education programs. Her father, initially
              opposed to her education, now supports her dreams of studying
              further.
            </p>
            <h2 className="text-4xl font-bold py-4">
              Factors Influencing Learning Outcomes Among Children
            </h2>
            <p className="text-lg leading-relaxed py-4">
              Regular attendance is crucial for better learning outcomes.
              However, challenges such as poor infrastructure, lack of
              sanitation facilities, and insufficient teaching staff often
              hinder students' regular attendance. We strive to provide
              inclusive, safe, and healthy learning spaces to motivate children
              to attend school regularly.
            </p>
            <h2 className="text-4xl font-bold py-4">Extrinsic Factors</h2>
            <p className="text-lg leading-relaxed py-4">
              Pedagogical learning spaces that are inclusive, safe, healthy, and
              child-friendly are essential. Poor infrastructure, such as lack of
              separate toilets for boys and girls, insufficient teaching staff,
              and long distances to schools, often discourages regular
              attendance. We aim to address these issues to create an
              environment conducive to learning.
            </p>
            <h1 className="text-5xl font-bold pt-16">
              A Young Girl’s Dream of Becoming a Cardiologist
            </h1>
          </div>
        </div>

        <div className="bg-white py-32">
          <div className="flex justify-center gap-12 max-w-6xl mx-auto">
            <div className="w-1/3 text-center">
              <img
                className="rounded-lg h-96 w-full object-cover mb-4"
                src="/images/poor01.jpg"
                alt="Child Education"
              />
              <h1 className="text-2xl font-bold py-2">Child Education</h1>
              <p className="text-sm leading-relaxed">
                We provide quality education to underprivileged children,
                helping them realize their full potential and pursue their
                dreams.
              </p>
            </div>
            <div className="w-1/3 text-center">
              <img
                className="rounded-lg h-96 w-full object-cover mb-4"
                src="/images/poor02.jpg"
                alt="Women's Growth"
              />
              <h1 className="text-2xl font-bold py-2">Women's Growth</h1>
              <p className="text-sm leading-relaxed">
                Empowering women through education and skill development
                programs to help them achieve financial independence and
                self-sufficiency.
              </p>
            </div>
            <div className="w-1/3 text-center">
              <img
                className="rounded-lg h-96 w-full object-cover mb-4"
                src="/images/codechild.jpg"
                alt="Coding for Future"
              />
              <h1 className="text-2xl font-bold py-2">Coding for Future</h1>
              <p className="text-sm leading-relaxed">
                Offering free coding courses to children, equipping them with
                the skills needed for a bright future in the technology
                industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 pt-16">
            <h1 className="text-4xl font-bold text-center">
              Get Started with Suvidha Foundation
            </h1>
            <button className="bg-red-500 px-8 py-4 rounded-full text-lg font-bold text-white hover:bg-red-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
