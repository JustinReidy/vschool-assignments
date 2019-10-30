import React from 'react'
import Die from './Die'

const DiceBox = () => {


        let newArr = []
            for(let i = 0; i < 6; i++){
                let numArr = [1, 2, 3, 4, 5, 6]
                let random  = Math.floor(Math.random() * 6)
                newArr.push(numArr[random])
            }

        

        

    return (
        <div>

            <Die number={newArr[0]}/>
            <Die number={newArr[1]}/>
            <Die number={newArr[2]}/>
            <Die number={newArr[3]}/>
            <Die number={newArr[4]}/>

            <button>Click me</button>
            
        </div>
    )
}

export default DiceBox