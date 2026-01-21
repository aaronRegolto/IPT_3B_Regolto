import './App.css'
import PersonalInformation from './PersonalInformation.jsx'
import EducBackg from './EducBackg.jsx'

function App() {

  return (
    <>
      <div className="container">
        <PersonalInformation
          firstName="Aaron"
          lastName="Regolto"
          middleName="Allan"
          address="Baranbgay Payompon, Mamburao Occidental Mindoro"
          birthdate="August 3, 2004"
        />

      </div><br/>

      <div className="container">
        <EducBackg
          elementary="Payompon Elementary School"
          elementaryYear="2010-2016"
          juniorHigh="Mamburao National High School"
          juniorHighYear="2016-2020"
          seniorHigh="Mamburao National High School"
          seniorHighYear="2021-2023"
          college="Occidental Mindoro State College"
          collegeYear="2026-Present"
        />
      </div>
    </>
  )
}

export default App
