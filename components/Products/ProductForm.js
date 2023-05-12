import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductForm({
    _id,
    title:existingTitle, 
    description:existingDescription, 
    price:existingPrice,
    image
}){
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');

    const [goToProduct, setGoToProduct] = useState('');
    const router = useRouter();


    const saveProduct = async (ev) => {
        ev.preventDefault(); 
        const data = {title,description,price};
        if(_id){
            //jika ada id maka update
            await axios.put('/api/products', {...data, _id})
        }else{
            await axios.post('/api/products', data);
        }
        setGoToProduct(true);
    }

    if(goToProduct){
        router.push('/products');
    }

    

    return (
            <div className="w-full lg:w-1/2">
                <form onSubmit={saveProduct}>
                        <div>
                            <label className="text-base">Full Name</label>
                            <input  type="text" placeholder="Jane Doe"
                            value={title} 
                            onChange={ev => setTitle(ev.target.value) } />
                        </div>

                        <div>
                            <label className="text-base">Photos</label>
                            <label className="h-32 text-md cursor-pointer border-2 bg-gray-200 border-teal-500  text-gray-600 bg-transparent p-8 rounded-2xl w-full  flex items-center justify-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                <div>
                                    Upload 
                                </div>
                                <input type="file"  className='hidden' onChange={uploadPhoto}/>
                                    
                            </label>
                            {!image?.length && (
                                <div>No photos in the product</div>
                            )}
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


                        <Link href={'/products'} className="btn-red mr-2">Back</Link>

                        <button type="submit" className="btn-default">Save</button>
                </form>
 
            </div>

    );
}