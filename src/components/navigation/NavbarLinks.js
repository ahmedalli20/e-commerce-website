import React from 'react'

function NavbarLinks() {
    const links = {
        textDecoration: "none",
        color: 'red',
        fontWeight: '500',
        fontSize: '18px'
    }
    return (
        <div className='d-flex justify-content-start align-items-center'>
            <div className='px-4 mt-2'>
                <a href="#" className='px-4'  style={links}>Home</a>
                <a href="#" className='px-4'  style={links}>Home</a>
                <a href="#" className='px-4'  style={links}>Home</a>
                <a href="#" className='px-4'  style={links}>Home</a>

            </div>
        </div>
    )
}

export default NavbarLinks