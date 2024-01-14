"use client";
import * as Popover from "@radix-ui/react-popover";

export default function PopOver() {
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger className=" bg-white rounded-sm">
          More info
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className=" rounded-sm p-5 w-[260px] bg-white">
            Some more info…
            <Popover.Arrow className=" fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
