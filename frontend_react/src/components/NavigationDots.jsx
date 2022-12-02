import React from 'react'

const NavigationDots = ({active}) => {
    return (
    <div className='app__navigation'>
        {["hjem", "produkter", "projects", "skills", "testimonial", "contact"].map((item, index) => (
            <a 
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: "#12c2e9", width: "12px", height: "12px"} : {}}
            />
        ))}
    </div>
)
}

export default NavigationDots