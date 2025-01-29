import {React, useState} from "react";
import { AiOutLineEye, AiOutlineEye } from "react-icons/ai";
import { Rxavatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = ()=>{
const[email,setEmail] = useState("");
const[name,setName] = useState("");
const[password,setPassword = useState("");
const[visisble,setVisible] = useState(false);
const[avatar,setAvatar] = useState(null);
const[error,setError] = useState({});

const handleFileSubmit = (f) =>{
    const file = f.target.file[0]
    if(file){
        const filePath = URL.createObjectURL(file);
        console.log("File path:",filePath);
        setAvatar(file);
    }
}

const validatedFields = () =>{
    const name
}
}