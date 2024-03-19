import React from "react";

function DevSkill({ logo, name, percentage }) {
  return (
    <div className="div mt-5">
      <span>
        <img className="h-8 w-8 " src={logo} alt="" />
      </span>
      
        <h4 className="text-xl font-semibold">{name}</h4>

        <div className="div h-[0.50rem] mt-2  w-40 rounded-lg bg-slate-100 ">
          <div
            className={`h-full  bg-indigo-700 rounded-lg`}
            style={{width:`${percentage}%`}}
          ></div>
        </div>
      </div>
  );
}

export default DevSkill;
