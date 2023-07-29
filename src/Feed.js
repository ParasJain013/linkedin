import React, { useEffect, useState } from 'react'
import { collection, getDocs, orderBy } from "firebase/firestore";

import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import InputOption from './InputOption'
import { Image, Subscriptions, EventNote, CalendarViewDay } from '@mui/icons-material'
import Post from './Post'
import { db } from './firebase'
import { doc, setDoc, addDoc,onSnapshot , query,serverTimestamp} from "firebase/firestore";

function Feed() {
  const [posts, setPosts] = useState([
  ])
  const [input, setInput] = useState("")



  useEffect(() => {
    const q = query(collection(db, "posts"),orderBy("timestamp","desc"))
onSnapshot(q,(snapshot)=>{
  snapshot.docs.map((doc)=>{

    console.log(doc)
  })
setPosts(
  snapshot.docs.map((doc)=>({
   
    id: doc._key.path.segments[6],
    data: {
      name:doc._document.data.value.mapValue.fields.name.stringValue,
      message: doc._document.data.value.mapValue.fields.message.stringValue,
      description:doc._document.data.value.mapValue.fields.description.stringValue
    }
  })
  ))
  console.log(posts);
}
)

  },[])



   function sendPost(e){
    e.preventDefault();
    // setDoc(doc(db, "posts"),{
    //   name: "Paras",
    //   description: "This is Test",
    //   message: "where is first post"
    // },{merge:true} );
    addDoc(collection(db, "posts"), {
      name: "Paras",
      description: "This is Test",
      message: input,
      photoUrl: "",
      timestamp:serverTimestamp(),
      
    });
    setInput("");
    console.log("TIMESTAMP")
  }
  return (
    <div className="feed">
      <div className="input_container">
        <div className="feed_input">
          <CreateIcon />
          <form >
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Title='Photo' Icon={Image} color="blue" />
          <InputOption Title='Video' Icon={Subscriptions} color="#E7A33E" />
          <InputOption Title='Event' Icon={EventNote} color="#C0CBCD" />
          <InputOption Title='Write Article' Icon={CalendarViewDay} color="#7FC15E" />
        </div>
      </div>
      {/* POST */}
      {posts.map(({id,data:{name,description,message,photoUrl}}) => (
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}/>
      ))}
    </div>
  )
}

export default Feed