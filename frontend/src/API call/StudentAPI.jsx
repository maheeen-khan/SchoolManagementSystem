import React from 'react'
import axios from 'axios';
import { toast } from "react-toastify";


const API_URL = 'http://localhost:3000/api/students';
const token = localStorage.getItem('token');

const addStudentAPI = async (studentData) => {

    try {
        const response = await axios.post(`${API_URL}/create-student`, studentData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        toast.success("Student added successfully");
        
        return response.data;
    } catch (error) {
        toast.error(
            error?.response?.data?.message || "Failed to add student"
        );
    }

};

// Similarly, other API functions like deleteStudentAPI, updateStudentAPI, readOneStudentAPI , readAllStudentAPI can be defined here.

export {addStudentAPI};