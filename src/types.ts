export interface Command {
  name: string;
  description: string;
  response: string | string[];
  delay?: number;
}

export interface TerminalLine {
  type: 'input' | 'output' | 'system';
  content: string;
  timestamp?: string;
}

export interface TerminalState {
  lines: TerminalLine[];
  currentInput: string;
  isBooting: boolean;
  showCursor: boolean;
  suggestions: string[];
}