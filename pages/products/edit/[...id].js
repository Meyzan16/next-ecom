import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

export default function EditProductPage()
{
    
    const router = useRouter();
    // console.log({router});
    const {id} = router.query;
    useEffect(()=>{
        if(!id){
            return; 
        }
        axios.get('/api/products?id='+id).then(response => {
            console.log(response.data);
        })
    },[id]);
    return(
         <Layout>
            <h1 className="text-teal-500 text-xl mb-10">
                edit product form page
            </h1>

         </Layout>
    )
}