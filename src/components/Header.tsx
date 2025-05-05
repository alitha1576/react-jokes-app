import { useState } from 'react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('new');
  return (
    <div className="headerContainer">
      <div
        className={`tab ${activeTab === 'new' ? 'tabActive tabActiveRight' : ''}`}
        onClick={() => setActiveTab('new')}
      >
        New Jokes
      </div>
      <div
        className={`tab ${activeTab === 'library' ? 'tabActive tabActiveLeft' : ''}`}
        onClick={() => setActiveTab('library')}
      >
        Library
      </div>
    </div>
  );
}
