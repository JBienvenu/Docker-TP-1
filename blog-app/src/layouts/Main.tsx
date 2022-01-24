import ResponsiveAppBar from "../components/Header";

export default function MainLayout({
  component,
}: {
  component: JSX.Element;
}): JSX.Element {
  return (
    <main style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ResponsiveAppBar />
      <div style={{ flexGrow: "1", padding: "15px" }}>{component}</div>
    </main>
  );
}
