import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex justify-center h-screen w-full">

      <div className="flex flex-col justify-center gap-3">
        <p className="text-center">Hello World!</p>

        <Button asChild variant={"outline"} className="justify-start">
          <Link href={"/aysart"}> <ChevronRight /> AysArt </Link>
        </Button>

        <Button asChild variant={"outline"} className="justify-start">
          <Link href={"/ilyada-network"}> <ChevronRight />İlyada Network</Link>
        </Button>

        {/* <Button asChild variant={"ghost"}>
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
        </Button> */}


      </div>
    </div>
  );
}
