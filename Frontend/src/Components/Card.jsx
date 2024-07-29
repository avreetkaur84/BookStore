import React from 'react'

function Card({item, key}) {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl w-80 hover:scale-105 duration-200 mx-4 h-96 my-12">
        <figure>
            <img
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
              {item.title}
            <div className="badge badge-secondary">{item.category}</div>
            </h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{item.type}</div>
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white">Buy!</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card
