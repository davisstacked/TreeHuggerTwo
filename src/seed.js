/* eslint-disable no-plusplus */
// NOTE: replace userId with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'gzTUpKWQIBNy3HGEB6zdYIWHzCm2',
      username: 'leeleedaadaa',
      fullName: 'Leah Davis',
      emailAddress: 'leahdavis25624@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'TheKMan',
      fullName: 'Gustav Klimt',
      emailAddress: 'theKman@gmail.com',
      following: ['gzTUpKWQIBNy3HGEB6zdYIWHzCm2'],
      followers: ['gzTUpKWQIBNy3HGEB6zdYIWHzCm2'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'dali',
      fullName: 'Salvador Dalí',
      emailAddress: 'salvador@dali.com',
      following: [],
      followers: ['gzTUpKWQIBNy3HGEB6zdYIWHzCm2'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'orwell',
      fullName: 'George Orwell',
      emailAddress: 'george@orwell.com',
      following: [],
      followers: ['gzTUpKWQIBNy3HGEB6zdYIWHzCm2'],
      dateCreated: Date.now()
    }
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/klimt/${i}.jpeg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}

// update firebase to this for production under rules of our database
// production rules
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read:
//       allow write: if request.auth.uid != null;
//     }
//   }
// }