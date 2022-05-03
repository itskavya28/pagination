import React, { useState, useEffect } from 'react';
import Posts from './components/posts';
import Pagination from './components/pagination';
import UserModel from './components/model';
import axios from 'axios';
import './App.css';
import { constructTitleArray } from './utils';


const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [showModel, setShowModel] = useState(false);
  const [ editRecord, setEditRecord ] = useState({});



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const titles = constructTitleArray(posts);

  return (
    <div className='container mt-5'>
      <Posts posts={currentPosts} loading={loading} setShowModel={setShowModel} setEditRecord={setEditRecord}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {showModel && <UserModel titles={titles} showModel={showModel} setShowModel={setShowModel} editRecord={editRecord}/>}
    </div>
  );
};

export default App;