import { Button } from "@/Button/Button";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/Accordion/Accordion";
function App() {
  return (
    <>
      <div className="mx-40 my-40">
        <Button variant={"link"}>Get Started</Button>
      </div>
      <div className="mx-40 my-40">
        <Accordion type="single">
          <AccordionItem value="item-1" className=" text-primary">
            <AccordionTrigger>Hello there</AccordionTrigger>
            <AccordionContent>This is the content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className=" text-primary">
            <AccordionTrigger>Hello there</AccordionTrigger>
            <AccordionContent>This is the content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default App;
