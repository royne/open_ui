import Link from 'next/link'
import {useState, useEffect} from 'react'
import {getCourses} from '../requests'
import CardCourse from './CardCourse'
import styled from '@emotion/styled'

const ContainerCourses = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() =>{
    getCourses().then(elm => setCourses(elm))
  }, [])

  return (
    <ContainerCourses>
      {courses && courses.map(elm => <CardCourse key={elm.id} course={elm} />)}
    </ContainerCourses>
  )
}

export default Courses