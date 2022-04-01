import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const ProjectDetail = ({project}) => {
    const router = useRouter();
    const { memberID } = router.query;

    return(
        <div>
            project detail page
            <h2>{project.name}</h2>
            author: {project.author.name}
        </div>
    )
}; 

export async function getServerSideProps(ctx) {
    const client = new ApolloClient({
        uri: 'http://localhost:5000/graphql',
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: gql`
            {
                project(id: "${ctx.query.projectID}"){
                    name
                    id
                    author{
                        name
                        id
                    }
                }
            }
        `
    });
    return {
        props: {
            project: data.project || null
        }
    }
}

export default ProjectDetail;