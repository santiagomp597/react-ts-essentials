import React from 'react';
import CodeBlock from '../code-block/CodeBlock';
import { TabData } from '../../../types/tab-data';
import './TabContent.css';

interface TabContentProps {
  tabData: TabData;
}

const TabContent: React.FC<TabContentProps> = ({ tabData }) => {
  return (
    <div className="tab-content">
      <h3>{tabData.title}</h3>
      <p>{tabData.description}</p>

      <div className="examples-grid">
        {tabData.examples.map((example, index) => (
          <div
            key={index}
            className={`example-card ${example.sizeClass}`}
          >
            <h4>{example.title}</h4>
            <CodeBlock>
              {example.code.includes('\n') ? (
                <pre>{example.code}</pre>
              ) : (
                <code>{example.code}</code>
              )}
            </CodeBlock>

            {example.result && (
              <CodeBlock type="result" title={example.result.title}>
                {example.result.type === 'json' ? (
                  <pre>{example.result.content}</pre>
                ) : (
                  example.result.content.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))
                )}
              </CodeBlock>
            )}

            <p style={{ marginTop: '1rem', textAlign: 'left' }}>{example.description}</p>
          </div>
        ))}
      </div>

      {tabData.concepts && (
        <div className="concepts">
          <h4>{tabData.concepts.title}</h4>
          <ul>
            {tabData.concepts.items.map((item, index) => (
              <li key={index}>
                <strong>{item.split(':')[0]}:</strong>
                {item.split(':').slice(1).join(':')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TabContent;