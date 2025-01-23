//  'use client'
//  import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// const Profile = () => {
//     const { isAuthenticated } = getKindeServerSession();
//     const router = useRouter();

//     useEffect(() => {
//         if (!isAuthenticated) {
//             router.push('/api/auth/login');
//         }
//     }, [isAuthenticated, router]);

//     if (!isAuthenticated) {
//         return <p>Redirecting to login...</p>;
//     }

//     return (
//         <div className="container mx-auto text-center mt-10">
//             <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
//             <p className="text-lg mt-4">Hello, {user?.name || 'User'}!</p>
//         </div>
//     );
// };

// export default Profile;


import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Protected() {
    const { isAuthenticated, getUser } = getKindeServerSession();

    // Check if the user is authenticated
    const authenticated = await isAuthenticated();
    console.log("Is Authenticated:", authenticated); // Debug log
  
    if (!authenticated) {
      // Redirect to the login page if not authenticated
      redirect("/api/auth/login");
    }
  
    const user = await getUser();
    console.log("User Details:", user); // Debug log
  
    // Render the protected content for authenticated users
    return (
      <div className="my-10 space-y-5 justify-center items-center px-4">
        <h2 className="text-2xl lg:text-5xl font-bold text-center">Welcome to your profile!</h2>
        <p className="text-red-400 text-center font-bold lg:text-3xl">{user?.email}</p>
      </div>
    );
}

// "use client";

// import { useSession } from "@kinde-oss/kinde-auth-nextjs";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Profile() {
//   const { isAuthenticated } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/api/auth/login");
//     }
//   }, [isAuthenticated, router]);

//   if (!isAuthenticated) {
//     return <p>Redirecting to login...</p>;
//   }

//   return <div>Welcome to your profile!</div>;
// }
