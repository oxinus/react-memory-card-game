import React, {useState} from 'react';
import Game from './components/Game'
import {cardsData} from './cards'
import './assets/css/app.css';

export const flipedContext = React.createContext();
export const flipListContext = React.createContext();
export const stateContext = React.createContext();

const App = () => {

    const [flipList, setFlipList] = useState(cardsData)
    const [flipped, setFlipped] = useState([])
    const [state, setState] = useState(true)


    return (
            
        
        <flipListContext.Provider value={[flipList, setFlipList]}>
            <flipedContext.Provider value={[flipped, setFlipped]}>
                <stateContext.Provider value={[state, setState]}>
                    <div className="app-container">
                        <Game />
                    </div>
                </stateContext.Provider>
            </flipedContext.Provider>
        </flipListContext.Provider>
        

    )
}

export default App
