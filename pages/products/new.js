import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const createProduct = async (ev) => {
        console.log('asas')
        ev.preventDefault(); 
        const data = {title,description,price};
        await axios.post('/api/products', data);

    }

    return (
        <Layout>
            <h1 className="text-teal-500 text-xl mb-10">
                Create Product
            </h1>

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

                        <button type="submit" className="btn-primary">Save</button>
                </form>
 
            </div>
        </Layout>  
    );
}