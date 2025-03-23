'use client'

import { SignedIn, SignedOut, UserButton, useUser, SignInButton } from "@clerk/nextjs";
function Header() {
    const { user } = useUser();

    return (
        <div className="flex items-center justify-betwwen p-5"> 
            {user && (
                <h1>Welcome to {user?.firstName}
                    {"'s "}Space
                </h1>
            )}

            {/*Breadcrumbs*/}

            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>

    );
}

export default Header;

