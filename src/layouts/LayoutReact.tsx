import React from 'react';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutReact: React.FC<LayoutProps> = ({ children }) => {
  const footerProps = {
    sourceCodeUrl: "https://github.com/santiagomp597/react-ts-essentials",
    footerText: "View source code on GitHub"
  };
  return (
    <div className="layout layout-react">
      <Header />
      <main className="layout-react-main">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
};

export default LayoutReact;