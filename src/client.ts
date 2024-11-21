import { defineChain as viemDefineChain, http } from "viem";
import { createThirdwebClient } from "thirdweb";
import {
  base as BaseChain,
  avalanche as AvaxChain,
  mainnet as EthChain,
  avalancheFuji as FujiChain,
  defineChain,
} from "thirdweb/chains";
import { createWallet, inAppWallet, Wallet } from "thirdweb/wallets";

const thirdWebClientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;

function isMobileDevice() {
  // Check if the user agent matches common mobile devices
  const userAgentCheck =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // Check if touch is supported
  const touchCheck = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return userAgentCheck || touchCheck;
}

// Example usage
if (isMobileDevice()) {
  console.log("This is a mobile device.");
  // Use the mobile version of app.core
} else {
  console.log("This is a PC.");
  // Use the desktop version of app.core
}

// ======================= THIRDWEB =======================

export const client = createThirdwebClient({
  clientId: thirdWebClientId,
});

export const chains = [AvaxChain, BaseChain, FujiChain];

const inAppWallets: Wallet<"inApp"> = inAppWallet({
  auth: {
    options: [
      "x",
      "apple",
      "google",
      "discord",
      "telegram",
      "github",
      "steam",
      "twitch",
      "coinbase",
      "farcaster",
      "line",
      "email",
      "facebook",
      "passkey",
      "phone",
    ],
    mode: undefined,
  },
  hidePrivateKeyExport: false,
});

export const wallets = [
  inAppWallets,
  ...(isMobileDevice()
    ? [createWallet("app.core")]
    : [createWallet("app.core.extension")]),
  createWallet("io.rabby"),
  createWallet("app.phantom"),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("walletConnect"),
  createWallet("me.rainbow"),
  createWallet("io.zerion.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("com.ledger"),
  createWallet("com.crypto.wallet"),
];
