import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductForm({
    title:existingTitle, 
    description:existingDescription, 
    price:existingPrice,
}){
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');

    const [goToProduct, setGoToProduct] = useState('');
    const router = useRouter();

    const createProduct = async (ev) => {
        console.log('asas')
        ev.preventDefault(); 
        const data = {title,description,price};
        await axios.post('/api/products', data);
        setGoToProduct(true)
    }

    if(goToProduct){
        router.push('/products');
    }

    return (
            <div className="w-full lg:w-1/2">
                <form onSubmit={createProduct}>
                        <div>
                            <label className="text-base">Full Name</label>
                            <input  type="text" placeholder="Jane Doe"
                            value={title} 
                            onChange={ev => setTitle(ev.target.value) } />
                        </div>
                        <div>
                            <label className="text-base">Description</label>
                            <textarea placeholder="description"
                            value={description} 
                            onChange={ev => setDescription(ev.target.value) }
                            />
                        </div>

                        <div>
                            <label className="text-base">Price (in USD)</label>
                            <input  type="number" placeholder="Jane Doe"
                            value={price} 
                            onChange={ev => setPrice(ev.target.value) }
                             />
                        </div>


                        <Link href={'/products'} className="bg-red-700 py-2 px-4 text-sm text-white rounded-xl mr-2">Back</Link>

                        <button type="submit" className="btn-primary">Save</button>
                </form>
 
            </div>

    );
}