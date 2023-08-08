import React from 'react';

class SmallestAbsoluteDifference extends React.Component {
  findSmallestAbsoluteDifferencePairs = arr => {
    // Çiftleri ve mutlak farklarını saklayacak bir dizi
    const pairs = [];

    // Tüm çiftleri oluştur ve mutlak farklarını hesapla
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const absoluteDiff = Math.abs(arr[i] - arr[j]);
        pairs.push({ pair: [arr[i], arr[j]], absoluteDiff });
      }
    }

    // Mutlak farklarına göre çiftleri sırala
    pairs.sort((a, b) => a.absoluteDiff - b.absoluteDiff);

    // En küçük mutlak farkı bul
    const smallestDiff = pairs[0].absoluteDiff;

    // En küçük mutlak farka sahip çiftleri filtrele
    const smallestDiffPairs = pairs.filter(pair => pair.absoluteDiff === smallestDiff);

    // Çiftleri düzgün bir şekilde formatlayarak döndür
    const formattedPairs = smallestDiffPairs.flatMap(pair => pair.pair);

    return formattedPairs;
  };

  render() {
    const input1 = [-40, -5450425457, -7540, -7045, 40544, -34048, 70, 70654, -40342, 745354];
    const input2 = [3, 1, 6, 9];

    const output1 = this.findSmallestAbsoluteDifferencePairs(input1).join(' ');
    const output2 = this.findSmallestAbsoluteDifferencePairs(input2).join(' ');

    return (
      <div>
        <p>Sample output 1: {output1}</p>
        <p>Sample output 2: {output2}</p>
      </div>
    );
  }
}

export default SmallestAbsoluteDifference;
