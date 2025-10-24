import React from 'react';
import './CodeBlock.css';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  type?: 'code' | 'result';
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className = '',
  type = 'code',
  title
}) => {
  const blockClassName = type === 'result' ? 'result-block' : 'code-block';

  return (
    <div className={`${blockClassName} ${className}`.trim()}>
      {title && <strong className="code-block-title">{title}</strong>}
      {children}
    </div>
  );
};

export default CodeBlock;