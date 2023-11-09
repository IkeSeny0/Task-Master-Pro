import React, {useState, useContext} from "react";
import * as S from "./styles";
import Logo from "../../Img/TaskMaster Pro.png";
import { Link } from "react-router-dom";
import AuthContext, {AuthType} from "../../Contexts/authContext";


const Login: React.FC = ()=>{
    const {setUserData} = useContext(AuthContext) as AuthType;
    const [email, setEmail] =  useState("");

    function handleLogin(){
        localStorage.setItem('@Project:email', email);
        setUserData({email})


    }

    

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    return(    
        <S.Page>
            <S.LeftSide>
                <S.Img src={Logo}></S.Img>
            </S.LeftSide>
            <S.RightSide>
                <S.Title>Task Master Pro!</S.Title>
                 <S.FieldName >Enter Your Email</S.FieldName>
                <S.InputField value={email} id="email" onChange={handleEmail} placeholder="Insert your email"></S.InputField>
                <S.FieldName>Enter the Secret Word</S.FieldName>
                <S.InputField placeholder="Open Sesame" type="password"></S.InputField>
                 <Link to="/">
                    <S.SignIn onClick={handleLogin}>Hop On</S.SignIn>
                </Link>
             </S.RightSide>
        </S.Page>
    )
};

export default Login;