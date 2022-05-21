import Link from 'next/link'
import {useState, useEffect} from 'react'
import {getCourses} from '../requests'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() =>{
    getCourses().then(elm => setCourses(elm))
  }, [])
  console.log(courses)

  return (
    <div>
      {courses && courses.map(elm => <Link href={`/cursos/${elm.id}`} >{elm.name}</Link>)}
    </div>
  )
}

export default Courses