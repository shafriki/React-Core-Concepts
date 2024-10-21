import './App.css'

export default function Actor({name}) {

    return <li className='li'>Name: {name}</li>
}

function Friend({name}) {

    return <p>Friend Name: {name} </p>
}