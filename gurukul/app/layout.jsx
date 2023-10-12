import "../styles/globals.css";

export const metadata = {
  title: "Gurukul",
  description: "An AI based Coding Mentor",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      {children}
    </body>
  </html>
);

export default RootLayout;