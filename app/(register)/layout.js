import './../(public)/reset.css'

export const metadata = {
    title: 'Cadastro'    
  }
  
  export default function RootLayout({ children }) {
   return (
      <html lang="pt-br">
        
        <body>{children}</body>
      </html>
    )
  }
  