import { useState, useEffect, useLayoutEffect} from 'react';
import Bloglist from './bloglist';
const Home = () => {
const [ blogs,setBlogs] =useState([
    { title: 'Written by', body: 'lorem ipsum', author: 'Mario', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum', author: 'Yoshi', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum', author: 'Mario', id: 3 },
]);

const[name, setName] = useState('mario')

const handleDelete=(id) =>{
 const newBlogs = blogs.filter(blog => blog.id !==id)
 setBlogs(newBlogs);
}

useEffect(()=>{
    console.log('use effect ran');
},[]);

    return (
        <div className='home'>
           <Bloglist blogs={blogs} title="All Blogs!"handleDelete={handleDelete} />
           <button onClick={()=> setName('luigi')}>Change name</button>
           <p>{ name}</p>
                </div>
            );
        }
        
     


export default Home ;
