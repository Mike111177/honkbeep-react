import { useMemo } from "react";
import ClickRecognizer from "../recognizers/ClickRecognizer";
import DragRecognizer from "../recognizers/DragRecognizer";
import {
  appendRecognizer,
  GestureRecognizer,
} from "../recognizers/GestureRecognizer";
import {
  GestureBuilder,
  GestureConfig,
  GestureHandlers,
} from "../types/GestureTypes";
import { useGestureStatus } from "./useGestureStatus";

export default function useGesture(
  handlers: GestureHandlers,
  config?: GestureConfig
) {
  const [ref, status] = useGestureStatus(config);

  const binder = useMemo(() => {
    const builder: GestureBuilder = {};
    if (handlers.onDrag !== undefined) {
      appendRecognizer(builder, DragRecognizer(handlers.onDrag, status));
    }
    if (handlers.onRightClick !== undefined) {
      appendRecognizer(builder, ClickRecognizer(handlers.onRightClick, 2));
    }
    return { ref, ...GestureRecognizer(builder) };
  }, [handlers.onDrag, handlers.onRightClick, ref, status]);

  return binder;
}
