<script>
  import { fade } from "svelte/transition";

  export let carouselPhotos;
  export let text;
  export let mod;

  let index = 0;

  setInterval(() => {
    if (index < carouselPhotos.length - 1) index++;
    else index = 0;
  }, 3000);
  // <Slideshow carouselPhotos={[image1,image2]} client:load />
</script>

<div class="flex relative {mod}">
  <img
    transition:fade
    alt="gallery"
    class="absolute inset-0 w-full h-full object-cover object-top"
    src={carouselPhotos[index]}
  />
  <div
    class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 flex items-center justify-center"
  >
    <h1 class="title-font text-4xl font-medium text-gray-900 mb-3 text-center">
      {text}
    </h1>
  </div>
</div>
