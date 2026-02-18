
import React, { useState, useRef, useEffect } from 'react';
import { getHealthAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import BrandIcon from './BrandIcon';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am NugaAI, your digital health assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getHealthAssistantResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleCancelChat = () => {
    setMessages([{ role: 'model', text: 'Hello! I am NugaAI, your digital health assistant. How can I help you today?' }]);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[280px] sm:w-[320px] h-[450px] rounded-[1.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <BrandIcon size={18} white={true} />
              </div>
              <div>
                <h3 className="font-bold text-sm">NugaAI</h3>
                <p className="text-[10px] text-white/70">Online Support</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button 
                onClick={handleCancelChat}
                title="Cancel & Clear Chat"
                className="hover:bg-white/10 p-1.5 rounded-lg transition-colors text-white/80 hover:text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10