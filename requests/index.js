const BASE_URL = "http://localhost:4000/api/v1"

export const getCourses = async () => {
  const url = `${BASE_URL}/courses`
  const response = await fetch(url)
  const data = await response.json()
  return data
};

export const getCourse = async id =>{
  const url = `${BASE_URL}/courses/${id}`
  const response = await fetch(url)
  const data = await response.json()
  return data 
}