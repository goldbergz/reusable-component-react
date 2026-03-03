import { ChipList } from "./components/ChipList";

function App() {
   const chips = Array.from({ length: 13 }, (_, i) => ({
    id: String(i),
    label: `Чипс ${i + 1}`,
  }));

  return (
    <div style={{ padding: 40 }}>
      <ChipList items={chips} />
    </div>
  );

}

export default App
