
const DisplayCountry =({name,currency,flag})=>{

    return (
        <tr>
            <td>{name}</td>
            <td>{currency}</td>
            <td><img src={flag} style={{width:'150px'}}/></td>
        </tr>
    )
}

export default DisplayCountry