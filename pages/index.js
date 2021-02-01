import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.success};
`

export default function Home() {
  return <Title>Cafeína Quiz</Title>
}
