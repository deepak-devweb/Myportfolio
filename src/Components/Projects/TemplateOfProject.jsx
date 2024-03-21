import React, { useState } from "react";

function TemplateOfProject({
  img,
  tittle,
  details,
  link,
  teck,
  toggle,
  variable,
}) {
  console.log(toggle, variable);
  return (
    <div className="h-auto  w-80  rounded-lg hover:bg-indigo-900 ">
      <div className="div">
        <div
          className=" h-auto w-full flex items-center
             justify-center"
        >
          <img
            className="h-full w-72 object-cover object-center rounded-xl "
            src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM="
            alt=""
          />
        </div>

        <h1 className=" text-3xl  font-semibold m-3">{tittle}</h1>
        <div className="h-auto w-full ">
          <p
            className={`text-white text-lg ml-4 ${variable ? "":"line-clamp-2 "} `}
          >
            {details}
          </p>
          <button className="text-lg text-white underline" onClick={toggle}>
            {variable? "Readless" : "Readmore"}
          </button>
        </div>
        <div className="div">
          <a className="underline text-xl ml-3 font-semibold " href={link}>
            {" "}
            source code
          </a>
        </div>
        <div className=" h-auto w-full flex flex-wrap">
          {teck?.map((items, index) => (
            <button
              className="p-4 font-semibold flex items-center  text-lg bg-white m-3 rounded-2xl h-9 text-center"
              key={index}
            >
              {items}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateOfProject;
