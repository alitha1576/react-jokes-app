type HeaderProps = {
  activeTab: 'new' | 'library';
  setActiveTab: (tab: 'new' | 'library') => void;
};

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
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
