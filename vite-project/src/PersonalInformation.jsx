function PersonalInformation({firstName, lastName, middleName, address, birthdate}) {

    return (
        <>  
        
            <div>
                <h1>Personal Information</h1>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Middle Name: {middleName}</p>
                <p>Address: {address}</p>
                <p>Birthdate:{birthdate}</p>
            </div>
        </>
    )
}
export default PersonalInformation;