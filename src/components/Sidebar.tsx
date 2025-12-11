// import React from 'react'
import { sidebarLinks } from "@/data/dummy"

const Sidebar = () => {
  return (
    <div className="w-72 p-6">
      {sidebarLinks.map((element) => (
        <div key={element.section} className="flex flex-col">
          <h1>{element.section}</h1>
          {element.links.map((link) => (
            <div key={link.path} className="flex flex-col">
              <div className="flex flex-row">
                <{link.icon}/>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
