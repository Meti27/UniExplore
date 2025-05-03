import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function matchPrograms(userInterests) {
  const uniSnapshot = await getDocs(collection(db, 'universities'));
  let matchedPrograms = [];

  uniSnapshot.forEach(doc => {
    const data = doc.data();
    data.programs.forEach(program => {
      if (program.tags.some(tag => userInterests.includes(tag))) {
        matchedPrograms.push({
          university: data.name,
          program: program.name,
          description: program.description,
          videoUrl: program.videoUrl
        });
      }
    });
  });

  return matchedPrograms;
}
