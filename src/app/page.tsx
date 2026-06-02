import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <h1>shopping-bag</h1>
      <div>
        <Button className="cursor-pointer bg-pink-400" variant={"elevated"}>Add To Cart</Button>
      </div>
      <div>
        <Input placeholder="I am placeholder..."/>
      </div>
      <div className="w-full">
        <Progress value={70} />
      </div>
      <div>
        <Textarea value="This is text area..."/>
      </div>
      <div>
        <Checkbox />
      </div>
      <div>
        <Badge>hey</Badge>
      </div>
    </div>
  );
}
