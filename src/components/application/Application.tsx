
const Application = () => {
  return (
    <>
        <h1>Job application form</h1>
        <h2>Section 1</h2>
        <p>All fields are mandatory</p>
        <span title="close">X</span>
        <img src="" alt="food"/>
        <div data-testid='custom-element'>Custom HTML element</div>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="FullName" value="Adilet" onChange={()=>{}}/>
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea name="bio" id="bio"/>
            </div>
            <div>
                <label htmlFor="job-location">Name</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">US</option>
                    <option value="GB">UK</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms" /> I agree to the terms and conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
    </>
  )
}

export default Application