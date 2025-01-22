import Link from "next/link";

const Navbar = () => {
    return (
        <>
           <div className=" container mx-auto flex justify-center items-center my-5">
              <ul className="flex items-center text-md font-medium px-1 gap-7">
              <li><Link href={"/"}    className={`text-lg  hover:bg-none hover:text-red-500 transition-colors `}
                     >Home</Link></li>
                <li><Link href={"/profile"}    className={`text-lg hover:bg-none hover:text-red-500 transition-colors `}>Profile</Link></li>
                
                <li><Link href={"/login"}   > <button  className={` btn bg-amber-400 text-lg text-white btn-md  transition-colors`}> 
                Sign In
                    </button></Link></li>
                
                <li><Link href={"/register"}   > <button  className={` btn text-lg bg-blue-500 text-white btn-md  transition-colors`}> 
                Sign Up
                    </button></Link></li>
               
              
              </ul>
            </div>
        </>
    );
};

export default Navbar;