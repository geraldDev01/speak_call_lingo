import Image from "next/image";

export const CourseCard = ({ title, items, schedule, duration, imageCard }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center pt-12 mb-6">
        <figure>
          <Image className="w-60 md:w-80 rounded-md" src={imageCard} alt="card image" />
        </figure>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-primaryColor text-center">{title}</h2>
      <ul className="list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zM4 11a2 2 0 0 1-2-2v4a2 2 0 0 1 2 2h4a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2H4zm-1 2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2zm12-7a2 2 0 0 1-2-2v4a2 2 0 0 1 2 2h4a2 2 0 0 1-2 2v-4a2 2 0 0 1 2-2h-4zm1 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4zM12 13a2 2 0 0 1-2-2v4a2 2 0 0 1 2 2h4a2 2 0 0 1-2 2v-4a2 2 0 0 1 2-2h-4zm1 2a1 1 0 0 0-1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3z"
            clipRule="evenodd"
          />
        </svg>
        <p className="font-semibold">{schedule}</p>
      </div>
      <div className="flex items-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zM4 11a2 2 0 0 1-2-2v4a2 2 0 0 1 2 2h4a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2H4zm-1 2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2zm12-7a2 2 0 0 1-2-2v4a2 2 0 0 1 2 2h4a2 2 0 0 1-2 2v-4a2 2 0 0 1 2-2h-4zm1 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4zM12 13a2 2 0 0 1-2-2v4a2 2 0 0 1 2 2h4a2 2 0 0 1-2 2v-4a2 2 0 0 1 2-2h-4zm1 2a1 1 0 0 0-1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-700">{duration}</p>
      </div>
    </div>
  );
};
