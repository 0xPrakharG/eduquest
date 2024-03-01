import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <button>
      <UserButton afterSignOutUrl="/" />
    </button>
  );
}
