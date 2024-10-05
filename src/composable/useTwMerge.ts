// useMergedClasses.ts
import { computed } from "vue";
import { twMerge } from "tailwind-merge";

export function useTwMerge(
  defaultClass: string,
  propsClass: string | undefined,
) {
  return computed(() => {
    return twMerge(defaultClass, propsClass);
  });
}
