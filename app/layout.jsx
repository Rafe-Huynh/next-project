import styles from "./layout.module.css"
import React, { Children } from 'react'
import Nav from "../components/Nav/Nav"
import Provider from "../components/Provider/Provider"
export const metadata = {
  title: "Promtopia",
  description: "discover and share"
}

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className={styles.main}>
            <div className={styles.gradient} />
          </div>
          <main className={styles.app}>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default layout