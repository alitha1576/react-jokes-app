export default function RefreshButton({
  onRefresh,
}: {
  onRefresh: () => void;
}) {
  return <button className="refreshButton" onClick={onRefresh}></button>;
}
