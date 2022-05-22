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

const Book = () => {
  return (
    <Card>
      <h3>Libro 1</h3>
      <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</small>
    </Card>
  )
}

export default Book