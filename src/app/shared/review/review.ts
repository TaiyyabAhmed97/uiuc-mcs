import { Timestamp } from "@firebase/firestore-types";

export interface SemesterYear {
  semester: string;
  year: number;
}

export interface Review {
  bookUsefulness: number,
  classId: string,
  course: string,
  // degreeProgram: degreeProgram,
  difficulty: number,
  rating: number,
  difficultyString: string,
  ratingString: string,
  exams: true,
  helpfulNegative?: number,
  helpfulPositive?: number,
  // isDataScience?: boolean,
  // isComputerScience?: boolean,
  homework: true,
  lastUpdated: Timestamp,
  lectureQuality: number,
  peerReviewed: boolean,
  piazzaCommunity: number,
  professorQuality: number,
  projects: false,
  review: string,
  semyear: SemesterYear,
  year: number,
  semester: string,
  title: string,
  timestamp: Timestamp,
  workload: number,
  userId?: string,
  reviewId?: string,
  wilsonScore?: number,
}

export enum reviewFeedbackType {
  positive = "yes",
  negative = "no",
  undoFeedback = "",
}

function ratingNumToString(num: number): string {
  switch (num) {
    case 5: return 'Strongly Liked';
    case 4: return 'Liked';
    case 3: return 'Neutral';
    case 2: return 'Disliked';
    case 1: return 'Strongly Disliked';
  }
  // console.warn('bad rating number')
  return ''
}

function difficultyNumToString(num: number): string {
  switch (num) {
    case 5: return 'Very Hard';
    case 4: return 'Hard';
    case 3: return 'Medium';
    case 2: return 'Easy';
    case 1: return 'Very Easy';
  }
  // console.warn('bad difficulty number')
  return ''
}

export function ratingsToStrings(reviews: Review[]) {
  for (let rev of reviews) {
    rev.difficultyString = difficultyNumToString(rev.difficulty)
    rev.ratingString = ratingNumToString(rev.rating)
  }
  return reviews
}