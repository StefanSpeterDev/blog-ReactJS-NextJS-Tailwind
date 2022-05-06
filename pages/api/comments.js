
/* 
* Any file inside the folder pages/api is mapped to /api/* and 
* will be treated as an API endpoint instead of a page
*/
import { GraphQLClient, gql } from "graphql";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default function comments(params) {
    
}