import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>shopping-bag</h1>
      <Button className="cursor-pointer bg-emerald-600">Add To Cart</Button>
    </div>
  );
}
