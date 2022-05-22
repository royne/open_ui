import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import Layout from '../../components/layout/Layout'
import { getStudent } from '../../requests'
import CardUser from '../../components/CardUser'
import FormEdit from '../../components/FormEdit'

const SectionUser = styled.section`
  width: 100%;
  display: flex;
  margin-top: 50px;
  .box{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Students = () => {
  const [student, setStudent] = useState({})
  const router = useRouter()
  const { query: { id } } = router

  useEffect(() => {
    if (id) getStudent(id).then(elm => setStudent(elm))
  }, [id]);

  if (Object.keys(student).length === 0) return null

  return (
    <Layout>
      <h1 style={{textAlign:"center"}}>{student.name}</h1>
      <SectionUser>
        <div className='box'>
          <CardUser student={student} />
        </div>
        <div className='box'>
          <FormEdit student={student} setStudent={setStudent} />
        </div>
      </SectionUser>
    </Layout>
  )
}

export default Students