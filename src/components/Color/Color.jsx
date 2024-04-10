import './Color.css';

const Color = ({title, bg, tags}) => {
  return (
    <div>
        <div className='color-container' >
            <div className='bg' style={{backgroundColor: bg}}></div>
            <h3 style={{marginTop:"5px"}}>{title}</h3>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap", marginTop:"5px"}}>
                {tags.map((tag, index) => (
                    <span style={{ padding:"5px 8px", borderRadius:"20px", fontSize:"10px"}} key={index}>{tag}</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Color