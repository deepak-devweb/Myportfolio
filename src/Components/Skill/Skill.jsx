import React from 'react'
import DevSkill from './DevSkill'
function Skill() {
    const skills = [
        {
            img: "https://img.icons8.com/?size=160&id=wPohyHO_qO1a&format=png",
            name: "React Js",
            percentage: "69"
        },
        {
            img: "",
            name: "Javascript",
            percentage: "75"
        }, {
            img: "",
            name: "CSS",
            percentage: "70"
        }, {
            img: "",
            name: "HTMl",
            percentage: "80"
        }, {
            img: "",
            name: "C++",
            percentage: "50"
        }, {
            img: "",
            name: "Redux",
            percentage: "50"
        }, {
            img: "",
            name: "Git & GitHub",
            percentage: "80"
        },{
            img: "",
            name: "DBMS",
            percentage: "70"
        },
        {
            img: "",
            name: "SQl",
            percentage: "60"
        },
    ]
  return (
    <div className=' h-[80vh]  w-full'>
<h1 className=' text-6xl text-center  tracking-widest leading-4 '>Skill</h1>
<div className="div flex h-auto ml-24  flex-wrap w-1/2 gap-5 px-5 ">
{
    skills?.map((items,index)=>{
        return  <DevSkill key={index} logo={items.img} name={items.name} percentage={items.percentage} />
    })
}
</div>

    </div>
  )
}

export default Skill