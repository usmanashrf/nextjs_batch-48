import PopOver from "@/components/Popover";
import Accordion from "@/components/Accordion";
import Alert from "@/components/Alert";

export default function Home() {
  const accordionitems = [
    {
      title: "Is It Accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Is It Unstyled?",
      content: "Yes. It is unstyled by default.",
    },
    {
      title: "Is It Responsive?",
      content: "Yes. It is responsive by default.",
    },
  ];
  return (
    <div className=" m-8">
      <PopOver />
      <Accordion accordionItem={accordionitems} />
      <Alert />
    </div>
  );
}
