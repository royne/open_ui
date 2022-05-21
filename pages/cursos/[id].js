import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Layout from '../../components/layout/Layout'
import { getCourse } from '../../requests'

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
      <h1>{course.name}</h1>
      <div>
        {course.users.map(elm => (
          <div>
            <p>{elm.name}</p>
            <p>{elm.email}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Course;