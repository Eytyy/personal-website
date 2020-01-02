import React from 'react'

import Info from '../Info'

import { AppStyles } from '../App'
import { Landing } from '../Projects'
import { NavigationProvider, NavigationConsumer } from '../NavigationContext'
import Navigation from '../Navigation'

const Home = () => {
  return (
    <NavigationProvider>
      <NavigationConsumer
        render={({ active, setActive }) => {
          return (
            <div className="front">
              <div className="website-content-wrapper">
                <Navigation active={active} setActive={setActive} />
                <AppStyles.HomeContent className={`home-content ${active}`}>
                  <AppStyles.ProjectsWrapper
                    className="home-content-col projects"
                    active={active}
                  >
                    <Landing />
                  </AppStyles.ProjectsWrapper>
                  <AppStyles.InfoWrapper
                    className="home-content-col info"
                    active={active}
                  >
                    <Info />
                  </AppStyles.InfoWrapper>
                </AppStyles.HomeContent>
              </div>
            </div>
          )
        }}
      />
    </NavigationProvider>
  )
}

export default Home
