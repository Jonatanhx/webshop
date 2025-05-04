type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className="border p-4">{children}</div>;
}
