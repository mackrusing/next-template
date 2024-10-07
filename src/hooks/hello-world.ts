// hooks
import { useState } from "react";

export function useHelloWorld(name: string) {
  const [value, rawSetValue] = useState(`Hello ${name}`);

  function setValue(newName: string) {
    rawSetValue(`Hello ${newName}`);
  }

  return [value, setValue];
}
