import Link from 'next/link'
import styled from '@emotion/styled'
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

const Card = styled.article`
  width: 250px;
  height: 150px;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.1);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(62,54,226,1) 0%, rgba(8,11,33,1) 100%);
  transition: 0.4s;
  &:hover{
    cursor: pointer;
    transform: scale(0.95, 0.95);
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
  }
`

const CardCourse = ({course}) => {
  return (
    <Link href={`/cursos/${course.id}`}>
      <Card>
        <h2>{course.name}</h2>
        <small>Creado {" "}
          {formatDistanceToNow(Date.parse(course.created_at), {
            locale: es,
          })}
        </small>
      </Card>
     </Link>
  )
}

export default CardCourse