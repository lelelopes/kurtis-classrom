import Main from 'components/Main'

import { GET_CHARACTERS } from 'graphql/queries/sample'

import api from 'services/api'

export default function Home() {
  return <Main />
}

export async function getServerSideProps() {
  const { characters } = await api.request(GET_CHARACTERS)

  console.log(characters)

  return {
    props: {},
  }
}
