// app/layout.js

import './globals.css';

export const metadata = {
  title: 'Das Bros Portfolio',
  description: 'Videography, Animations, VFX Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
