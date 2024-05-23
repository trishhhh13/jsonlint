import React, { useState } from 'react';
import './Main.css';

const Main = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [validationResult, setValidationResult] = useState('');
    const [isPositive, setPositive] = useState(false);

    const handleInputChange = (e) => {
        setJsonInput(e.target.value);
    };

    const validateJson = () => {
        try {
            JSON.parse(jsonInput);
            setPositive(true)
            setValidationResult('Valid JSON');
        } catch (e) {
            setPositive(false)
            setValidationResult(`Invalid JSON: ${e.message}`);
        }
    };

    const formatJSON = () => {
        try {
            const parsedJson = JSON.parse(jsonInput);
            const formattedJson = JSON.stringify(parsedJson, null, 2);
            setJsonInput(formattedJson);
            setPositive(true);
            setValidationResult('Valid JSON');
        } catch (e) {
            setPositive(false);
            setValidationResult(`Invalid JSON: ${e.message}`);
        }
    };


    return (
        <div className='main-container'>
            <div className='container'>
                <h1>JSON Linter</h1>
            </div>
            <textarea 
                value={jsonInput} 
                onChange={handleInputChange} 
                rows="10" 
                cols="50" 
                placeholder="Enter JSON here..."
            ></textarea>
            <br />
            <div className='buttons'>
                <button onClick={validateJson}>Validate JSON</button>
                <button onClick={formatJSON}>Format JSON</button>
                <button onClick={() => {setJsonInput("")}}>Clear</button>
            </div>
            <div className='result-container'>
                <h2>Validation Result:</h2>
                <p className={`error-container ${isPositive ? "positive-result" : "negative-result"}`}>{validationResult}</p>
            </div>
        </div>
    );
};

export default Main;
