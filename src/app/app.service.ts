import { Injectable } from '@angular/core';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  // useless function, but I want to keep it anyway
  // async getSpecificChapter(chapterNumber: number): Promise<[string, string][]> {
  //   const db = getFirestore();
  //   const docRef = doc(db, 'chapters', `chapter${chapterNumber}`);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     const data = docSnap.data();
  //     console.log(data);
  //     return Object.entries(data);
  //   } else {
  //     console.log('No such document!');
  //     return [];
  //   }
  // }
}
