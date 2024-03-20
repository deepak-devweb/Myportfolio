import React from 'react'

function TemplateOfProject({
    img,
    tittle,
    details,
    link,
    teck,
}) {
  return (
    <div className='h-[70vh]  w-80  rounded-lg hover:bg-indigo-900 '>
        <div className="div">
            <div className=' h-auto w-full flex items-center
             justify-center'>
            <img className='h-full w-72 ' src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM=" alt="" />
            </div>

            <h1 className=''>{tittle}</h1>
            <details>
                {details}
            </details>
           <div className="div">
           <a href={link}> Source code</a>
           </div>
            {
                teck?.map((items,index)=>(
                    <button className='p-4 font-semibold text-lg bg-white m-3 rounded-2xl h-9 flex items-center justify-center'       key={index}>{items}</button>
                ))
            }
        </div>




    </div>
  )
}

export default TemplateOfProject