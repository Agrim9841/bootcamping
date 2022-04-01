import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Navbar from './navigation/navbar';

const Members = ({members}) => {
    return(
        <div>
            <Navbar/>
            {members.map((member)=>{
                return(
                    <Link key={member.id} as={`/member/${member.id}`} href="/member/[memberID]">
                        <h1>{member.name}</h1>
                    </Link>
                )
            })}
        </div>
    );
};

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://bootcampserver.herokuapp.com/graphql',
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: gql`
            query GetMembers {
                members{
                    id
                    name
                }
            }
        `
    });
    return {
        props: {
            members: data.members
        }
    }
}

export default Members;