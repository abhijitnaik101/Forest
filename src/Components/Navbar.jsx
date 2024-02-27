import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="flex-col">
                <div className="sm:flex sm:flex-auto">
                <div className="bg-red-200 w-full text-center hover:bg-slate-200">Home</div>
                <div className="bg-green-200 w-full text-center">Settings</div>
                <div className="bg-yellow-200 w-full text-center">About</div>
                </div>
            </div>
        </>
    )
}

export default Navbar;