import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <body>
                <main>
                    <ItemListContainer greetings="Hello how do you do?" />
                </main>
            </body>
        </>
    );
}

export default App;
