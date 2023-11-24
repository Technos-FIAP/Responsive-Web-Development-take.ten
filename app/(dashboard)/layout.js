import Header from '../components/Header'
import Footer from '../components/Footer'
import '../(public)/reset.css'
export const metadata = {
    title: 'dashboard'    
  }
  
  export default function RootLayout({ children }) {
   return (
      <html lang="pt-br">
        
        <body>
            <Header/>
            {children}
            <Footer/>
        </body>
      </html>
    )
  }
  