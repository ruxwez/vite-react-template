import { useTheme } from "@/hooks";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1
        style={{
          color: "var(--bgs)",
        }}
      >
        {theme}
      </h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
