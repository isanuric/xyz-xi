import React from "react";

export default function Pictures() {
  return (
    <div className="container picture">
      <h2 className="title">Pictures</h2>
      <div className="es-grid-column ">
        {images.map((image) => (
          <img src={image.src} className="card-image featured" />
        ))}
      </div>
    </div>
  );
}

const images = [
  {
    src: "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    src: "https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/3778144/pexels-photo-3778144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/1400187/pexels-photo-1400187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/1488378/pexels-photo-1488378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/3678799/pexels-photo-3678799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/3663024/pexels-photo-3663024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/2346594/pexels-photo-2346594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/277458/pexels-photo-277458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/534126/pexels-photo-534126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/436381/pexels-photo-436381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    src: "https://images.pexels.com/photos/7913028/pexels-photo-7913028.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/12551625/pexels-photo-12551625.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/12329480/pexels-photo-12329480.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/10404276/pexels-photo-10404276.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/12419380/pexels-photo-12419380.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
  },
];
