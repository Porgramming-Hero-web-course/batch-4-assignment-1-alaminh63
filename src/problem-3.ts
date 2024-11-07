{
  // Problem 3

  function countWordOccurrences(sentence: string, word: string): number {
    const lowerCasedSentence = sentence.toLocaleLowerCase();
    const lowerCasedWord = word.toLocaleLowerCase();
    const wordRegExP = new RegExp(`\\b${lowerCasedWord}\\b`, 'g');
    const sentenceMatch = lowerCasedSentence.match(wordRegExP);
    const checkSentenceLength = sentenceMatch ? sentenceMatch.length : 0;
    return checkSentenceLength;
  }

  const givenSentencesAndWords = countWordOccurrences(
    'I love typescript',
    'typescript'
  );

  console.log(givenSentencesAndWords);
}
