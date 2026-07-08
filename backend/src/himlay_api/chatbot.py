import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from .common.prompts import SYSTEM_PROMPT

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
print(f"GROQ_API_KEY loaded: {'Yes' if GROQ_API_KEY else 'No'}")

def get_chatbot_response(user_message: str, history: list) -> str:
    if not GROQ_API_KEY:
        return "System Error: GROQ_API_KEY not configured on the server. Please add it to the .env file."

    try:
        # ChatGroq expects 'model' and 'api_key' parameters
        llm = ChatGroq(model="llama-3.3-70b-versatile", api_key=GROQ_API_KEY, temperature=0.3)
        # Build message history for Langchain
        messages = [("system", SYSTEM_PROMPT)]

        # Add historical context
        for msg in history:
            role = "human" if msg["role"] == "user" else "assistant"
            messages.append((role, msg["content"]))

        # Add current message
        messages.append(("human", user_message))

        prompt = ChatPromptTemplate.from_messages(messages)
        chain = prompt | llm | StrOutputParser()

        response = chain.invoke({"user_message": user_message})
        return response

    except Exception as e:
        return f"Sorry, I'm experiencing a technical issue ({str(e)}). Please email us at contact@himlay.com or book a consultation directly."
    