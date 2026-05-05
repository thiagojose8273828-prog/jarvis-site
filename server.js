import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

app.post("/api/jarvis", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({
        error: "Mensagem vazia.",
      });
    }

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      system:
        "Você é o J.A.R.V.I.S CORE da Indústrias TH. Responda em português do Brasil, com clareza, organização e estilo de assistente inteligente. Ajude com estudos, projetos, agenda, finanças, hábitos, música, documentos, pesquisa e missões.",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    const answer = response.content
      .filter((item) => item.type === "text")
      .map((item) => item.text)
      .join("\n");

    res.json({
      answer,
    });
  } catch (error) {
    console.error("Erro na API Claude:", error);

    res.status(500).json({
      error: "Erro ao conectar com o Claude.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`J.A.R.V.I.S CORE rodando em http://localhost:${PORT}`);
});
