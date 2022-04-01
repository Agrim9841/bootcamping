import { useRouter } from 'next/router';
import Navbar from '../navigation/navbar';
import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const MemberDetail=({member})=>{
    const router = useRouter();
    const { memberID } = router.query;

    return(
        <div>
            <Navbar/>
            <h2>{ member.name }</h2>
            {
                member.projects.map((project) =>{
                    return(
                        <Link href="/project/[projectID]" as={`/project/${project.id}`}>{project.name}</Link>
                    )
                })
            }
        </div>
    );
};

export async function getServerSideProps(ctx) {
    const client = new ApolloClient({
        uri: 'https://bootcampserver.herokuapp.com/graphql',
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: gql`
            {
                member(id: "${ctx.query.memberID}"){
                    name
                    id
                    projects{
                        name
                        id
                    }
                }
            }
        `
    });
    return {
        props: {
            member: data.member || null
        }
    }
}

export default MemberDetail;