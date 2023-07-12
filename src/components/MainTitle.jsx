import axios from 'axios'

import { useState, Children, useEffect } from "react"

const MainTitle = ({text, color}) => {

    const [pokemonAbilities, setpokemonAbilities] = useState([])
    const [numero, setNumber] = useState(5)
    
    // primera vez que carga el componente - > Montar el componente
    // cuando cambia un estado -> numero
    
    useEffect(() => {
        getPockenAbilities()
    }, [])
    
    
    const incrementNumber = () => {
        
        setNumber(numero + 1)
        
    }

    const addUser = () => {
        setUserList([...userList, { name: 'andres', age: 10}])
    }

    const getPockenAbilities = async () => {
        const pikachu = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
        console.log(pikachu.data)
        setpokemonAbilities(pikachu.data.abilities)
    }

    return (
        <div>

            <h1>{text}</h1>
            <h2>{numero}</h2>

            <div>
                <p>
                    {
                        numero > 10
                            ? 'es mayor a 10'
                            : 'es menor o igual a 10'
                    }
                </p>
            </div>

            <button onClick={incrementNumber}>increment</button>

            <ul>
                {
                    Children.toArray(
                        pokemonAbilities.map((pokemon) => {
                            return <li>habilidad: {pokemon.ability.name}</li>
                        })
                    )
                }
            </ul>

            {/* <button onClick={addUser}>add user</button> */}

            <style jsx>{`
                
                h1 {
                    color: ${numero > 20 ? color : 'green'};
                }
                
            `}</style>

        </div>
    )
}

export default MainTitle