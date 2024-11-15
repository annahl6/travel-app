import React from 'react';

const Carousel = () => {
    return (
        <>
            <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "slidesQty": {
    "xs": 1,
    "lg": 3
  },
  "isDraggable": true
}' class="relative">
                <div class="hs-carousel w-full overflow-hidden bg-white rounded-lg">
                    <div class="relative min-h-72 -mx-1">
                        <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">First slide</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Second slide</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Third slide</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Fourth slide</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Fifth slide</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Sixth slide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span class="text-2xl" aria-hidden="true">
                        <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span class="sr-only">Previous</span>
                </button>
                <button type="button" class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span class="sr-only">Next</span>
                    <span class="text-2xl" aria-hidden="true">
                        <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>

                <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
            </div>

        </>
    );
};

export default Carousel;