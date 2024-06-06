export default function Coin({ params }: { params: { coinName: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.coinName}
    </main>
  );
}
