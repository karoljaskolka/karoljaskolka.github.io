import { onMounted, onUnmounted, Ref } from "vue";

export const useOnScrollHidden = (hidden: Ref<boolean>, maxY: number) => {
  const handleScroll = () => {
    if (window.scrollY > maxY) {
      hidden.value = false;
    } else {
      hidden.value = true;
    }
  };

  onMounted(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return;
};
