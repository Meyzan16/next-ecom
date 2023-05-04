import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  // console.log({session});
  return (
    <Layout>
        <div className="text-teal-500 flex justify-between">
          <h2>
            Hello, <b>{session?.user?.email}</b> 
          </h2>

          <div className="md:flex bg-teal-500 rounded-lg items-center hidden overflow-hidden">
            <img src={session?.user?.image} alt="" className="w-10 h-10 object-cover" />
            <span className="text-base px-2 text-white">
              {session?.user?.name}
            </span>
          </div>
        </div>
    </Layout>
  ) 
}
