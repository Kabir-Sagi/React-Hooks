import Axios from 'axios'


function GetData() {
  return  Axios.get('http://jsonplaceholder.typicode.com/posts')
}

export default GetData