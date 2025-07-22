import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: 'Overview',
      content:
        'Iran-Israel relations are complex and hostile, influenced by historical, political, and strategic factors.',
    },
    history: {
      title: 'Historical Background',
      content:
        'Before the 1979 Iranian Revolution, Iran and Israel had cooperative relations. Post-revolution, Iran severed ties and adopted a strong anti-Israel stance.',
    },
    conflicts: {
      title: 'Major Conflicts',
      content:
        'Conflicts include Iran’s support for Hezbollah and Hamas, Israeli strikes on Iranian assets in Syria, and assassinations of Iranian nuclear scientists.',
    },
    nuclear: {
      title: 'Nuclear Program',
      content:
        'Israel strongly opposes Iran’s nuclear ambitions. It has allegedly sabotaged nuclear facilities and supported international pressure against Iran.',
    },
    proxy: {
      title: 'Proxy Conflicts',
      content:
        'Iran backs proxy groups like Hezbollah in Lebanon, while Israel supports anti-Iran operations across the region. Syria is a major hotspot.',
    },
    cyber: {
      title: 'Cyber Warfare',
      content:
        'Both countries have engaged in cyber attacks, such as the Stuxnet virus (allegedly by Israel/US) and Iran’s attacks on Israeli infrastructure.',
    },
    economic: {
      title: 'Economic & Sanctions',
      content:
        'Israel lobbies for sanctions against Iran. Economic pressure plays a key role in their strategic rivalry.',
    },
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <aside style={{ width: '220px', borderRight: '1px solid #ccc', padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Iran-Israel Analysis</h2>
        <nav>
          {Object.entries(sections).map(([id, section]) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              style={{
                display: 'block',
                width: '100%',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                backgroundColor: activeSection === id ? '#007acc' : '#eee',
                color: activeSection === id ? '#fff' : '#333',
                border: 'none',
                borderRadius: '4px',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      <main style={{ flex: 1, padding: '2rem' }}>
        <h1>{sections[activeSection].title}</h1>
        <p>{sections[activeSection].content}</p>
      </main>
    </div>
  );
}

export default App;
