import React, {useState, useEffect} from 'react'
import Character from './Character'

function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [count, setCount] = useState(0)
    
    
    useEffect(() => {
        fetch("https://swapi.co/api/people").then(response => {
            response.json().then(data => {
                console.log(data.results)
                setCharacters(data.results)
            })
        })
    })

    const handleCount = () => {
        setCount((prevCount) => {
            return prevCount + 1
        })
    }
    
    const mappedCharacters = characters.map(character => {   
    <Character handleCount={handleCount} key={character.name} name={character.name} />
    })

    return(
    <div className="container">
        <h1>Count: {count}</h1>
        {mappedCharacters}
    </div>)
}

export default CharacterList