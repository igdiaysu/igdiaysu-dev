import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <p>Hello World!</p>

      <Button asChild variant={"default"}>
        <Link href={"/aysart"}> <ChevronRight /> AysArt - for streams</Link>
      </Button>
      <Button asChild variant={"destructive"}>
        <Link href={"/aysart"}> <ChevronRight /> AysArt - for streams</Link>
      </Button>
      <Button asChild variant={"ghost"}>
        <Link href={"/aysart"}> <ChevronRight /> AysArt - for streams</Link>
      </Button>
      <Button asChild variant={"link"}>
        <Link href={"/aysart"}> <ChevronRight /> AysArt - for streams</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href={"/aysart"}> <ChevronRight /> AysArt - for streams</Link>
      </Button>
      <Button asChild variant={"secondary"}>
        <Link href={"/aysart"}> <ChevronRight /> AysArt - for streams</Link>
      </Button>


    </div>
  );
}
