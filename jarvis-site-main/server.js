import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("J.A.R.V.I.S CORE API está online.");
});

app.post("/api/jarvis", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        error: "Mensagem vazia.",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY não encontrada.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: message,
      config: {
        systemInstruction:
          "Você é o J.A.R.V.I.S CORE da Indústrias TH. Responda em português do Brasil, com clareza, organização e estilo de assistente inteligente. Ajude com perguntas gerais, estudos, projetos, agenda, finanças, hábitos, música, documentos, pesquisa e missões.",
      },
    });

    res.json({
      answer: response.text,
    });
  } catch (error) {
    console.error("Erro na API Gemini:", error);

    res.status(500).json({
      error: "Erro ao conectar com o Gemini.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`J.A.R.V.I.S CORE rodando na porta ${PORT}`);
});