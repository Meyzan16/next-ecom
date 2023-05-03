import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
    return (
        <Layout>
            <h1 className="text-teal-500 text-xl mb-10">
                Products
            </h1>
            <Link className="bg-teal-500 py-2 px-4 text-base text-white rounded-xl" href={'/products/new'}>Add new product</Link>
        </Layout>
    )
}