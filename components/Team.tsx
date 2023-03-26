import React from "react";
type Props = {};

export default function Team({}: Props) {
  return (
    <div>
      <div className="h-screen/2 relative max-w-7xl pt-48 flex flex-col mx-auto justify-evenly items-center text-center  t md:flex-row">
        <h3 className="absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl">
          Advisors
        </h3>
        <div className="card w-48">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/mtPXQxM/la.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              Susana Sargento
            </h2>
          </div>
        </div>
        <div className="card w-48 ">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/mtPXQxM/la.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              Pedro Rito
            </h2>
          </div>
        </div>
        <div className="card w-48 ">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/mtPXQxM/la.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              Ana Almeida
            </h2>
          </div>
        </div>
        <div className="card w-48 ">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/mtPXQxM/la.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              Hugo Leal
            </h2>
          </div>
        </div>
      </div>
      <div className="h-screen/2 relative max-w-7xl pt-32 flex flex-col mx-auto justify-evenly items-center text-center md:text-left md:flex-row">
        <h3 className="absolute bottom-12 top-4 uppercase tracking-[20px] text-gray-500 text-2xl">
          Team
        </h3>
        <div className="card w-48 ">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/cvw16r6/IMG-1114.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              Catarina Costa
            </h2>
          </div>
        </div>
        <div className="card w-48 ">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/qgskXM7/diogo.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              Diogo Paiva
            </h2>
          </div>
        </div>
        <div className="card w-48 ">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/wQ8kRvx/goncalo.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              Gonçalo Silva
            </h2>
          </div>
        </div>
        <div className="card w-48 ">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/6PYjkLN/joao.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              João Fonseca
            </h2>
          </div>
        </div>
        <div className="card w-48 ">
          <figure className="px-10 ">
            <img
              src="https://i.ibb.co/B4NZNND/pedro.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title" style={{ fontSize: 17 }}>
              Pedro Rasinhas
            </h2>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}
