{
  // Problem 3

  function countWordOccurrences(sentence: string, word: string): number {
    const wordRegExP = new RegExp(`\\b${word}\\b`, 'gi');
    const sentenceMatch = sentence.match(wordRegExP);
    const checkSentenceLength = sentenceMatch ? sentenceMatch.length : 0;
    return checkSentenceLength;
  }

  const givenSentencesAndWords = countWordOccurrences(
    'TypeScript is great. I love TypeScript!',
    'typescript'
  );

  console.log(givenSentencesAndWords);
}
