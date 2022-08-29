import { onMounted, onUnmounted, Ref } from "vue";

export const useOnScrollTransition = (
  elements: Ref<Array<HTMLElement>> | Ref<HTMLElement>,
  className: string
) => {
  const handleScrollTransition = () => {
    if (!Array.isArray(elements.value)) {
      handleElementClass(elements.value);
    } else {
      for (let i = 0; i < elements.value.length; i++) {
        handleElementClass(elements.value[i]);
      }
    }
  };

  const handleElementClass = (element: HTMLElement) => {
    if (!element) return;
    if (
      !element.classList.contains(className) &&
      element.getBoundingClientRect().top + 120 < window.innerHeight
    ) {
      element.classList.add(className);
    }
  };

  onMounted(() => {
    handleScrollTransition();
    window.addEventListener("scroll", handleScrollTransition);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScrollTransition);
  });

  return;
};
