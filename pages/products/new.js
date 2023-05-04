import Layout from "@/components/Layout";
import ProductForm from "@/components/Products/ProductForm";

export default function NewProduct(){
   return (
        <Layout>
            <h1 className="text-teal-500 text-xl mb-10">
                Create Product Page
            </h1>
            <ProductForm />
        </Layout>
   )
}