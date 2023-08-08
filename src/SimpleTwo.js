import React, { useState } from 'react';

function EqualIsNotChecker() {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const checkEqualIsNot = () => {
    setError(null);

    if (!inputString.includes('is') || !inputString.includes('not')) {
      setError('Input must contain both "is" and "not"');
      setResult(null);
      return;
    }

    const isCount = (inputString.match(/is/g) || []).length;
    const notCount = (inputString.match(/not/g) || []).length;

    setResult(isCount === notCount);
  };

  return (
    <div>
      <h2>Equal "is" and "not" Checker</h2>
      <input
        type="text"
        placeholder="Enter a string"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <button onClick={checkEqualIsNot}>Check</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && (
        <p>
          Result: {result ? 'True' : 'False'}
        </p>
      )}
    </div>
  );
}

export default EqualIsNotChecker;
