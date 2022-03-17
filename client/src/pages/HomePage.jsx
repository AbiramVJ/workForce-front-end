import React from 'react'

//components
import HomeContent from '../components/HomePage/HomePage';
import RecentView from '../components/RecentView/RecentView';
import WorkList from '../components/WorkList/WorkList';


function HomePage() {
  return (
    <div className='p-1 m-1'>
        <HomeContent/>
        <WorkList/>
        <RecentView/>
    </div>
  )
}

export default HomePage