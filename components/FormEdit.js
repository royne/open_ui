import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import {updateStudent} from '../requests'

const Form = styled.form`
  width: 50%;
`
const BoxInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  &>input{
    width: 100%;
    height: 40px;
    border: none;
    background: rgba(255,255,255,0.2);
    color: var(--white);
    border-radius: 6px;
    padding-left: 10px;
    margin: 10px 0;
  }
`
const BoxBtn = styled.div`
  width: 100%;
  margin-top: 10px;
  .btn{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue);
    border-radius: 6px;
    color: var(--white);
    transition: 0.4s;
    &:hover{
      cursor: pointer;
      transform: scale(0.95, 0.95);
    }
  }
`

const FormEdit = ({student, setStudent}) => {
  const router = useRouter()
  const handleChange = e => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const data = {user: {name: student.name, email: student.email}}
    updateStudent(student.id, data)
    .then(res => {
      alert("estudiante actualizado")
      router.push(`/cursos/${student.course_id}`)
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Edita Los Datos</h3>
      <BoxInput>
        <label>Nombre</label>
        <input type="text" value={student.name} name="name" onChange={handleChange} />
      </BoxInput>
      <BoxInput>
        <label>Email</label>
        <input type="email" value={student.email} name="email" onChange={handleChange} />
      </BoxInput>
      <BoxBtn>
        <input type="submit" value="EDITAR" className='btn'/>
      </BoxBtn>
    </Form>
  )
}

export default FormEdit