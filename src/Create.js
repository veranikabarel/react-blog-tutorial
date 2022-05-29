import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();

    const submitBlog = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            history.push('/');
        })
    }



    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={submitBlog}>
                <label>Blog title:</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;