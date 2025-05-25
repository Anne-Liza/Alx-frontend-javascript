// Branded interfaces
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor'
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, brand: 'Major' };
const major2: MajorCredits = { credits: 4, brand: 'Major' };
console.log(sumMajorCredits(major1, major2)); // { credits: 7, brand: 'Major' }

const minor1: MinorCredits = { credits: 1, brand: 'Minor' };
const minor2: MinorCredits = { credits: 2, brand: 'Minor' };
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, brand: 'Minor' }
