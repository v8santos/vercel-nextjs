import { useState } from 'react'

function Contador(){
    const [contador,setContador] = useState(1)

    function incremetarValor(){
        setContador(contador + 1)
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={incremetarValor}>+1</button>
        </div>
    )
}

function Home(){
    return <Contador />
}

export default Home