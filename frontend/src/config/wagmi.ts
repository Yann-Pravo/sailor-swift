import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from "wagmi/chains";

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || "";
console.log("VITE_WALLETCONNECT_PROJECT_ID:", projectId);
console.log("All env vars:", import.meta.env);

export const wagmiConfig = getDefaultConfig({
  appName: "Sailor Swift",
  projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: false,
});
