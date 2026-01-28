import {defineStore} from "pinia";
import type {FlexContainerOptions} from "@/types/FlexOptions.ts";
import {ref} from "vue";

export const useFlexStore = defineStore('flex', () => {

  const options = ref<FlexContainerOptions>({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    gap: 10,
  });

  function reset() {
    options.value = {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flexWrap: 'nowrap',
      gap: 10,
    };
  }

  return {options, reset};
})
