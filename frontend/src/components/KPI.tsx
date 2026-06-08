type Props = {
  title: string;
  value: string | number;
};

export default function KPI({ title, value }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 20,
        margin: 10,
        borderRadius: 10,
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}