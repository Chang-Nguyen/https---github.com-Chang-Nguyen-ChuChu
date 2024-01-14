import Figure from 'react-bootstrap/Figure';
import introduce from '../data/introduce.json'

function FigureExample() {
    const { imageUrl, captionText, additionalCaption, name } = introduce;

  return (
      <Figure className="d-flex align-items-center">
      <Figure.Image
        width={570}
        height={500}
        src={imageUrl}
        className="order-2" 
        style={{ marginLeft: '100px', marginRight: '100px' }}
      />
      <div className="d-flex flex-column" style={{marginLeft: '100px', textAlign: 'justify'}}>
      <Figure.Caption className="order-1" style={{fontSize: '60px'}}>
          {name}
        </Figure.Caption>
        <Figure.Caption className="order-1" style={{marginTop: '30px', fontSize: '20px'}}>
          {captionText}
        </Figure.Caption>
        <Figure.Caption className="order-1" style={{marginTop: '20px', fontSize: '20px'}}>
          {additionalCaption}
        </Figure.Caption>
      </div>
    </Figure> 
  );
}

export default FigureExample;