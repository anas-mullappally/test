import { Button } from "@/components/ui/button";

export default function Chai() {
  return (
    <>
      <main className="h-full flex flex-col justify-center items-center">
        <div>Chai Page</div>
        <Button variant={"destructive"} size={"sm"}>
          Hello
        </Button>
      </main>
    </>
  );
}
