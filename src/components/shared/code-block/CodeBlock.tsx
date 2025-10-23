import React from 'react';
import './CodeBlock.css';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className = '' }) => {
  return (
    <div className={`code-block ${className}`.trim()}>
      {children}
    </div>
  );
};

export default CodeBlock;