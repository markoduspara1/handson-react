import React from "react";
import "./SingleCourse.scss";

const SingleCourse = ({ imgSrc, imgAlt }) => {
  return (
    <div className="SingleCourse">
      <figure className="SingleCourse-Figure">
        <img src={imgSrc} alt={imgAlt} className="SingleCourse-Img" />
      </figure>
      <p className="SingleCourse-Text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus
        viverra adipiscing at in tellus. Pellentesque habitant morbi tristique
        senectus et netus et malesuada. Fermentum dui faucibus in ornare quam
        viverra. Adipiscing at in tellus integer feugiat scelerisque. Dictumst
        vestibulum rhoncus est pellentesque. Gravida in fermentum et
        sollicitudin ac orci phasellus egestas tellus. Dolor purus non enim
        praesent elementum facilisis leo vel. Pellentesque dignissim enim sit
        amet venenatis urna cursus eget. Quis auctor elit sed vulputate mi.
        Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.
        Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Sit amet
        consectetur adipiscing elit. Sed adipiscing diam donec adipiscing
        tristique risus. Enim ut tellus elementum sagittis. Parturient montes
        nascetur ridiculus mus mauris. Leo a diam sollicitudin tempor. Ridiculus
        mus mauris vitae ultricies leo integer. Elit sed vulputate mi sit amet
        mauris. Nisl purus in mollis nunc sed id semper risus. Phasellus egestas
        tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Massa sed
        elementum tempus egestas sed sed risus pretium quam. Vel risus commodo
        viverra maecenas accumsan. Sit amet risus nullam eget felis eget.
        Aliquet enim tortor at auctor urna nunc id.
      </p>
    </div>
  );
};

export default SingleCourse;
