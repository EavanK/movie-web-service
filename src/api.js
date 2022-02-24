import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      language
      rating
      medium_cover_image
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;
