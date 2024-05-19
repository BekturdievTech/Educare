export default function Skeleton({ className }) {
  return (
    <div className={`bg-slate-300 motion-safe:animate-pulse ${className}`} />
  );
}
