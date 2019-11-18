import React from 'react'
import {Link} from 'react-router-dom'

import {withData} from './MyProvider'

function Nav (props) {
    
        return (
            <div className="flex justify-between bg-teal-600">
            
                <div className="my-auto pl-8">
                    <h1 className="text-4xl text-red-800">CurEx</h1>
                </div>
    
                <div className="my-auto">
                    <Link className="text-red-700 px-2" to="/">Home</Link>
                    <Link className="text-red-700 px-2" to='/About'>About</Link>
                </div>
    
                <div className="flex my-auto pr-8">
                <svg className="pr-2 h-6 w-6 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                    <form onSubmit={(e) => props.handleBase(e)}>
                        <input onChange={props.handleChange} className=" bg-gray-300 shadow-xl" name="base" type="text" placeholder="Search for a Symbol"/>
                        <button className="bg-red-500 rounded p-1 ml-1 shadow-md text-red-100">Submit</button>
                    </form>
                </div>
            </div>
        )
    
}

export default withData(Nav)