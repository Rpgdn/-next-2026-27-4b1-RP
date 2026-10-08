import Card from "@/components/Card";
import Counter from "@/components/Counter";

export default function HomePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>O nas</h1>
      <p>Dowiedz się więcej o naszej szkolnej inicjatywie!</p>
    </main>
  );
}
export function AboutPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>O nas</h1>
      <Card title="Nasza misja">
        <p>Dowiedz się więcej o naszej szkolnej inicjatywie!</p>
        <Counter />
      </Card>

    </main>
  );
}
