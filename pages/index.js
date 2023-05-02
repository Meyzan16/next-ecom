
import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className="bg-blue-500 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <button onClick={() =>signIn('google')} className="bg-white p-2 px-4 rounded-lg">
              Login with google
            </button>
          </div>
       </div>
    );
  }
  
  return(
    <div className="bg-slate-100 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow my-4 rounded-l-lg p-8 leading-relaxed text-xl font-bold border-l-2 border-solid border-teal-500 ">logged in {session.user.email}</div> 
    </div>
  )
}
