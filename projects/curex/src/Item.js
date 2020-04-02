import React from 'react';
import { Link } from 'react-router-dom'

function Item(props) {

    let fromBase = 1 * Object.values(props.rate)
    fromBase = Math.round(100 * fromBase)/100

    return (
        <div className="sm:w-full md:w-1/2 md:mx-0 xl:w-1/4 rounded overflow-hidden shadow-lg">

                <div className=" flex justify-between border-gray-600 px-3 py-4">
                    
                    <div>
                        <div className="font-bold text-xl mb-2">

                            <h1 className="mx-auto">{props.base}</h1>

                        </div>

                        <div>

                            <h1 className="text-gray-700 text-base">1</h1>

                        </div>

                    </div>

                    <svg className="w-5 h-5 my-auto fill-current text-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/></svg>
                
                    <div className="">

                        <div className="font-bold text-xl mb-2">

                            <h1 className="text-">{Object.keys(props.rate)}</h1>

                        </div>

                        <div> 

                            <h1 className="">{fromBase}</h1>

                        </div>

                    </div>

                </div>


                <div className="pl-5">
                {Object.keys(props.rate)[0] !== "ISK" ?
                    <Link to={`/Currency/${props.link}`}><button className="rounded bg-orange-500 px-2 py-2">Data</button></Link>
                :
                    <h1>No Historical Data</h1>
                }

                </div>
        </div>
    );
}

export default Item;