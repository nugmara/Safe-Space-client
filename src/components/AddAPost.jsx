import { useState } from "react";
import { createAPost } from "../services/post.services";

function AddAPost(props) {
  const [content, setContent] = useState("")
  const [authorId, setAuthorId] = useState();
  const handleSubmit = async(e) => {
    e.preventDefault()
    const newPost = {
      content,
      authorId
    }
    try {
      await createAPost(newPost)
      // getData()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">What's on your mind?</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <input type="textarea" name="content" placeholder="Put your thoughts on paper queen!" style={{width: "400px", height: "200px"}} value={content} onChange={((e) => setContent(e.target.value))}/>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Post</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddAPost