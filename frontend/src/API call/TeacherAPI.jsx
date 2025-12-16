// here teachers all API functions can be defined like addTeacherAPI, deleteTeacherAPI, updateTeacherAPI , readOneTeacherAPI , readAllTeacherAPI 
// check the StudentAPI.jsx file for reference

import React from 'react'
import axios from 'axios';
import { toast } from "react-toastify";


const API_URL = 'http://localhost:3000/api/teachers';
const token = localStorage.getItem('token');

