const Bloglist =({blogs, title, handleDelete})=>{
    return ( 
        <div className='home'>
        {blogs.map((blog)=>(
            <div className="blog-preview"key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by{blog.author}</p>
                <button on onClick={()=>handleDelete(blog.id)}>Remove</button>
            </div>
        ))}
    </div>
     );
}
 
export default Bloglist;