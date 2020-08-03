import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { Field, Input, Label,Button } from '@dhis2/ui-core'
import { DataQuery } from '@dhis2/app-runtime'
import {useDataMutation} from '@dhis2/app-runtime'
import styles from "../App.module.css"

const mutation={
    resource: 'users',
    type: 'create',
    data:(variables)=>({
        id:variables.iduser,
        attributeValues:[],
        email:variables.email,
        firstName:variables.firstName,
        surname:variables.surname,
        userCredentials:{
            id:variables.idCredential,
            catDimendionConstraints:[],
            cogsDimensionCOnstraints:[],
            password: variables.password,
            userInfo: {id:variables.iduser},
            userRoles:[{id:"yrB6vc5Ip3r"}],
            username:variables.firstName+" "+variables.surname
        }
    })
}
const query_uid={
    uid:{
        resource:"system/id",
        params:{limit:2}
    }
}
export const AddButton = (props)=>{
    const [mutate]= useDataMutation(mutation, {
        onComplete: props.onCreate,
        variables:props.user,
    })
    return(
        <Button 
            onClick={()=>{
                var error1,error2,error3,error4=""
                if(props.user.firstName!=""){
                    if(props.user.surname!=""){
                        if(props.user.email!=""){
                            if(props.user.password!=""){
                    mutate()
                }else(
                    error4="Pleas insert a valid password"
                ) }else(
                    error3="Pleas insert a valid email"
                ) }else(
                    error2="Pleas insert a valid surname"
                ) }else(
                    error1="Pleas insert a valid name"
                )
                ReactDOM.render(error1, document.getElementById('name'));
                ReactDOM.render(error2, document.getElementById('sur'));
                ReactDOM.render(error3, document.getElementById('mail'));
                ReactDOM.render(error4, document.getElementById('pass'));
                
            }}
            style={{margin:10}}
            primary
            >
                + Add user
            </Button>
    )
}
const Query=()=>{
    return(
        <div className={styles.box}>
            <h1>Add User</h1>
          <DataQuery query={query_uid}>
    {({loading, error, data})=>(
        <>{data && (<Form iduser={data.uid.codes[0]} idCredential={data.uid.codes[1]} />)} </>
    )} 
</DataQuery> 
        </div>) 
}
const Form = (prop)=>{
   
     const [user, serUser] =useState({
        idUser:prop.iduser,
        idCredential:prop.idCredential,
        firstName:"",
        surname:"",
        email:"",
        password: ""
    })
    const setUserVariable=(data)=>{
        let nUser=user;
        nUser[data.name]=data.value
    }
    const validateFName=(data)=>{
        var error=""
        if(data.value.length >=2&&data.value.length <=160){
            setUserVariable(data)
        }
        else{
            error="Must have between 2 and 160 characters"
            data.value=""
            setUserVariable(data)
        }
        ReactDOM.render(error, document.getElementById('name'));
    }
    const validateName=(data)=>{
        var error=""
        if(data.value.length >=2&&data.value.length <=160){
            setUserVariable(data)
        }
        else{
            error="Must have between 2 and 160 characters"
            data.value=""
            setUserVariable(data)
        }
        ReactDOM.render(error, document.getElementById('sur'));
    }
    const validateEmail=(data)=>{
        var error=""
        if(data.value.includes("@")==1){
            setUserVariable(data)
        }
        else{
            error="Pleas insert valid email"
            data.value=""
            setUserVariable(data)
        }
        ReactDOM.render(error, document.getElementById('mail'));
    }
    const validatePassword=(data)=>{
        var error=""
        if(data.value.match(/[!@#$%^&*(),.?":{}|<>]/g)){
            if(data.value.match(/[A-Z]/)){
                if(data.value.match(/[a-z]/)){
                    if(data.value.match(/\d+/g) ){
                        if(data.value.length>=8&&data.value.length<=60){
                        setUserVariable(data)  
                        }else{
                            error="Password should have between 8 to 60 characters"
                        data.value=""
                        setUserVariable(data)
                        }
                        
                    }
                    else{
                        error="Password should have at least one number"
                        data.value=""
                        setUserVariable(data)
                    }
            }
            else{
                error="Password should have at least one lowercase letter"
                data.value=""
                setUserVariable(data)
            }
            }
            else{
                error="Password should have at least one uppercase letter"
                data.value=""
                setUserVariable(data)
            }
        }  

        else{
            error="Password should have at least one special character"
            data.value=""
            setUserVariable(data)
        }
        ReactDOM.render(error, document.getElementById('pass'));
    }
    return(
        
       
        
        <>  
        <Field
        required
        dataTest="dhis2-unicorre-field"
       
        >
            <Label>First Name</Label>
            <Input
             dataTest="dhis2-unicorre-input"
             label="An input"
             name="firstName"
             onBlur={(e)=>validateFName(e)}
             type="text"
            />
            <sup id="name" className={styles.error}></sup>
        </Field>
        <Field
        required
        dataTest="dhis2-unicorre-field"
     
        >
            <Label>Surname</Label>
            <Input
             dataTest="dhis2-unicorre-input"
             label="An second input"
             name="surname"
             onBlur={(e)=>validateName(e)}
             type="text"
            />
            <sup id="sur" className={styles.error}></sup>
        </Field>
        <Field
        required
        dataTest="dhis2-unicorre-field"
        helpText="Email"
        >
            <Label>Email</Label>
            <Input
             dataTest="dhis2-unicorre-input"
             label="An second input"
             name="email"
             onBlur={(e)=>validateEmail(e)}
             type="text"
            />
            <sup id="mail" className={styles.error}></sup>
        </Field>
        <Field
        required
        dataTest="dhis2-unicorre-field"
        helpText="Must have one upper and lower case leter, a number and a special character"
        >
            <Label>Password</Label>
            <Input
             dataTest="dhis2-unicorre-input"
             label="An second input"
             name="password"
             onBlur={(e)=>validatePassword(e)}
             type="password"
            />
            <sup id="pass" className={styles.error}></sup>
        </Field>
        <AddButton onCreate={()=>alert("User created")} user={user} />
        </>
    )
}

export default Query;