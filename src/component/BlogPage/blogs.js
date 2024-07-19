// export default function Blogs() {
//   const blogs = [
//     {
//       title: "Education",
//       time: "2 hours ago",
//       image: "/images/education 4.jpg",
//       headline: "Empowering Children Through Free Education",
//       description:
//         "Suvidha Foundation is dedicated to providing free education to underprivileged children, ensuring they have the resources to achieve their dreams.",
//       comments: 5,
//     },
//     {
//       title: "Women's Empowerment",
//       time: "1 day ago",
//       image: "/images/womenedu.jpeg",
//       headline: "Supporting Women's Growth and Development",
//       description:
//         "Our initiatives focus on empowering women with skills and opportunities, fostering their growth and independence in society.",
//       comments: 8,
//     },
//     {
//       title: "Technology",
//       time: "3 days ago",
//       image: "/images/techno.jpeg",
//       headline: "Coding for a Brighter Future",
//       description:
//         "We offer free coding courses for children from low-income families, helping them develop essential skills for a tech-driven world.",
//       comments: 12,
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden"
//           >
//             <div className="flex justify-between items-center p-6">
//               <h1 className="text-xl font-bold">{blog.title}</h1>
//               <div className="text-sm text-gray-500">{blog.time}</div>
//               <button className="bg-gray-200 text-sm rounded-lg px-4 py-2 hover:bg-gray-300 transition duration-300">
//                 Follow
//               </button>
//             </div>
//             <img
//               className="w-full h-64 object-cover"
//               src={blog.image}
//               alt={blog.title}
//             />
//             <div className="p-6">
//               <h1 className="text-3xl font-bold mb-4">{blog.headline}</h1>
//               <p className="text-lg text-gray-700 mb-6">{blog.description}</p>
//               <hr className="mb-4" />
//               <div className="flex justify-between items-center">
//                 <button className="bg-gray-200 text-sm rounded-lg px-4 py-2 hover:bg-gray-300 transition duration-300">
//                   Comments
//                 </button>
//                 <div className="bg-black text-white rounded-full text-sm px-4 py-2">
//                   {blog.comments}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Blogs() {
  const blogs = [
    {
      title: "Education",
      time: "2 hours ago",
      image: "/images/education 4.jpg",
      headline: "Empowering Children Through Free Education",
      description:
        "Suvidha Foundation is dedicated to providing free education to underprivileged children, ensuring they have the resources to achieve their dreams.",
      comments: 5,
    },
    {
      title: "Women's Empowerment",
      time: "1 day ago",
      image: "/images/womenedu.jpeg",
      headline: "Supporting Women's Growth and Development",
      description:
        "Our initiatives focus on empowering women with skills and opportunities, fostering their growth and independence in society.",
      comments: 8,
    },
    {
      title: "Technology",
      time: "3 days ago",
      image: "/images/techno.jpeg",
      headline: "Coding for a Brighter Future",
      description:
        "We offer free coding courses for children from low-income families, helping them develop essential skills for a tech-driven world.",
      comments: 12,
    },
  ];

  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden"
          >
            <div className="flex justify-between items-center p-6">
              <h1 className="text-xl font-bold">{blog.title}</h1>
              <div className="text-sm text-gray-500">{blog.time}</div>
              <button className="bg-gray-200 text-sm rounded-lg px-4 py-2 hover:bg-gray-300 transition duration-300">
                Follow
              </button>
            </div>
            <img
              className="w-full h-64 object-cover"
              src={blog.image}
              alt={blog.title}
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{blog.headline}</h1>
              <p className="text-lg text-gray-700 mb-6">{blog.description}</p>
              <hr className="mb-4" />
              <div className="flex justify-between items-center">
                <button className="bg-gray-200 text-sm rounded-lg px-4 py-2 hover:bg-gray-300 transition duration-300">
                  Comments
                </button>
                <div className="bg-black text-white rounded-full text-sm px-4 py-2">
                  {blog.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
