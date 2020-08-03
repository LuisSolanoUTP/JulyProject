import React from 'react'
import {Table,TableBody,TableCell,TableCellHead,TableHead,TableRow,TableRowHead} from "@dhis2/ui"
import Paging from './Paging'
const UserList = (props)=>{
    return(
        <div>
             
                   <h1>User List</h1>
                   <Table>
                       <TableHead>
                           <TableRowHead>  
                           <TableCellHead>ID</TableCellHead>
                               <TableCellHead>Name</TableCellHead>
                                                              <TableCellHead>Username</TableCellHead>
                           </TableRowHead>
                       </TableHead>
           <TableBody>
               {props.users.map(u => 
               <TableRow key={u.displayName}>
                    <TableCell>{u.id}</TableCell>
                   <TableCell>{u.displayName}</TableCell>
                  
                   <TableCell>{u.userCredentials.username}</TableCell>
               </TableRow>
               )}
               <TableRow>
                   <TableCell colSpan="3"><Paging pager={props.pager} refetch={props.refetch} /></TableCell>
               </TableRow>
           </TableBody>
           
       </Table>
        </div>
      
            
    )
}

export default UserList;