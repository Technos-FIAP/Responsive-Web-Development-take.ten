import '../(public)/reset.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
export const metadata = {
    title: 'Minha Conta'    
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
  