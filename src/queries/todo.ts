import { gql } from "@apollo/client";

export const getTodos = gql`
	query getTodos {
		getAllTodos {
			_id
			title
			description
			upvotes
		}
	}
`;
