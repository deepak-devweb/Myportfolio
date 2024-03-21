import React from 'react'
import DevSkill from './DevSkill'
function Skill() {
    const skills = [
        {
            img: "",
            name: "React Js",
            percentage: "69"
        },
        {
            img: "",
            name: "Javascript",
            percentage: "75"
        },
        {
            img: "",
            name: "Node Js",
            percentage: "75"
        }, {
            img: "",
            name: "CSS",
            percentage: "70"
        }, {
            img: "",
            name: "HTML",
            percentage: "80"
        }, {
            img: "",
            name: "MongoDB",
            percentage: "50"
        }, {
            img: "",
            name: "Redux",
            percentage: "50"
        }, {
            img: "",
            name: "Git & GitHub",
            percentage: "80"
        }, {
            img: "",
            name: "DBMS",
            percentage: "50"
        },
        {
            img: "",
            name: "SQl",
            percentage: "60"
        },
    ]
    
    
    return (
        <div className='text-white h-screen w-full'>
            <h1 className=' text-6xl text-center  text-slate-400 tracking-widest leading-4 '>Skill</h1>
            <div className="div flex h-auto ml-24  flex-wrap w-1/2 gap-5 px-5 ">
                {
                    skills?.map((items, index) => {
                        return <DevSkill key={index} logo={items.img} name={items.name} percentage={items.percentage} />
                    })
                }
            </div>

        </div>
    )
}

export default Skill