import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from "./globals.module.css"
import './reset.css'
export const metadata = {
  title: 'Take.Ten',
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={styles.geral}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
