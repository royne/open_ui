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

export const getStudent = async id => {
  const url = `${BASE_URL}/users/${id}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const updateStudent = async (id, student) => {
  const url = `${BASE_URL}/users/${id}`
  const response = await fetch(url,{
    method:"PATCH",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(student)
  })
  const data = await response.json()
  return data
}