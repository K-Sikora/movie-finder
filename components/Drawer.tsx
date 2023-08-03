"use client";

import { Drawer } from "vaul";

export function InfoDrawer() {
  return (
    <Drawer.Root fixedHeight>
      <Drawer.Trigger asChild>
        <button>Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-20 bg-black/40" />
        <Drawer.Content className=" flex flex-col z-30 rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-background rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="mb-4 font-medium">
                Your currently chosen actors, movies and categories.
              </Drawer.Title>
              <p className="mb-2 text-zinc-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptatum corporis ab nesciunt optio aliquam eaque aut.
                Debitis, adipisci perspiciatis!
              </p>
              <p className="mb-8 text-zinc-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                commodi!
              </p>
            </div>
          </div>
          <div className="p-4 mt-auto border-t bg-background">
            <div className="flex justify-end max-w-md gap-6 mx-auto">
              GitHub Twitter
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
