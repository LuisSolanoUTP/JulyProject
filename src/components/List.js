import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'

import UserList from './UserList'

import styles from "../App.module.css"


const query = {
    users: {
        resource: 'users',
        params: ({ page }) => ({
            page:page,
            pageSize: 8,
            fields:[
                "id",
                "displayName",
                "userCredentials[username]"
            ]
        })
    }
}
const List = () => {
    const { loading, error, data, refetch } = useDataQuery(query, {variables: { page: 0 } });
      if (error) {
        return <span>ERROR: {error.message}</span>;
      }
    
      if (loading) {
        return <span>...</span>;
      }
    
      return (
        <>
        <div className={styles.box}>
        <UserList users={data.users.users} refetch={refetch} pager={data.users.pager}/>
        
        </div>
    </>
)
}
export default List;