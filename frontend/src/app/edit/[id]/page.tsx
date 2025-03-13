import EditPage from "./editPage";
import './page.css'

export default async function edit({params}: {params: Promise<{id: string}>}){
    const {id} = await params;

    return <EditPage id={id}/>
}