import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {signupValidation,loginValidation} from './middleware/userAuth.mjs'
import ensureAuthorized from './middleware/tokenVerification.mjs'
import Student from './models/student.model.mjs'
import Teacher from './models/teacher.model.mjs'
import User from './models/user.model.mjs'
import connectToDB from './db/dbConnection.mjs'

connectToDB()

const app = express()
const port = 3000

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})