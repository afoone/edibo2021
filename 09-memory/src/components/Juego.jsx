import React, { useState } from "react";
import ImageBox from "./ImageBox";
import { v4 as uuid } from "uuid";

const Juego = () => {
  const initialImagenes = [
    {
      id: uuid(),
      image:
        "https://www.ngenespanol.com/wp-content/uploads/2018/08/Las-5-mejores-playas-desconocidas-en-M%C3%A9xico.jpg",
      mostrada: true,
    },
    {
      id: uuid(),
      image:
        "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/blog/seychelles_playaansetakamaka_islamahe_500pxrf_210539781_dmitry_vinogradov_500px.jpg?itok=i_rKKrGD",
      mostrada: false,
    },
    {
      id: uuid(),
      image:
        "https://viajeros360.com/wp-content/uploads/2020/01/Mejores-playas-del-mundo-810x544.jpg",
      mostrada: false,
    },
  ];

  const [imagenes, setImagenes] = useState(initialImagenes);

  const flipImage = (image) => {
    console.log(
      "flip image",
      image,
      ...imagenes.filter((i) => i.id !== image.id)
    );
    // Cambiar el estado
    setImagenes([
      ...imagenes.filter((i) => i.id !== image.id),
      {
        ...image,
        mostrada: !image.mostrada,
      },
    ]);
  };

  return (
    <div>
      {imagenes
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((i) => (
          <ImageBox flipImage={flipImage} image={i} />
        ))}
    </div>
  );
};

export default Juego;
