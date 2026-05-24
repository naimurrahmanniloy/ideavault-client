import { Spinner } from "@heroui/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-col items-center gap-2 justify-center h-screen">
      <Spinner size="xl" />
      <span className="text-xs text-muted">Loading...</span>
    </div>
  );
}
