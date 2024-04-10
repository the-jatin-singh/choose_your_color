import './Input.css';

const Input = ({handleInputChange}) => {
  return (
    <div className='input-container'>
        <input onChange={handleInputChange} type='text' placeholder='Search for a color...' />
    </div>
  )
}

export default Input