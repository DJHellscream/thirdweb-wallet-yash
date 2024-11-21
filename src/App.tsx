import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "./thirdweb.svg";
import { chains, client, wallets } from "./client";

export function App() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example app",
              url: "https://example.com",
            }}
            autoConnect={true}
            chains={chains}
            wallets={wallets}
            detailsModal={{
              assetTabs: ["token", "nft"],
            }}
          />
        </div>

        <ThirdwebResources />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <img
        src={thirdwebIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="mb-6 text-2xl font-bold tracking-tighter md:text-6xl text-zinc-100">
        thirdweb SDK
        <span className="inline-block mx-1 text-zinc-300"> + </span>
        <span className="inline-block -skew-x-6 text-violet-500"> vite </span>
      </h1>

      <p className="text-base text-zinc-300">
        Read the{" "}
        <code className="px-2 py-1 mx-1 text-sm rounded bg-zinc-800 text-zinc-300">
          README.md
        </code>{" "}
        file to get started.
      </p>
    </header>
  );
}

function ThirdwebResources() {
  return (
    <div className="grid justify-center gap-4 lg:grid-cols-3">
      <ArticleCard
        title="thirdweb SDK Docs"
        href="https://portal.thirdweb.com/typescript/v5"
        description="thirdweb TypeScript SDK documentation"
      />

      <ArticleCard
        title="Components and Hooks"
        href="https://portal.thirdweb.com/typescript/v5/react"
        description="Learn about the thirdweb React components and hooks in thirdweb SDK"
      />

      <ArticleCard
        title="thirdweb Dashboard"
        href="https://thirdweb.com/dashboard"
        description="Deploy, configure, and manage your smart contracts from the dashboard."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={`${props.href}?utm_source=vite-template`}
      target="_blank"
      className="flex flex-col p-4 transition-colors border rounded-lg border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700"
      rel="noreferrer"
    >
      <article>
        <h2 className="mb-2 text-lg font-semibold">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
