import React, { useState,useEffect } from "react";
import './styles/home.scss'
import UserService from "../services/user.service";
import { Table } from 'react-bootstrap';

function Users (props) {
    const userService = new UserService()
    const [users,setUsers] = useState([])
    
    useEffect(()=>{
       userService.getAllUsers()
       .then(res=>{
            setUsers(res.data)
           console.table(res.data)
       }).catch(err=>{
           console.warn(err)
       })
    },[])

    const renderUsersBody = ()=>{
        return users.map((user,index)=>{
            return (
                <tbody key={index}>
                    <tr>
                    <th>{user._id}</th>
                    <td>{user.name}</td>
                    <td>{user.created_at}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    </tr>
                </tbody>
            )
        })
    }

    const renderUsersHeading = () =>{
        const headings = ['ID','Name', 'Date', 'Email','Phone','City'];
        return  <thead>
            <tr>
                {headings.map((heading, index) =>
                    <th key={index}>{heading}</th>
                )}
            </tr>
        </thead>
    }

    return ( <Table responsive hover>
        {renderUsersHeading()}
        {renderUsersBody()}
    </Table>);
}

export default Users;
