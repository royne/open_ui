import styled from '@emotion/styled'

const Card = styled.article`
  width: 250px;
  height: 300px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.1);
  margin: 10px 10px 50px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 5% 5%;
  background: linear-gradient(0deg, rgba(62,54,226,1) 0%, rgba(8,11,33,1) 100%);
  text-align: justify;
  &>h3{
    font-weight: bold;
    text-decoration: underline;
  }
  &>small{
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Book = ({data}) => {
  return (
    <Card>
      <h3>{data.name}</h3>
      <small>{data.content}</small>
    </Card>
  )
}

export default Book