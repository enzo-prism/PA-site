"use client";

import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="h-14 w-full rounded-full"
      disabled={pending}
    >
      {pending ? (
        <>
          <LoaderCircle className="size-4 animate-spin" />
          Checking...
        </>
      ) : (
        "Enter"
      )}
    </Button>
  );
}
