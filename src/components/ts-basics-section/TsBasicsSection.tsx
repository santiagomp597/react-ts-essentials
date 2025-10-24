import React, { useState } from 'react';
import './TsBasicsSection.css';
import TabContent from '../shared/tab-content/TabContent';
import { tsBasicsTabs } from './BasicsSectionTabs';

type TabId = 'primitives' | 'interfaces' | 'types' | 'classes';

const TsBasicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('primitives');

  // Get the active tab data
  const activeTabData = tsBasicsTabs.find(tab => tab.id === activeTab);

  return (
    <section id="ts-basics" className="ts-basics-section">
      <div className="ts-basics-container">
        <div className="ts-basics-header">
          <h2>TypeScript Essentials</h2>
          <p>Explore TypeScript's powerful type system and object-oriented programming features</p>
        </div>

        <div className="ts-basics-tabs">
          {tsBasicsTabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id as TabId)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="ts-basics-content">
          {activeTabData && (
            <TabContent tabData={activeTabData} />
          )}
        </div>
      </div>
    </section>
  );
};

export default TsBasicsSection;