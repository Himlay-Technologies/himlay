import { useCallback, useState } from "react";
import { apiClient } from "./client";
import type { Message } from "@/types/chat";

type ChatResponse = {
  response: string;
};

export function useChat() {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(
    async (message: string, history: Message[]) => {
      setIsLoading(true);
      try {
        const data = await apiClient<ChatResponse>("/api/chat", {
          method: "POST",
          body: { message, history },
        });
        return data.response;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { sendMessage, isLoading };
}
