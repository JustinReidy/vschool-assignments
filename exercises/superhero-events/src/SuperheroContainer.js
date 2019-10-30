import React from 'react'
import Superhero from './Superhero'
import superheroInfo from './superheros.json'

const SuperheroContainer = () => {
    const mappedSuperheros = superheroInfo.map((superhero, i) => <Superhero key={i + superhero.name} 
                                                                            name={superhero.name} 
                                                                            phrase={superhero.catchPhrase}
                                                                            show={superhero.show} 
                                                                            img={superhero.imageName} />)

    return (
        <div>
            {mappedSuperheros}
        </div>
    )
}

export default SuperheroContainer