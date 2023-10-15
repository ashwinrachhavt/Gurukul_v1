import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Gurukul",
  description: "An AI based Coding Mentor",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <ClerkProvider>
    <body>
      {children}
    </body>
    </ClerkProvider>

  
  
  </html>
);

export default RootLayout;