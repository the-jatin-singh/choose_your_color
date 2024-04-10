import './Results.css';
import Color from '../Color/Color';

const Results = ({ colors }) => {
  return (
    <div className='results-container'>
      {colors.length > 0 ? (
        colors.map((item, index) => (
          <Color key={index} bg={item.value} title={item.color} tags={item.symbolizes} />
        ))
      ) : (
        <p>No color found</p>
      )}
    </div>
  );
};

export default Results;
