import styled from '@emotion/styled'
import Link from 'next/link'

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
  padding: 120px 2% 0 2%;
  background: linear-gradient(0deg, rgba(62,54,226,1) 0%, rgba(8,11,33,1) 100%);
  cursor: pointer;
  position: relative;
  text-align: center;
  &>img{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-30%);
    box-shadow: 0 5px 10px rgba(255,255,255,0.5);
    border-radius: 50%;
  }
  &>h3{
    font-weight: bold;
    text-decoration: underline;
  }
  transition: 0.4s;
  &:hover{
    cursor: pointer;
    transform: scale(0.95, 0.95);
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
  }
`

const CardUser = ({student}) => {
  return (
    <Link href={`/estudiantes/${student.id}`}>
      <Card>
        <img src="/avatar.png" />  
        <h3>{student.name}</h3>
        <span>{student.email}</span>
        {student.reading_time && <small>tiempo de lectura {parseInt(student.reading_time)} min</small>}
      </Card>
    </Link>
  )
}

export default CardUser