import React, { useState } from 'react';

function SubsetSumChecker() {
  // Kullanıcı girişleri için state'ler
  const [inputSet, setInputSet] = useState('');
  const [targetSum, setTargetSum] = useState('');
  // Sonuç için state
  const [output, setOutput] = useState('');

  // Alt küme toplamını kontrol etmek için işlev
  const checkSubsetSum = () => {
    // Kullanıcının girdiği sayı kümesini diziye dönüştürme
    const set = inputSet.split(',').map(Number);
    // Kullanıcının girdiği hedef toplamı sayıya dönüştürme
    const sum = Number(targetSum);
    const n = set.length;

    // DP tablosunu oluşturma (alt küme toplamlarını depolamak için)
    const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(false));

    // Başlangıç durumu: Hiçbir eleman kullanılmadan hedef 0'a ulaşılır.
    for (let i = 0; i <= n; i++) {
      dp[i][0] = true;
    }

    // Dinamik programlama tablosunu doldurma
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= sum; j++) {
        if (j >= set[i - 1]) {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - set[i - 1]];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    // Hedef toplamına ulaşıldı mı kontrolü
    const result = dp[n][sum];
    setOutput(result ? 'True' : 'False');
  };

  return (
    <div>
      <h2>Subset Sum Checker</h2>
      <div>
        <label>Enter the set of numbers (comma-separated):</label>
        <input type="text" value={inputSet} onChange={e => setInputSet(e.target.value)} />
      </div>
      <div>
        <label>Enter the target sum:</label>
        <input type="text" value={targetSum} onChange={e => setTargetSum(e.target.value)} />
      </div>
      <button onClick={checkSubsetSum}>Check Subset Sum</button>
      <div>
        <h3>Output:</h3>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default SubsetSumChecker;
