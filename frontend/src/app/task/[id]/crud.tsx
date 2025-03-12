import axios from "axios";
import "dotenv/config";

export default async function aDelete(id: string){
    try {
    const res = await axios.put(process.env.NEXT_PUBLIC_API + id, {title: "Atest", description: "69", status: "A status"});
    console.log(res.data);
    } catch (error: any) {
      console.log("Error Deleting: ", error.response.data.message[0]);
    }
  }