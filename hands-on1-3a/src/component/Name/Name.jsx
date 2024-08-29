import './Name.css';

function Name ({fname, lname}) {
    return(
        <div>
            <h1 className='text'><span className='firstN'>{fname}</span> <span className='lastN'>{lname}</span>

            </h1>
        </div>
    )
}
export default Name;