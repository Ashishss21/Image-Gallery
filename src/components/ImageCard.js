import React from "react";

const ImageCard = ({ image }) => {

    // const tags = image.tags.split(',');

    return (
    <div>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl">
        <img
          src={image.webformatURL}
          alt="ye"
          className="w-full"
          height='350'
          width= '350'
        />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul className="">
            <li>
              <strong>Views:</strong>{image.views}
            </li>
            <li>
              <strong>Downloads:</strong>{image.downloads}
            </li>
            <li>
              <strong>Likes:</strong>{image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
            {/* {tags.map((tag, index)=>{
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #{tag}
                </span>
            })} */}
        </div>
      </div>
    </div>
  );
};


export default ImageCard;