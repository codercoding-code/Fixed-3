import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { Globe, Shield, Zap, Users, TrendingUp, AlertTriangle, FileText, ExternalLink } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: Globe },
    { id: 'history', title: 'Historical Background', icon: FileText },
    { id: 'conflicts', title: 'Major Conflicts', icon: Shield },
    { id: 'nuclear', title: 'Nuclear Program', icon: AlertTriangle },
    { id: 'proxy', title: 'Proxy Conflicts', icon: Users },
    { id: 'cyber', title: 'Cyber Warfare', icon: Zap },
    { id: 'economic', title: 'Economic & Sanctions', icon: TrendingUp },
  ]
  const content = {
    overview: {
      title: 'Overview',
      description: 'Iran-Israel relations are complex and hostile, influenced by historical, political, and strategic factors.'
    },
    history: {
      title: 'Historical Background',
      description: 'Before the 1979 Iranian Revolution, Iran and Israel had cooperative relations. Post-revolution, Iran severed ties and adopted a strong anti-Israel stance.'
    },
    conflicts: {
      title: 'Major Conflicts',
      description: 'Conflicts include Iran’s support for Hezbollah and Hamas, Israeli strikes on Iranian assets in Syria, and assassinations of Iranian nuclear scientists.'
    },
    nuclear: {
      title: 'Nuclear Program',
      description: 'Israel strongly opposes Iran’s nuclear ambitions. It has allegedly sabotaged nuclear facilities and supported international pressure against Iran.'
    },
    proxy: {
      title: 'Proxy Conflicts',
      description: 'Iran backs proxy groups like Hezbollah in Lebanon, while Israel supports anti-Iran operations across the region. Syria is a major hotspot.'
    },
    cyber: {
      title: 'Cyber Warfare',
      description: 'Both countries have engaged in cyber attacks, such as the Stuxnet virus (allegedly by Israel/US) and Iran’s attacks on Israeli infrastructure.'
    },
    economic: {
      title: 'Economic & Sanctions',
      description: 'Israel lobbies for sanctions against Iran. Economic pressure plays a key role in their strategic rivalry.'
    },
  }return (
    <div className="flex h-screen">
      <aside className="w-64 border-r bg-white p-4">
        <h2 className="text-xl font-bold mb-4">Iran-Israel Analysis</h2>
        <nav>
          {sections.map(({ id, title, icon: Icon }) => (
            <Button
              key={id}
              variant={activeSection === id ? 'default' : 'ghost'}
              onClick={() => setActiveSection(id)}
              className="w-full justify-start mb-2"
            >
              <Icon className="mr-2 h-4 w-4" />
              {title}
            </Button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <Card>
          <CardHeader>
            <CardTitle>{content[activeSection].title}</CardTitle>
            <CardDescription>{content[activeSection].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full pr-4">
              <p className="text-muted-foreground text-sm leading-6">
                {content[activeSection].description}
              </p>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default App
  
