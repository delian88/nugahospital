
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHealthAssistantResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are NugaAI, a professional and empathetic health assistant for NugaHospital. 
        Your goal is to provide general health information, answer questions about the hospital's services, 
        and help patients find the right department. 
        Always include a disclaimer that you are an AI and not a substitute for professional medical advice. 
        Keep your tone professional, calming, and efficient. 
        Refer to NugaHospital's excellence in cardiology, pediatrics, neurology, and orthopedics.`,
      },
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call NugaHospital directly at 1-800-NUGA-CARE.";
  }
};
