import React, { useState } from 'react';
import './ReactBasicsSection.css';
import TabContent from '../shared/tab-content/TabContent';
import { reactBasicsTabs } from './ReactBasicsTabs';

type TabId = 'rendering' | 'components' | 'context' | 'hooks';

const ReactBasicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('rendering');

  // Get the active tab data
  const activeTabData = reactBasicsTabs.find(tab => tab.id === activeTab);

  return (
    <section id="react-basics" className="react-basics-section">
      <div className="react-basics-container">
        <div className="react-basics-header">
          <h2>React Essentials</h2>
          <p>Master React fundamentals: rendering, components, context, and hooks for modern web development</p>
        </div>

        <div className="react-basics-tabs">
          {reactBasicsTabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id as TabId)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="react-basics-content">
          {activeTabData && (
            <TabContent tabData={activeTabData} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ReactBasicsSection;