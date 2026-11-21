"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type TourImage = { readonly src: string; readonly alt: string; readonly caption: string };

// Grid of clinic photos; clicking one opens it larger in a native <dialog>
// (focus trap, Esc to close and backdrop handled by the browser).
export function TourGallery({ images }: { images: readonly TourImage[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);

  function open(i: number) {
    setActive(i);
    dialog.current?.showModal();
  }
  function step(delta: number) {
    setActive((i) => (i + delta + images.length) % images.length);
  }

  const current = images[active];

  return (
    <>
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => open(i)}
              className="group block w-full overflow-hidden rounded-[var(--radius-card)] text-left ring-1 ring-line"
              aria-label={`Open photo: ${img.caption}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                sizes="(min-width: 1024px) 280px, 50vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            <p className="mt-3 text-sm font-medium text-ink">{img.caption}</p>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label={current.caption}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        className="m-auto w-[min(92vw,64rem)] rounded-[var(--radius-card)] bg-white p-0 backdrop:bg-ink/80"
      >
        <Image
          src={current.src}
          alt={current.alt}
          width={1600}
          height={1200}
          sizes="92vw"
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="flex items-center justify-between gap-3 p-4">
          <p className="font-medium text-ink">
            {current.caption}{" "}
            <span className="text-sm text-muted">
              ({active + 1} / {images.length})
            </span>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="grid size-11 rotate-180 place-items-center rounded-full ring-1 ring-line hover:text-brand"
            >
              <Icon name="arrow" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="grid size-11 place-items-center rounded-full ring-1 ring-line hover:text-brand"
            >
              <Icon name="arrow" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close"
              className="grid size-11 place-items-center rounded-full bg-ink text-white"
            >
              <Icon name="close" className="size-5" />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
