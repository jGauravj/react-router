import React, { useEffect, useState } from 'react'

const Github = () => {

  const [info, setInfo] = useState('');

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async() => {
    const data = await fetch('https://api.github.com/users/jGaurav');
    const json = await data.json();
    setInfo(json);
    console.log(json);
  }

  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center'>
     Github Repo: {info.public_repos}
    </div>
  )
}

export default Github
