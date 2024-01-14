"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
export default function Component({ accordionItem }: any) {
  console.log(accordionItem);
  return (
    <div className=" m-5">
      <Accordion.Root
        collapsible
        className=" p-2 rounded bg-white w-[300px] shadow-md"
        type="single"
      >
        {accordionItem.map((item: any, index: any) => (
          <Accordion.Item
            className=" overflow-hidden mt-1"
            value={`item-${index}`}
            key={index}
          >
            <Accordion.Header className="w-full">
              <Accordion.Trigger className=" p-2 flex items-center w-full justify-between">
                <span>{item.title}</span>
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>{item.content}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
