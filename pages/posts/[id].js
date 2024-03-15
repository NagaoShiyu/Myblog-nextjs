import { getAllPostIds, getPostData } from "../../lib/post";
import Layout from "../components/Layout";

export async function GetStaticPaths(){
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({params}){
    const postData = await getPostData(params.id);

    return{
        props: {
            postData,   
        },
    };
    
}

export default function Post({postData}){
    return <Layout>
        {postData.title}
        <br />
        {postData.date}
        <br />
        {postData.blogContentHTML}
    </Layout>;
}