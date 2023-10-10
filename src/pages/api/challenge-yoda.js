import { formatData } from '@/utils'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, onValue, ref, set } from 'firebase/database'

require('dotenv').config()
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}
const email = process.env.FIREBASE_USERNAME
const password = process.env.FIREBASE_PASSWORD

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const auth = getAuth()
const DB_NAME = 'challenge_yoda'
const DEFAULT_RECORDS = [
  { id: 'default-a', name: '雞腿幫嘍囉A', score: 2000000 },
  { id: 'default-b', name: '雞腿幫嘍囉B', score: 1000000 },
  { id: 'default-c', name: '雞腿幫嘍囉C', score: 500000 },
  { id: 'default-d', name: '雞腿幫嘍囉D', score: 200000 },
  { id: 'default-e', name: '雞腿幫嘍囉E', score: 40000 },
]

export default async function handler (req, res) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    const scoresRef = ref(database, DB_NAME)

    switch (req.method) {
      case 'GET': {
        onValue(scoresRef, snapshot => {
          const data = snapshot.val() || DEFAULT_RECORDS
          res.status(200).json({ data: formatData(data) })
        })
        return
      }

      case 'POST': {
        const record = {
          id: req.body.id,
          name: req.body.name,
          score: req.body.score,
        }
        onValue(scoresRef, snapshot => {
          const values = snapshot.val() || DEFAULT_RECORDS
          if (values.some(v => v.id === record.id)) {
            res.status(400).json({ message: 'duplicate record' })
            return
          }
          for (let i = 0; i < values.length; ++i) {
            if (values[i].score < record.score) {
              values.splice(i, 0, record)
              const data = formatData(values.slice(0, 10))
              set(ref(database, DB_NAME), data)
              res.status(200).json({ data })
              return
            }
          }

          values.push(record)
          res.status(200).json({ data: formatData(values.slice(0, 10)) })
        })
        return
      }
    }

    res.status(404).json({ message: 'not found' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
