import React from 'react'
import { Routes, Route } from 'react-router-dom';
import WorkerLayout from '../layout/WorkerLayout';

function WorkerLayoutHoc({component:Component, ...rest}) {
  return (
    <>
    <Routes>
    <Route {...rest} 
    element={
        <WorkerLayout>
            <Component/>
        </WorkerLayout>
    }/>
</Routes>
    </>
  )
}

export default WorkerLayoutHoc