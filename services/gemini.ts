
import { GoogleGenAI } from "@google/genai";
import { CLINIC_INFO } from "../constants";

// Use the API key directly from process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPodologyResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: `Você é o assistente virtual da Clínica ${CLINIC_INFO.name}. 
        A clínica é liderada pela especialista ${CLINIC_INFO.specialist}.
        Endereço: ${CLINIC_INFO.address}.
        Telefone: ${CLINIC_INFO.phone}.
        
        Suas funções:
        1. Responder dúvidas comuns sobre podologia (unha encravada, pé diabético, fungos, etc).
        2. Ser extremamente profissional, acolhedor e focado em saúde.
        3. Encaminhar o usuário para o WhatsApp para agendamento real.
        4. Mencionar que a clínica tem nota 5.0 baseada em 46 avaliações reais.
        
        Mantenha as respostas concisas e em português do Brasil.`,
        temperature: 0.7,
      },
    });

    // Accessing the .text property directly instead of calling it as a method
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Desculpe, tive um problema técnico. Por favor, entre em contato direto pelo nosso WhatsApp: " + CLINIC_INFO.phone;
  }
};
