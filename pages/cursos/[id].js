import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import Layout from '../../components/layout/Layout'
import { getCourse } from '../../requests'
import CardUser from '../../components/CardUser'
import Book from '../../components/Book'

const BoxCourse = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const Course = () => {
  const [course, setCourse] = useState({})
  const router = useRouter()
  const { query: { id } } = router

  useEffect(() => {
    if (id) getCourse(id).then(elm => setCourse(elm))
  }, [id]);

  if (Object.keys(course).length === 0) return null

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: 30 }}>{course.name.toUpperCase()}</h1>
      <hr/><hr/><br/><br/>
      <section>
        <BoxCourse>
          <div>
            <CardUser student={course.instructor} />
            <span>INSTRUCTOR</span>
          </div>
          <div>
            <Book />
            <span>LIBRO</span>
          </div>
        </BoxCourse>
      </section>
      <hr/><hr/><br/>
      <section>
        <h2 style={{textAlign:"center"}}>ESTUDIANTES</h2><br/>
        <BoxCourse>
          {course.students.map(elm => <CardUser key={elm.id} student={elm} /> )}
        </BoxCourse>
      </section>

      
    </Layout>
  )
}

export default Course;