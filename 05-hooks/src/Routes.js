import React from 'react'
import { Route } from 'react-router'
import BaseLayout from './components/layout/BaseLayout'
import About from './pages/About'
import Home from './pages/Home'
import UserDetailPage from './pages/UserDetailPage'
import UserListPage from './pages/UserListPage'

const Routes = () => {
    return (
        <>
            <Route exact path="/">
                <BaseLayout><Home /></BaseLayout>
            </Route>
            <Route path="/about">
                <BaseLayout><About /></BaseLayout>
            </Route>
            <Route exact path="/users">
                <BaseLayout><UserListPage /></BaseLayout>
            </Route>
            <Route exact path="/users/:id">
                <BaseLayout><UserDetailPage /></BaseLayout>
            </Route>
        </>
    )
}

export default Routes
