import { useState, useEffect } from 'react';
import deskDivider from '/images/pattern-divider-desktop.svg';
import btn from '/images/icon-dice.svg';

function App() {
    const [advice, setAdvice] = useState([]);
    const fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then((res) => res.json())
            .then((data) => setAdvice([data]));
    };
    useEffect(() => {
        fetchAdvice();
    }, []);
    return (
        <main>
            <div className="card">
                {advice.map(({ slip }) => {
                    return (
                        <p key={slip.id} className="card-title">
                            {`Advice #${slip.id}`}
                        </p>
                    );
                })}
                {advice.map(({ slip }) => {
                    return (
                        <p key={slip.id} className="card-text">
                            {`"${slip.advice}"`}
                        </p>
                    );
                })}
                <img className="divider" src={deskDivider} />
                <button onClick={fetchAdvice} className="btn-box">
                    <img className="btn" src={btn} />
                </button>
            </div>
        </main>
    );
}

export default App;
