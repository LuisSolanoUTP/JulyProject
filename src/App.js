import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import List from "./components/List"
import Form from "./components/Form"
import  Navigation  from "./components/Sidebar"
import styles from "./App.module.css"




const MyApp = () => {
  
                return (
                    <>
                    <BrowserRouter>
    <div className={styles.bar}>
      <div className={styles.left}>
        <Navigation />
      </div>

      <div className={styles.right}>

        <Switch>
          <Route
            exact
            path="/"
            component={List}
          />

          <Route
            exact
            path="/form"
            component={Form}
          />

        </Switch>
      </div>
    </div>
  </BrowserRouter>
  </>
                )
            
     
   
}

export default MyApp
