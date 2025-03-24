import { MenuIcon } from "lucide-react";
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

    // create a variable 
    const menuOptions = ( );
    // have inside a react fragment 
    <>
    <NewDocumentButton/> 
    {/* list....  */}
    {/* shared with me docts.  */}
    </>

  return (
        <div className="p-2 md:p-5 bd-gray-200 relative">
            {/* md:hidden means on a medium screen it stays hidden but not on a small one.  */}
            <div className="md:hidden"> 

                <Sheet>
                    <SheetTrigger>
                        <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <div>
                                {menuOptions}
                            </div>

                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>


            <div className="hidden md:inline">{menuOptions}</div>

        </div>
    );
}

export default Sidebar;
