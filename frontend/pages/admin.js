import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Navbar from './navigation/navbar';
import styles from './admin.module.css';
import useSWR from 'swr'
import { request } from 'graphql-request'

const Admin = ({members}) => {
    const [membersDetail, setMemberDetails] = useState([]);

    // const fetcher = query => request('https://bootcampserver.herokuapp.com/graphql', query);
    // const { data, error } = useSWR(
    //     `{
    //       members {
    //         name
    //         email
    //         id
    //       }
    //     }`,
    //     fetcher
    //   );

    useEffect(()=>{
        setMemberDetails(membersDetail);
    }, []);

    function getMemberAgain(){
        
    }

    return(
        <div>
            <Navbar/>
            <div className={ styles.admin }>
                <h2 className={styles.adminTitle}>Members</h2>
                {members.map((member)=>{
                    return(
                        <Link key={member.id} as={`/member/${member.id}`} href="/member/[memberID]">
                            <div className={ styles.adminMemberCard }>
                                <h1>{member.name}</h1>
                                
                            </div>
                        </Link>
                    )
                })}
                <h2 className={styles.adminTitle}>Add Member</h2>
                <form onSubmit={getMemberAgain}>
                    <button type="submit">Submit</button>
                </form>
            </div>
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

export default Admin;