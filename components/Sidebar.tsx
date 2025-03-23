import NewDocumentButton from "./NewDocumentButton";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function Sidebar() {
  return (
    <div className="p-2 md:p-5 bd-gray-200 relative">
        <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <div>
        {/* options */}
      </div>

    </SheetHeader>
  </SheetContent>
</Sheet>


        <div className="hidden md:inline">

        <NewDocumentButton /> 
        </div>
       
    </div>
  );
}

export default Sidebar;
