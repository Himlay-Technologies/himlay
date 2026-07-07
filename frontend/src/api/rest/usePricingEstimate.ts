import { useCallback, useState } from "react";
import { apiClient } from "./client";

type PricingEstimateResponse = {
  status: string;
  estimated_cost: string;
};

export function usePricingEstimate() {
  const [isLoading, setIsLoading] = useState(false);
  const [estimate, setEstimate] = useState<string | null>(null);

  const fetchEstimate = useCallback(async (modules: string) => {
    setIsLoading(true);
    try {
      const data = await apiClient<PricingEstimateResponse>(
        `/api/pricing/estimate?modules=${encodeURIComponent(modules)}`
      );
      setEstimate(data.estimated_cost);
      return data.estimated_cost;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchEstimate, estimate, isLoading };
}
